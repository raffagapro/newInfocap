import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmSuccessComponent } from '../confirm-success/confirm-success.component';

@Component({
  selector: 'app-service-reject-modal',
  templateUrl: './service-reject-modal.component.html',
  styleUrls: ['./service-reject-modal.component.scss'],
})
export class ServiceRejectModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  cancelSolicitud(){
    this.modalController.dismiss();
    this.modalController.create({
      component: ConfirmSuccessComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  dismiss(){
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/finalizados/']);
  }

}
