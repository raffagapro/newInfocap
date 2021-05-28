import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { ConfirmVisitaComponent } from './confirm-visita/confirm-visita.component';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import axios from 'axios'

import * as moment from 'moment';

import { API } from 'src/environments/environment';
import { VisitaTecnicaService } from 'src/app/services/visita-tecnica.service';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

@Component({
  selector: 'app-visita-tecnica',
  templateUrl: './visita-tecnica.page.html',
  styleUrls: ['./visita-tecnica.page.scss'],
})
export class VisitaTecnicaPage implements OnInit {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;

  minDate = moment().format('YYYY-MM-DD')
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
    private menuController: MenuController,
    private us: UserService,
    private lc: LoadingController,
    private solServ: SolicitudService,
    private solicitudServicio: ProSolicitudService,
    private visitaT: VisitaTecnicaService
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

    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });

    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      axios.get(API + `/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.loadedInfo.clientLastName = resData.data.data.clientLastName;
        this.loadedInfo.clientName = resData.data.data.clientName;
        let wDate = resData.data.data.date_required.split("-");
        this.loadedInfo.date_required = wDate[2] + '-' + wDate[1] + '-' + wDate[0];
        this.loadedInfo.description = resData.data.data.description;
        this.loadedInfo.hours = resData.data.data.hours;
        this.loadedInfo.images = resData.data.data.images;
        this.loadedInfo.img_client_profile = resData.data.data.img_client_profile;
        this.loadedInfo.ticket_number = resData.data.data.ticket_number;
        this.loadedInfo.categoryName = resData.data.data.categoryName;
        this.loadedInfo.clientPhone1 = resData.data.data.clientPhone1;
      }).catch(err => {
        loadingEl.dismiss();
      })
    });
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
    this.visitaT.setDate(date)
    this.visitaT.setHours(`${startTime} - ${endTime}`)
    
    this.modalController.create({
      component: ConfirmVisitaComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
    }).catch(e => {
    });
  }

}
