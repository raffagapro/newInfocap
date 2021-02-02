import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';

@Component({
  selector: 'app-eval-prof',
  templateUrl: './eval-prof.page.html',
  styleUrls: ['./eval-prof.page.scss'],
})
export class EvalProfPage implements OnInit {

  constructor(
    private modalController: ModalController,
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

  confirmRequest(){
    this.modalController.create({
      component: ConfirmSuccessModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
