import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudStatusPage } from './solicitud-status.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudStatusPageRoutingModule {}
