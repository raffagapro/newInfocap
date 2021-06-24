import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walkthrougth } from './walkthrougth.page';

const routes: Routes = [
  {
    path: '',
    component: Walkthrougth
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkthrougthPageRoutingModule {}
