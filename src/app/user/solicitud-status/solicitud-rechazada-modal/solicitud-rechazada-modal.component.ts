import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-rechazada-modal',
  templateUrl: './solicitud-rechazada-modal.component.html',
  styleUrls: ['./solicitud-rechazada-modal.component.scss'],
})
export class SolicitudRechazadaModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
    // this.router.navigate(['/user/solicitudes']);
  }

}
