import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ImgListService } from 'src/app/services/img-list.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

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
    console.log(this.loadedService);
    this.ils.setImgList(this.loadedService.img_request);   
  }

  p(hours: string){
    let wHours = hours.split("/");
    let sHour = wHours[0].split("T");
    let sHour2 = sHour[1];
    sHour2 = sHour2.substring(0, 5);
    let eHour = wHours[1].split("T");
    let eHour2 = eHour[1];
    eHour2 = eHour2.substring(0, 5);
    return sHour2+" - "+eHour2;
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
