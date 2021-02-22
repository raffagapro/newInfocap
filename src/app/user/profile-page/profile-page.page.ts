import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { SuccessModalComponent } from './success-modal/success-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit, OnDestroy {
  grabbedUser: User;
  userSub: Subscription;
  form: FormGroup;

  constructor(
    private us: UserService,
    private lc: LoadingController,
    private http: HttpClient,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    // updates to the most current info from DB
    this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
    let phone1: string;
    let phone2: string;
    if (this.grabbedUser.phone1 === '-') {
      phone1 = null;
    } else {
      phone1 = this.grabbedUser.phone1;
    }
    if (this.grabbedUser.phone2 === '-') {
      phone2 = null;
    } else {
      phone2 = this.grabbedUser.phone2;
    }
    this.form = new FormGroup({
      name: new FormControl(this.grabbedUser.name+' '+this.grabbedUser.last_name, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(this.grabbedUser.email, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      phone1: new FormControl(phone1, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      phone2: new FormControl(phone2, {
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
      }),
      newPassword: new FormControl(null, {
        updateOn: 'blur',
      }),
      confirmPassword: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
    // console.log(this.grabbedUser, this.form);
  }

  onUpdateUser(){
    // console.log(this.form);
    let name = this.form.value.name.split(" ");
    let lname = name[1];
    if (name.length > 2) {
      lname += ' '+name[2];
    }
    // console.log(name[0], lname);
    const modUser = {
      name: name[0],
      last_name: lname,
      email: this.form.value.email,
      password: this.form.value.newPassword,
      current_password: this.form.value.password,
      phone1: this.form.value.phone1,
      phone2: this.form.value.phone2
    }
    if (this.form.value.password === null) {
      delete modUser.password;
      delete modUser.current_password;
    }
    // console.log(this.form, this.form.errors.name);
    this.lc.create({
      message: 'Alcualizando la informacion...'
    }).then(loadingEl => {
      loadingEl.present();
      let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
      this.http.put('http://workintest.herokuapp.com/api/account', modUser, {headers: headers})
      .subscribe(resData => {
        loadingEl.dismiss();
        // console.log(resData);
        if (resData['code'] === 200) {
          let img: string;
          if (resData['data'].img_profile === null) {
            img = 'assets/images/avatar.png';
          }else{
            img = resData['data'].user.img_profile;
          }
          //update user controler
          this.us.setUser(new User(
            this.grabbedUser.id,
            resData['data'].name,
            resData['data'].last_name,
            img,
            resData['data'].email,
            resData['data'].phone1,
            resData['data'].phone2,
            this.grabbedUser.role,
            this.grabbedUser.access_token,
            ));
          this.modalController.create({
            component: SuccessModalComponent,
            cssClass: 'modalSuccess',
          }).then(modalEl => {
            modalEl.present();
          });
        } else {
          return false
        }
      });

    });
  }

  imgProfile(){
    // do something awseome
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
