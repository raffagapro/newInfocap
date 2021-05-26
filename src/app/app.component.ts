import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { Plugins, Capacitor } from '@capacitor/core'

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User, UserRoles } from './model/user.model';
import { API, PHONE_PREFIX } from 'src/environments/environment';
import { IMAGE_URL_BLANK } from 'src/shared/constants';
import { Notification } from 'src/shared/types/Notification';
import axios from 'axios'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  imageBlank = IMAGE_URL_BLANK;
  whatsappPhone = `${PHONE_PREFIX}9992781314`;
  firstLoad = false;
  logged: Observable<boolean>;
  user: User;
  notificationCount: 0
  notifications: Notification[] = [];
  notificationUpdate;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private as: AuthService,
    private us: UserService,
  ) {
    this.logged = this.as.userIsAuthenticated;
    this.initializeApp();
    this.setUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
      // this.splashScreen.hide();

      this.menuCtrl.enable(false, UserRoles.PROFESSIONAL);
      this.menuCtrl.enable(false, UserRoles.USER);
    });
  }

  ngOnDestroy() {
    clearTimeout(this.notificationUpdate);
  }

  private setUser() {
    this.logged.subscribe(v => {
      if (v) {
        this.us.loggedUser.subscribe(user => {
          this.user = user;
          if (!this.firstLoad && user.id !== null) {
            this.firstLoad = true;
            if (this.user.role === UserRoles.USER) {
              this.router.navigate(['/user/home']);
            } else {
              var header = 'Bearer ' + this.user.access_token
              axios.get(API + '/supplier/notification', { headers: { Authorization: header } }).then(resData => {
                this.notificationCount = resData.data.data.length
              })
              this.router.navigate(['/profesional/home']);
            }
            this.loadNotifications();
          }
        })
      }
    })
  }

  logout() {
    this.menuCtrl.close();
    this.menuCtrl.enable(false, UserRoles.PROFESSIONAL);
    this.menuCtrl.enable(false, UserRoles.USER);
    this.as.logout();
    this.router.navigateByUrl('/');
  }

  profile() {
    this.menuCtrl.close();
    this.router.navigate(['/user/profile-page']);
  }

  profilePro() {
    this.menuCtrl.close();
    this.router.navigate(['profesional/perfil']);
  }

  openWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=${this.whatsappPhone}`);
  }

  async loadNotifications() {
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
      this.notificationCount = notificationsData.filter((notification: Notification) => !notification.viewed).length;
    } catch (error) {
      alert(error.message);
    }
  }

}
