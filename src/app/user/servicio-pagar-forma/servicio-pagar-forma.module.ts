import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioPagarFormaPageRoutingModule } from './servicio-pagar-forma-routing.module';

import { ServicioPagarFormaPage } from './servicio-pagar-forma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioPagarFormaPageRoutingModule
  ],
  declarations: [ServicioPagarFormaPage]
})
export class ServicioPagarFormaPageModule {}
