import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, Platform } from '@ionic/angular';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { API } from 'src/environments/environment';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

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
  selector: 'app-servicios-adicionales',
  templateUrl: './servicios-adicionales.page.html',
  styleUrls: ['./servicios-adicionales.page.scss'],
})
export class ServiciosAdicionalesPage implements OnInit {

  grabbedUser: User;
  headers: String;
  formAdicional: FormGroup
  useInputPicker = false;
  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;
  loadedImages = [];
  loadedImagesDisplay = [];
  userSub: Subscription;

  loadedInfo = {
    img_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    hours: null,
    description: null,
    images: null,
    categoryName: null,
    clientPhone1: null,
    category_id: null,
    request_cost:  0
  };

  constructor(
    private router: Router,
    private menuController: MenuController,
    private lc: LoadingController,
    private us: UserService,
    private platform: Platform,
    private solicitudServicio: ProSolicitudService,
  ) { }


  ngOnInit() {
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.useInputPicker = true;
    }
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer ' + this.grabbedUser.access_token

    this.formAdicional = new FormGroup({
      detailes: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      photos: new FormControl(null, {
        updateOn: 'blur',
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
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

  async saveImgToApi(imageData: string | File) {
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
    this.loadedImagesDisplay.push(URL.createObjectURL(imgFile));

    this.formAdicional.patchValue({ image: imgFile })
  }

  ionViewWillEnter() {
    this.loadedInfo.clientLastName = this.solicitudServicio.solicitud.clientLastName
    this.loadedInfo.clientName = this.solicitudServicio.solicitud.clientName
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
    this.loadedInfo.description = this.solicitudServicio.solicitud.description
    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours
    this.loadedInfo.images = this.solicitudServicio.solicitud.images
    this.loadedInfo.img_profile = this.solicitudServicio.solicitud.clientImg
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

  saveExtra() {
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl => {
      loadingEl.present();
      const formData = new FormData();
      this.loadedImages.forEach(image => {
        formData.append('images[]', image);
      });

      formData.append('description', this.formAdicional.value.detailes)
      formData.append('amount', this.formAdicional.value.price)
      formData.append('payment_type_id', '1')
      formData.append('request_services_id', this.solicitudServicio.solicitud.id)
      this.solicitudServicio.setCosto(parseFloat(this.formAdicional.value.price))

      axios.post(API + '/supplier/additionalrequest', formData, { headers: { Authorization: this.headers } } ).then(resData => {
        this.router.navigate(['profesional/agendados/agendados-finalizar']);
        loadingEl.dismiss();
      }).catch(err => {
        loadingEl.dismiss();
        console.log(err)
      })
    })
  }

}
