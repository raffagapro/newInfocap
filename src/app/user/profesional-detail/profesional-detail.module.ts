import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesionalDetailPageRoutingModule } from './profesional-detail-routing.module';

import { ProfesionalDetailPage } from './profesional-detail.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesionalDetailPageRoutingModule,
  ],
  declarations: [ProfesionalDetailPage]
})
export class ProfesionalDetailPageModule {}
