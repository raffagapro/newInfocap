import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-enviada-modal',
  templateUrl: './solicitud-enviada-modal.component.html',
  styleUrls: ['./solicitud-enviada-modal.component.scss'],
})
export class SolicitudEnviadaModalComponent implements OnInit {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
  }

  seModal(){
    // do somethignn awsesome
  }

}
