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
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

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
    private solServ: SolicitudService,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.getServiceData();
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

  formatDate(date: string) {
    return moment(date, 'DD/M/YYYY').format('dddd D [de] MMMM [de] YYYY');
  }

  async confirmServicio() {
    let loader = await this.lc.create({
      message: 'Confirmando solicitud...',
    });
    loader.present();
    const body = {
      date_required: this.solServ.solicitud.newDate,
      hours: this.solServ.solicitud.newTime,
      professional_id: null
    }

    try {
      var url = '/supplier/aprove/requestservice/'
      if(this.solicitudServicio.solicitud.type == 'URGENT') {
        var url = '/supplier/aprove/urgentrequestservice/'
        body.professional_id = this.grabbedUser.id
      }
      let response = await axios.put(
        `${API}${url}${this.solServ.solicitud.solicitudID}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`,
          }
        }
      );
      await loader.dismiss();
      await this.modalController.dismiss();
      let successModal = await this.modalController.create({
        component: ConfirmSuccessComponent,
        cssClass: 'modalSuccess',
      });
      successModal.present();
    } catch (error) {
      console.log(error);
      loader.dismiss();
    }
  }

  dismiss() {
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/finalizados/']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

