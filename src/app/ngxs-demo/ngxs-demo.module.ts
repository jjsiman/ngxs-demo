import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsDemoRoutingModule } from './ngxs-demo-routing.module';
import { NgxsFormComponent } from './ngxs-form/ngxs-form.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsPageComponent } from './ngxs-page/ngxs-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { environment } from 'src/environments/environment';

import { FormState } from './state/form.state';
import { DemoState } from './state/demo.state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgxsFormComponent,
    NgxsPageComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    NgxsDemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([DemoState, FormState],
      {
        developmentMode: !environment.production,
        selectorOptions: { suppressErrors: false }
      }),
    NgxsRouterPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ]
})
export class NgxsDemoModule { }
