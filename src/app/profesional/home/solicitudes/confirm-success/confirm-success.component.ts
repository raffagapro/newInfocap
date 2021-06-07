import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-success',
  templateUrl: './confirm-success.component.html',
  styleUrls: ['./confirm-success.component.scss'],
})
export class ConfirmSuccessComponent implements OnInit {

  redirectUrl = false;

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
    if(this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    } 
  }

}
