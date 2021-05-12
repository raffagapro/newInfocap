import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { API } from 'src/environments/environment';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import axios from 'axios';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  errors: any = {
    email: [],
  };

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
  }

  async onRecover(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;

    const loader = await this.lc.create({
      message: 'Generando correo de recuperación...'
    });
    loader.present();

    try {
      let response = await axios.post(
        `${API}/auth/forgotpassword`,
        {
          email
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        }
      );
      loader.dismiss();
      this.clearErrors();
      form.reset();

      if (response.data && response.data.success) {
        // modal for succes
        const successModal = await this.modalController.create({
          component: SuccessModalComponent,
          componentProps: {
            message: 'Te hemos enviado a tu correo los pasos para recuper tu contraseña',
          },
          cssClass: 'modalSuccess',
        });
        successModal.present();
      } else {
        this.errors.email = response.data.data;
      }

    } catch (error) {
      const { response } = error;
      if (response) {
        const { errors } = response.data;

        this.errors.email = [];
        if (errors.email !== undefined) {
          this.errors.email = errors.email;
        }
      }
      loader.dismiss();
    }
  }

  clearErrors() {
    this.errors.email = [];
  }

}
