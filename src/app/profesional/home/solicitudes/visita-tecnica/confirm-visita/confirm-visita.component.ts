import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import axios from 'axios'
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { VisitaTecnicaService } from 'src/app/services/visita-tecnica.service';
import { API } from 'src/environments/environment';
import * as moment from 'moment';
import { ConfirmSuccessComponent } from '../confirm-success/confirm-success.component';
import { ProSolicitudService } from 'src/app/services/pro-solicitud.service';

@Component({
  selector: 'app-confirm-visita',
  templateUrl: './confirm-visita.component.html',
  styleUrls: ['./confirm-visita.component.scss'],
})
export class ConfirmVisitaComponent implements OnInit {
  grabbedUser: User;
  userSub: Subscription;
  headers: string;
  visita_tecnica: {
    visit_date: string,
    visit_hours: string
  }

  constructor(
    private modalController: ModalController,
    private lc: LoadingController,
    private solicitudServicio: ProSolicitudService,
    private visitaT: VisitaTecnicaService,
    private us: UserService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });

    this.visita_tecnica = {
      visit_date: this.visitaT.visitaTecnica.date_required,
      visit_hours: this.visitaT.visitaTecnica.hours
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  formatDate(date: string) {
    return moment(date, 'DD/M/YYYY').format('dddd D [de] MMMM [de] YYYY');
  }

  async confirmVisita() {
    this.modalController.dismiss();
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl => {
      loadingEl.present();
      axios.put(API + `/supplier/visit/requestservice/${this.solicitudServicio.solicitud.id}`, this.visita_tecnica, { headers: { Authorization: this.headers } }).then(resData => {

        this.modalController.create({
          component: ConfirmSuccessComponent,
          cssClass: 'modalSuccess',
        }).then(success => {
          success.present()
        });
        this.visitaT.clearSolicitud()
        this.lc.dismiss();
      }).catch(err => {
        console.log(err)
        this.lc.dismiss();
      })
    }).catch(err => {
      this.lc.dismiss();
    })
  }

}
