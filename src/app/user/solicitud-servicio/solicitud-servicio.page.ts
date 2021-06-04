import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, ModalController, Platform } from "@ionic/angular";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.page.html',
  styleUrls: ['./solicitud-servicio.page.scss'],
})
export class SolicitudServicioPage implements OnInit, OnDestroy {
  // selectedProfesional: ProfCategory = new ProfCategory(
  //   null, null, null, null, null, null, null, null, null, null, null, null, null
  // );
  minDate = moment().add('hour', 1);
  selectedProfesional = {
    supplierName: null,
    supplierLastName: null,
    categoryName: null,
    communeName: null,
  }
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  useInputPicker = false;
  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;
  form: FormGroup;
  selectedProfPhoto: string;
  loadedImages = [];
  loadedImagesDisplay = [];
  showError = false;


  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    // this.selectedProfesional = this.solServ.solicitud.proPerfil;
    this.selectedProfesional.supplierName = this.solServ.solicitud.proPerfil.supplierName;
    this.selectedProfesional.supplierLastName = this.solServ.solicitud.proPerfil.supplierLastName;
    this.selectedProfesional.categoryName = this.solServ.solicitud.proPerfil.categoryName;
    this.selectedProfesional.communeName = this.solServ.solicitud.proPerfil.communeName;

    this.selectedProfPhoto = this.solServ.solicitud.proPhoto;
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
    // platfrom Checker
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.useInputPicker = true;
    }

    //form
    this.form = new FormGroup({
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      date_required: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      sHour: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      eHour: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      adress: new FormControl(this.solServ.solicitud.address, {
        updateOn: 'blur',
      }),
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  openMenu() {
    this.menuController.open();
  }

  onLoadImg() {
    if (!Capacitor.isPluginAvailable('Camera') || this.useInputPicker) {
      this.hiddenImgInputRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 100,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 500,
      width: 500,
      resultType: CameraResultType.DataUrl,
      promptLabelPhoto: 'Fotos',
      promptLabelPicture: 'Cámara',
      promptLabelCancel: 'Cancelar'
    }).then(image => {
      this.saveImgToApi(image.dataUrl);
    }).catch(e => {
      console.log(e, 'error');
    });
  }

  onLoadImgFromInput(e: Event) {
    const loadedFile = (e.target as HTMLInputElement).files[0];
    this.saveImgToApi(loadedFile);
    //converting images to blob for diplaying
    const fr = new FileReader();
    fr.onload = () => {
      this.loadedImagesDisplay.push(fr.result.toString());
    };
    fr.readAsDataURL((e.target as HTMLInputElement).files[0]);
  }

  saveImgToApi(imageData: string | File) {
    let imgFile;
    if (typeof imageData === 'string') {
      try {
        imgFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
      } catch (e) {
        console.log(e);
        return;
      }
    } else {
      imgFile = imageData;
    }
    this.loadedImages.push(imgFile);
    this.loadedImagesDisplay.push(imageData);
  }

  confirmRequest() {
    //format date
    let wDate = this.form.value.date_required.split('T');
    wDate = wDate[0];
    wDate = wDate.split('-');
    wDate = wDate[2] + '/' + wDate[1] + '/' + wDate[0];
    const formData = new FormData();
    this.loadedImages.forEach(image => {
      formData.append('images[]', image);
    });
    formData.append('cummune_id', this.solServ.solicitud.comuna_id);
    formData.append('description', this.form.value.description);
    formData.append('adress', this.form.value.adress);
    formData.append('adress_detail', this.form.value.adress);
    formData.append('extra_instructions', this.solServ.solicitud.instructions);
    formData.append('date_required', wDate);
    formData.append('hours', this.form.value.sHour + "/" + this.form.value.eHour);
    formData.append('professional_profile_id', this.solServ.solicitud.proPerfil_id);

    let startHour = moment(this.form.value.sHour);
    let endHour = moment(this.form.value.eHour);
    if (startHour.isAfter(endHour)) {
      this.showError = true;
      return
    }
    this.showError = false;

    if (this.loadedImages.length === 0) {
      alert('Debes agregar al menos una foto a la solicitud.');
      return
    }

    this.lc.create({
      message: 'Creando su solicitud...'
    }).then(loadingEl => {
      loadingEl.present();
      this.http.post(API + '/client/requestservice', formData, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          this.modalController.create({
            component: ConfirmSuccessModalComponent,
            cssClass: 'modalSuccess',
          }).then(modalEl => {
            modalEl.present();
          });
        }, err => {
          loadingEl.dismiss();
          console.log(err);
        });
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
