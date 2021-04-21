import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API, PHONE_PREFIX } from 'src/environments/environment';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-solicitudes-detail',
  templateUrl: './solicitudes-detail.page.html',
  styleUrls: ['./solicitudes-detail.page.scss'],
})
export class SolicitudesDetailPage implements OnInit, OnDestroy {
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
        }, err => {
          console.log(err);
          loadingEl.dismiss();

        });
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  formatDate(date: string){
    return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
  }

  formatTime(hours: string) {
    if (hours) {
      let wHours = hours.split("/");
      let startHour = moment(wHours[0]).format('h:mm a');
      let endHour = moment(wHours[1]).format('h:mm a');
      return `${startHour} - ${endHour}`;
    }
    return 'No disponible'
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

  openWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=${PHONE_PREFIX}${this.loadedInfo.clientPhone1}`);
  }

  call() {
    this.callNumber.callNumber(this.loadedInfo.clientPhone1, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  wa(){
    this.router.navigateByUrl(`whatsapp://send?phone=${this.loadedInfo.clientPhone1}`);
  }

  confirmVisit() {
    this.router.navigate(['/profesional/solicitudes/visita-tecnica']);
  }

  accceptSolicitud() {
    this.router.navigate(['/profesional/solicitudes/definicion-servicio']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
