import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { Notification } from 'src/shared/types/Notification';
import axios from 'axios'

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
    private menuController: MenuController,
    private lc: LoadingController,
    private us: UserService,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
      this.loadNotifications()
    });
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
    } catch (error) {
      console.log(error)
    } finally {
      loader.dismiss();
    }
  }

  async goToRequestDetail(solicitudId: string, notificationId: number, redirectToFinished: boolean = false) {
    // this.requestService.clearSolicitud();
    // this.requestService.setServiceID(solicitudId);

    // this.router.navigate(['/profesional/solicitudes/solicitudes-detail']);
    // this.router.navigate(['/user/solicitud-status']);

  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
