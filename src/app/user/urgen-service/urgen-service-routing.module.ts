import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgenServicePage } from './urgen-service.page';

const routes: Routes = [
  {
    path: '',
    component: UrgenServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgenServicePageRoutingModule {}
