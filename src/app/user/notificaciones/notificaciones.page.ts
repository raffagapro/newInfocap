import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import axios from 'axios';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { NotificationsService } from 'src/app/services/notifications-service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { Notification } from 'src/shared/types/Notification';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  userSubscription: Subscription;
  user: User;
  notifications: Notification[] = [];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private userService: UserService,
    private requestService: SolicitudService,
    private loadingController: LoadingController,
    private notificationService: NotificationsService,
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.loggedUser.subscribe(user => {
      this.user = user;
      this.loadNotifications();
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  openMenu() {
    this.menuController.open();
  }

  async loadNotifications() {
    let loader = await this.loadingController.create({ message: 'Cargando tus notificaciones...' });
    loader.present();
    try {
      let response = await axios.get(
        `${API}/client/notification`,
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );
      const { data } = response;
      const { data: notificationsData } = data;
      this.notifications = notificationsData;
    } catch (error) {
      alert(error.message);
    } finally {
      loader.dismiss();
    }
  }

  async updateNotification(notificationId: number) {
    try {
      let response = await axios.put(
        `${API}/notification/view/${notificationId}`,
        {
          viewed: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );

      let { data } = response;
      let { code } = data;
      if (code !== 200) {
        alert('Error al actualizar la notificación');
      }
      let updatedNotifications = this.notifications.map((notification: Notification) => {
        if (notification.notification_Id === notificationId) {
          notification.viewed = true;
        }
        return notification;
      });
      this.notificationService.setNotifications(updatedNotifications);
    } catch (error) {
      alert(error.message);
    }
  }

  async goToRequestDetail(solicitudId: string, notificationId: number, redirectToFinished: boolean = false) {
    this.requestService.clearSolicitud();
    this.requestService.setServiceID(solicitudId);

    await this.updateNotification(notificationId);

    if (redirectToFinished) {
      this.router.navigate(['/user/solicitud-finished']);
    } else {
      this.router.navigate(['/user/solicitud-status']);
    }

  }

  formatdate(date: string, hours: string) {
    return moment.utc(`${date} ${hours}`, 'DD-MM-YYYY hh:mm:ss').startOf('minute').fromNow();
  }

  async deleteNotification(notificationId: number) {
    let loader = await this.loadingController.create({ message: 'Eliminando notificación...' });
    try {
      await loader.present();
      await axios.delete(
        `${API}/notification/${notificationId}`,
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );
    } catch (error) {
      alert(error.message);
    } finally {
      await loader.dismiss();
      this.loadNotifications();
    }
  }

}
