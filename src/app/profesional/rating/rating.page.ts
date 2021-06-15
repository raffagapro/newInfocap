import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core'
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

  comentarios: []

  constructor(
    private menuController: MenuController,
    private us: UserService,
    private lc: LoadingController,
    private pickerController: PickerController
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });

    console.log(this.grabbedUser)

    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      this.headers = 'Bearer ' + this.grabbedUser.access_token
      axios.get(API + `/supplier/categories`, { headers: { Authorization: this.headers } }).then(resData => {
        this.categories = resData.data.data;
        if(this.categories.length > 0) {
          this.categorySelected = this.categories[0].name
          this.changeCategory(this.categories[0].id)
        }
        
        loadingEl.dismiss();
      }).catch(err => {
        loadingEl.dismiss();
      })
    })
  }

  changeCategory(categoryID)
  {
    axios.get(API + `/supplier/evaluation/filtercategorie/${categoryID}`, { headers: { Authorization: this.headers } }).then(resData => {
      this.comments = resData.data.data
    }).catch(err => {
      this.comments = {
        stars_everage: 0,
        worknumber: 0,
        comments: []
      }
    })
  }

  async showPicker() {
    let options: PickerOptions = {
      mode: 'ios',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
        },
        {
          text:'Listo',
          handler:(value:any) => {
            console.log(value)
            this.categorySelected = value.category.text
            this.changeCategory(value.category.value)
          }
        }
      ],
      columns:[{
        name:'category',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    console.log()
    this.categories.forEach(x => {
      options.push({text: x.name, value: x.id});
    });
    return options;
  }

  getUrl() {
    if(!this.grabbedUser.img_profile || this.grabbedUser.img_profile === '') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.grabbedUser.img_profile})`
    }
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

}
