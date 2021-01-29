import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesional-detail',
  templateUrl: './profesional-detail.page.html',
  styleUrls: ['./profesional-detail.page.scss'],
})
export class ProfesionalDetailPage implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  sendRequest(){
    this.router.navigate(['/user/solicitud-servicio']);
  }
}
