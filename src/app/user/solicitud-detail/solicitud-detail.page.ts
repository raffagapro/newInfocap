import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Router } from '@angular/router';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';


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
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  confirmSolicitud(){
    this.modalController.create({
      component: ConfirmSuccessModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
