import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalDetailPage } from './profesional-detail.page';


const routes: Routes = [
  {
    path: '',
    component: ProfesionalDetailPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProfesionalDetailPageRoutingModule {}
