import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitaDetailPage } from './visita-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VisitaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitaDetailPageRoutingModule {}
