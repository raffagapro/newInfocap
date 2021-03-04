import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
  }
}
