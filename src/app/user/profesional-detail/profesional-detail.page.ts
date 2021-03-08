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

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    //loading imgList
    this.loadedImgList = this.ils.imgList;
    this.imgListSub = this.ils.listChanged.subscribe(imgList =>{
      this.loadedImgList = imgList;
    });
    // console.log(this.solServ.solicitud.proPhoto);
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
    this.getProf();
    this.selectedProfPhoto = this.solServ.solicitud.proPhoto;
  }

  getProf(){
    this.lc.create({
      message: 'Cargando informacion del profesional...'
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/client/profession/${this.solServ.solicitud.proPerfil_id}`, {headers: this.headers})
      .subscribe(resData =>{
        this.selectedProCat = resData['data'];
        console.log(this.selectedProCat);
        //work values
        let workingHours = this.selectedProCat.hours.split('T');
        let wsHour = workingHours[1];
        wsHour = wsHour.substr(0, 5);
        let weHour = workingHours[2];
        weHour = weHour.substr(0, 5);
        this.editedHours = wsHour+" / "+weHour;

        let workingDays = this.selectedProCat.work_days.split('-');
        workingDays.forEach(day => {
          switch (day) {
            case 'l':
              this.editedDays += 'Lun ';
              break;
            case 'm':
              this.editedDays += 'Mar ';
              break;
            case 'mr':
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
        //loading images
        // let listArr: [] = [];
        // resData['data'].images.forEach(image => {
          //   listArr.push(image.image);
          // });
        this.ils.setImgList(resData['data'].images);   
        loadingEl.dismiss();
      }, e =>{
        console.log(e);
        loadingEl.dismiss();
        // this.router.navigate(['/user/profesional-list']);
      });
    });
  }

  openMenu(){
    this.menuController.open();
  }

  sendRequest(){
    this.solServ.setProPerfilObj(this.selectedProCat);
    this.router.navigate(['/user/solicitud-servicio']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    this.imgListSub.unsubscribe();
  }
}
