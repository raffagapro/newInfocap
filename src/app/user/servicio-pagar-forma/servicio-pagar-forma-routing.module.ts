import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioPagarFormaPage } from './servicio-pagar-forma.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioPagarFormaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioPagarFormaPageRoutingModule {}
