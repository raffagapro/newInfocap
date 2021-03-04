import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudServicioPageRoutingModule } from './solicitud-servicio-routing.module';

import { SolicitudServicioPage } from './solicitud-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SolicitudServicioPageRoutingModule
  ],
  declarations: [SolicitudServicioPage]
})
export class SolicitudServicioPageModule {}
