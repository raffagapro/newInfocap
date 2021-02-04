import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendadosFinalizarPageRoutingModule } from './agendados-finalizar-routing.module';

import { AgendadosFinalizarPage } from './agendados-finalizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendadosFinalizarPageRoutingModule
  ],
  declarations: [AgendadosFinalizarPage]
})
export class AgendadosFinalizarPageModule {}
