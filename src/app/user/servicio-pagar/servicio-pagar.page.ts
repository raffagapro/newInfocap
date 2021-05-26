import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import axios from 'axios';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { PaymentMethodType } from '../solicitud-detail/solicitud-detail.page';

@Component({
  selector: 'app-servicio-pagar',
  templateUrl: './servicio-pagar.page.html',
  styleUrls: ['./servicio-pagar.page.scss'],
})
export class ServicioPagarPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
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
    request_cost: [],
  };
  serviceId: string;
  wDate;
  servicesCosts;
  selectedButton: PaymentMethodType = 'credit';
  paymentTypes = [];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
    private solServ: SolicitudService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
      this.serviceId = this.solServ.solicitud.solicitudID;
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
            Authorization: `Bearer ${this.grabbedUser.access_token}`
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

  loadService() {
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(API + `/client/requestservice/${this.solServ.solicitud.solicitudID}`, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          this.loadedService = resData['data'];
          this.solServ.setServiceObj(resData['data']);
          let worDate = this.loadedService.created_date.split(" ");
          this.wDate = worDate[0];

          if (this.loadedService.request_cost.length > 0) {
            let firstCost = this.loadedService.request_cost[0];
            let paymentType = this.paymentTypes.find((paymentType) => paymentType.id === firstCost.payment_type_id);
            if (paymentType.name === 'Efectivo') {
              this.selectedButton = 'cash';
            } else {
              this.selectedButton = 'credit';
            }
          }

          this.loadCosts();
        }, err => {
          loadingEl.dismiss();
          console.log(err);
        });
    });
  }

  async loadCosts() {
    let loader = await this.lc.create({ message: 'Consultando información...' });
    loader.present();
    try {
      let response = await axios.get(
        `${API}/client/detailcostrequest/${this.solServ.solicitud.solicitudID}`,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
      console.log(response);
      if (response.data) {
        let data = response.data.data;
        if (response.data.code !== 200) {
          alert('Error');
          return
        }
        this.servicesCosts = data.data;
      }
    } catch (error) {
      console.log(error)
    } finally {
      loader.dismiss();
    }
  }

  getServiceAditional() {
    if (this.servicesCosts && this.servicesCosts.request_cost.length > 0) {
      return this.servicesCosts.request_cost.addittional.reduce((total, entity) => total += Number(entity.amount_client), 0);
    }
    return 0;
  }

  getTotal() {
    return this.getServiceAditional() + this.servicesCosts.amount_client;
  }

  openMenu() {
    this.menuController.open();
  }

  paymentForm() {
    this.router.navigate(['/user/servicio-pagar-forma']);
  }

  setSelectedButton(type: PaymentMethodType) {
    this.selectedButton = type;
  }

  nothing() {
    // do something awesome
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
