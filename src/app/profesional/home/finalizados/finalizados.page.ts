import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.page.html',
  styleUrls: ['./finalizados.page.scss'],
})
export class FinalizadosPage implements OnInit {

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

  finalizadosDetail(){
    this.router.navigate(['/profesional/home/home-tabs/finalizados/finalizados-details']);
  }

}
