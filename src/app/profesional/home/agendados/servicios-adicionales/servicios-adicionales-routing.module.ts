import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosAdicionalesPage } from './servicios-adicionales.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosAdicionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosAdicionalesPageRoutingModule {}
