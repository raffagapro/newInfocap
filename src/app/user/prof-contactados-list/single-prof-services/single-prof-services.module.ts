import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleProfServicesPageRoutingModule } from './single-prof-services-routing.module';

import { SingleProfServicesPage } from './single-prof-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleProfServicesPageRoutingModule
  ],
  declarations: [SingleProfServicesPage]
})
export class SingleProfServicesPageModule {}
