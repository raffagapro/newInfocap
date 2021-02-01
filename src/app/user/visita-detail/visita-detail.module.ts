import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitaDetailPageRoutingModule } from './visita-detail-routing.module';

import { VisitaDetailPage } from './visita-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitaDetailPageRoutingModule
  ],
  declarations: [VisitaDetailPage]
})
export class VisitaDetailPageModule {}
