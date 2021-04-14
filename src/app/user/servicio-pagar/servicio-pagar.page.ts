import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-servicio-pagar',
  templateUrl: './servicio-pagar.page.html',
  styleUrls: ['./servicio-pagar.page.scss'],
})
export class ServicioPagarPage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;
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
  };
  serviceId: string;
  wDate;

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
    this.menuController.enable(true, 'user');
    this.menuController.enable(true, 'user');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    this.serviceId = this.solServ.solicitud.solicitudID;
    this.loadService(this.solServ.solicitud.solicitudID);
  }

  loadService(solicitudId: string){
    this.lc.create({
      message: "Cargando informacion del servicio..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/client/requestservice/${solicitudId}`, {headers: this.headers})
      .subscribe(resData =>{
        loadingEl.dismiss();
        this.loadedService = resData['data'];
        this.solServ.setServiceObj(resData['data']);
        let worDate = this.loadedService.created_date.split(" ");
        this.wDate = worDate[0];
      }, err =>{
        loadingEl.dismiss();
        console.log(err);
        
      });
    });
  }

  openMenu(){
    this.menuController.open();
  }

  paymentForm(){
    this.router.navigate(['/user/servicio-pagar-forma']);
  }

  nothing(){
    // do something awesome
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
