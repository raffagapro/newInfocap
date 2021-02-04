import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';

@Component({
  selector: 'app-agendados-finalizar',
  templateUrl: './agendados-finalizar.page.html',
  styleUrls: ['./agendados-finalizar.page.scss'],
})
export class AgendadosFinalizarPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
  }

  openMenu(){
    this.menuController.open();
  }

  finalizarSolicitud(){
    this.modalController.create({
      component: ConfirmSuccessModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  extraCharge(){
    this.router.navigate(['/profesional/home/home-tabs/agendados/servicios-adicionales']);
  }

}
