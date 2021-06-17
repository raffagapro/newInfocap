import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent implements OnInit {

  message;
  secondMessage = undefined;
  redirect = true;
  redirectUrl = '/login';

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
    if (this.redirect) {
      this.router.navigate([this.redirectUrl]);
    }
  }

}
