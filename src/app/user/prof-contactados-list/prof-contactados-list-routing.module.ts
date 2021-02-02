import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfContactadosListPage } from './prof-contactados-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfContactadosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfContactadosListPageRoutingModule {}
