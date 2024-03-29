import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatPerfilesPageRoutingModule } from './cat-perfiles-routing.module';

import { CatPerfilesPage } from './cat-perfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CatPerfilesPageRoutingModule
  ],
  declarations: [CatPerfilesPage]
})
export class CatPerfilesPageModule {}
