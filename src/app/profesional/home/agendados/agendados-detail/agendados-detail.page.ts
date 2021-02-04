import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-agendados-detail',
  templateUrl: './agendados-detail.page.html',
  styleUrls: ['./agendados-detail.page.scss'],
})
export class AgendadosDetailPage implements OnInit {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

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

  solicitudDetail(){
    // this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-finalizar']);
  }

  finalizarSolicitud(){
    this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-finalizar']);
  }

}
