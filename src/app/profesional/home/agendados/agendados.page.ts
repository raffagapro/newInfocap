import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { CalendarComponent } from 'ionic2-calendar';

import axios from 'axios'
import * as moment from 'moment';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import * as lodash from 'lodash'

@Component({
  selector: 'app-agendados',
  templateUrl: './agendados.page.html',
  styleUrls: ['./agendados.page.scss'],
})
export class AgendadosPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  loadedServices = [];
  loadedStartedServices = [];
  loadedVisits = [];
  parsedHours = null;
  viewMood = 'list'

  // Calendar
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  @ViewChild('calendarAgended') myCalAgended: CalendarComponent;

  days = ['D', 'L', 'M', 'X', 'J', 'V', 'S']
  datesView = ''
  datesAgendedView = ''
  eventSource = [];
  eventSourceAgended = [];
  calendar = {
    mode: 'week',
    currentDate: new Date(),
    dateFormatter: {
      formatWeekViewHourColumn: function (date: Date) {
        let format_date = moment(date).format('h a');
        return format_date;
      },
    }
  }

  constructor(
    private router: Router,
    private menuController: MenuController,
    private us: UserService,
    private lc: LoadingController,
    private solicitudServicio: ProSolicitudService,
    route: ActivatedRoute
  ) {
    route.params.subscribe(val => {
      this.eventSourceAgended = []
      this.eventSource = []
      this.loadedServices = []
      this.userSub = this.us.loggedUser.subscribe(user => {
        this.grabbedUser = user;
        this.headers = 'Bearer ' + this.grabbedUser.access_token
        this.loadServices("3");
        this.loadServices("4");
        this.loadServices("2");
      });
    });
  }

  ngOnInit() {

  }

  async formatEvents(data, type) {
    data.map(r => {
      if (type === "2") {
        var date = r.request_technical[0].visit_date.substring(0, 10).split('-')
        var hour = r.request_technical[0].visit_hours.split(' - ')
        var hoursTime = hour[0].split(':')
        var hoursFinish = hour[1].split(':')

        var startTime = new Date(date[0], date[1] - 1, date[2], hoursTime[0], hoursTime[1]);

        var endTime = new Date(date[0], date[1] - 1, date[2], hoursFinish[0], hoursFinish[1]);

        var ticket_format = r.ticket_number.toString().substr(-3)

        let new_event = {
          title: { id: r.id, ticket: `#${ticket_format}`, type: r.type_request, request_technical: r.request_technical[0] },
          startTime: startTime,
          endTime: endTime,
          allDay: false
        }

        this.eventSourceAgended.push(new_event)

      } else {
        var date = r.date_required.split('-')
        var hour = r.hours.split('/')

        var startHour = hour[0].substring(11, 13)
        var startMinute = hour[0].substring(14, 16)

        var endHour = hour[1].substring(11, 13)
        var endMinute = hour[1].substring(14, 16)

        var startTime = new Date(date[0], date[1] - 1, date[2], startHour, startMinute);

        var endTime = new Date(date[0], date[1] - 1, date[2], endHour, endMinute);

        var ticket_format = r.ticket_number.toString().substr(-3)

        let new_event = {
          title: { id: r.id, ticket: `#${ticket_format}`, type: r.type_request },
          startTime: startTime,
          endTime: endTime,
          allDay: false
        }
        this.eventSource.push(new_event)
      }
    })
  }

  formatDate(date: string, type: string) {
    return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
  }

  formatDateTecnical(tecnical) {
    let date = tecnical.visit_date.split(' ')
    return moment(date[0], 'YYYY-MM-DD').format('DD MMM YYYY')
  }

  formatTimeTecnical(tecnical) {
    return tecnical.visit_hours
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  loadServices(statusID: string) {
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl => {
      loadingEl.present();
      axios.get(API + `/supplier/requestservice/${statusID}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        if (statusID === "3") {
          this.loadedServices = this.loadedServices.concat(resData.data.data);
          this.formatEvents(resData.data.data, "3")
          this.myCal.loadEvents();
        }
        if (statusID === "4") {
          this.loadedServices = this.loadedServices.concat(resData.data.data);
          // this.loadedStartedServices = lodash.orderBy(this.loadedStartedServices, function (dateObj) {
          //   return new Date(dateObj.date_required);
          // });
          this.formatEvents(resData.data.data, "4")
          this.myCal.loadEvents();
        }
        if (statusID === "2") {
          this.loadedVisits = resData.data.data;
          this.loadedVisits = lodash.orderBy(this.loadedVisits, function (dateObj) {
            return new Date(dateObj.date_required);
          });
          this.formatEvents(resData.data.data, "2")
          this.myCalAgended.loadEvents();
        }
      }).then(() => {
        this.loadedServices = lodash.orderBy(this.loadedServices, function (dateObj) {
          return new Date(dateObj.date_required);
        });
      }).catch(err => {
        if (statusID === "3") {
          this.loadedServices = []
        }
        if (statusID === "4") {
          this.loadedStartedServices = []
        }
        if (statusID === "2") {
          this.loadedVisits = [];
        }
        loadingEl.dismiss();
      })
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
    this.solicitudServicio.setID(serviceID);
    this.router.navigate(['profesional/agendados/agendados-detail']);
  }

  solicitudDetailTecnical(serviceID: string, tecnical: object) {
    this.solicitudServicio.setID(serviceID);
    this.solicitudServicio.setEvaluateService(tecnical);
    this.router.navigate(['profesional/agendados/agendados-detail']);
  }

  next = () => {
    this.myCal.slideNext()
  }

  back = () => {
    this.myCal.slidePrev()
  }

  nextAgended = () => {
    this.myCalAgended.slideNext()
  }

  backAgended = () => {
    this.myCalAgended.slidePrev()
  }

  onViewTitleChanged(title) {
    var week = title.split(' ')
    var primer = new Date(new Date().getFullYear(), 0, (week[3] - 1) * 7 + 3);
    var ultimo = new Date(new Date().getFullYear(), 0, (week[3] - 1) * 7 + 9);

    this.datesView = `${week[0]} ${primer.getDate()} - ${ultimo.getDate()}`
  }

  onViewTitleAgendedChanged(title) {
    var week = title.split(' ')
    var primer = new Date(new Date().getFullYear(), 0, (week[3] - 1) * 7 + 3);
    var ultimo = new Date(new Date().getFullYear(), 0, (week[3] - 1) * 7 + 9);

    this.datesAgendedView = `${week[0]} ${primer.getDate()} - ${ultimo.getDate()}`
  }

  view(i) {
    var date = new Date(i.date).getDay()
    return this.days[date]
  }

  viewDay(i) {
    var date = new Date(i.date).getDate()
    return date
  }

  viewHour(i) {
    console.log(i)
    return i
  }

  changeView(type) {
    this.viewMood = type
    this.myCal.update()
    this.myCalAgended.update()

    this.myCal.loadEvents()
    this.myCalAgended.loadEvents()
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
