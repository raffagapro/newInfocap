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
        this.loadedServices = resData.data.data
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
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      this.solicitudServicio.setID(solicitudID);
      axios.get(API + `/supplier/requestservicedetail/${this.solicitudServicio.solicitud.id}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.solicitudServicio.setClientLastName(resData.data.data.clientLastName)
        this.solicitudServicio.setClientName(resData.data.data.clientName)
        let wDate = resData.data.data.date_required.split("-");
        this.solicitudServicio.setDateRequired(resData.data.data.date_required)
        this.solicitudServicio.setDateCreated(resData.data.data.created_date)
        this.solicitudServicio.setDescription(resData.data.data.description)
        this.solicitudServicio.setHours(resData.data.data.hours)
        this.solicitudServicio.setImages(resData.data.data.images)
        this.solicitudServicio.setClientImg(resData.data.data.img_client_profile)
        this.solicitudServicio.setTicketNumber(resData.data.data.ticket_number)
        this.solicitudServicio.setCategoryID(resData.data.data.categoryName)
        this.solicitudServicio.setStatusID(resData.data.data.status_id)
        this.solicitudServicio.setClientPhone(resData.data.data.clientPhone1)
        this.solicitudServicio.setCosto(resData.data.data.request_cost[0] && resData.data.data.request_cost[0]);
      }).then(() => {
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
      }).catch(err => {
        loadingEl.dismiss();
      })
    })
  }

  formatDate(date: string) {
    return moment(date, 'DD/MM/YYYY').format('DD MMM YYYY');
  }

  aceptarSolicitud(solicitudID: string, type: string) {
    this.solicitudServicio.setID(solicitudID)
    this.solicitudServicio.setSolicitudType(type)
    this.solicitudServicio.setProfesional(1);
    this.router.navigate(['/profesional/solicitudes/solicitudes-detail']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
