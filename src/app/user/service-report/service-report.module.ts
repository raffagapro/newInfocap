import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ServiceReportPageComponent } from './service-report.page';
import { ServiceReportPageRoutingModule } from './service-report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceReportPageRoutingModule
  ],
  declarations: [ServiceReportPageComponent]
})
export class ServiceReportPageModule {}
