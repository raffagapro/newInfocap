import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SuccessModalComponent } from './success-modal/success-modal.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  errors: any = {
    name: [],
    last_name: [],
    email: [],
    password: []
  };

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  onRegister(form: NgForm){
    if (!form.valid) {
      return;
    }
    let name = form.value.name;
    let wName = name.split(" ");
    name = wName[0];
    let l_name = wName[1];
    if (wName[2] !== undefined) {
      l_name += " "+ wName[2];
    }
    // console.log(l_name);
    const email = form.value.email;
    const password = form.value.password;
    const confirm_password = form.value.confirm_password;
    if (password !== confirm_password) {
      console.log('wrong PW mudafucker');
      return;
    }
    // console.log(form);
    
    this.http.post('http://workintest.herokuapp.com/api/auth/register', {
      // this.http.post('http://127.0.0.1:8000/api/auth/register', {
      name: name,
      last_name: l_name,
      email: email,
      password: password,
    }).subscribe(
      resData=>{
        if (resData['code'] === 200) {
          // modal for succes
          this.modalController.create({
            component: SuccessModalComponent,
            cssClass: 'modalSuccess',
          }).then(modalEl => {
            modalEl.present();
          });
        }
      },(error) => {
        console.log(error.error.errors.name);
        // console.log(this.errors.name.lenght);
        this.errors.name = [];
        if (error.error.errors.name !== undefined) {
          this.errors.name = error.error.errors.name; 
        }
        this.errors.last_name = [];
        if (error.error.errors.last_name !== undefined) {
          this.errors.last_name = error.error.errors.last_name; 
        }
        this.errors.email = [];
        if (error.error.errors.email !== undefined) {
         this.errors.email = error.error.errors.email; 
        }
        this.errors.password = [];
        if (error.error.errors.password !== undefined) {
          this.errors.password = error.error.errors.password; 
        }  
     }
      
    );
  }

}
