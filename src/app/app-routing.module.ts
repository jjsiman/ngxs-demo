import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'ngrx',
    loadChildren: () => import('./ngrx-demo/ngrx-demo.module').then(m => m.NgrxDemoModule)
  },
  {
    path: 'ngxs',
    loadChildren: () => import('./ngxs-demo/ngxs-demo.module').then(m => m.NgxsDemoModule)
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
