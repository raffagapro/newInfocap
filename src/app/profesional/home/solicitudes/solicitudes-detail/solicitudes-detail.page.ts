import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LoadingController, MenuController, ModalController, Platform } from '@ionic/angular';
import axios from 'axios';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';
import { API, PHONE_PREFIX } from 'src/environments/environment';

const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-solicitudes-detail',
  templateUrl: './solicitudes-detail.page.html',
  styleUrls: ['./solicitudes-detail.page.scss'],
})
export class SolicitudesDetailPage implements OnInit, OnDestroy {

  @ViewChild("map", { read: ElementRef, static: false }) mapRef: ElementRef;
  map: any;
  marker: any;
  GoogleAutocomplete: any;
  Geocoder: any;
  latLng = { lat: 0, lng: 0 }

  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  loadedInfo = {
    img_client_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    created_date: null,
    hours: null,
    description: null,
    images: null,
    categoryName: null,
    clientPhone1: null,
    type: null,
    address: null,
    request_cost: 0,
    adress_detail: null,
    extra_instruccion: null,
    hours_final: null,
  };

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private router: Router,
    private menuController: MenuController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    private lc: LoadingController,
    private callNumber: CallNumber,
    private modalController: ModalController,
  ) {
    this.Geocoder = new google.maps.Geocoder();
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
  }

  async ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer ' + this.grabbedUser.access_token;
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      axios.get(API + `/supplier/requestservicedetail/${this.solicitudServicio.solicitud.id}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.solicitudServicio.setClientLastName(resData.data.data.clientLastName)
        this.solicitudServicio.setClientName(resData.data.data.clientName)
        let wDate = resData.data.data.date_required.split("-");
        this.solicitudServicio.setDateRequired(resData.data.data.date_required)
        this.solicitudServicio.setDateCreated(resData.data.data.created_date)
        this.solicitudServicio.setDescription(resData.data.data.description)
        this.solicitudServicio.setHours(resData.data.data.hours)
        this.solicitudServicio.setHoursFinal(resData.data.data.hours_final)
        this.solicitudServicio.setImages(resData.data.data.images)
        this.solicitudServicio.setClientImg(resData.data.data.img_client_profile)
        this.solicitudServicio.setTicketNumber(resData.data.data.ticket_number)
        this.solicitudServicio.setCategoryID(resData.data.data.category_id)
        this.solicitudServicio.setCategoryName(resData.data.data.categoryName)
        this.solicitudServicio.setStatusID(resData.data.data.status_id)
        this.solicitudServicio.setClientPhone(resData.data.data.clientPhone1)
        this.solicitudServicio.setCosto(resData.data.data.request_cost[0] && resData.data.data.request_cost[0]);

        this.loadedInfo.clientLastName = resData.data.data.clientLastName;
        this.loadedInfo.clientName = resData.data.data.clientName;
        this.loadedInfo.date_required = wDate[2] + '-' + wDate[1] + '-' + wDate[0];
        this.loadedInfo.created_date = resData.data.data.created_date
        this.loadedInfo.description = resData.data.data.description;
        this.loadedInfo.hours = resData.data.data.hours;
        this.loadedInfo.hours_final = resData.data.data.hours_final;
        this.loadedInfo.images = resData.data.data.images;
        this.loadedInfo.img_client_profile = resData.data.data.img_client_profile;
        this.loadedInfo.ticket_number = resData.data.data.ticket_number;
        this.loadedInfo.categoryName = resData.data.data.categoryName;
        this.loadedInfo.clientPhone1 = resData.data.data.clientPhone1;
        this.loadedInfo.type = this.solicitudServicio.solicitud.type
        this.loadedInfo.address = resData.data.data.adress
        this.loadedInfo.adress_detail = resData.data.data.adress_detail
        this.loadedInfo.extra_instruccion = resData.data.data.extra_instructions
      }).then(() => {
        this.loadMap(this.loadedInfo.address);
      }).catch(err => {
        console.log(err);
        loadingEl.dismiss();
      })
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  async loadMap(address) {
    this.lc
      .create({
        message: "Generando mapa...",
      })
      .then(async (loadingEl) => {
        loadingEl.present();
        let latLng
        await this.GoogleAutocomplete.getPlacePredictions(
          {
            input: address,
            types: ["address"],
            componentRestrictions: { country: "cl" },
          },
          (predictions, status) => {
            if (predictions.length > 0) {
              this.Geocoder.geocode(
                {
                  placeId: predictions[0].place_id,
                },
                (responses, status) => {
                  if (status == "OK") {
                    latLng = new google.maps.LatLng(
                      responses[0].geometry.location.lat(),
                      responses[0].geometry.location.lng()
                    );

                    let mapOptions = {
                      center: latLng,
                      zoom: 15,
                      zoomControl: false,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                      mapTypeId: google.maps.MapTypeId.ROADMAP,
                    };
                    this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
                    this.marker = new google.maps.Marker({
                      position: latLng,
                      draggable: true,
                      map: this.map,
                    });
                  }
                }
              );
            }
          }
        );
        loadingEl.dismiss();
      })
      .catch((error) => {
        console.log(error);
        this.lc.dismiss();
      });
  }

  formatDate(date: string) {
    return moment(date, 'DD/MM/YYYY').format('dddd D [de] MMMM [de] YYYY');
  }

  formatTime(hours: string, hoursFinal: string) {
    if (hours) {
      let startHour = moment(hours, 'hh:mm:ss').format('h:mm A');
      let endHour = moment(hoursFinal, 'hh:mm:ss').format('h:mm A');

      return `${startHour} - ${endHour}`;
    }
  }

  d(date: string) {
    if (date) {
      let wDate = date.split(" ");
      return moment(wDate[0], 'DD/MM/YYYY').format('D [de] MMM [de] YYYY');
    }
  }

  openMenu() {
    this.menuController.open();
  }

  openWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=${PHONE_PREFIX}${this.loadedInfo.clientPhone1}`);
  }

  call() {
    this.callNumber.callNumber(this.loadedInfo.clientPhone1, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  wa() {
    this.router.navigateByUrl(`whatsapp://send?phone=${this.loadedInfo.clientPhone1}`);
  }

  confirmVisit() {
    this.router.navigate(['/profesional/solicitudes/visita-tecnica']);
  }

  accceptSolicitud() {
    this.router.navigate(['/profesional/solicitudes/definicion-servicio']);
  }

  async openImage(image: string) {
    const successModal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        image,
      },
      cssClass: 'modalImage',
    });
    successModal.present();
  }

  getUrl() {
    if (!this.loadedInfo.img_client_profile || this.loadedInfo.img_client_profile === '/' || this.loadedInfo.img_client_profile === 'http://167.71.251.136/storage/') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.loadedInfo.img_client_profile})`
    }
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
