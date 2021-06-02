import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import axios from 'axios'
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import * as moment from 'moment'

@Component({
  selector: 'app-finalizados-details',
  templateUrl: './finalizados-details.page.html',
  styleUrls: ['./finalizados-details.page.scss'],
})
export class FinalizadosDetailsPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;
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
    clientPhone1: null,
    request_cost: 0
  };

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private router: Router,
    private menuController: MenuController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer '+ this.grabbedUser.access_token;
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl =>{
      loadingEl.present();
      axios.get(API+`/supplier/requestservicedetail/${this.solicitudServicio.solicitud.id}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.solicitudServicio.setClientLastName(resData.data.data.clientLastName)
        this.solicitudServicio.setClientName(resData.data.data.clientName)
        let wDate = resData.data.data.date_required.split("-");
        this.solicitudServicio.setDateRequired(wDate[2]+'-'+wDate[1]+'-'+wDate[0])
        this.solicitudServicio.setDescription(resData.data.data.description)
        this.solicitudServicio.setHours(resData.data.data.hours)
        this.solicitudServicio.setImages(resData.data.data.images)
        this.solicitudServicio.setClientImg(resData.data.data.img_client_profile)
        this.solicitudServicio.setTicketNumber(resData.data.data.ticket_number)
        this.solicitudServicio.setCategoryID(resData.data.data.categoryName)
        this.solicitudServicio.setStatusID(resData.data.data.status_id)
        this.solicitudServicio.setClientPhone(resData.data.data.clientPhone1)
        this.solicitudServicio.setCosto(resData.data.data.request_cost[0] && resData.data.data.request_cost[0]);

        this.loadedInfo.clientLastName = resData.data.data.clientLastName;
        this.loadedInfo.clientName = resData.data.data.clientName;
        this.loadedInfo.date_required = wDate[2]+'-'+wDate[1]+'-'+wDate[0];
        this.loadedInfo.description = resData.data.data.description;
        this.loadedInfo.hours = resData.data.data.hours;
        this.loadedInfo.images = resData.data.data.images;
        this.loadedInfo.img_profile = resData.data.data.img_client_profile;
        this.loadedInfo.ticket_number = resData.data.data.ticket_number;
        this.loadedInfo.categoryName = resData.data.data.categoryName;
        this.loadedInfo.clientPhone1 = resData.data.data.clientPhone1;
      }).catch(err => {
        console.log(err)
        loadingEl.dismiss();
      })
    });
  }

  formatDate(date: string) {
    return moment(date, 'DD/M/YYYY').format('dddd D [de] MMMM [de] YYYY');
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
    this.router.navigate(['/profesional/finalizados/rate-form']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
