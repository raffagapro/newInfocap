import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-success-modal',
  templateUrl: './confirm-success-modal.component.html',
  styleUrls: ['./confirm-success-modal.component.scss'],
})
export class ConfirmSuccessModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
    this.router.navigate(['/user/solicitudes']);
  }

}
