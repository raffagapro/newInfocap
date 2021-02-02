import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { PagoExitosoModalComponent } from './pago-exitoso-modal/pago-exitoso-modal.component';

@Component({
  selector: 'app-servicio-pagar-forma',
  templateUrl: './servicio-pagar-forma.page.html',
  styleUrls: ['./servicio-pagar-forma.page.scss'],
})
export class ServicioPagarFormaPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private menuController: MenuController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
  }

  openMenu(){
    this.menuController.open();
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
