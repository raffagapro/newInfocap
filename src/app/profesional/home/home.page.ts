import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    // private router: Router,
    // private menuController: MenuController,
  ) { }

  ngOnInit() {
  }

  // ionViewWillEnter(){
  //   this.menuController.enable(true, 'profesional');
  // }

  // openMenu(){
  //   this.menuController.open();
  // }

}
