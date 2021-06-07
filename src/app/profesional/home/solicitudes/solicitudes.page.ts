import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ServiceRejectModalComponent } from './service-reject-modal/service-reject-modal.component';

import * as moment from 'moment'
import * as lodash from 'lodash'
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  loadedServices = [];
  parsedHours = null;
  address1;
  address2;


  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private us: UserService,
    private lc: LoadingController,
    private solicitudServicio: ProSolicitudService,
    route: ActivatedRoute
  ) {
    route.params.subscribe(val => {
      this.userSub = this.us.loggedUser.subscribe(user => {
        this.grabbedUser = user;
        this.headers = 'Bearer ' + this.grabbedUser.access_token
        this.loadServices("1");
      });
    });
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');

  }

  loadServices(statusID: string) {
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl => {
      loadingEl.present();
      axios.get(API + `/supplier/requestservice/${statusID}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.loadedServices = resData.data.data.filter(s => s.hours_creation == "0");
        this.loadedServices = lodash.sortBy(this.loadedServices, ['id'])
        this.loadedServices = lodash.reverse(this.loadedServices)
      }).catch(err => {
        console.log(err);
        loadingEl.dismiss();
      })
    });
  }

  openMenu() {
    this.menuController.open();
  }

  p(hours: string) {
    let wHours = hours.split("/");
    let sHour = wHours[0].split("T");
    let sHour2 = sHour[1];
    sHour2 = sHour2.substring(0, 5);
    let eHour = wHours[1].split("T");
    let eHour2 = eHour[1];
    eHour2 = eHour2.substring(0, 5);
    return sHour2 + " - " + eHour2;
  }

  d(address: string) {
    let wAdd = address.split(',')
    return wAdd[0] + ",<br>" + wAdd[1] + ", " + wAdd[2];
  }

  rechazarSolicitud(solicitudID: string) {
    this.solicitudServicio.setID(solicitudID);
    this.modalController.create({
      component: ServiceRejectModalComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
      modalEl.onDidDismiss().then(data => {
        if (data) {
          this.loadServices("1");
        }
      });
    });
  }

  formatDate(date: string) {
    console.log(date)
    return moment(date, 'DD/MM/YYYY').format('DD MMM YYYY');
  }

  aceptarSolicitud(solicitudID: string, type: string) {
    this.solicitudServicio.setID(solicitudID)
    this.solicitudServicio.setSolicitudType(type)
    this.router.navigate(['/profesional/solicitudes/solicitudes-detail']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
