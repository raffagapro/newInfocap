import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios'
import * as moment from 'moment'
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.page.html',
  styleUrls: ['./rate-form.page.scss'],
})
export class RateFormPage implements OnInit {

  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  rate: 0;
  isRated = false;

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
    img_client_profile: null,
    request_cost: {}
  };

  formRate: FormGroup

  constructor(
    private menuController: MenuController,
    private modalController: ModalController,
    private solServ: SolicitudService,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
  ) { }

  ngOnInit() {
    this.formRate = new FormGroup({
      comment: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      comment_bad_services: new FormControl(null, {
        updateOn: 'blur',
      }),
    });


    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });

    this.headers = 'Bearer ' + this.grabbedUser.access_token
  }

  formatDate(date: string) {
    console.log(date)
    return moment(date, 'DD/M/YYYY').format('D [de] MMM [de] YYYY');
  }

  ionViewWillEnter() {
    this.loadedInfo.clientLastName = this.solicitudServicio.solicitud.clientLastName
    this.loadedInfo.clientName = this.solicitudServicio.solicitud.clientName
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
    this.loadedInfo.description = this.solicitudServicio.solicitud.description
    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours
    this.loadedInfo.images = this.solicitudServicio.solicitud.images
    this.loadedInfo.img_profile = this.solicitudServicio.solicitud.clientImg
    this.loadedInfo.ticket_number = this.solicitudServicio.solicitud.ticket_number
    this.loadedInfo.categoryName = this.solicitudServicio.solicitud.category_id
    this.loadedInfo.clientPhone1 = this.solicitudServicio.solicitud.clientPhone
    this.loadedInfo.request_cost = this.solicitudServicio.solicitud.cost
    this.loadedInfo.img_client_profile = this.solicitudServicio.solicitud.clientImg
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

  changeStars(s) {
    this.rate = s
    this.isRated = true
  }

  getUrl() {
    if(!this.loadedInfo.img_client_profile || this.loadedInfo.img_client_profile === '/' || this.loadedInfo.img_client_profile === 'http://167.71.251.136/storage/') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.loadedInfo.img_client_profile})`
    }
  }

  sendRate() {
    let new_rate = {
      "request_services_id": this.solServ.solicitud.solicitudID,
      "stars": this.rate,
      "comment": this.formRate.value.comment,
      "comment_bad_services": this.formRate.value.comment_bad_services
    }

    axios.post(API + '/client/evaluation', new_rate, { headers: { Authorization: this.headers } }).then(resData => {
      this.modalController.create({
        component: ConfirmSuccessComponent,
        cssClass: 'modalSuccess',
      }).then(modalEl => {
        modalEl.present();
      }, err => {
        console.log(err)
      });
    })
  }

}
