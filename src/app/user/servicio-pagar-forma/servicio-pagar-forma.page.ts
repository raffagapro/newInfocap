import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagoExitosoModalComponent } from './pago-exitoso-modal/pago-exitoso-modal.component';

@Component({
  selector: 'app-servicio-pagar-forma',
  templateUrl: './servicio-pagar-forma.page.html',
  styleUrls: ['./servicio-pagar-forma.page.scss'],
})
export class ServicioPagarFormaPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  submitPayment(){
    this.modalController.create({
      component: PagoExitosoModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
