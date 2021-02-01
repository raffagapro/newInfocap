import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioPagarPage } from './servicio-pagar.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioPagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioPagarPageRoutingModule {}
