import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from "@ionic/angular";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { API } from 'src/environments/environment';
import axios from 'axios';
import { NotificationsService } from 'src/app/services/notifications-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  error: any;
  grabbedUSer: User;
  passwordTypeInput = 'password';

  constructor(
    private navController: NavController,
    private router: Router,
    private http: HttpClient,
    private as: AuthService,
    private us: UserService,
    private lc: LoadingController,
    private notificationService: NotificationsService,
  ) { }

  ngOnInit() {
  }

  async login(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    const loader = await this.lc.create({
      message: 'Validando credenciales...'
    });
    loader.present();

    try {
      let body = {
        email,
        password,
      }
      const response = await axios.post(
        `${API}/auth/login`,
        body
      );
      const { data } = response;
      const { data: responseData, message } = data;

      if (responseData) {
        const { user, roles, access_token } = responseData;
        const { id, name, last_name, email, phone1, phone2, img_profile } = user;
        //save user info to store NEEDS WORK IN HERE
        let img: string;
        if (img_profile === null || img_profile === 'http://167.71.251.136/storage/') {
          img = 'assets/images/avatar.png';
        } else {
          img = img_profile;
        }
        this.grabbedUSer = new User(
          id,
          name,
          last_name,
          img,
          email,
          phone1,
          phone2,
          roles[0],
          access_token,
        );

        this.us.setUser(this.grabbedUSer);
        this.as.login();
        form.control.reset();
        loader.dismiss();
        if (roles[0] === 'usuario') {
          this.router.navigate(['/user/home'], { replaceUrl: true });
        } else {
          this.router.navigate(['/profesional/home'], { replaceUrl: true });
        }

        this.loadNotifications()
      } else {
        const errorMessage = message === 'Unauthorized' ? 'Credenciales inválidas' : 'Ocurrió un error';
        this.error = errorMessage;
        form.reset()
        form.setValue({
          email: email,
          password: '',
        });
        loader.dismiss()
      }

    } catch (error) {
      console.log(error);
      let message = 'Ocurrió un error';

      if (error.response) {
        message = error.response.data.message;
      }

      this.error = message;
      form.reset()
      form.setValue({
        email: email,
        password: '',
      });
      loader.dismiss();
    }
  }

  async loadNotifications() {
    try {
      let response = await axios.get(
        `${API}/supplier/notification`,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUSer.access_token}`
          }
        }
      );
      const { data } = response;
      const { data: notificationsData } = data;
      this.notificationService.setNotifications(notificationsData);
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  loginProfesional() {
    this.router.navigate(['/profesional/home']);
  }

  loginGoogle() {
    // do comething awesome
  }

  loginApple() {
    // do something awesome
  }

  loginFacebook() {
    // do seomthing swesome 
  }

  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    const nativeEl = this.passwordEye.nativeElement.querySelector('input');
    const inputSelection = nativeEl.selectionStart;
    nativeEl.focus();
    setTimeout(() => {
      nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);

  }

}
