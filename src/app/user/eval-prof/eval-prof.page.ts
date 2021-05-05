import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import axios from 'axios';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { ConfirmSuccessModalComponent } from './confirm-success-modal/confirm-success-modal.component';

type IconType = 'engine' | 'time' | 'heart' | 'diamond';
@Component({
  selector: 'app-eval-prof',
  templateUrl: './eval-prof.page.html',
  styleUrls: ['./eval-prof.page.scss'],
})
export class EvalProfPage implements OnInit {
  grabbedUser: User;
  userSub: Subscription;
  selectedIcons: IconType[] = [];
  currentRate: number = 1;
  error;
  comment;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private userService: UserService,
    private menuController: MenuController,
    private requestService: SolicitudService,
    private loadingController: LoadingController,
    private location: Location
  ) { }

  ngOnInit() {
    this.userSub = this.userService.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  openMenu() {
    this.menuController.open();
  }

  isSelectedIcon(type: IconType) {
    return this.selectedIcons.includes(type);
  }

  setCurrentRate(rate: number) {
    this.currentRate = rate;
  }

  setSelectedIcon(type: IconType) {
    if (this.selectedIcons.includes(type)) {
      this.selectedIcons = this.selectedIcons.filter((currentType: IconType) => type !== currentType);
    } else {
      this.selectedIcons.push(type);
    }
  }

  async rateProfessional() {
    console.log(this.comment)

    try {
      let loader = await this.loadingController.create({ message: 'Enviando calificación...' });
      loader.present();
      let body = {
        request_services_id: this.requestService.solicitud.solicitudID,
        technical_capacity: this.selectedIcons.includes('engine') ? '1' : '0',
        puntuality: this.selectedIcons.includes('time') ? '1' : '0',
        cordiality: this.selectedIcons.includes('heart') ? '1' : '0',
        service_and_satisfaction: this.selectedIcons.includes('diamond') ? '1' : '0',
        stars: this.currentRate.toString(),
        comment: this.comment,
        comment_bad_services: this.comment,
      }
      let response = await axios.post(
        `${API}/supplier/evaluation`,
        body,
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`,
          }
        }
      );
      await loader.dismiss();
      if (response.data && response.data.code && response.data.code !== 200) {
        this.error = 'Ocurrió un error al enviar la calificación'
      } else {
        this.confirmRequest();
      }
    } catch (error) {
      console.log(error);
      this.error = 'Ocurrió un error al enviar la calificación.';
    }
  }

  confirmRequest() {
    this.modalController.create({
      component: ConfirmSuccessModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

  goBack() {
    this.location.back()
  }

}
