import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendadosPageRoutingModule } from './agendados-routing.module';

import { AgendadosPage } from './agendados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendadosPageRoutingModule
  ],
  declarations: [AgendadosPage]
})
export class AgendadosPageModule {}
