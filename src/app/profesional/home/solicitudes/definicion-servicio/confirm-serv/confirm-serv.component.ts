import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmSuccessComponent } from '../confirm-success/confirm-success.component';

@Component({
  selector: 'app-confirm-serv',
  templateUrl: './confirm-serv.component.html',
  styleUrls: ['./confirm-serv.component.scss'],
})
export class ConfirmServComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  confirmServicio(){
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
