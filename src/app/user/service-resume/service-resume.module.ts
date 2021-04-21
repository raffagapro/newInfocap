import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceResumePageRoutingModule } from './service-resume-routing.module';

import { ServiceResumePage } from './service-resume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceResumePageRoutingModule
  ],
  declarations: [ServiceResumePage]
})
export class ServiceResumePageModule {}
