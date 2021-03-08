import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-agendados-detail',
  templateUrl: './agendados-detail.page.html',
  styleUrls: ['./agendados-detail.page.scss'],
})
export class AgendadosDetailPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedInfo = {
    img_client_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    hours: null,
    description: null,
    images: null,
    categoryName: null,
    clientPhone1: null
  };

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
    private callNumber: CallNumber
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
        this.loadedInfo.clientLastName = resData['data'].clientLastName;
        this.loadedInfo.clientName = resData['data'].clientName;
        this.loadedInfo.date_required = resData['data'].date_required;
        this.loadedInfo.description = resData['data'].description;
        this.loadedInfo.hours = resData['data'].hours;
        this.loadedInfo.images = resData['data'].images;
        this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
        this.loadedInfo.ticket_number = resData['data'].ticket_number;
        this.loadedInfo.categoryName = resData['data'].categoryName;
        this.loadedInfo.clientPhone1 = resData['data'].clientPhone1;
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
        
      });
    });
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
  }

  caller(){
    this.callNumber.callNumber(this.loadedInfo.clientPhone1, true)
    .then(res =>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  }

  openMenu(){
    this.menuController.open();
  }

  p(hours: string){
    if (hours) {
      let wHours = hours.split("/");
      let sHour = wHours[0].split("T");
      let sHour2 = sHour[1];
      sHour2 = sHour2.substring(0, 5);
      let eHour = wHours[1].split("T");
      let eHour2 = eHour[1];
      eHour2 = eHour2.substring(0, 5);
      return sHour2+" - "+eHour2;
    }
  }

  d(date:string){
    if (date) {
      let wDate = date.split(" ");
      return wDate[0]; 
    }
  }

  solicitudDetail(){
    // this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-finalizar']);
  }

  finalizarSolicitud(){
    this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-finalizar']);
  }

  confirmSolicitud(){
    // do something awesome
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
