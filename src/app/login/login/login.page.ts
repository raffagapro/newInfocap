import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';
// import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navController: NavController,
    private router: Router,
    // private http: HTTP
  ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/user/home']);
    // this.http.get('https://ionic.io', {}, {})
    // .then(data => {

    //   console.log(data.status);
    //   console.log(data.data); // data received by server
    //   console.log(data.headers);

    // })
    // .catch(error => {

    //   console.log(error.status);
    //   console.log(error.error); // error message as string
    //   console.log(error.headers);

    // });
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
