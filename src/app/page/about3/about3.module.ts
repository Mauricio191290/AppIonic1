import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { About3PageRoutingModule } from './about3-routing.module';

import { About3Page } from './about3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    About3PageRoutingModule
  ],
  declarations: [About3Page]
})
export class About3PageModule {}
