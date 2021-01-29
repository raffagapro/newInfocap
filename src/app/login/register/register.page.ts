import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    // this.modalController.create({component: SuccessModalComponent})
    // .then(modalElement => {
    //   modalElement.present();
    // });
    const alert = await this.alertController.create({
      header: 'REGISTRO EXITOSO',
      buttons: ['ACEPTAR'],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    // console.log(result);
  }

}
