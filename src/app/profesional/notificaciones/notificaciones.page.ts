import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { Notification } from 'src/shared/types/Notification';
import axios from 'axios'
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications-service';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

import * as moment from 'moment'
import * as lodash from 'lodash'

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  notifications: Notification[] = [];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private us: UserService,
    private loadingController: LoadingController,
    private solicitudServicio: ProSolicitudService,
    private notificationService: NotificationsService,
    route: ActivatedRoute
  ) {
    route.params.subscribe(val => {
      this.userSub = this.us.loggedUser.subscribe(user => {
        this.grabbedUser = user;
        this.headers = 'Bearer ' + this.grabbedUser.access_token;
        this.loadNotifications()
      });
    })
  }

  ngOnInit() {

  }

  async loadNotifications() {
    let loader = await this.loadingController.create({ message: 'Cargando tus notificaciones...' });
    loader.present();
    try {
      let response = await axios.get(
        `${API}/supplier/notification`,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
      const { data } = response;
      const { data: notificationsData } = data;
      this.notifications = notificationsData;

      this.notifications = lodash.orderBy(this.notifications, ['notification_Id'], ['desc', 'asc']);
    } catch (error) {
      console.log(error)
    } finally {
      loader.dismiss();
    }
  }

  async goToRequestDetail(solicitudId: string, notificationId: number) {
    axios.put(API + `/notification/view/${notificationId}`, { viewed: 1, }, { headers: { Authorization: `Bearer ${this.grabbedUser.access_token}` } }).then(resData => {
      this.solicitudServicio.setID(solicitudId);


      let updatedNotifications = this.notifications.map((notification: Notification) => {
        if (notification.notification_Id === notificationId) {
          notification.viewed = true;
        }
        return notification;
      });


      this.notificationService.setNotifications(updatedNotifications);
      this.router.navigate(['profesional/agendados/agendados-detail']);
    }).catch(err => {
      console.log(err)
    })
  }

  async deleteNotification(notificationId: number) {
    let loader = await this.loadingController.create({ message: 'Eliminando notificación...' });
    try {
      await loader.present();
      await axios.delete(
        `${API}/notification/${notificationId}`,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
    } catch (error) {
      console.log(error)
    } finally {
      await loader.dismiss();
      this.loadNotifications();
    }
  }

  validationName(customerName, supplierName, status, prodId) {
      if (status !== 1) {
        if(supplierName !== 'No definido') {
          return supplierName
        }
      } else {
        return customerName
      }
  }

  formatMotivo(type, status, motive) {
    if (type === 'NORMAL') {
      motive = motive.replace('Se genero', 'generó')
      return motive
    } else {
      if (status === 1) {
        return ' ha generado una solicitud urgente, por favor atiéndela, si no puedes, no olvides rechazar.'
      } else {
        return motive
      }
    }
  }

  formatdate(date: string, hours: string) {
    return moment.utc(`${date} ${hours}`, 'DD-MM-YYYY hh:mm:ss').startOf('minute').fromNow();
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
