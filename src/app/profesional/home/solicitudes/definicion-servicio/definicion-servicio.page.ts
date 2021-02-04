import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfirmServComponent } from './confirm-serv/confirm-serv.component';

@Component({
  selector: 'app-definicion-servicio',
  templateUrl: './definicion-servicio.page.html',
  styleUrls: ['./definicion-servicio.page.scss'],
})
export class DefinicionServicioPage implements OnInit {

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
      component: ConfirmServComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
