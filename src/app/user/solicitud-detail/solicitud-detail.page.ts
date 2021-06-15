import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, ModalController } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { API } from 'src/environments/environment';
import axios from 'axios';
import { SuccessModalComponent } from 'src/app/shared/success-modal/success-modal.component';
import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';


export type PaymentMethodType = 'credit' | 'debit' | 'cash' | 'transfer';
@Component({
  selector: 'app-solicitud-detail',
  templateUrl: './solicitud-detail.page.html',
  styleUrls: ['./solicitud-detail.page.scss'],
})
export class SolicitudDetailPage implements OnInit {
  userSubscription: Subscription;
  user: User;
  selectedButton: PaymentMethodType = 'credit';
  paymentTypes = [];
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
    request_cost: [],
    history_status: [],
  };
  isProcess = false
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.loggedUser.subscribe(user => {
      this.user = user;
      this.loadPaymentTypes();
    });

    this.route.queryParamMap
      .subscribe((params: any) => {
        let queryParams = {...params};
        this.isProcess = queryParams.params?.inProcess === "true"
      });
  }
  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  async loadPaymentTypes() {
    try {
      let response = await axios.get(
        `${API}/payments/type`,
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );
      this.paymentTypes = response.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.loadService();
    }
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
      if (this.loadedService.request_cost.length > 0) {
        let firstCost = this.loadedService.request_cost[0];
        let paymentType = this.paymentTypes.find((paymentType) => paymentType.id === firstCost.payment_type_id);
        if (paymentType.name === 'Efectivo') {
          this.selectedButton = 'cash';
        } else {
          this.selectedButton = 'credit';
        }
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

  formatDate(date: Moment, dateFormat: any = 'YYYY-MM-DD', useTimezone: boolean = false) {
    let momentDate = moment.utc(date, dateFormat);
    if (useTimezone) {
      momentDate.tz(moment.tz.guess())
    }
    return momentDate.format('dddd D [de] MMMM [de] YYYY');
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

  getServiceCost() {
    if (this.loadedService && this.loadedService.request_cost.length > 0) {
      return this.loadedService.request_cost.reduce((total, entity) => total += Number(entity.amount_client), 0).toFixed(2);
    }
    return 0;
  }

  isInProcess() {
    return this.isProcess
  }

  async confirmSolicitud() {
    let loader = await this.loadingController.create({ message: 'Actualizando solicitud...' });
    loader.present();
    try {
      let payment_type;
      switch (this.selectedButton) {
        case 'credit':
          payment_type = this.paymentTypes.find((entry) => entry.name === 'Tarjeta');
          break;
        case 'cash':
          payment_type = this.paymentTypes.find((entry) => entry.name === 'Efectivo');
          break
        default:
          return
      }
      if (!payment_type) {
        return;
      }

      let response = await axios.put(
        `${API}/client/cost/paymentType/${this.loadedService.request_id}`,
        {
          costs_type_id: 1,
          payment_type_id: payment_type.id,
          description: 'Actualización del método de pago'
        },
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );
      await loader.dismiss();

      console.log(response);
      if (response.data && response.data.code !== 200) {
        // TODO: Set error logic
        return;
      }

      this.modalController.create({
        component: SuccessModalComponent,
        componentProps: {
          message: 'HAZ ACEPTADO LA VISITA TÉCNICA',
          redirect: true,
          redirectUrl: '/user/solicitudes'
        },
        cssClass: 'modalSuccess',
      }).then(modalEl => {
        modalEl.present();
      });
    } catch (error) {
      console.log(error);
      await loader.dismiss();
    }
  }

  async setPaymentType(type: string) {
    let loader = await this.loadingController.create({ message: 'Actualizando método de pago...' });
    loader.present();
    try {
      let payment_type;
      switch (type) {
        case 'credit':
          payment_type = this.paymentTypes.find((entry) => entry.name === 'Tarjeta');
          break;
        case 'cash':
          payment_type = this.paymentTypes.find((entry) => entry.name === 'Efectivo');
          break
        default:
          return
      }
      if (!payment_type) {
        return;
      }

      let response = await axios.put(
        `${API}/client/cost/paymentType/${this.loadedService.request_id}`,
        {
          costs_type_id: 1,
          payment_type_id: payment_type.id,
          description: 'Actualización del método de pago'
        },
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );
      await loader.dismiss();

      console.log(response);
      if (response.data && response.data.code !== 200) {
        // TODO: Set error logic
        return;
      }
      this.selectedButton = type

      this.modalController.create({
        component: SuccessModalComponent,
        componentProps: {
          message: 'HAZ ACTUALIZADO EL MÉTODO DE PAGO',
          redirect: false,
        },
        cssClass: 'modalSuccess',
      }).then(modalEl => {
        modalEl.present();
      });
    } catch (error) {
      console.log(error);
      await loader.dismiss();
    }
  }


  setSelectedButton(type: PaymentMethodType) {
    //if (this.loadedService.request_cost.length > 0) return;
    this.selectedButton = type;
  }

  async openImage(image: string) {
    const successModal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        image,
      },
      cssClass: 'modalImage',
    });
    successModal.present();
  }

}
