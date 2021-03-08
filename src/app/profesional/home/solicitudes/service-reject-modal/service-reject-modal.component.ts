import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  rejectDesc:string;
  loadedInfo = {
    img_client_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    categoryName: null,
  };

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

    //loadin service
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/supplier/requestservicedetail/${+this.solServ.solicitud.solicitudID}`, {headers: this.headers})
      .subscribe(resData =>{
        console.log(resData['data']);
        loadingEl.dismiss();
        this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
        this.loadedInfo.clientName = resData['data'].clientName;
        this.loadedInfo.clientLastName = resData['data'].clientLastName;
        this.loadedInfo.date_required = resData['data'].date_required;
        this.loadedInfo.ticket_number = resData['data'].ticket_number;
        this.loadedInfo.categoryName = resData['data'].categoryName;
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
        
      });
    });
  }

  rechazarSolicitud(rejectDesc: string){
    this.lc.create({
      message: "Procesando la solicitud..."
    }).then(loadingEl =>{
      loadingEl.present();
      //activate when the API accepst rejection reason
      const body = {
        reason: rejectDesc,
      }
      console.log(body);
      this.http.put(API+`/supplier/reject/requestservice/${this.solServ.solicitud.solicitudID}`, body,  {headers: this.headers})
      .subscribe(resData =>{
        //reset input
        console.log(resData);
        loadingEl.dismiss();
        this.modalController.dismiss();
        this.modalController.create({
          component: ConfirmSuccessComponent,
          cssClass: 'modalSuccess',
        }).then(modalEl => {
          modalEl.present();
        });
      }, err =>{
        loadingEl.dismiss({
          reload: true,
        });
        console.log(err);
      });
    });
  }

  dismiss(){
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/agendados/']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
