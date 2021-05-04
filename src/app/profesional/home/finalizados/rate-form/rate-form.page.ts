import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.page.html',
  styleUrls: ['./rate-form.page.scss'],
})
export class RateFormPage implements OnInit {

  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  rate: 0;

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

  formRate: FormGroup

  constructor(
    private router: Router,
    private menuController: MenuController,
    private modalController: ModalController,
    private solServ: SolicitudService,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.formRate = new FormGroup({
      detailes: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      photos: new FormControl(null, {
        updateOn: 'blur',
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });


    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(API + `/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          this.loadedInfo.clientLastName = resData['data'].clientLastName;
          this.loadedInfo.clientName = resData['data'].clientName;
          let wDate = resData['data'].date_required.split("-");
          this.loadedInfo.date_required = wDate[2] + '-' + wDate[1] + '-' + wDate[0];
          this.loadedInfo.description = resData['data'].description;
          this.loadedInfo.hours = resData['data'].hours;
          this.loadedInfo.images = resData['data'].images;
          this.loadedInfo.img_profile = resData['data'].img_client_profile;
          this.loadedInfo.ticket_number = resData['data'].ticket_number;
          this.loadedInfo.categoryName = resData['data'].categoryName;
          this.loadedInfo.clientPhone1 = resData['data'].clientPhone1;
        }, err => {
          console.log(err);
          loadingEl.dismiss();

        });
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

  changeStars(s) {
    this.rate = s
  }

  sendRate() {
    this.modalController.create({
      component: ConfirmSuccessComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
