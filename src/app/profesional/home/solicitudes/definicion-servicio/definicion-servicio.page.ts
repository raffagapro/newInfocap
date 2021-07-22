import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { ConfirmServComponent } from './confirm-serv/confirm-serv.component';

@Component({
  selector: 'app-definicion-servicio',
  templateUrl: './definicion-servicio.page.html',
  styleUrls: ['./definicion-servicio.page.scss'],
})
export class DefinicionServicioPage implements OnInit, OnDestroy {
  showError = false;
  minDate = moment().format('YYYY-MM-DD');
  maxDate = moment().add('hour', 24).format('YYYY-MM-DD');
  grabbedUser: User;
  userSub: Subscription;
  headers: String;
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
    clientPhone1: null,
    type: null,
    request_cost: {},
  };
  form: FormGroup;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private menuController: MenuController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });
    //form
    this.form = new FormGroup({
      dateReq: new FormControl(null, {
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
      costo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  async ionViewWillEnter() {
    this.loadedInfo.clientLastName = this.solicitudServicio.solicitud.clientLastName
    this.loadedInfo.clientName = this.solicitudServicio.solicitud.clientName
    this.loadedInfo.description = this.solicitudServicio.solicitud.description
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours.split("/")
    this.loadedInfo.images = this.solicitudServicio.solicitud.images
    this.loadedInfo.img_client_profile = this.solicitudServicio.solicitud.clientImg
    this.loadedInfo.ticket_number = this.solicitudServicio.solicitud.ticket_number
    this.loadedInfo.categoryName = this.solicitudServicio.solicitud.categoryName
    this.loadedInfo.clientPhone1 = this.solicitudServicio.solicitud.clientPhone
    this.loadedInfo.request_cost = this.solicitudServicio.solicitud.cost
    this.loadedInfo.type = this.solicitudServicio.solicitud.type

    console.log(this.loadedInfo)

    this.form.patchValue({
      sHour: this.loadedInfo.hours[0],
      eHour: this.loadedInfo.hours[1],
      dateReq: moment(this.loadedInfo.date_required, 'DD/MM/YYYY').format('YYYY-MM-DD'),
    });
    this.menuController.enable(true, 'user');
  }

  formatTime(hours: string) {
    if (hours) {
      let wHours = hours.split("/");
      let starHour = moment(wHours[0]).format('h:mm a');
      let endHour = moment(wHours[1]).format('h:mm a');
      return `${starHour} - ${endHour}`;
    }
  }

  d(date: string) {
    if (date) {
      let wDate = date.split(" ");
      return wDate[0];
    }
  }

  openMenu() {
    this.menuController.open();
  }

  confirmRequest() {
    let wDate = this.form.value.dateReq.split('T');
    wDate = wDate[0];
    wDate = wDate.split('-');
    wDate = wDate[2] + '/' + wDate[1] + '/' + wDate[0];

    console.log(wDate)
    this.solicitudServicio.setDateRequired(wDate);
    this.solicitudServicio.setHours(this.form.value.sHour + '/' + this.form.value.eHour);
    this.solicitudServicio.setCosto(this.form.value.costo)

    let starHour = moment(this.form.value.sHour);
    let endHour = moment(this.form.value.eHour);

    if (starHour.isAfter(endHour)) {
      this.showError = true;
      return;
    }
    this.modalController.create({
      component: ConfirmServComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  getUrl() {
    if(!this.loadedInfo.img_client_profile || this.loadedInfo.img_client_profile === '/' || this.loadedInfo.img_client_profile === 'http://167.71.251.136/storage/' ) {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.loadedInfo.img_client_profile})`
    }
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
