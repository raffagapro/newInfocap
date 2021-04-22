import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';

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
  loadedStartedServices = [];
  loadedVisits = [];
  parsedHours = null;

  eventSource = [];
  calendar = {
    mode: 'week',
    currentDate: new Date()
  }

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

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
      this.loadServices("3");
      this.loadServices("4");
    });
  }

  formatDate(date: string){
    return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  loadServices(statusID: string) {
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.get(API + `/supplier/requestservice/${statusID}`, { headers: this.headers })
        .subscribe(resData => {
          loadingEl.dismiss();
          if (statusID === "3") {
            this.loadedServices = resData["data"];
          }
          if (statusID === "4") {
            this.loadedStartedServices = resData["data"];
          }
          // if (statusID === "2") {
          //   this.loadedVisits = resData["data"];
          // }
        }, err => {
          console.log(err);
          loadingEl.dismiss();
        });
    });
  }

  formatTime(hours: string) {
    if (hours) {
      let wHours = hours.split("/");

      let startHour = moment(wHours[0]).format('h:mm A');
      let endHour = moment(wHours[1]).format('h:mm A');

      return `${startHour} - ${endHour}`;
    }
  }

  openMaps(address: string) {
    window.open(`https://maps.google.com/?q=${address}`);
  }

  openMenu() {
    this.menuController.open();
  }

  solicitudDetail(serviceID: string) {
    this.solServ.setServiceID(serviceID);
    this.router.navigate(['profesional/agendados/agendados-detail']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
