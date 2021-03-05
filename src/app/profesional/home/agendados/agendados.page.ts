import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-agendados',
  templateUrl: './agendados.page.html',
  styleUrls: ['./agendados.page.scss'],
})
export class AgendadosPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedServices = [];
  loadedVisits = [];
  parsedHours = null;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    // load agendados
    this.loadServices("2");    
    //2

    // load visitas
    this.loadServices("3");
    //3
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
        if (statusID === "2") {
          this.loadedServices = resData["data"];
          // console.log(this.loadedServices);
        }
        if (statusID === "3") {
          this.loadedVisits = resData["data"];
          // console.log(this.loadedVisits);
        }
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
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

  openMenu(){
    this.menuController.open();
  }

  solicitudDetail(serviceID: string){
    this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-detail']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
