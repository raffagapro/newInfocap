import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceResumePage } from './service-resume.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceResumePageRoutingModule {}
