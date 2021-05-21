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
  categorySelected = null;
  comments = {};
  userSub: Subscription;

  constructor(
    private menuController: MenuController,
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
        if(this.categories.length > 0) {
          this.categorySelected = this.categories[0].id
          this.changeCategory()
        }
        
        loadingEl.dismiss();
      }).catch(err => {
        loadingEl.dismiss();
      })
    })
  }

  changeCategory()
  {
    axios.get(API + `/supplier/evaluation/filtercategorie/${this.categorySelected}`, { headers: { Authorization: this.headers } }).then(resData => {
      this.comments = resData.data.data
    }).catch(err => {
      console.log(err)
    })
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
