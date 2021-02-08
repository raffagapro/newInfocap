import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-servicio-agendado-modal',
  templateUrl: './servicio-agendado-modal.component.html',
  styleUrls: ['./servicio-agendado-modal.component.scss'],
})
export class ServicioAgendadoModalComponent implements OnInit {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
  }

  confirmSolicitud(){
    // do somethign awesome 
  }

}
