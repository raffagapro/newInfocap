import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-empty-modal',
  templateUrl: './empty-modal.component.html',
  styleUrls: ['./empty-modal.component.scss'],
})
export class EmptyModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss();
    this.router.navigate(['/profesional/home/home-tabs/agendados/']);
  }

  dismiss(){
    this.modalController.dismiss();
    this.router.navigate(['/profesional/home/home-tabs/agendados/']);
  }

}
