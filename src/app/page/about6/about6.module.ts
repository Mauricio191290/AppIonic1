import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { About6PageRoutingModule } from './about6-routing.module';

import { About6Page } from './about6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    About6PageRoutingModule
  ],
  declarations: [About6Page]
})
export class About6PageModule {}
