import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitaTecnicaPageRoutingModule } from './visita-tecnica-routing.module';

import { VisitaTecnicaPage } from './visita-tecnica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisitaTecnicaPageRoutingModule
  ],
  declarations: [VisitaTecnicaPage]
})
export class VisitaTecnicaPageModule {}
