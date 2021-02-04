import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-solicitudes-detail',
  templateUrl: './solicitudes-detail.page.html',
  styleUrls: ['./solicitudes-detail.page.scss'],
})
export class SolicitudesDetailPage implements OnInit {

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
    this.menuController.enable(true, 'profesional');
  }

  openMenu(){
    this.menuController.open();
  }

  confirmVisit(){
    this.router.navigate(['/profesional/home/home-tabs/solicitudes/visita-tecnica']);
  }

  accceptSolicitud(){
    this.router.navigate(['/profesional/home/home-tabs/solicitudes/definicion-servicio']);
  }

}
