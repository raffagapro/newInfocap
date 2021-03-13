import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ConfirmServComponent } from './confirm-serv/confirm-serv.component';

@Component({
  selector: 'app-definicion-servicio',
  templateUrl: './definicion-servicio.page.html',
  styleUrls: ['./definicion-servicio.page.scss'],
})
export class DefinicionServicioPage implements OnInit, OnDestroy {
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
  };
  form: FormGroup;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
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
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    //form
    this.form = new FormGroup({
      dateReq: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      sHour: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      eHour: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      costo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    this.loadService();
  }

  loadService(){
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
        this.loadedInfo.hours = resData['data'].hours.split("/");
        this.form.patchValue({
          sHour: this.loadedInfo.hours[0],
          eHour: this.loadedInfo.hours[1],
          dateReq: this.loadedInfo.date_required,
        });
        this.loadedInfo.images = resData['data'].images;
        this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
        this.loadedInfo.ticket_number = resData['data'].ticket_number;
        this.loadedInfo.categoryName = resData['data'].categoryName;
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
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

  openMenu(){
    this.menuController.open();
  }

  confirmRequest(){
    console.log(this.form);
    let wDate = this.form.value.dateReq.split('T');
    wDate = wDate[0];
    wDate = wDate.split('-');
    wDate = wDate[2]+'/'+wDate[1]+'/'+wDate[0];
    this.solServ.setNewDate(wDate);
    console.log(this.solServ.solicitud.newDate);
    this.solServ.setNewTime(this.form.value.sHour+'/'+this.form.value.eHour);
    console.log(this.solServ.solicitud.newDate);
    // console.log(this.solServ.solicitud.newTime);
    this.modalController.create({
      component: ConfirmServComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
