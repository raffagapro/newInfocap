import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API, PHONE_PREFIX } from 'src/environments/environment';
import { ConfirmSuccessStartComponent } from './confirm-success-start/confirm-success-start.component';

import axios from 'axios'
import * as moment from 'moment';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';
import { ServiceRejectModalComponent } from '../../solicitudes/service-reject-modal/service-reject-modal.component';
import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-agendados-detail',
  templateUrl: './agendados-detail.page.html',
  styleUrls: ['./agendados-detail.page.scss'],
})
export class AgendadosDetailPage implements OnInit, OnDestroy {
  @ViewChild("map", { read: ElementRef, static: false }) mapRef: ElementRef;
  map: any;
  marker: any;
  GoogleAutocomplete: any;
	Geocoder: any;

  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  loadedInfo = {
    img_client_profile: null,
    ticket_number: null,
    clientName: null,
    clientLastName: null,
    date_required: null,
    create_date: null,
    hours: null,
    hours_final: null,
    description: null,
    images: null,
    categoryName: null,
    clientPhone1: null,
    created_date: null,
    status_id: null,
    tecnical: null,
    type: null,
    address: null,
    adress_detail: null,
    extra_instruccion: null,
    profesional: null
  };

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private menuController: MenuController,
    private solicitudServicio: ProSolicitudService,
    private us: UserService,
    private lc: LoadingController,
    private callNumber: CallNumber,
  ) {
    this.Geocoder = new google.maps.Geocoder();
		this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
  }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer ' + this.grabbedUser.access_token
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
        this.solicitudServicio.setSolicitudType(resData.data.data.type_request);

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
        this.loadedInfo.type = resData.data.data.type_request;
        this.loadedInfo.status_id = resData.data.data.status_id;
        this.loadedInfo.tecnical = this.solicitudServicio.solicitud.evaluationService
        this.loadedInfo.profesional = this.solicitudServicio.solicitud.prof
        this.loadedInfo.address = resData.data.data.adress
        this.loadedInfo.adress_detail = resData.data.data.adress_detail
        this.loadedInfo.extra_instruccion = resData.data.data.extra_instructions
      }).then(() => {
        this.loadMap(this.loadedInfo.address);
      }).catch(err => {
        console.log(err);
        loadingEl.dismiss();
      })

      axios.get(API + `/client/detailcostrequest/${this.solicitudServicio.solicitud.id}`, { headers: { Authorization: this.headers } }).then(resData => {
        this.solicitudServicio.setCosto(resData.data.data);
      }).catch(err => {
        console.log(err)
        
      })


    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=${PHONE_PREFIX}${this.loadedInfo.clientPhone1}`);
  }

  call() {
    this.callNumber.callNumber(this.loadedInfo.clientPhone1, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  openMenu() {
    this.menuController.open();
  }

  formatDate(date: string) {
    return moment(date, 'DD-MM-YYYY').format('dddd D [de] MMMM [de] YYYY');
  }

  formatTime(hours: string, hoursFinal: string) {
    if (hours) {
      let startHour = moment(hours, 'hh:mm:ss A').format('h:mm A');
      let endHour = moment(hoursFinal, 'hh:mm:ss A').format('h:mm A');

      return `${startHour} - ${endHour}`;
    }
  }

  d(date: string) {
    if (date) {
      let wDate = date.split(" ");
      return moment(wDate[0], 'DD/MM/YYYY').format('D [de] MMM [de] YYYY');
    }
  }

  formatDateTecnical(tecnical) {
    let date = tecnical.visit_date.split(' ')
    return moment(date[0], 'YYYY-MM-DD').format('dddd D [de] MMMM [de] YYYY')
  }

  formatTimeTecnical(tecnical) {
    let startTime = moment(tecnical.visit_hours, 'hh:mm:ss A').format('h:mm A')
    return `${startTime}`
  }

  startSolicitud() {
    this.lc.create({
      message: 'Registrando tiempo de inicio...'
    }).then(loadingEl => {
      loadingEl.present();
      axios.put(API + `/supplier/updatestatus/requestservice/${this.solicitudServicio.solicitud.id}/4`, null, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.modalController.create({
          component: ConfirmSuccessStartComponent,
          cssClass: 'modalSuccess',
        }).then(modalEl => {
          modalEl.present();
        })
      }).catch(err => {
        console.log(err)
        loadingEl.dismiss();
      });
    });
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

  startScheduled() {
    this.solicitudServicio.setHours(moment(this.solicitudServicio.solicitud.hours, 'h:mm:ss A').format('H:mm:ss'))
    this.solicitudServicio.setHoursFinal(moment(this.solicitudServicio.solicitud.hours_final, 'h:mm:ss A').format('H:mm:ss'))
    this.lc.create({
      message: 'Registrando tiempo de inicio...'
    }).then(loadingEl => {
        this.router.navigate(['/profesional/solicitudes/definicion-servicio']);
    });
  }

  rejectSheduled() {
    this.modalController.create({
      component: ServiceRejectModalComponent,
      cssClass: 'modalSE',
    }).then(modalEl => {
      modalEl.present();
      modalEl.onDidDismiss().then(data => {
        this.router.navigate(['profesional/agendados/agendados']);
      });
    });
  }

  finalizarSolicitud() {
    this.router.navigate(['profesional/agendados/agendados-finalizar']);
  }

  getUrl() {
    if(!this.loadedInfo.img_client_profile || this.loadedInfo.img_client_profile === '/' || this.loadedInfo.img_client_profile === 'http://167.71.251.136/storage/') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.loadedInfo.img_client_profile})`
    }
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

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
