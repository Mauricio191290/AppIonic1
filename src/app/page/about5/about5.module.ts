import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { About5PageRoutingModule } from './about5-routing.module';

import { About5Page } from './about5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    About5PageRoutingModule
  ],
  declarations: [About5Page]
})
export class About5PageModule {}
