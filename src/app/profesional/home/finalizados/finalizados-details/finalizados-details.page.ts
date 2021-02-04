import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-finalizados-details',
  templateUrl: './finalizados-details.page.html',
  styleUrls: ['./finalizados-details.page.scss'],
})
export class FinalizadosDetailsPage implements OnInit {

  constructor(
    private router: Router,
    private menuController: MenuController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
  }

  openMenu(){
    this.menuController.open();
  }

  rateClient(){
    this.router.navigate(['/profesional/home/home-tabs/finalizados/rate-form']);
  }

}
