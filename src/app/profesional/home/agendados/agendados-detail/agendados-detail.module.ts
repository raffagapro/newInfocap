import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendadosDetailPageRoutingModule } from './agendados-detail-routing.module';

import { AgendadosDetailPage } from './agendados-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendadosDetailPageRoutingModule
  ],
  declarations: [AgendadosDetailPage]
})
export class AgendadosDetailPageModule {}
