import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from "@ionic/angular";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  error: any;
  grabbedUSer: User;

  constructor(
    private navController: NavController,
    private router: Router,
    private http: HttpClient,
    private as: AuthService,
    private us: UserService,
    private lc: LoadingController,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
    // console.log(form);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.lc.create({
      message: "Validando credenciales..."
    }).then(loadingEl => {
      loadingEl.present();
      this.http.post(API+'/auth/login', {
        // this.http.post('http://127.0.0.1:8000/api/auth/login', {
          email: email,
          password: password,
        }).subscribe(resData => {
          // console.log(resData['data'].access_token);
          loadingEl.dismiss();
          if (resData['code'] === 200) {
            //save user info to store NEEDS WORK IN HERE
            let img: string;
            if (resData['data'].user.img_profile === null) {
              img = 'assets/images/avatar.png';
            }else{
              img = resData['data'].user.img_profile;
            }
            this.grabbedUSer = new User(
              resData['data'].user.id,
              resData['data'].user.name,
              resData['data'].user.last_name,
              img,
              resData['data'].user.email,
              resData['data'].user.phone1,
              resData['data'].user.phone2,
              resData['data'].roles[0],
              resData['data'].access_token,
            );
            this.us.setUser(this.grabbedUSer);
            // console.log(this.us.loggedUser);
            
            //redirect tp home
            this.as.login();
            form.control.reset();
            if (resData['data'].roles[0] === 'usuario') {
              this.router.navigate(['/user/home']);
            } else {
              this.router.navigate(['/profesional/home']);
            }
          }else{
            this.error = 'Credenciales incorrectas';
            form.reset()
            form.setValue({
              email: email,
              password: '',
            });
          } 
        }, err =>{
          this.error = 'Correo no encontrado';
          form.reset()
          form.setValue({
            email: email,
            password: '',
          });
        });
    });
  }

  loginProfesional(){
    this.router.navigate(['/profesional/home']);
  }

  loginGoogle(){
    // do comething awesome
  }

  loginApple(){
    // do something awesome
  }

  loginFacebook(){
    // do seomthing swesome 
  }

}
