import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

import axios from 'axios'

import * as moment from 'moment';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  loadedServices = [];

  constructor(
    private menuController: MenuController,
    private lc: LoadingController,
    private us: UserService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
      this.loadServices()
    });
  }

  loadServices() {
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl => {
      loadingEl.present();
      axios.get(API + '/supplier/notification', { headers: { Authorization: this.headers } }).then(resData => {
        this.loadedServices = resData.data.data
        loadingEl.dismiss()
      }).catch(err => {
        loadingEl.dismiss()
      })
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
