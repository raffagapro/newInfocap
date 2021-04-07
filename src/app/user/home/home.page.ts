import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, MenuController } from "@ionic/angular";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { API } from 'src/environments/environment';
import { SolicitudService } from 'src/app/services/solicitud.service';

interface Categories {
  id: string,
  name: string,
  description: string,
  rating: string,
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  categories: Categories[];
  grabbedUser: User;
  userSub: Subscription;

  constructor(
    private menuController: MenuController,
    private router: Router,
    private http: HttpClient,
    private lc: LoadingController,
    private us: UserService,
    private cs: CategoryService,
    private solServ: SolicitudService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
    this.lc.create({
      message: "Cargando Servicios Disponibles..."
    }).then(loadingEl => {
      loadingEl.present();
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'Bearer ' + this.grabbedUser.access_token)
      this.http.get(`${API}/categories`, { headers: headers }).subscribe(resData => {
        loadingEl.dismiss();
        this.categories = resData['data'];
      }, error => {
        loadingEl.dismiss();
        console.log(error);
      });
    });
  }

  map(catId: string) {
    this.solServ.setCat(catId);
    this.router.navigate(['/user/map']);
  }

  login() {
    // do something cool 
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
