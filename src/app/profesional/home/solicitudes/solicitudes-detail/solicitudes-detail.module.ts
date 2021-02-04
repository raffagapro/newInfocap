import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesDetailPageRoutingModule } from './solicitudes-detail-routing.module';

import { SolicitudesDetailPage } from './solicitudes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesDetailPageRoutingModule
  ],
  declarations: [SolicitudesDetailPage]
})
export class SolicitudesDetailPageModule {}
