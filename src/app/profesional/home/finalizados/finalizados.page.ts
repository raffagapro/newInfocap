import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.page.html',
  styleUrls: ['./finalizados.page.scss'],
})
export class FinalizadosPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedServices = [];
  paidServices = [];
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
    this.loadServices("5");    
    //5
    this.loadServices("6");    
    //6
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
        if (statusID === "5") {
          this.loadedServices = resData["data"];
          // console.log(this.loadedServices);
        }
        if (statusID === "6") {
          this.paidServices = resData["data"];
          // console.log(this.paidServices);
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

  finalizadosDetail(){
    this.router.navigate(['/profesional/home/home-tabs/finalizados/finalizados-details']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
