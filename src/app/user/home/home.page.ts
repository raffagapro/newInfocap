import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, MenuController } from "@ionic/angular";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserRoles } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { API, PATH } from 'src/environments/environment';
import { SolicitudService } from 'src/app/services/solicitud.service';
import axios from 'axios';

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
  urlServer: string = PATH;

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
      this.menuController.enable(user.role === UserRoles.PROFESSIONAL, UserRoles.PROFESSIONAL);
      this.menuController.enable(user.role === UserRoles.USER, UserRoles.USER);
    });
  }

  ionViewWillEnter() {
    this.loadCategories()
  }

  async loadCategories() {
    const loader = await this.lc.create({
      message: 'Cargando servicios disponibles...'
    });
    try {
      const response = await axios.get(
        `${API}/categories`,
        {
          headers: {
            authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
      loader.dismiss();
      console.log(response.data.data)
      this.categories = response.data.data;
    } catch (error) {
      loader.dismiss();
      console.log(error);
    }
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
