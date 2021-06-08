import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceReportPageComponent } from './service-report.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceReportPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceReportPageRoutingModule {}
