import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API, PHONE_PREFIX } from 'src/environments/environment';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';
import { ConfirmSuccessStartComponent } from './confirm-success-start/confirm-success-start.component';
import * as moment from 'moment';

@Component({
  selector: 'app-agendados-detail',
  templateUrl: './agendados-detail.page.html',
  styleUrls: ['./agendados-detail.page.scss'],
})
export class AgendadosDetailPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
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
    private http: HttpClient,
    private lc: LoadingController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(API + `/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          this.loadedInfo.clientLastName = resData['data'].clientLastName;
          this.loadedInfo.clientName = resData['data'].clientName;
          let wDate = resData['data'].date_required.split("-");
          this.loadedInfo.date_required = wDate[2] + '-' + wDate[1] + '-' + wDate[0];
          this.loadedInfo.description = resData['data'].description;
          this.loadedInfo.hours = resData['data'].hours;
          this.loadedInfo.images = resData['data'].images;
          this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
          this.loadedInfo.ticket_number = resData['data'].ticket_number;
          this.loadedInfo.categoryName = resData['data'].categoryName;
          this.loadedInfo.clientPhone1 = resData['data'].clientPhone1;
          this.loadedInfo.status_id = resData['data'].status_id;
        }, err => {
          console.log(err);
          loadingEl.dismiss();

        });
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

  formatDate(date: string){
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
      this.http.put(API + `/supplier/updatestatus/requestservice/${this.solServ.solicitud.solicitudID}/4`, null, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          this.modalController.create({
            component: ConfirmSuccessStartComponent,
            cssClass: 'modalSuccess',
          }).then(modalEl => {
            modalEl.present();
          });
        }, err => {
          console.log(err);
          loadingEl.dismiss();
        });
    });
  }

  finalizarSolicitud() {
    this.lc.create({
      message: 'Finalizando Trabajo...'
    }).then(loadingEl => {
      loadingEl.present();
      this.http.put(API + `/supplier/updatestatus/requestservice/${this.solServ.solicitud.solicitudID}/6`, null, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          this.modalController.create({
            component: ConfirmSuccessComponent,
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

  confirmSolicitud() {
    // do something awesome
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
