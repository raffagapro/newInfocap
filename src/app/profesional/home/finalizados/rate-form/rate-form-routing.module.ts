import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateFormPage } from './rate-form.page';

const routes: Routes = [
  {
    path: '',
    component: RateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateFormPageRoutingModule {}
