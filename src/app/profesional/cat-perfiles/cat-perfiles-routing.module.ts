import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatPerfilesPage } from './cat-perfiles.page';

const routes: Routes = [
  {
    path: '',
    component: CatPerfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatPerfilesPageRoutingModule {}
