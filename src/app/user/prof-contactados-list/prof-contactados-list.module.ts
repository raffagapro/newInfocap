import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfContactadosListPageRoutingModule } from './prof-contactados-list-routing.module';

import { ProfContactadosListPage } from './prof-contactados-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfContactadosListPageRoutingModule
  ],
  declarations: [ProfContactadosListPage]
})
export class ProfContactadosListPageModule {}
