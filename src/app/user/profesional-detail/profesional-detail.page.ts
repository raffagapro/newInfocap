import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { ProfCategory } from 'src/app/model/profCategory.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ImgListService } from 'src/app/services/img-list.service';
import { IMAGE_URL_BLANK } from 'src/shared/constants';
import * as moment from 'moment';
import axios from 'axios';
import { EvaluationData } from 'src/shared/types/EvaluationData';

@Component({
  selector: 'app-profesional-detail',
  templateUrl: './profesional-detail.page.html',
  styleUrls: ['./profesional-detail.page.scss'],
})
export class ProfesionalDetailPage implements OnInit, OnDestroy {
  selectedProCat: ProfCategory = new ProfCategory(
    null, null, null, null, null, null, null, null, null, null, null, null, null
  );
  selectedProfPhoto: string;
  grabbedUser: User;
  userSub: Subscription;
  loadedImgList: string[] = [];
  imgListSub: Subscription;
  headers: HttpHeaders;
  editedHours: string;
  editedDays: string = '';
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };
  evaluationsData: EvaluationData = {
    worknumber: 0,
    stars_everage: 0,
    technical_capacity_everage: 0,
    puntuality_everage: 0,
    cordiality_everage: 0,
    service_and_satisfaction_everage: 0,
  };

  constructor(
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
    private ils: ImgListService,
  ) {
  }

  async ngOnInit() {
    this.us.getUser();
    this.userSub = this.us.loggedUser.subscribe(user => {
      if (user) {
        this.grabbedUser = user;
        this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        this.getProf();
        this.getEvaluations()
      }

    });
    //loading imgList
    this.loadedImgList = this.ils.imgList;
    this.imgListSub = this.ils.listChanged.subscribe(imgList => {
      this.loadedImgList = imgList;
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
    this.selectedProfPhoto = this.solServ.solicitud.proPhoto;

    if (this.selectedProfPhoto === IMAGE_URL_BLANK) {
      this.selectedProfPhoto = null;
    }
  }

  getProf() {
    this.lc.create({
      message: 'Cargando informacion del profesional...'
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(API + `/client/profession/${this.solServ.solicitud.proPerfil_id}`, { headers: this.headers })
        .subscribe(resData => {
          this.selectedProCat = resData['data'];

          let splitedHours = this.selectedProCat.hours.split('/');
          let startHour = splitedHours.length > 0 ? moment(splitedHours[0]).format('h:mm a') : 'ND';
          let endHour = splitedHours.length > 1 ? moment(splitedHours[1]).format('h:mm a') : 'ND';
          //this.editedHours = `${startHour} / ${endHour}`;
          this.editedHours = this.selectedProCat.hours;
          this.editedDays = this.selectedProCat.work_days;
          /*
          let workingDays = this.selectedProCat.work_days.split('-');
          this.editedDays = '';
          workingDays.forEach(day => {
            switch (day) {
              case 'l':
                this.editedDays += 'Lun ';
                break;
              case 'm':
                this.editedDays += 'Mar ';
                break;
              case 'mi':
                this.editedDays += 'Mie ';
                break;
              case 'j':
                this.editedDays += 'Jue ';
                break;
              case 'v':
                this.editedDays += 'Vie ';
                break;
              case 's':
                this.editedDays += 'Sab ';
                break;
              case 'd':
                this.editedDays += 'Dom ';
                break;
            }
          });
          */
          //loading images
          // let listArr: [] = [];
          // resData['data'].images.forEach(image => {
          //   listArr.push(image.image);
          // });
          this.ils.setImgList(resData['data'].images);
          loadingEl.dismiss();
        }, e => {
          console.log(e);
          loadingEl.dismiss();
          // this.router.navigate(['/user/profesional-list']);
        });
    }).then(err => {
      this.lc.dismiss();
    });
  }

  async getEvaluations() {
    try {
      let response = await axios.get(
        `${API}/supplier/evaluation/${this.solServ.solicitud.proPerfil_id}`,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
      if (response.data && response.data.code !== 200) {
        //TODO: Maybe show an error message
        return
      }
      console.log(response.data.data, 'evaluations')
      this.evaluationsData = response.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  openMenu() {
    this.menuController.open();
  }

  sendRequest() {
    this.solServ.setProPerfilObj(this.selectedProCat);
    this.router.navigate(['/user/solicitud-servicio']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.imgListSub.unsubscribe();
  }
}
