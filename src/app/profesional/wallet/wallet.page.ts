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

  graphicWeek = false;

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
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(50, 182, 221)',
            'rgba(50, 182, 221)',
            'rgba(50, 182, 221)',
            'rgba(50, 182, 221)',
            'rgba(50, 182, 221)',
            'rgba(50, 182, 221)',
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

  imgProfile() {
    // do something awesome
  }

}
