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
  viewMood = 'list'

  // Calendar
  days = ['D', 'L', 'M', 'X', 'J', 'V', 'S']
  datesView = ''
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

  async ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
      this.loadServices("3");
      this.loadServices("4");
      // this.createRandomEvents() //Remover
    });
  }

  // Remover
  formatEvents(data) {
    data.map(r => {
      var date = r.date_required.split('-')
      var hour = r.hours.split('/')

      var startHour = hour[0].substring(11, 13)
      var startMinute = hour[0].substring(14, 16)

      var endHour = hour[1].substring(11, 13)
      var endMinute = hour[1].substring(14, 16)

      var startTime = new Date(date[0], date[1] - 1, date[2], startHour, startMinute);
      var endTime = new Date(date[0], date[1] - 1, date[2], endHour, endMinute);

      this.eventSource.push({
        title: { cat: 'Categoria', name: `${r.clientName} ${r.clientLastName}`, description: r.description, adress: r.adress },
        startTime: startTime,
        endTime: endTime,
        allDay: false
      })
    })
  }

  formatDate(date: string) {
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
            this.formatEvents(resData["data"])
          }
          if (statusID === "4") {
            this.loadedStartedServices = resData["data"];
            this.formatEvents(resData["data"])
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

  next = () => {
    console.log('Enter')
    this.myCal.slideNext()
  }

  back = () => {
    this.myCal.slidePrev()
  }

  onViewTitleChanged(title) {
    var week = title.split(' ')
    var primer = new Date(new Date().getFullYear(), 0, (week[3] - 1) * 7 + 3);
    var ultimo = new Date(new Date().getFullYear(), 0, (week[3] - 1) * 7 + 9);

    this.datesView = `${week[0]} ${primer.getDate()} - ${ultimo.getDate()}`
  }

  view(i) {
    var date = new Date(i.date).getDay()
    return this.days[date]
  }

  viewDay(i) {
    var date = new Date(i.date).getDate()
    return date
  }

  changeView(type) {
    this.viewMood = type
    this.myCal.update()
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
