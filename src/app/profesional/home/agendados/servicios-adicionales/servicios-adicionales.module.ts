import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosAdicionalesPageRoutingModule } from './servicios-adicionales-routing.module';

import { ServiciosAdicionalesPage } from './servicios-adicionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosAdicionalesPageRoutingModule
  ],
  declarations: [ServiciosAdicionalesPage]
})
export class ServiciosAdicionalesPageModule {}
