import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'carousel',
    loadChildren: () => import('./page/carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'about3',
    loadChildren: () => import('./page/about4/about4.module').then( m => m.About4PageModule)
  },
  {
    path: 'about4',
    loadChildren: () => import('./page/about4/about4.module').then( m => m.About4PageModule)
  },
  {
    path: 'about5',
    loadChildren: () => import('./page/about5/about5.module').then( m => m.About5PageModule)
  },
  {
    path: 'about6',
    loadChildren: () => import('./page/about6/about6.module').then( m => m.About6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
