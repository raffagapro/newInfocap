import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { Notification } from 'src/shared/types/Notification';
import axios from 'axios'
import { Router } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service';

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
    private lc: LoadingController,
    private us: UserService,
    private loadingController: LoadingController,
    private solServ: SolicitudService,
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
      this.notifications = notificationsData.filter(n => n.viewed == 0);
    } catch (error) {
      console.log(error)
    } finally {
      loader.dismiss();
    }
  }

  async goToRequestDetail(solicitudId: string, notificationId: number) {
    axios.put(API + `/notification/view/${notificationId}`, { viewed: 1, },{ headers: { Authorization: `Bearer ${this.grabbedUser.access_token}` } }).then(resData => {
      this.solServ.setServiceID(solicitudId);
      this.router.navigate(['profesional/agendados/agendados-detail']);
    }).catch(err => {
      console.log(err)
    })
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
