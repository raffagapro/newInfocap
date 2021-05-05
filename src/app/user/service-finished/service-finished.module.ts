import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceFinishedPageRoutingModule } from './service-finished-routing.module';

import { ServiceFinishedPage } from './service-finished.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceFinishedPageRoutingModule
  ],
  declarations: [ServiceFinishedPage]
})
export class ServiceFinishedPageModule {}
