import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { About3Page } from './about3.page';

const routes: Routes = [
  {
    path: '',
    component: About3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class About3PageRoutingModule {}
