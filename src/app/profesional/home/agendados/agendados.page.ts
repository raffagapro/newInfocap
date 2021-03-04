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
  loadedServices;
  loadedVisits;

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
    });
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'profesional');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    // load agendados
    this.loadedServices = this.loadServices("1");
    //2
    // load visitas
    this.loadedVisits = this.loadServices("1");
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
        this.loadedServices = resData["data"];
        return resData['data'];
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
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
