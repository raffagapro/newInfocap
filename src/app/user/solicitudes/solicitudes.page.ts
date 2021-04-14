import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

moment.locale('es');

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedServices;

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
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    this.menuController.enable(true, 'user');
    this.loadServices();
  }

  formatdate(date: string){
    return moment(date, 'DD/MM/YYYY').format('DD MMM YYYY');
  }

  loadServices(){
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+'/client/requestservices', {headers: this.headers})
      .subscribe(resData =>{
        loadingEl.dismiss();
        this.loadedServices = resData['data'];
        this.loadedServices.sort( this.compare ); 
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
  }

  compare( a, b ) {
    if ( a.status_id < b.status_id ){
      return -1;
    }
    if ( a.status_id > b.status_id ){
      return 1;
    }
    return 0;
  }

  openMenu(){
    this.menuController.open();
  }

  onSearchChange(e: Event){
    
  }

  solicitudDetails(solicitudId: string){
    this.solServ.clearSolicitud();
    this.solServ.setServiceID(solicitudId);
    this.router.navigate(['/user/solicitud-status']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
