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
import { User } from './model/user.model';
import { API, PATH } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  logged: Observable<boolean>;
  user: User;
  PATH: String;

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
      this.PATH = PATH
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
      // this.splashScreen.hide();
    });
  }

  private setUser(){
    // console.log(this.logged.subscribe);
    this.logged.subscribe(v => {      
      if (v) {
        this.us.loggedUser.subscribe(user => {
          this.user = user;
        })
      }
    })
  }

  logout(){
    this.menuCtrl.close();
    this.as.logout();
    this.router.navigateByUrl('/');
  }

  profile(){
    this.menuCtrl.close();
    this.router.navigate(['/user/profile-page']);
  }

  profilePro(){
    this.menuCtrl.close();
    this.router.navigate(['profesional/perfil']);
  }
}
