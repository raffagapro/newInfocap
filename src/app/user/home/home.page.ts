import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private menuController: MenuController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
  }

  map(){
    this.router.navigate(['/user/map']);
  }
}
