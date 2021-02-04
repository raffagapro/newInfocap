import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from "@ionic/angular";
import { Router } from '@angular/router';

import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.page.html',
  styleUrls: ['./solicitud-servicio.page.scss'],
})
export class SolicitudServicioPage implements OnInit {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
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

  confirmRequest(){
    this.modalController.create({
      component: ConfirmSuccessModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
