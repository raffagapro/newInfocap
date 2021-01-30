import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';


@Component({
  selector: 'app-solicitud-detail',
  templateUrl: './solicitud-detail.page.html',
  styleUrls: ['./solicitud-detail.page.scss'],
})
export class SolicitudDetailPage implements OnInit {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async confirmSolicitud(){

    const alert = await this.alertController.create({
      header: 'HAZ CONFIRMADO EL SERVICIO',
      message: 'El cobro se realizará cuando se finalice el servicio.',
      buttons: ['ACEPTAR'],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    // console.log(result);
    this.router.navigate(['/user/solicitudes']);
  }

}
