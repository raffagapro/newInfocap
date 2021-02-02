import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-servicio-pagar',
  templateUrl: './servicio-pagar.page.html',
  styleUrls: ['./servicio-pagar.page.scss'],
})
export class ServicioPagarPage implements OnInit {

  constructor(
    private router: Router,
    private menuController: MenuController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
  }

  openMenu(){
    this.menuController.open();
  }

  paymentForm(){
    this.router.navigate(['/user/servicio-pagar-forma']);
  }

}
