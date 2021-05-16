import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { API } from 'src/environments/environment';

import axios from 'axios';
import { User } from 'src/app/model/user.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  headers: String
  grabbedUser: User;
  categories = []
  userSub: Subscription;

  constructor(
    private menuController: MenuController,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });

    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();

      this.headers = 'Bearer ' + this.grabbedUser.access_token
      axios.get(API + `/supplier/categories`, { headers: { Authorization: this.headers } }).then(resData => {
        this.categories = resData.data.data;
        loadingEl.dismiss();
      }).catch(err => {
        loadingEl.dismiss();
      })
    })
  }

  changeCategory() 
  {
    axios.get(API + `/api/supplier/evaluation/${this.grabbedUser.id}`)
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
