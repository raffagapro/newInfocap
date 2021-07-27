import { Injectable } from '@angular/core';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {WEB_KEY} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  appSetting = {
    'scopes': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    'webClient': WEB_KEY,
    'offline': true
  };

  constructor(private google: GooglePlus) { }

  login() {
    return this.google.login(this.appSetting);
  }

  silentLogin() {
    return this.google.trySilentLogin(this.appSetting);
  }

  logout() {
    return this.google.logout();
  }

  disconnect() {
    return this.google.disconnect();
  }

}
