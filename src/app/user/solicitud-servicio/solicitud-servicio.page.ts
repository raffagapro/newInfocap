import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.page.html',
  styleUrls: ['./solicitud-servicio.page.scss'],
})
export class SolicitudServicioPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async confirmRequest(){

    const alert = await this.alertController.create({
      header: 'SOLICITUD EVIADA',
      message: 'Pronto el profesional se contactará contigo',
      buttons: ['ACEPTAR'],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    // console.log(result);
    this.router.navigate(['/user/solicitudes']);
  }

}
