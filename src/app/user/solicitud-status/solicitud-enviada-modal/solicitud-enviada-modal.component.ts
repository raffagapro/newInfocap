import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ImgListService } from 'src/app/services/img-list.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

moment.locale('es');

@Component({
  selector: 'app-solicitud-enviada-modal',
  templateUrl: './solicitud-enviada-modal.component.html',
  styleUrls: ['./solicitud-enviada-modal.component.scss'],
})
export class SolicitudEnviadaModalComponent implements OnInit, OnDestroy {
  loadedService;
  wDate;
  loadedImgList: string[]= [];
  imgListSub: Subscription;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private solServ: SolicitudService,
    private ils: ImgListService,
  ) { }

  ngOnInit() {
    this.loadedService = this.solServ.solicitud.solicitudOBJ;
    let worDate = this.loadedService.created_date.split(" ");
    this.wDate = worDate[0];
    //loading imgList
    this.loadedImgList = this.ils.imgList;
    this.imgListSub = this.ils.listChanged.subscribe(imgList =>{
      this.loadedImgList = imgList;
    });
    this.ils.setImgList(this.loadedService.img_request);   
  }

  formatTime(hours: string){
    let wHours = hours.split("/");
    let startHour = moment(wHours[0]);
    let endHour = moment(wHours[1]);
    return `${startHour.format('h:mm a')} - ${endHour.format('h:mm a')}`;
  }

  formatDate(date: string){
    return moment(date, 'YYYY-MM-DD').format('DD MMMM YYYY');
  }

  dismiss(){
    this.modalController.dismiss();
  }

  seModal(){
    // do somethignn awsesome
  }

  ngOnDestroy(){
    this.imgListSub.unsubscribe();
  }

}
