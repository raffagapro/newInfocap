import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: String;
  loadedInfo = {
    date_required: null,
    hours: null,
  };

  constructor(
    private modalController: ModalController,
    private solServ: SolicitudService,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = 'Bearer '+this.grabbedUser.access_token;
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl =>{
      loadingEl.present();
      axios.get(API+`/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.loadedInfo.date_required = resData.data.data.date_required;
        this.loadedInfo.hours = resData.data.data.date_required.hours;
      }).catch(err => {
        console.log(err);
        loadingEl.dismiss();
      })
    });
  }

  p(hours: string){
    if (hours) {
      let wHours = hours.split("/");
      let sHour = wHours[0].split("T");
      let sHour2 = sHour[1];
      sHour2 = sHour2.substring(0, 5);
      let eHour = wHours[1].split("T");
      let eHour2 = eHour[1];
      eHour2 = eHour2.substring(0, 5);
      return sHour2+" - "+eHour2;
    }
  }

  d(date:string){
    if (date) {
      let wDate = date.split(" ");
      return wDate[0]; 
    }
  }

  dismiss(){
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/agendados/']);
  }

  confirmServ(){
    this.modalController.dismiss();
    // this.router.navigate(['/profesional/home/home-tabs/agendados/']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
