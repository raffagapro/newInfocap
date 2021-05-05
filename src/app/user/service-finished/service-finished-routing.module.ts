import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceFinishedPage } from './service-finished.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceFinishedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceFinishedPageRoutingModule {}
