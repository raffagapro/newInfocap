import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { API } from 'src/environments/environment';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import axios from 'axios';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  errors: any = {
    name: [],
    last_name: [],
    email: [],
    password: []
  };

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
  }

  async onRegister(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let name = form.value.name;
    let wName = name.split(" ");
    name = wName[0];
    let l_name = wName[1];
    if (wName[2] !== undefined) {
      l_name += " " + wName[2];
    }
    const email = form.value.email;
    const password = form.value.password;
    const confirm_password = form.value.confirm_password;

    if (password !== confirm_password) {
      this.errors.password = ['Las contraseñas no coinciden'];
      return;
    }

    const loader = await this.lc.create({
      message: 'Registrando tu usuario...'
    });

    loader.present();

    const body = {
      name: name,
      last_name: l_name,
      email: email,
      password: password,
    }
    try {
      const response = await axios.post(
        `${API}/auth/register`,
        body
      );

      this.clearErrors();
      form.reset();
      loader.dismiss();
      // modal for succes
      const successModal = await this.modalController.create({
        component: SuccessModalComponent,
        cssClass: 'modalSuccess',
      });
      successModal.present();
    } catch (error) {
      const { response } = error;
      if (response) {
        const { errors } = response.data;

        this.errors.name = [];
        if (errors.name !== undefined) {
          this.errors.name = errors.name;
        }
        this.errors.last_name = [];
        if (errors.last_name !== undefined) {
          this.errors.last_name = errors.last_name;
        }
        this.errors.email = [];
        if (errors.email !== undefined) {
          this.errors.email = errors.email;
        }
        this.errors.password = [];
        if (errors.password !== undefined) {
          this.errors.password = errors.password;
        }
      }

      loader.dismiss();
    }
  }

  clearErrors() {
    this.errors.name = [];
    this.errors.last_name = [];
    this.errors.email = [];
    this.errors.password = [];
  }

}
