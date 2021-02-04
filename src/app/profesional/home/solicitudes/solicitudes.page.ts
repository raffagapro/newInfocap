import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ServiceRejectModalComponent } from './service-reject-modal/service-reject-modal.component';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

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

  rechazarSolicitud(){
    this.modalController.create({
      component: ServiceRejectModalComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  aceptarSolicitud(){
    this.router.navigate(['/profesional/home/home-tabs/solicitudes/solicitudes-detail']);
  }

}
