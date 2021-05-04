import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, ModalController } from "@ionic/angular";
import { Router } from '@angular/router';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { API } from 'src/environments/environment';
import axios from 'axios';


type PaymentMethodType = 'credit' | 'debit' | 'cash' | 'transfer';
@Component({
  selector: 'app-solicitud-detail',
  templateUrl: './solicitud-detail.page.html',
  styleUrls: ['./solicitud-detail.page.scss'],
})
export class SolicitudDetailPage implements OnInit {
  userSubscription: Subscription;
  user: User;
  selectedButton: PaymentMethodType = 'credit';
  loadedService = {
    categoryName: null,
    cummunename: null,
    category_id: null,
    created_date: null,
    date_required: null,
    descProf: null,
    description: null,
    hours_professional: null,
    hours_requestservice: null,
    img_profile: null,
    professional_profiles_id: null,
    request_id: null,
    status_id: null,
    status_name: null,
    status_order: null,
    supplierLastName: null,
    supplierName: null,
    supplier_id: null,
    ticket_number: null,
    user_client_id: null,
    work_days: null,
    suplierPhone1: null,
    img_request: [],
  };
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController,
    private userService: UserService,
    private menuController: MenuController,
    private solServ: SolicitudService,
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.loggedUser.subscribe(user => {
      this.user = user;
      this.loadService();
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  async loadService() {
    let loader = await this.loadingController.create({ message: '' });

    try {
      await loader.present();
      let response = await axios.get(
        `${API}/client/requestservice/${this.solServ.solicitud.solicitudID}`,
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );
      this.solServ.setServiceObj(response.data.data);
      this.loadedService = response.data.data;
      if (this.loadedService.img_request.length < 2) {
        this.slideOptions.slidesPerView = 1;
      }
    } catch (error) {
      console.log(error);
    } finally {
      loader.dismiss();
    }
  }

  openMenu() {
    this.menuController.open();
  }

  formatDate(date: Moment, dateFormat: any = 'YYYY-MM-DD') {
    return moment(date, dateFormat).format('DD MMMM YYYY');
  }

  formatTime() {
    if (!this.loadedService.hours_requestservice) {
      return 'ND';
    }
    let hours = this.loadedService.hours_requestservice.split('/');
    let startHour = moment(hours[0]);
    let endHour = moment(hours[1]);
    return `${startHour.format('h:mm a')} - ${endHour.format('h:mm a')}`;
  }

  confirmSolicitud(){
    this.modalController.create({
      component: ConfirmSuccessModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  setSelectedButton(type: PaymentMethodType) {
    this.selectedButton = type;
  }

}
