import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';
import axios from 'axios'
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-agendados-finalizar',
  templateUrl: './agendados-finalizar.page.html',
  styleUrls: ['./agendados-finalizar.page.scss'],
})
export class AgendadosFinalizarPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  useInputPicker = false;

  formFinalizar: FormGroup

  loadedInfo = {
    img_client_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    hours: null,
    description: null,
    images: null,
    categoryName: null,
    category_id: null,
    clientPhone1: null,
    request_cost: {}
  };

  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;

  loadedImagesDisplay = [];
  loadedImages = [];

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  categories = ['Reparación', 'Mantención', 'Instalación', 'Proyectos especiales']
  categorySelected: string
  paymentTypes = [];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    private lc: LoadingController,
    route: ActivatedRoute
  ) {
    route.params.subscribe(val => {
      this.userSub = this.us.loggedUser.subscribe(user => {
        this.grabbedUser = user;
      });
      this.headers = 'Bearer ' + this.grabbedUser.access_token
      axios.get(API + `/client/detailcostrequest/${this.solicitudServicio.solicitud.id}`, { headers: { Authorization: this.headers } }).then(resData => {
        this.solicitudServicio.setCosto(resData.data.data);
        this.loadedInfo.request_cost = resData.data.data
      })
    })
  }

  async ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer ' + this.grabbedUser.access_token;

    this.formFinalizar = new FormGroup({
      category: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      work_report: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    })
  }

  ionViewWillEnter() {
    this.loadedInfo.clientLastName = this.solicitudServicio.solicitud.clientLastName
    this.loadedInfo.clientName = this.solicitudServicio.solicitud.clientName
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
    this.loadedInfo.description = this.solicitudServicio.solicitud.description
    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours
    this.loadedInfo.images = this.solicitudServicio.solicitud.images
    this.loadedInfo.img_client_profile = this.solicitudServicio.solicitud.clientImg
    this.loadedInfo.ticket_number = this.solicitudServicio.solicitud.ticket_number
    this.loadedInfo.categoryName = this.solicitudServicio.solicitud.categoryName
    this.loadedInfo.category_id = this.solicitudServicio.solicitud.category_id
    this.loadedInfo.clientPhone1 = this.solicitudServicio.solicitud.clientPhone
    this.loadedInfo.request_cost = this.solicitudServicio.solicitud.cost
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

  p(hours: string) {
    if (hours) {
      let wHours = hours.split("/");
      let sHour = wHours[0].split("T");
      let sHour2 = sHour[1];
      sHour2 = sHour2.substring(0, 5);
      let eHour = wHours[1].split("T");
      let eHour2 = eHour[1];
      eHour2 = eHour2.substring(0, 5);
      return sHour2 + " - " + eHour2;
    }
  }

  d(date: string) {
    if (date) {
      let wDate = date.split(" ");
      return wDate[0];
    }
  }

  finalizarSolicitud() {
    const formData = new FormData();
    this.loadedImages.forEach(image => {
      formData.append('images[]', image);
    });
    formData.append('category', this.formFinalizar.value.category)
    formData.append('work_report', this.formFinalizar.value.work_report)

    if (this.loadedImages.length === 0) {
      alert('Debes agregar al menos una foto a la solicitud.');
      return
    }

    this.lc.create({
      message: 'Finalizando Trabajo...'
    }).then(loadingEl => {
      loadingEl.present();
      axios.post(API + `/supplier/finalize/requestservice/${this.solicitudServicio.solicitud.id}`, formData, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.modalController.create({
          component: ConfirmSuccessModalComponent,
          cssClass: 'modalSuccess',
        }).then(modalEl => {
          modalEl.present();
        });
      }).catch(err => {
        loadingEl.dismiss();
        console.log(err)
      })
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

  removeImage(imageIndex: number) {
    this.loadedImages = this.loadedImages.filter((image: any, index: number) => index !== imageIndex)
    this.loadedImagesDisplay = this.loadedImagesDisplay.filter((image: any, index: number) => index !== imageIndex)
  }

  onLoadImg() {
    if (!Capacitor.isPluginAvailable('Camera') || this.useInputPicker) {
      this.hiddenImgInputRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 25,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 150,
      // width: 200,
      resultType: CameraResultType.DataUrl,
      promptLabelPhoto: 'Fotos',
      promptLabelPicture: 'Camara',
      promptLabelCancel: 'Cancelar'
    }).then(image => {
      this.saveImgToApi(image.dataUrl);
    }).catch(e => {
      console.log(e);
    });
  }

  async saveImgToApi(imageData: string | File) {
    let imgFile;
    if (typeof imageData === 'string') {
      try {
        imgFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
      } catch (e) {
        return;
      }
    } else {
      imgFile = imageData;
    }
    this.loadedImages.push(imgFile);
    this.loadedImagesDisplay.push(URL.createObjectURL(imgFile));
  }

  extraCharge() {
    this.router.navigate(['profesional/agendados/servicios-adicionales']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  paymentValidate(request_cost) {
    if (request_cost !== null) {
      return request_cost.payment_name
    } else {
      return 'Efectivo'
    }
  }

  formatInfo(request_cost) {
    if(request_cost.addittional && request_cost.addittional[0]) {
      return (parseFloat(request_cost.amount_suplier) + parseFloat(request_cost.addittional[0].amount_suplier)).toFixed(2)
    } else {
      return parseFloat(request_cost.amount_suplier).toFixed(2)
    }
      
  }
}
