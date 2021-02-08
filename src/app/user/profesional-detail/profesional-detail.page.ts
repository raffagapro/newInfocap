import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profesional-detail',
  templateUrl: './profesional-detail.page.html',
  styleUrls: ['./profesional-detail.page.scss'],
})
export class ProfesionalDetailPage implements OnInit {

  constructor(
    private router: Router,
    private menuController: MenuController,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
  }

  openMenu(){
    this.menuController.open();
  }

  sendRequest(){
    this.router.navigate(['/user/solicitud-servicio']);
  }

  profDetails(){
    // do something aweseom
  }
}
