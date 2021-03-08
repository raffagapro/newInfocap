import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ServicioAgendadoModalComponent } from './servicio-agendado-modal/servicio-agendado-modal.component';
import { SolicitudEnviadaModalComponent } from './solicitud-enviada-modal/solicitud-enviada-modal.component';
import { SolicitudRechazadaModalComponent } from './solicitud-rechazada-modal/solicitud-rechazada-modal.component';

@Component({
  selector: 'app-solicitud-status',
  templateUrl: './solicitud-status.page.html',
  styleUrls: ['./solicitud-status.page.scss'],
})
export class SolicitudStatusPage implements OnInit, OnDestroy {
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
  };
  serviceId: string;
  wDate;

  constructor(
    private modalController: ModalController,
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
    });
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    this.serviceId = this.solServ.solicitud.solicitudID;
    this.loadService(this.solServ.solicitud.solicitudID);
  }

  loadService(solicitudId: string){
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/client/requestservice/${solicitudId}`, {headers: this.headers})
      .subscribe(resData =>{
        loadingEl.dismiss();
        console.log(resData['data']);
        this.loadedService = resData['data'];
        this.solServ.setServiceObj(resData['data']);
        let worDate = this.loadedService.created_date.split(" ");
        this.wDate = worDate[0];
      }, err =>{
        loadingEl.dismiss();
        console.log(err);
        
      });
    });
  }

  openMenu(){
    this.menuController.open();
  }

  serviceDetal(statusID: number){
    switch (statusID) {
      case 1:
        this.seModal();
        break;
      
      case 2:
        this.srvPay();
        break;

      case 3:
        this.srModal();
        break;

      default:
        break;
    }
  }

  seModal(){
    this.modalController.create({
      component: SolicitudEnviadaModalComponent,
      cssClass: 'modalSA',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  saModal(){
    this.modalController.create({
      component: ServicioAgendadoModalComponent,
      cssClass: 'modalSA',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  srModal(){
    this.modalController.create({
      component: SolicitudRechazadaModalComponent,
      cssClass: 'modalServRechazado',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  srvPay(){
    this.router.navigate(['/user/servicio-pagar']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
