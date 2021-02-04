import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizadosDetailsPage } from './finalizados-details.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizadosDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizadosDetailsPageRoutingModule {}
