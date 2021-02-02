import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  constructor(
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

  solicitudEnviada(){
    this.router.navigate(['/user/solicitud-status']);
  }

  solicitudInProgress(){
    this.router.navigate(['/user/solicitud-detail']);
  }

  servAccepted(){
    // this.router.navigate(['/user/solicitud-detail']);
  }

  servRealizado(){
    this.router.navigate(['/user/servicio-pagar']);
  }

  solicitudRechazada(){
    this.router.navigate(['/user/solicitud-status']);
  }

  solicitudVisita(){
    this.router.navigate(['/user/visita-detail']);
  }

}
