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
  selector: 'app-profesional-list',
  templateUrl: './profesional-list.page.html',
  styleUrls: ['./profesional-list.page.scss'],
})
export class ProfesionalListPage implements OnInit, OnDestroy {
  profList = [];
  grabbedUser: User;
  userSub: Subscription;
  headers: HttpHeaders;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private solServ: SolicitudService,
    private http: HttpClient,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {    
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);

    // Grab prof list 
    this.lc.create({
      message: "Generando lista de profesionales..."
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(
        API+`/client/professions/${this.solServ.solicitud.comuna_id}/${this.solServ.solicitud.category_id}`,
        {headers: this.headers}
      ).subscribe(resData =>{
        this.profList = resData['data'];
        console.log(this.profList);
        console.log(resData);
        
        loadingEl.dismiss();
      }, e =>{
        console.log(e);
        loadingEl.dismiss();
      });
    });
  }

  ionViewWillEnter(){
    this.menuController.enable(true, 'user');
  }

  openMenu(){
    this.menuController.open();
  }
  
  profDetails(proPerfilCatId, profilImg){
    this.solServ.setProPerfil(proPerfilCatId);
    this.solServ.setProPhoto(profilImg);
    this.router.navigate(['/user/profesional-detail']);
  }

  // eRequest(){
  //   this.router.navigate(['/user/urgen-service']);
  // }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
