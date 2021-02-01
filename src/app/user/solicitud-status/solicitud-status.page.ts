import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ServicioAgendadoModalComponent } from './servicio-agendado-modal/servicio-agendado-modal.component';
import { SolicitudEnviadaModalComponent } from './solicitud-enviada-modal/solicitud-enviada-modal.component';
import { SolicitudRechazadaModalComponent } from './solicitud-rechazada-modal/solicitud-rechazada-modal.component';

@Component({
  selector: 'app-solicitud-status',
  templateUrl: './solicitud-status.page.html',
  styleUrls: ['./solicitud-status.page.scss'],
})
export class SolicitudStatusPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  seModal(){
    this.modalController.create({
      component: SolicitudEnviadaModalComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  saModal(){
    this.modalController.create({
      component: ServicioAgendadoModalComponent,
      cssClass: 'modalSA',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  srModal(){
    this.modalController.create({
      component: SolicitudRechazadaModalComponent,
      cssClass: 'modalServRechazado',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  srvPay(){
    this.router.navigate(['/user/servicio-pagar']);
  }
}
