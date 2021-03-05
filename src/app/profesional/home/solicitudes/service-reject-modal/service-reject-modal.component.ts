import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';

import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ConfirmSuccessComponent } from '../confirm-success/confirm-success.component';

@Component({
  selector: 'app-service-reject-modal',
  templateUrl: './service-reject-modal.component.html',
  styleUrls: ['./service-reject-modal.component.scss'],
})
export class ServiceRejectModalComponent implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedInfo;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private solServ: SolicitudService,
    private us: UserService,
    private http: HttpClient,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, {headers: this.headers})
      .subscribe(resData =>{
        console.log(resData['data']);
        loadingEl.dismiss();
        this.loadedInfo = resData['data'];
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
        
      });
    });
  }

  cancelSolicitud(){
    this.modalController.dismiss();
    this.modalController.create({
      component: ConfirmSuccessComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  dismiss(){
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/finalizados/']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
