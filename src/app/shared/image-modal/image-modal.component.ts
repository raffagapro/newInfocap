import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {

  image;

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
