import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesDetailPage } from './solicitudes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesDetailPageRoutingModule {}
