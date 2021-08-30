import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

import axios from 'axios'
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

import * as lodash from 'lodash'

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.page.html',
  styleUrls: ['./finalizados.page.scss'],
})
export class FinalizadosPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  loadedServices = [];
  paidServices = [];
  parsedHours = null;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private us: UserService,
    private lc: LoadingController,
    private solServ: SolicitudService,
    private solicitudServicio: ProSolicitudService,
    route: ActivatedRoute
  ) {
    route.params.subscribe(async val => {
      this.loadedServices = []
      this.userSub = this.us.loggedUser.subscribe(user => {
        this.grabbedUser = user;
        this.headers = 'Bearer ' + this.grabbedUser.access_token;
        this.loadServices("5");
        this.loadServices("6");
        this.loadServices("8");
      });
    })
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
        if (statusID === "5") {
          this.loadedServices = this.loadedServices.concat(resData.data.data);
        }
        if (statusID === "6") {
          this.loadedServices = this.loadedServices.concat(resData.data.data);
        }
        if (statusID === "8") {
          this.loadedServices = this.loadedServices.concat(resData.data.data);
        }
        this.loadedServices = lodash.orderBy(this.loadedServices, function (dateObj) {
          const dateSplit = dateObj.date_last_modification.split('-');
          return new Date(`${dateSplit[1]}-${dateSplit[0]}-${dateSplit[2]}-`);
        }, ['desc']);
        console.log(this.loadedServices)
      }).catch(err => {
        console.log(err);
        loadingEl.dismiss();
      })
    });
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

  openMenu() {
    this.menuController.open();
  }

  finalizadosDetail(serviceID: string) {
    this.solServ.setServiceID(serviceID);
    this.solicitudServicio.setID(serviceID);
    this.router.navigate(['/profesional/finalizados/finalizados-details']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
