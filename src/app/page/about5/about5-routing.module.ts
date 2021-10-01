import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { About5Page } from './about5.page';

const routes: Routes = [
  {
    path: '',
    component: About5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class About5PageRoutingModule {}
