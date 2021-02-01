import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvalProfPageRoutingModule } from './eval-prof-routing.module';

import { EvalProfPage } from './eval-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvalProfPageRoutingModule
  ],
  declarations: [EvalProfPage]
})
export class EvalProfPageModule {}
