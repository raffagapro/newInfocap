import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pago-exitoso-modal',
  templateUrl: './pago-exitoso-modal.component.html',
  styleUrls: ['./pago-exitoso-modal.component.scss'],
})
export class PagoExitosoModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
    this.router.navigate(['/user/seval-prof']);
  }

}
