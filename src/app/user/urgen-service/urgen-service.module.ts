import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgenServicePageRoutingModule } from './urgen-service-routing.module';

import { UrgenServicePage } from './urgen-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrgenServicePageRoutingModule
  ],
  declarations: [UrgenServicePage]
})
export class UrgenServicePageModule {}
