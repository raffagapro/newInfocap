import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesional-list',
  templateUrl: './profesional-list.page.html',
  styleUrls: ['./profesional-list.page.scss'],
})
export class ProfesionalListPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  profDetails(){
    this.router.navigate(['/user/profesional-detail']);
  }

}
