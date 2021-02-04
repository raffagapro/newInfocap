import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-visita',
  templateUrl: './confirm-visita.component.html',
  styleUrls: ['./confirm-visita.component.scss'],
})
export class ConfirmVisitaComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  // cancelSolicitud(){
  //   this.modalController.dismiss();
  //   this.modalController.create({
  //     component: ConfirmSuccessComponent,
  //     cssClass: 'modalSuccess',
  //   }).then(modalEl => {
  //     modalEl.present();
  //   });
  // }

  dismiss(){
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/finalizados/']);
  }

  confirmVisita(){
    this.modalController.dismiss();
    this.router.navigate(['/profesional/home/home-tabs/agendados']);
  }

}
