import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';

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
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.http.post('http://workintest.herokuapp.com/api/auth/login', {
    // this.http.post('http://127.0.0.1:8000/api/auth/login', {
      email: email,
      password: password,
    }).subscribe(
      resData=>{
        // console.log(resData['data'].access_token);
        if (resData['code'] === 200) {
          //save user info to store NEEDS WORK IN HERE
          this.grabbedUSer = new User(
            resData['data'].user.id,
            resData['data'].user.name,
            resData['data'].user.last_name,
            resData['data'].user.img_profile,
            resData['data'].user.email,
            resData['data'].roles[0],
            resData['data'].access_token,
          );
          this.us.setUser(this.grabbedUSer);
          // console.log(this.us.loggedUser);
          
          //redirect tp home
          this.as.login();
          form.control.reset();
          if (this.us.loggedUser.role === 'usuario') {
            this.router.navigate(['/user/home']);
          } else {
            this.router.navigate(['/profesional/home']);
          }
        }else{
          this.error = 'Credenciales incorrectas'
          form.reset()
        //   form.control.patchValue({
        //     password: ' ',
        //  });
        } 
     }
      
    );
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
