import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinicionServicioPageRoutingModule } from './definicion-servicio-routing.module';

import { DefinicionServicioPage } from './definicion-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DefinicionServicioPageRoutingModule
  ],
  declarations: [DefinicionServicioPage]
})
export class DefinicionServicioPageModule {}
