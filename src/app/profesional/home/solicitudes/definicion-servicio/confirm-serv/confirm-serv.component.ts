import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
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
  loadedInfo = {
    date_required: null,
    hours: null,
  };

  constructor(
    private modalController: ModalController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
  }

  ionViewWillEnter() {

    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
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
      date_required: this.solicitudServicio.solicitud.date_required,
      hours: this.solicitudServicio.solicitud.hours,
      professional_id: this.grabbedUser.id
    }


    try {
      var url = '/supplier/aprove/requestservice/'
      if (this.solicitudServicio.solicitud.type == 'URGENT') {
        var url = '/supplier/aprove/requestservice/' //'/supplier/aprove/urgentrequestservice/'
      }
      let response = await axios.put(
        `${API}${url}${this.solicitudServicio.solicitud.id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`,
          }
        }
      );

      console.log(this.solicitudServicio.solicitud.cost)

      axios.put(API + `/supplier/cost/requestservice/${this.solicitudServicio.solicitud.id}`,
        {
          "amount": this.solicitudServicio.solicitud.cost,
          "costs_type_id": 1,
          "description": "costo inical",
          "payment_type_id": 1
        }, {
        headers: {
          Authorization: `Bearer ${this.grabbedUser.access_token}`,
        }
      })
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

