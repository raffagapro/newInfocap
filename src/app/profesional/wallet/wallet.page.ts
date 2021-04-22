import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js';

import { BankModalComponent } from './bank-modal/bank-modal.component'

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

  graphicWeek = false;
  weeksToRender = [];
  selectedMonth = 0;
  actualWeekToShow = 0;
  days = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  constructor(
    private menuController: MenuController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.barChartMethod();
  }

  barChartMethod() {
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

  barChartWeekMethod(month) {
    var year = new Date().getFullYear()
    this.selectedMonth = month.index

    this.weeksToRender = []
    const firstDate = new Date(year, month.index, 1)
    const lastDate = new Date(year, month.index, 0)
    const numDays = lastDate.getDate()

    let dayOfWeekCounter = firstDate.getDay();

    for (let date = 1; date <= numDays; date++) {
      if (dayOfWeekCounter === 0 || this.weeksToRender.length === 0) {
        this.weeksToRender.push([]);
      }
      this.weeksToRender[this.weeksToRender.length - 1].push(date);
      dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
    }

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

  changeWeek(type) {
    if(type === 'add') {
      this.actualWeekToShow = this.actualWeekToShow + 1
    } else {
      this.actualWeekToShow = this.actualWeekToShow - 1
    }
  }

  imgProfile() {
    // do something awesome
  }

}
