import { Component, OnInit } from '@angular/core';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-service-report',
  templateUrl: './service-report.page.html',
  styleUrls: ['./service-report.page.scss'],
})
export class ServiceReportPage implements OnInit {

  loadedInfo = {
    img_client_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    hours: null,
    description: null,
    images: null,
    categoryName: null,
    category_id: null,
    clientPhone1: null,
    created_date: null,
    request_cost: null
  };

  imagesToDisplay: string[] = [];
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private solicitudServicio: ProSolicitudService,
    private menuController: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log(this.solicitudServicio.solicitud)
    this.loadedInfo.clientLastName = this.solicitudServicio.solicitud.clientLastName
    this.loadedInfo.clientName = this.solicitudServicio.solicitud.clientName
    this.loadedInfo.date_required = this.solicitudServicio.solicitud.date_required
    this.loadedInfo.description = this.solicitudServicio.solicitud.description
    this.loadedInfo.hours = this.solicitudServicio.solicitud.hours
    this.loadedInfo.images = this.solicitudServicio.solicitud.images
    this.loadedInfo.img_client_profile = this.solicitudServicio.solicitud.clientImg
    this.loadedInfo.ticket_number = this.solicitudServicio.solicitud.ticket_number
    this.loadedInfo.categoryName = this.solicitudServicio.solicitud.categoryName
    this.loadedInfo.category_id = this.solicitudServicio.solicitud.category_id
    this.loadedInfo.clientPhone1 = this.solicitudServicio.solicitud.clientPhone
    this.loadedInfo.request_cost = this.solicitudServicio.solicitud.cost
    this.loadedInfo.created_date = this.solicitudServicio.solicitud.created_date

    this.imagesToDisplay = this.loadedInfo.request_cost.img_addittional.map(image => image.image);
    if (this.imagesToDisplay.length === 1) {
      this.slideOptions.slidesPerView = 1;
    }
    this.menuController.enable(true, 'profesional');
  }

  getUrl() {
    if(!this.loadedInfo.img_client_profile || this.loadedInfo.img_client_profile === '/' || this.loadedInfo.img_client_profile === 'http://167.71.251.136/storage/') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.loadedInfo.img_client_profile})`
    }
  }

  getServiceCost() {
    if(this.loadedInfo.request_cost !== null && this.loadedInfo.request_cost.total) {
      return Math.round(this.loadedInfo.request_cost.total[0].total)
    }
  }

  getAmountClient() {
    if(this.loadedInfo && this.loadedInfo.request_cost !== null && this.loadedInfo.request_cost.amount_client) {
      return Math.round(this.loadedInfo.request_cost.amount_client);
    }
  }

  getServiceAditional() {
    if (this.loadedInfo && this.loadedInfo.request_cost !== null && this.loadedInfo.request_cost.addittional.length > 0) {
      return Math.round(Number(this.loadedInfo.request_cost.addittional.reduce((total, entity) => total += Number(entity.amount_client), 0)));
    }
    return 0;
  }

  goBack() {
    this.navCtrl.back();
  }

}
