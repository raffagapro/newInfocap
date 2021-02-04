import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefinicionServicioPage } from './definicion-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: DefinicionServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinicionServicioPageRoutingModule {}
