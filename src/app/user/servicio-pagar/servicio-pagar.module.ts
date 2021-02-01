import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioPagarPageRoutingModule } from './servicio-pagar-routing.module';

import { ServicioPagarPage } from './servicio-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioPagarPageRoutingModule
  ],
  declarations: [ServicioPagarPage]
})
export class ServicioPagarPageModule {}
