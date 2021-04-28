import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosAdicionalesPageRoutingModule } from './servicios-adicionales-routing.module';

import { ServiciosAdicionalesPage } from './servicios-adicionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ServiciosAdicionalesPageRoutingModule
  ],
  declarations: [ServiciosAdicionalesPage]
})
export class ServiciosAdicionalesPageModule { }
