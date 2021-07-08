import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController, ModalController, PickerController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';
import axios from 'axios'
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PickerOptions } from '@ionic/core'
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
    created_date: null,
    request_cost: null
  };

  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;

  loadedImagesDisplay = [];
  loadedImages = [];

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  categories = []
  categorySelected: string
  categoryIDSelected = null
  paymentSelected: string
  paymentIDSelected = null
  paymentTypes = [];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    private lc: LoadingController,
    route: ActivatedRoute,
    private pickerController: PickerController
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

      axios.get(API + '/supplier/categorization', { headers: { Authorization: this.headers } }).then(cat => {
        this.categories = cat.data.data
      })
    })
  }

  async ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer ' + this.grabbedUser.access_token;

    axios.get(API + '/payments/type', { headers: { Authorization: this.headers } }).then(type => {
      this.paymentTypes = type.data.data
    })

    this.formFinalizar = new FormGroup({

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
    this.loadedInfo.created_date = this.solicitudServicio.solicitud.created_date
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
      return moment(date, 'DD/MM/YYYY').format('D [de] MMM [de] YYYY');
    }
  }

  finalizarSolicitud() {
    const formData = new FormData();
    this.loadedImages.forEach(image => {
      formData.append('images[]', image);
    });
    formData.append('work_report', this.formFinalizar.value.work_report)
    formData.append('categorization_id', this.categoryIDSelected)

    if (this.loadedImages.length === 0) {
      alert('Debes agregar al menos una foto a la solicitud.');
      return
    }

    this.lc.create({
      message: 'Finalizando Trabajo...'
    }).then(loadingEl => {
      loadingEl.present();
      axios.post(API + `/supplier/finalize/requestservice/${this.solicitudServicio.solicitud.id}`, formData, { headers: { Authorization: this.headers } }).then(resData => {
        let body_cost_request = {
          amount: this.loadedInfo.request_cost.amount_suplier,
          costs_type_id: 1,
          payment_type_id: this.paymentIDSelected
        }
        axios.put(API + `/supplier/cost/requestservice/${this.solicitudServicio.solicitud.id}`, body_cost_request ,{ headers: { Authorization: this.headers } }).then(resData => {
          loadingEl.dismiss();
          this.modalController.create({
            component: ConfirmSuccessModalComponent,
            cssClass: 'modalSuccess',
          }).then(modalEl => {
            modalEl.present();
          });
        })
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

  async showPickerPyments() {
    let options: PickerOptions = {
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Listo',
          handler: (value: any) => {
            this.paymentSelected = value.payment.text
            this.paymentIDSelected = value.payment.value
          }
        }
      ],
      columns: [{
        name: 'payment',
        options: this.getColumnOptionsPayments()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptionsPayments() {
    let options = [];
    this.paymentTypes.forEach(x => {
      options.push({ text: x.name, value: x.id });
    });
    return options;
  }

  async showPicker() {
    let options: PickerOptions = {
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Listo',
          handler: (value: any) => {
            this.categorySelected = value.category.text
            this.categoryIDSelected = value.category.value
          }
        }
      ],
      columns: [{
        name: 'category',
        options: this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions() {
    let options = [];
    console.log()
    this.categories.forEach(x => {
      options.push({ text: x.name, value: x.categorization_id });
    });
    return options;
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

  getUrl() {
    if (!this.loadedInfo.img_client_profile || this.loadedInfo.img_client_profile === '/' || this.loadedInfo.img_client_profile === 'http://167.71.251.136/storage/') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.loadedInfo.img_client_profile})`
    }
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
      return 'Sin especificar'
    }
  }

  formatInfo(request_cost) {
    if (request_cost !== null && request_cost.total) {
      return request_cost.total[0].total
    }
  }
}
