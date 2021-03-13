import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleProfServicesPage } from './single-prof-services.page';

const routes: Routes = [
  {
    path: '',
    component: SingleProfServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleProfServicesPageRoutingModule {}
