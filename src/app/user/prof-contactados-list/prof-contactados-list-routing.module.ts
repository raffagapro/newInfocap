import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProGuard } from 'src/app/guards/pro.guard';

import { ProfContactadosListPage } from './prof-contactados-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfContactadosListPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfContactadosListPageRoutingModule {}
