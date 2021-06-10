import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';

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
  declarations: [AgendadosDetailPage],
  providers: [
    CallNumber
  ]
})
export class AgendadosDetailPageModule {}
