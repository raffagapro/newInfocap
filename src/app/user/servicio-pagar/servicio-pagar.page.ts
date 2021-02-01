import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio-pagar',
  templateUrl: './servicio-pagar.page.html',
  styleUrls: ['./servicio-pagar.page.scss'],
})
export class ServicioPagarPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  paymentForm(){
    this.router.navigate(['/user/servicio-pagar-forma']);
  }

}
