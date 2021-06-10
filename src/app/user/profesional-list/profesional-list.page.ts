import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import axios from 'axios';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { IMAGE_URL_BLANK } from 'src/shared/constants';

@Component({
  selector: 'app-profesional-list',
  templateUrl: './profesional-list.page.html',
  styleUrls: ['./profesional-list.page.scss'],
})
export class ProfesionalListPage implements OnInit, OnDestroy {
  imageBlank = IMAGE_URL_BLANK;
  profList = [];
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  sort = null;
  type = null;
  endpoints = {
    'stars': `${API}/supplier/evaluation/filterstar`,
    'jobs': `${API}/supplier/evaluation/filter`,
    'male': `${API}/supplier/evaluation/filter`,
    'female': `${API}/supplier/evaluation/filter`,
  }

  constructor(
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
    private location: Location,
    private navigationController: NavController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
    this.getProfessionalList();
  }

  getProfessionalList() {
    // Grab prof list 
    this.lc.create({
      message: "Generando lista de profesionales..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(
        API + `/client/professions/${this.solServ.solicitud.comuna_id}/${this.solServ.solicitud.category_id}`,
        { headers: this.headers }
      ).subscribe(resData => {
        this.profList = resData['data'];
        this.profList = this.profList.sort(function (a, b) {
          if (a.supplierName < b.supplierName) { return -1; }
          if (a.supplierName > b.supplierName) { return 1; }
          return 0;
        });
        
        loadingEl.dismiss();
      }, e => {
        console.log(e);
        loadingEl.dismiss();
      });
    }).catch(err => {
      this.lc.dismiss()
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  openMenu() {
    this.menuController.open();
  }

  profDetails(proPerfilCatId, profilImg) {
    this.solServ.setProPerfil(proPerfilCatId);
    this.solServ.setProPhoto(profilImg);
    this.router.navigate(['/user/profesional-detail']);
  }

  onSortChange(event) {
    this.sort = event.target.value;
    this.filterList();
  }

  onTypeChange(event) {
    this.type = event.target.value;
  }

  resetFilters() {
    this.sort = null;
    this.type = null;
    this.getProfessionalList();
  }

  eRequest() {
    this.router.navigate(['/user/urgen-service']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  goToMap() {
    this.location.back();
  }

  goToCategories() {
    this.navigationController.navigateBack('/user/home');
  }

  async filterList() {
    let loader = await this.lc.create({ message: 'Obteniendo lista de profesionales...' });
    loader.present();
    try {
      const { category_id } = this.solServ.solicitud;
      let endpoint = `${this.endpoints[this.sort]}/${category_id}`;
      if (this.sort === 'female') {
        endpoint = `${endpoint}/0`
      } else if (this.sort === 'male') {
        endpoint = `${endpoint}/1`;
      }

      let response = await axios.get(
        endpoint,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
      if (response.data && response.data.status !== 200) {
        // TODO: Set error logic
      }
      this.profList = response.data.data;
    } catch (error) {
      // TODO: Set error logic
    } finally {
      await loader.dismiss();
    }
  }
}
