// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import axios from 'axios';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ConfirmSuccessComponent } from '../confirm-success/confirm-success.component';

@Component({
  selector: 'app-service-reject-modal',
  templateUrl: './service-reject-modal.component.html',
  styleUrls: ['./service-reject-modal.component.scss'],
})
export class ServiceRejectModalComponent implements OnInit, OnDestroy {
  showError = false;
  grabbedUser: User;
  userSub: Subscription;
  // headers: HttpHeaders;
  rejectDesc: string;
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
    category_id: null,
    clientPhone1: null,
    request_cost: {}
  };

  constructor(
    private modalController: ModalController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    // private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      // this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
      // this.loadService();
    });
  }

  loadService() {
    //loadin service
    // this.lc.create({
    //   message: "Cargando informacion del servicio..."
    // }).then(loadingEl => {
    //   loadingEl.present();
    //   this.http.get(API + `/supplier/requestservicedetail/${this.solicitudServicio.solicitud.id}`, { headers: this.headers })
    //     .subscribe(resData => {
    //       loadingEl.dismiss();
    //       this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
    //       this.loadedInfo.clientName = resData['data'].clientName;
    //       this.loadedInfo.clientLastName = resData['data'].clientLastName;
    //       this.loadedInfo.date_required = resData['data'].date_required;
    //       this.loadedInfo.ticket_number = resData['data'].ticket_number;
    //       this.loadedInfo.categoryName = resData['data'].categoryName;
    //     }, err => {
    //       console.log(err);
    //       loadingEl.dismiss();

    //     });
    // });
  }

  ionViewWillEnter() {
    this.loadedInfo.clientLastName = this.solicitudServicio.solicitud.clientLastName
    this.loadedInfo.clientName = this.solicitudServicio.solicitud.clientName
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
    this.loadedInfo.description = this.solicitudServicio.solicitud.description
    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours
    this.loadedInfo.images = this.solicitudServicio.solicitud.images
    this.loadedInfo.img_client_profile = this.solicitudServicio.solicitud.clientImg
    this.loadedInfo.ticket_number = this.solicitudServicio.solicitud.ticket_number
    this.loadedInfo.categoryName = this.solicitudServicio.solicitud.categoryName
    this.loadedInfo.category_id = this.solicitudServicio.solicitud.category_id
    this.loadedInfo.clientPhone1 = this.solicitudServicio.solicitud.clientPhone
    this.loadedInfo.request_cost = this.solicitudServicio.solicitud.cost
  }

  async rechazarSolicitud(rejectDesc: string) {

    if (!rejectDesc || rejectDesc.trim() === '') {
      this.showError = true;
      return
    }

    let loader = await this.lc.create({
      message: "Procesando la solicitud..."
    });
    loader.present();
    try {
      const body = {
        reason: rejectDesc,
      }
      await axios.put(
        `${API}/supplier/reject/requestservice/${this.solicitudServicio.solicitud.id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
      this.dismiss()
      loader.dismiss();
      await this.modalController.dismiss();
      let confirmModal = await this.modalController.create({
        component: ConfirmSuccessComponent,
        cssClass: 'modalSuccess',
        componentProps: {
          redirectUrl: '/profesional/home/home-tabs/solicitudes/'
        }
      });
      confirmModal.present();
    } catch (error) {
      console.log(error);
      loader.dismiss({
        reload: true,
      });
    }
  }

  formatDate(date: string) {
    return moment(date, 'YYYY-MM-DD').format('DD [de] MMMM [de] YYYY');
  }

  dismiss() {
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/agendados/']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
