import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import moment from 'moment';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-single-prof-services',
  templateUrl: './single-prof-services.page.html',
  styleUrls: ['./single-prof-services.page.scss'],
})
export class SingleProfServicesPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
  loadedServices;
  selectedProfId;
  sortedServices = [];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
    private solServ: SolicitudService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
  }

  ionViewWillEnter(){
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    this.menuController.enable(true, 'user');
    this.sortedServices = [];
    this.loadServices();
  }

  loadServices(){
    this.lc.create({
      message: "Cargando lista de servicios..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+'/client/requestservices', {headers: this.headers})
      .subscribe(resData =>{
        loadingEl.dismiss();
        this.loadedServices = resData['data'];
        this.loadedServices.sort( this.sortByCreatedDate );
        this.loadedServices.forEach(i => {
          if (i.supplier_id === this.solServ.solicitud.profId) {
            this.sortedServices.push(i);
          }
        });
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
  }

  p(passingDate: string) {
		return moment.utc(passingDate, 'DD/MM/YYYY hh:mm:ss').startOf('minute').fromNow();
	}

  sortByCreatedDate(a, b) {
		let firstDate = moment
			.utc(a.created_date, "DD/MM/YYYY HH:mm:ss")
			.tz(moment.tz.guess());
		let secondDate = moment
			.utc(b.created_date, "DD/MM/YYYY HH:mm:ss")
			.tz(moment.tz.guess());
		if (firstDate > secondDate) {
			return -1;
		}
		if (firstDate < secondDate) {
			return 1;
		}
		return 0;
	}

  openMenu(){
    this.menuController.open();
  }

  onSearchChange(e: Event){
    
  }

  solicitudDetails(solicitudId: string){
    this.solServ.setServiceID(solicitudId);
    this.router.navigate(['/user/solicitud-status']);
  }

  // ionViewWillLeave(){
  //   if (this.solServ.solicitud.proPerfil_id !== null) {
  //     this.solServ.setProPerfil(null);
  //   }
  // }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
