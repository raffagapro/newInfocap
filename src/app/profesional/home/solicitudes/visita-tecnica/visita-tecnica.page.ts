import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { ConfirmVisitaComponent } from './confirm-visita/confirm-visita.component';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';

import { API } from 'src/environments/environment';

@Component({
  selector: 'app-visita-tecnica',
  templateUrl: './visita-tecnica.page.html',
  styleUrls: ['./visita-tecnica.page.scss'],
})
export class VisitaTecnicaPage implements OnInit {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };
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
    clientPhone1: null,
  };

  formVisitaTecnica: FormGroup

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
    private solServ: SolicitudService,
  ) { }

  ngOnInit() {
    this.formVisitaTecnica = new FormGroup({
      requiredDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      startTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      endTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });

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
          this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
          this.loadedInfo.ticket_number = resData['data'].ticket_number;
          this.loadedInfo.categoryName = resData['data'].categoryName;
          this.loadedInfo.clientPhone1 = resData['data'].clientPhone1;
        }, err => {
          console.log(err);
          loadingEl.dismiss();

        });
    });

    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  openMenu() {
    this.menuController.open();
  }

  confirmRequest() {
    let date = moment(this.formVisitaTecnica.value.requiredDate).format('l');
    let startTime = moment(this.formVisitaTecnica.value.startTime).format('LT');
    let endTime = moment(this.formVisitaTecnica.value.endTime).format('LT');
    let new_data = {
      visit_date: date,
      visit_hours: `${startTime} - ${endTime}`
    }
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.put(API + `/supplier/visit/requestservice/${this.solServ.solicitud.solicitudID}`, new_data,{ headers: this.headers }).subscribe(resData => {
        this.modalController.create({
          component: ConfirmVisitaComponent,
          cssClass: 'modalSE',
        }).then(modalEl => {
          modalEl.present();
          loadingEl.dismiss();
        });
      })
    }).catch(err => {
      console.log(err)
      this.lc.dismiss();
    })
  }

}
