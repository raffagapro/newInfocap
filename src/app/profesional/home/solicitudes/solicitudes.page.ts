import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ServiceRejectModalComponent } from './service-reject-modal/service-reject-modal.component';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedServices = [];
  parsedHours = null;


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
    this.menuController.enable(true, 'profesional');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    // console.log(this.grabbedUser.access_token);
    
    this.loadServices("1");    
    //1
  }

  loadServices(statusID: string){
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/supplier/requestservice/${statusID}`, {headers: this.headers})
      .subscribe(resData =>{
        console.log(resData['data']);
        loadingEl.dismiss();
        this.loadedServices = resData["data"];
          // console.log(this.loadedServices);
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
  }

  openMenu(){
    this.menuController.open();
  }

  p(hours: string){
    let wHours = hours.split("/");
    let sHour = wHours[0].split("T");
    let sHour2 = sHour[1];
    sHour2 = sHour2.substring(0, 5);
    let eHour = wHours[1].split("T");
    let eHour2 = eHour[1];
    eHour2 = eHour2.substring(0, 5);
    return sHour2+" - "+eHour2;
  }

  rechazarSolicitud(solicitudID: string){
    this.lc.create({
      message: "Procesando la solicitud..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.put(API+`/supplier/reject/requestservice/${solicitudID}`, null,  {headers: this.headers})
      .subscribe(resData =>{
        console.log(resData);
        loadingEl.dismiss();
        this.solServ.setServiceID(solicitudID);
        this.modalController.create({
          component: ServiceRejectModalComponent,
          cssClass: 'modalSE',
        }).then(modalEl => {
          modalEl.present();
        });
      }, err =>{
        loadingEl.dismiss();
        console.log(err);
        
      });
    });
  }

  aceptarSolicitud(solicitudID: string){
    this.solServ.setServiceID(solicitudID);
    this.router.navigate(['/profesional/home/home-tabs/solicitudes/solicitudes-detail']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
