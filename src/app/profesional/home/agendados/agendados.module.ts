import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import es from '@angular/common/locales/es';
registerLocaleData(es);

import { AgendadosPageRoutingModule } from './agendados-routing.module';

import { AgendadosPage } from './agendados.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendadosPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [AgendadosPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-*' }
  ]
})
export class AgendadosPageModule { }
