import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { API } from 'src/environments/environment';
import { SuccessModalComponent } from './success-modal/success-modal.component';

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

  onRecover(form: NgForm){
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    console.log(form);
    this.lc.create({
      message: 'Generando correo de recuperacion...'
    }).then(loadingEl => {
      loadingEl.present();
      this.http.post(API+'/auth/forgotpassword', {email: email,})
      .subscribe(resData => {
        loadingEl.dismiss();
        if (resData['code'] === 200) {
          this.clearErrors();
          form.reset();
          // modal for succes
          this.modalController.create({
            component: SuccessModalComponent,
            cssClass: 'modalSuccess',
          }).then(modalEl => {
            modalEl.present();
          });
        }
      },error => {
        loadingEl.dismiss();
        this.errors.email = [];
        if (error.error.errors.email !== undefined) {
         this.errors.email = error.error.errors.email; 
        }
      });
    });
  }

  clearErrors(){
    this.errors.email = [];
  }

}
