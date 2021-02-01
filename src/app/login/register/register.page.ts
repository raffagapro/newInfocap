import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuccessModalComponent } from './success-modal/success-modal.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  onRegister(){
    this.modalController.create({
      component: SuccessModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
