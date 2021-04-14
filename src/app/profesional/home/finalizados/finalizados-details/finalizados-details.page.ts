import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-finalizados-details',
  templateUrl: './finalizados-details.page.html',
  styleUrls: ['./finalizados-details.page.scss'],
})
export class FinalizadosDetailsPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedInfo = {
    img_profile: null,
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
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
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
        loadingEl.dismiss();
        this.loadedInfo.clientLastName = resData['data'].clientLastName;
        this.loadedInfo.clientName = resData['data'].clientName;
        let wDate = resData['data'].date_required.split("-");
        this.loadedInfo.date_required = wDate[2]+'-'+wDate[1]+'-'+wDate[0];
        this.loadedInfo.description = resData['data'].description;
        this.loadedInfo.hours = resData['data'].hours;
        this.loadedInfo.images = resData['data'].images;
        this.loadedInfo.img_profile = resData['data'].img_client_profile;
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

  rateClient(){
    this.router.navigate(['/profesional/home/home-tabs/finalizados/rate-form']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
