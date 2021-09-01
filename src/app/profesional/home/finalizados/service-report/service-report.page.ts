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
    request_cost: null,
    aditional: null
  };

  imagesToDisplay: string[] = [];
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  additionalDetected = false

  constructor(
    private solicitudServicio: ProSolicitudService,
    private menuController: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
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
    this.loadedInfo.aditional = this.solicitudServicio.solicitud.aditional

    var images = null;
    
    if(this.loadedInfo.aditional != null && this.loadedInfo.aditional.addittional.length > 0) 
    {
      this.additionalDetected = true
      images = this.loadedInfo.images.concat(this.loadedInfo.aditional.img_addittional)
    } else {
      images = this.loadedInfo.images
    }

    this.imagesToDisplay = images.map((image) => image && image.image)

    if (this.imagesToDisplay.length === 1) {
      this.slideOptions.slidesPerView = 1;
    } else {
      this.slideOptions.slidesPerView = 2;
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
    if(this.loadedInfo.request_cost && this.loadedInfo.request_cost !== null) {
      const amounts = this.loadedInfo.request_cost.map(am => am.amount_suplier);
      return amounts.reduce((accumulate, currentValue) => parseFloat(accumulate) + parseFloat(currentValue), 0)
    }
  }

  getAmountClient() {
    if(this.loadedInfo && this.loadedInfo.request_cost !== null && this.loadedInfo.request_cost) {
      const client = this.loadedInfo.request_cost.filter(a => a.costs_type_id === 1);
      const amountsClient = client.map(am => am.amount_suplier);
      return amountsClient.reduce((accumulate, currentValue) => parseFloat(accumulate) + parseFloat(currentValue), 0)
    }
  }

  getServiceAditional() {
    if (this.loadedInfo && this.loadedInfo.request_cost !== null) {
      const aditionals = this.loadedInfo.request_cost.filter(a => a.costs_type_id > 1);
      const additionalsAmounts = aditionals.map(am => am.amount_suplier);
      return additionalsAmounts.reduce((accumulate, currentValue) => parseFloat(accumulate) + parseFloat(currentValue), 0)
    }
  }

  goBack() {
    this.navCtrl.back();
  }

}
