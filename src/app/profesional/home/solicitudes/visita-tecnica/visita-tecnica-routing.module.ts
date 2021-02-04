import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitaTecnicaPage } from './visita-tecnica.page';

const routes: Routes = [
  {
    path: '',
    component: VisitaTecnicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitaTecnicaPageRoutingModule {}
