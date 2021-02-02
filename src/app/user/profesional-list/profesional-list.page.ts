import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profesional-list',
  templateUrl: './profesional-list.page.html',
  styleUrls: ['./profesional-list.page.scss'],
})
export class ProfesionalListPage implements OnInit {

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
  
  profDetails(){
    this.router.navigate(['/user/profesional-detail']);
  }

  eRequest(){
    this.router.navigate(['/user/urgen-service']);
  }

}
