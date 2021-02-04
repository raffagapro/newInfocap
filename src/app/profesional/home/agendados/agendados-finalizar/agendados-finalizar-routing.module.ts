import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendadosFinalizarPage } from './agendados-finalizar.page';

const routes: Routes = [
  {
    path: '',
    component: AgendadosFinalizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendadosFinalizarPageRoutingModule {}
