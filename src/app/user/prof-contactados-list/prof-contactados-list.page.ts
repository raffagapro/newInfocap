import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-prof-contactados-list',
  templateUrl: './prof-contactados-list.page.html',
  styleUrls: ['./prof-contactados-list.page.scss'],
})
export class ProfContactadosListPage implements OnInit {

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

  solicitudes(){
    this.router.navigate(['/user/solicitudes']);
  }

}
