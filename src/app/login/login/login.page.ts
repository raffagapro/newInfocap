import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navController: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/user/home']);
  }

  loginProfesional(){
    this.router.navigate(['/profesional/home']);
  }

}
