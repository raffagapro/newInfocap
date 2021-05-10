import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

import * as moment from 'moment';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedServices = [];

  constructor(
    private menuController: MenuController,
    private lc: LoadingController,
    private us: UserService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
      this.loadServices("3");
      this.loadServices("4");
      this.loadServices("2");
    });
  }

  loadServices(statusID: string) {
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(API + `/supplier/requestservice/${statusID}`, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          let auxiliar_array = this.loadedServices.concat(resData['data'])
          this.loadedServices = auxiliar_array
        }, err => {
          console.log(err);
          loadingEl.dismiss();
        });
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
