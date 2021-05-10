import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API, PHONE_PREFIX } from 'src/environments/environment';
import { ConfirmSuccessStartComponent } from './confirm-success-start/confirm-success-start.component';

import axios from 'axios'
import * as moment from 'moment';

@Component({
  selector: 'app-agendados-detail',
  templateUrl: './agendados-detail.page.html',
  styleUrls: ['./agendados-detail.page.scss'],
})
export class AgendadosDetailPage implements OnInit, OnDestroy {
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
    status_id: null,
  };

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private us: UserService,
    private lc: LoadingController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer ' + this.grabbedUser.access_token
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      axios.get(API + `/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.loadedInfo.clientLastName = resData.data.data.clientLastName;
        this.loadedInfo.clientName = resData.data.data.clientName;
        let wDate = resData.data.data.date_required.split("-");
        this.loadedInfo.date_required = wDate[2] + '-' + wDate[1] + '-' + wDate[0];
        this.loadedInfo.description = resData.data.data.description;
        this.loadedInfo.hours = resData.data.data.hours;
        this.loadedInfo.images = resData.data.data.images;
        this.loadedInfo.img_client_profile = resData.data.data.img_client_profile;
        this.loadedInfo.ticket_number = resData.data.data.ticket_number;
        this.loadedInfo.categoryName = resData.data.data.categoryName;
        this.loadedInfo.clientPhone1 = resData.data.data.clientPhone1;
        this.loadedInfo.status_id = resData.data.data.status_id;
      }).catch(err => {
        console.log(err);
        loadingEl.dismiss();
      })
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openWhatsapp(phone: string) {
    window.open(`https://api.whatsapp.com/send?phone=${PHONE_PREFIX}${phone}`);
  }

  call(clientNumb: string) {
    this.callNumber.callNumber(clientNumb, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  openMenu() {
    this.menuController.open();
  }

  formatDate(date: string) {
    return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
  }

  formatTime(hours: string) {
    if (hours) {
      let wHours = hours.split("/");

      let startHour = moment(wHours[0]).format('h:mm A');
      let endHour = moment(wHours[1]).format('h:mm A');

      return `${startHour} - ${endHour}`;
    }
  }

  d(date: string) {
    if (date) {
      let wDate = date.split(" ");
      return wDate[0];
    }
  }

  startSolicitud() {
    this.lc.create({
      message: 'Registrando tiempo de inicio...'
    }).then(loadingEl => {
      loadingEl.present();
      axios.put(API + `/supplier/updatestatus/requestservice/${this.solServ.solicitud.solicitudID}/4`, null, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.modalController.create({
          component: ConfirmSuccessStartComponent,
          cssClass: 'modalSuccess',
        }).then(modalEl => {
          modalEl.present();
        });
      })
    });
  }

  finalizarSolicitud() {
    this.router.navigate(['profesional/agendados/agendados-finalizar']);
  }

  confirmSolicitud() {
    // do something awesome
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
