import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudStatusPageRoutingModule } from './solicitud-status-routing.module';

import { SolicitudStatusPage } from './solicitud-status.page';
import { SolicitudEnviadaModalComponent } from './solicitud-enviada-modal/solicitud-enviada-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudStatusPageRoutingModule
  ],
  declarations: [SolicitudStatusPage, SolicitudEnviadaModalComponent]
})
export class SolicitudStatusPageModule {}
