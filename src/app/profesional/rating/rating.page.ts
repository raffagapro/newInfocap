import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  headers: HttpHeaders
  categories = []

  constructor(
    private menuController: MenuController,
    private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.http.get(API + `/supplier/categories`, { headers: this.headers }).subscribe(resData => {
      this.categories = resData['data'];
    })
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
  }

  openMenu(){
    this.menuController.open();
  }

}
