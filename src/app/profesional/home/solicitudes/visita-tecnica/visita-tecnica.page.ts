import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfirmVisitaComponent } from './confirm-visita/confirm-visita.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { VisitaTecnicaService } from 'src/app/services/visita-tecnica.service';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';

@Component({
  selector: 'app-visita-tecnica',
  templateUrl: './visita-tecnica.page.html',
  styleUrls: ['./visita-tecnica.page.scss'],
})
export class VisitaTecnicaPage implements OnInit {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;

  minDate = moment().format('YYYY-MM-DD')
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };
  loadedInfo = {
    img_client_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    created_date: null,
    hours: null,
    description: null,
    images: null,
    categoryName: null,
    clientPhone1: null,
    request_cost: {}
  };

  formVisitaTecnica: FormGroup

  constructor(
    private modalController: ModalController,
    private menuController: MenuController,
    private us: UserService,
    private solicitudServicio: ProSolicitudService,
    private visitaT: VisitaTecnicaService
  ) { }

  ngOnInit() {
    this.formVisitaTecnica = new FormGroup({
      requiredDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      startTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      endTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });

    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });

  }

  ionViewWillEnter() {
    this.loadedInfo.clientLastName = this.solicitudServicio.solicitud.clientLastName
    this.loadedInfo.clientName = this.solicitudServicio.solicitud.clientName
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
    this.loadedInfo.description = this.solicitudServicio.solicitud.description
    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours.split("/")
    this.loadedInfo.images = this.solicitudServicio.solicitud.images
    this.loadedInfo.img_client_profile = this.solicitudServicio.solicitud.clientImg
    this.loadedInfo.ticket_number = this.solicitudServicio.solicitud.ticket_number
    this.loadedInfo.categoryName = this.solicitudServicio.solicitud.category_id
    this.loadedInfo.clientPhone1 = this.solicitudServicio.solicitud.clientPhone
    this.loadedInfo.request_cost = this.solicitudServicio.solicitud.cost
    this.loadedInfo.created_date = this.solicitudServicio.solicitud.created_date
    this.menuController.enable(true, 'user');
  }

  openMenu() {
    this.menuController.open();
  }

  formatDate(date: string){
    if(date !== null) {
      let fecha = date.split(' ')
      return moment(fecha[0], 'DD/MM/YYYY').format('D [de] MMM [de] YYYY');
    }
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

  confirmRequest() {
    let date = moment(this.formVisitaTecnica.value.requiredDate).format('l');
    let startTime = moment(this.formVisitaTecnica.value.startTime).format('LT');
    let endTime = moment(this.formVisitaTecnica.value.endTime).format('LT');
    this.visitaT.setDate(date)
    this.visitaT.setHours(`${startTime} - ${endTime}`)
    
    this.modalController.create({
      component: ConfirmVisitaComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    }).catch(e => {
    });
  }

}
