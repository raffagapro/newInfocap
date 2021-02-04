import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-servicios-adicionales',
  templateUrl: './servicios-adicionales.page.html',
  styleUrls: ['./servicios-adicionales.page.scss'],
})
export class ServiciosAdicionalesPage implements OnInit {

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

  saveExtra(){
    this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-finalizar']);
  }

}
