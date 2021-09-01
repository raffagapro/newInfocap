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
  @ViewChild('barChartWeek') originalbarChartWeek;

  headers: string
  userSub: Subscription;
  grabbedUser: User;

  graphicWeek = false;
  weeksToRender = [];
  selectedMonth = 0;
  actualWeekToShow = 0;
  yearInfoTotal = 0;
  yearInfoTotalRequest = 0;

  comisionTotal = 0
  taxesTotal = 0
  profitTotal = 0

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

    var profesionalAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var commission = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var taxes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    await axios.get(API + '/payments/years', { headers: { Authorization: this.headers } }).then(resData => {
      if (resData.data.data.length > 0) {
        this.yearInfoTotal = resData.data.data[0].total
        this.yearInfoTotalRequest = resData.data.data[0].requestnumber
        resData.data.data[0].paymentByMount.map(d => {
          this.profitTotal += parseFloat(d.professionalamount)
          this.taxesTotal += parseFloat(d.taxes)
          this.comisionTotal += parseFloat(d.commission)
          profesionalAmount[d.month - 1] = d.professionalamount
          taxes[d.month - 1] = d.taxes
          commission[d.month - 1] = d.commission
        })
      }
    }).catch(err => {
      console.log(err)
    })

    this.barChart = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
        datasets: [{
          label: 'Ganancia',
          data: profesionalAmount,
          backgroundColor: [
            'rgba(77, 175, 142)',
          ],
          borderWidth: 1,
        },
        {
          label: 'Comisiones',
          data: commission,
          backgroundColor: [
            'rgba(50, 182, 221)',
          ],
          borderWidth: 1
        },
        {
          label: 'Impuestos',
          data: taxes,
          backgroundColor: [
            'rgba(207, 0, 15)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        onClick: this.clickMonth,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
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
    const firstDate = new Date(year, this.selectedMonth + 1, 1)
    const lastDate = new Date(year, this.selectedMonth + 1, 0)
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
      this.totalWeek = resData.data.data.total || 0

      let profesionalAmount = []
      let taxes = []
      let commission = []

      resData.data.data.paymentByWeek.map(d => {
        const index = this.weeksToRender[this.actualWeekToShow].indexOf(d.days)
        profesionalAmount[index] = d.professionalamount
        taxes[index] = d.taxes
        commission[index] = d.commission
      })

      this.barChartWeek = new Chart(this.barChartWeek.nativeElement, {
        type: 'bar',
        data: {
          labels: this.weeksToRender[this.actualWeekToShow],
          datasets: [{
            label: 'Ganancia',
            data: profesionalAmount,
            backgroundColor: [
              'rgba(77, 175, 142)',
            ],
            borderWidth: 1,
          },
          {
            label: 'Comisiones',
            data: commission,
            backgroundColor: [
              'rgba(50, 182, 221)',
            ],
            borderWidth: 1
          },
          {
            label: 'Impuestos',
            data: taxes,
            backgroundColor: [
              'rgba(207, 0, 15)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
              beginAtZero: true
            }
          }
        }
      });
    }).then(() => {
      this.barChartWeek.update();
    })
  }

  clickMonth = (event, point) => {
    if (point.length > 0) {
      this.graphicWeek = true
      this.barChartWeekMethod(point[0])
    }
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
    this.barChartWeek.destroy()
    this.barChartWeek = this.originalbarChartWeek
    this.actualWeekToShow = 0
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

    var profesionalAmount = []
    var taxes = []
    var commission = []

    await axios.get(API + '/payments/weak', {
      params: {
        "star_date": moment(star_date, 'D/M/YYYY').format('D/MM/YYYY'),
        "end_date": moment(end_date, 'D/M/YYYY').format('D/MM/YYYY')
      }, headers: { Authorization: this.headers }
    }).then(resData => {

      this.totalWeek = resData.data.data.total || 0

      resData.data.data.paymentByWeek.map(d => {

        const index = this.weeksToRender[this.actualWeekToShow].indexOf(d.days)
        profesionalAmount[index] = d.professionalamount
        taxes[index] = d.taxes
        commission[index] = d.commission
      })
    })

    this.barChartWeek.data.labels = this.weeksToRender[this.actualWeekToShow]

    this.barChartWeek.data.datasets = [{
      label: 'Ganancia',
      data: profesionalAmount,
      backgroundColor: [
        'rgba(77, 175, 142)',
      ],
      borderWidth: 1,
    },
    {
      label: 'Comisiones',
      data: commission,
      backgroundColor: [
        'rgba(50, 182, 221)',
      ],
      borderWidth: 1
    },
    {
      label: 'Impuestos',
      data: taxes,
      backgroundColor: [
        'rgba(207, 0, 15)',
      ],
      borderWidth: 1
    }]

    this.barChartWeek.update()

  }

  imgProfile() {
    // do something awesome
  }

}
