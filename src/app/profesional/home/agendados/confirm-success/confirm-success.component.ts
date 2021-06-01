import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-success',
  templateUrl: './confirm-success.component.html',
  styleUrls: ['./confirm-success.component.scss'],
})
export class ConfirmSuccessComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/finalizados/']);
  }

}
