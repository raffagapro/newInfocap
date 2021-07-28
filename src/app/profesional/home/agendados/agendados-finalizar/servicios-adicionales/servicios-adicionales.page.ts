import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController, Platform } from '@ionic/angular';
import { Capacitor, Plugins } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { API } from 'src/environments/environment';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';
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
    img_client_profile: null,
    created_date: null,
    request_cost: {}
  };

  constructor(
    private router: Router,
    private menuController: MenuController,
    private modalController: ModalController,
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
    Camera.getPhoto({
      quality: 100,
      source: CameraSource.Prompt,
      correctOrientation: true,
      // height: 500,
      width: 500,
      resultType: CameraResultType.DataUrl,
      promptLabelPhoto: 'Fotos',
      promptLabelPicture: 'Cámara',
      promptLabelCancel: 'Cancelar'
    }).then(image => {
      this.saveImgToApi(image.dataUrl);
    }).catch(e => {
      console.log(e);
    });
  }

  async openImage(image: string) {
    const successModal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        image,
      },
      cssClass: 'modalImage',
    });
    successModal.present();
  }

  onLoadImgFromInput(e: Event) {
    const loadedFile = (e.target as HTMLInputElement).files[0];
    this.saveImgToApi(loadedFile);
    //converting images to blob for diplaying
    const fr = new FileReader();
    fr.onload = () => {
      this.loadedImagesDisplay.push({id: null, img: fr.result.toString()});
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
    this.loadedImagesDisplay.push({id: null, img: URL.createObjectURL(imgFile)});

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
    this.loadedInfo.img_client_profile = this.solicitudServicio.solicitud.clientImg
    this.loadedInfo.created_date = this.solicitudServicio.solicitud.created_date

    var aditionalCost = null
    if(this.solicitudServicio.solicitud.cost != null) {
      aditionalCost = this.solicitudServicio.solicitud.cost
    }
    
    this.formAdicional.patchValue({
      detailes: aditionalCost.addittional[0] && aditionalCost.addittional[0].description,
      price: Math.round(aditionalCost.addittional[0] && aditionalCost.addittional[0].amount_suplier)
    })

    aditionalCost.img_addittional.forEach(img => {
      this.loadedImagesDisplay.push({id: img.id, img: img.image})
    });

    this.menuController.enable(true, 'profesional');
  }

  async removeImage(imageIndex: number, id: number) {
    this.loadedImages = this.loadedImages.filter((image: any, index: number) => index !== imageIndex)
    this.loadedImagesDisplay = this.loadedImagesDisplay.filter((image: any, index: number) => index !== imageIndex)

    axios.delete(API + `/supplier/deletedadditionalworkimage/${this.solicitudServicio.solicitud.id}/${id}`, { headers: { Authorization: this.headers } } )
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

      
    if (this.loadedImages.length === 0 && this.loadedImagesDisplay.length === 0) {
      alert('Debes agregar al menos una foto a la solicitud.');
      loadingEl.dismiss();
      return
    }

      axios.post(API + '/supplier/additionalrequest', formData, { headers: { Authorization: this.headers } } ).then(resData => {
        this.router.navigate(['profesional/agendados/agendados-finalizar']);
        loadingEl.dismiss();
      }).catch(err => {
        loadingEl.dismiss();
        console.log(err)
      })
    })
  }

  getUrl() {
    if(!this.loadedInfo.img_client_profile || this.loadedInfo.img_client_profile === '/' || this.loadedInfo.img_client_profile === 'http://167.71.251.136/storage/') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.loadedInfo.img_client_profile})`
    }
  }

  d(date: string) {
    if (date) {
      return moment(date, 'DD/MM/YYYY').format('D [de] MMM [de] YYYY');
    }
  }

}
