import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgenServicePageRoutingModule } from './urgen-service-routing.module';

import { UrgenServicePage } from './urgen-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UrgenServicePageRoutingModule
  ],
  declarations: [UrgenServicePage]
})
export class UrgenServicePageModule {}
