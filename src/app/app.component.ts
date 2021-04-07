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
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  whatsappPhone = '529992781314';
  firstLoad = false;
  logged: Observable<boolean>;
  user: User;

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
              this.router.navigate(['/profesional/home']);
            }
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
    window.open(`https://api.whatsapp.com/send?phone= ${this.whatsappPhone}`);
  }
}
