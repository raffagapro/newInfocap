import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateFormPageRoutingModule } from './rate-form-routing.module';

import { RateFormPage } from './rate-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RateFormPageRoutingModule
  ],
  declarations: [RateFormPage]
})
export class RateFormPageModule {}
