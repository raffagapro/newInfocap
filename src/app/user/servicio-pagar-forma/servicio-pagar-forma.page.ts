import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { PagoExitosoModalComponent } from './pago-exitoso-modal/pago-exitoso-modal.component';

@Component({
  selector: 'app-servicio-pagar-forma',
  templateUrl: './servicio-pagar-forma.page.html',
  styleUrls: ['./servicio-pagar-forma.page.scss'],
})
export class ServicioPagarFormaPage implements OnInit {
  userSubscription: Subscription;
  user: User;

  constructor(
    private modalController: ModalController,
    private menuController: MenuController,
    private loadingController: LoadingController,
    private userService: UserService,
    private solServ: SolicitudService,
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.loggedUser.subscribe(user => {
      this.user = user;
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'user');
  }

  openMenu() {
    this.menuController.open();
  }

  submitPayment() {
    this.modalController.create({
      component: PagoExitosoModalComponent,
      cssClass: 'modalSuccess',
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
