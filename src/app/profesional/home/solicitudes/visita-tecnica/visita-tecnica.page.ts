import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfirmVisitaComponent } from './confirm-visita/confirm-visita.component';

@Component({
  selector: 'app-visita-tecnica',
  templateUrl: './visita-tecnica.page.html',
  styleUrls: ['./visita-tecnica.page.scss'],
})
export class VisitaTecnicaPage implements OnInit {

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
      component: ConfirmVisitaComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
