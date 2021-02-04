import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizadosDetailsPageRoutingModule } from './finalizados-details-routing.module';

import { FinalizadosDetailsPage } from './finalizados-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizadosDetailsPageRoutingModule
  ],
  declarations: [FinalizadosDetailsPage]
})
export class FinalizadosDetailsPageModule {}
