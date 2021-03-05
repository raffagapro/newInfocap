import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { ImgListService } from 'src/app/services/img-list.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-solicitudes-detail',
  templateUrl: './solicitudes-detail.page.html',
  styleUrls: ['./solicitudes-detail.page.scss'],
})
export class SolicitudesDetailPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedInfo;
  loadedImgList: string[] = [];
  imgListSub: Subscription;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
    private ils: ImgListService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, {headers: this.headers})
      .subscribe(resData =>{
        console.log(resData['data']);
        loadingEl.dismiss();
        this.loadedInfo = resData['data'];
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
        
      });
    });
    //loading imgList
    this.loadedImgList = this.ils.imgList;
    this.imgListSub = this.ils.listChanged.subscribe(imgList =>{
      this.loadedImgList = imgList;
    });
    console.log(this.loadedInfo.images);
    this.ils.setImgList(this.loadedInfo.images); 
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
  }

  p(hours: string){
    let wHours = hours.split("/");
    let sHour = wHours[0].split("T");
    let sHour2 = sHour[1];
    sHour2 = sHour2.substring(0, 5);
    let eHour = wHours[1].split("T");
    let eHour2 = eHour[1];
    eHour2 = eHour2.substring(0, 5);
    return sHour2+" - "+eHour2;
  }

  openMenu(){
    this.menuController.open();
  }

  confirmVisit(){
    this.router.navigate(['/profesional/home/home-tabs/solicitudes/visita-tecnica']);
  }

  accceptSolicitud(){
    this.router.navigate(['/profesional/home/home-tabs/solicitudes/definicion-servicio']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    this.imgListSub.unsubscribe();
  }

}
