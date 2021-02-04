import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.page.html',
  styleUrls: ['./rate-form.page.scss'],
})
export class RateFormPage implements OnInit {

  constructor(
    private router: Router,
    private menuController: MenuController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
  }

  openMenu(){
    this.menuController.open();
  }

  sendRate(){
    this.modalController.create({
      component: ConfirmSuccessComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
