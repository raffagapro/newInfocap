import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

import { BankModalComponent } from './bank-modal/bank-modal.component'
import * as moment from 'moment'

Chart.register(
  LinearScale,
  BarController,
  CategoryScale,
  BarElement
)

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  @ViewChild('barChart') barChart;
  @ViewChild('barChartWeek') barChartWeek;

  headers: string
  userSub: Subscription;
  grabbedUser: User;

  graphicWeek = false;
  weeksToRender = [];
  selectedMonth = 0;
  actualWeekToShow = 0;
  yearInfo: {
    requestnumber: 0,
    total: 0,
    monthly_average: 0,
    paymentByMount: [],
  }

  totalWeek: 0
  days = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  constructor(
    private menuController: MenuController,
    private modalController: ModalController,
    private us: UserService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });
  }

  ionViewDidEnter() {
    this.barChartMethod();
  }

  async barChartMethod() { 
    this.barChart = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
        datasets: [{
          label: '',
          data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(50, 182, 221)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        onClick: this.clickMonth,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  async barChartWeekMethod(month) {
    var year = new Date().getFullYear()
    this.selectedMonth = month.index

    this.weeksToRender = []
    const firstDate = new Date(year, month.index + 1, 1)
    const lastDate = new Date(year, month.index + 1, 0)
    const numDays = lastDate.getDate()

    let dayOfWeekCounter = firstDate.getDay();

    for (let date = 1; date <= numDays; date++) {
      if (dayOfWeekCounter === 0 || this.weeksToRender.length === 0) {
        this.weeksToRender.push([]);
      }
      this.weeksToRender[this.weeksToRender.length - 1].push(date);
      dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
    }

    let star_date = `${this.weeksToRender[this.actualWeekToShow][0]}/${this.selectedMonth + 1}/${year}`
    let end_date = `${this.weeksToRender[this.actualWeekToShow][this.weeksToRender[this.actualWeekToShow].length - 1]}/${this.selectedMonth + 1}/${year}`

    axios.get(API + '/payments/weak', {
      params: {
        "star_date": moment(star_date, 'D/M/YYYY').format('D/MM/YYYY'),
        "end_date": moment(end_date, 'D/M/YYYY').format('D/MM/YYYY')
      }, headers: { Authorization: this.headers }
    }).then(resData => { 

     })

    this.barChartWeek = new Chart(this.barChartWeek.nativeElement, {
      type: 'bar',
      data: {
        labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        datasets: [{
          label: '',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(50, 182, 221)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  clickMonth = (event, point) => {
    this.graphicWeek = true
    this.barChartWeekMethod(point[0])
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

  openBankDataModal() {
    this.modalController.create({
      component: BankModalComponent,
      cssClass: 'modalBanco',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  backWalletMain() {
    this.graphicWeek = false
  }

  async changeWeek(type) {
    var year = new Date().getFullYear()
    if (type === 'add') {
      this.actualWeekToShow = this.actualWeekToShow + 1
    } else {
      this.actualWeekToShow = this.actualWeekToShow - 1
    }

    let star_date = `${this.weeksToRender[this.actualWeekToShow][0]}/${this.selectedMonth + 1}/${year}`
    let end_date = `${this.weeksToRender[this.actualWeekToShow][this.weeksToRender[this.actualWeekToShow].length - 1]}/${this.selectedMonth + 1}/${year}`

    axios.get(API + '/payments/weak', {
      params: {
        "star_date": moment(star_date, 'D/M/YYYY').format('D/MM/YYYY'),
        "end_date": moment(end_date, 'D/M/YYYY').format('D/MM/YYYY')
      }, headers: { Authorization: this.headers }
    }).then(resData => { 
      this.totalWeek = resData.data.data.total || 0
     })
  }

  imgProfile() {
    // do something awesome
  }

}
