import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { Moment } from 'moment';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';

@Component({
  selector: 'app-service-resume',
  templateUrl: './service-resume.page.html',
  styleUrls: ['./service-resume.page.scss'],
})
export class ServiceResumePage implements OnInit {
  userSubscription: Subscription;
  user: User;
  loadedService = {
    categoryName: null,
    cummunename: null,
    category_id: null,
    created_date: null,
    date_required: null,
    descProf: null,
    description: null,
    hours_professional: null,
    hours_requestservice: null,
    img_profile: null,
    professional_profiles_id: null,
    request_id: null,
    status_id: null,
    status_name: null,
    status_order: null,
    supplierLastName: null,
    supplierName: null,
    supplier_id: null,
    ticket_number: null,
    user_client_id: null,
    work_days: null,
    suplierPhone1: null,
    img_request: [],
  };
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController,
    private userService: UserService,
    private menuController: MenuController,
    private solServ: SolicitudService,
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.loggedUser.subscribe(user => {
      this.user = user;
      this.loadService();
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  async loadService() {
    let loader = await this.loadingController.create({ message: '' });

    try {
      await loader.present();
      let response = await axios.get(
        `${API}/client/requestservice/${this.solServ.solicitud.solicitudID}`,
        {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        }
      );
      this.solServ.setServiceObj(response.data.data);
      this.loadedService = response.data.data;
      if (this.loadedService.img_request.length < 2) {
        this.slideOptions.slidesPerView = 1;
      }
    } catch (error) {
      console.log(error);
    } finally {
      loader.dismiss();
    }
  }

  openMenu() {
    this.menuController.open();
  }

  formatDate(date: Moment, dateFormat: any = 'YYYY-MM-DD', useTimezone: boolean = false) {
    let momentDate = moment.utc(date, dateFormat);
    if (useTimezone) {
      momentDate.tz(moment.tz.guess())
    }
    return momentDate.format('dddd D [de] MMMM [de] YYYY');
  }

  formatTime() {
    if (!this.loadedService.hours_requestservice) {
      return 'ND';
    }
    let hours = this.loadedService.hours_requestservice.split('/');
    let startHour = moment(hours[0]);
    let endHour = moment(hours[1]);
    return `${startHour.format('h:mm a')} - ${endHour.format('h:mm a')}`;
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
}
