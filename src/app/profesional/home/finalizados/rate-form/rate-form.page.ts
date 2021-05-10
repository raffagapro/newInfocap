import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios'

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
    clientPhone1: null
  };

  formRate: FormGroup

  constructor(
    private menuController: MenuController,
    private modalController: ModalController,
    private solServ: SolicitudService,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    // new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
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
        this.loadedInfo.img_profile = resData.data.data.img_client_profile;
        this.loadedInfo.ticket_number = resData.data.data.ticket_number;
        this.loadedInfo.categoryName = resData.data.data.categoryName;
        this.loadedInfo.clientPhone1 = resData.data.data.clientPhone1;
      }).catch(err => {
        console.log(err);
        loadingEl.dismiss();
      })
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
    this.isRated = true
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
