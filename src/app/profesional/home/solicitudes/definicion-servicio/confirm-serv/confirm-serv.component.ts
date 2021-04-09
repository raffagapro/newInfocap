import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ConfirmSuccessComponent } from '../confirm-success/confirm-success.component';
import axios from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-confirm-serv',
  templateUrl: './confirm-serv.component.html',
  styleUrls: ['./confirm-serv.component.scss'],
})
export class ConfirmServComponent implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedInfo = {
    date_required: null,
    hours: null,
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private solServ: SolicitudService,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.getServiceData();
    /*
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(API + `/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, { headers: this.headers })
        .subscribe(resData => {
          console.log(resData['data']);
          loadingEl.dismiss();
          this.loadedInfo.date_required = this.solServ.solicitud.newDate;
          this.loadedInfo.hours = this.solServ.solicitud.newTime;
        }, err => {
          console.log(err);
          loadingEl.dismiss();
        });
    });
    */
  }

  async getServiceData() {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
    let loader = await this.lc.create({
      message: 'Cargando información del servicio...'
    });
    loader.present();
    try {
      let response = await axios.get(
        `${API}/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`,
          }
        }
      );
      const { data } = response;
      const { data: serverData } = data;
      this.loadedInfo.date_required = this.solServ.solicitud.newDate
      this.loadedInfo.hours = this.solServ.solicitud.newTime;
      loader.dismiss();
    } catch (error) {
      loader.dismiss();
    }
  }

  p(hours: string) {
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

  confirmServicio() {
    this.lc.create({
      message: "Confirmando solicitud..."
    }).then(loadingEl => {
      loadingEl.present();
      // let wDate = this.solServ.solicitud.newDate.split('/');
      const body = {
        date_required: this.solServ.solicitud.newDate,
        hours: this.solServ.solicitud.newTime,
      }
      console.log(body);
      this.http.put(API + `/supplier/aprove/requestservice/${this.solServ.solicitud.solicitudID}`, body, { headers: this.headers })
        .subscribe(resData => {
          console.log(resData);
          loadingEl.dismiss();
          this.modalController.dismiss();
          this.modalController.create({
            component: ConfirmSuccessComponent,
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

  dismiss() {
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/finalizados/']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

