import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxsPageComponent } from './ngxs-page/ngxs-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: NgxsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxsDemoRoutingModule { }
