import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { applicationIcon, cloudIcon, ClarityIcons, timesCircleIcon } from '@cds/core/icon';

import '@cds/core/grid/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/accordion/register.js';
// import '@cds/core/alert/register.js';
// import '@cds/core/button/register.js';
// import '@cds/core/checkbox/register.js';
// import '@cds/core/datalist/register.js';
// import '@cds/core/file/register.js';
// import '@cds/core/forms/register.js';
// import '@cds/core/input/register.js';
// import '@cds/core/password/register.js';
// import '@cds/core/radio/register.js';
// import '@cds/core/range/register.js';
// import '@cds/core/search/register.js';
// import '@cds/core/select/register.js';
// import '@cds/core/textarea/register.js';
// import '@cds/core/time/register.js';
// import '@cds/core/toggle/register.js';
// import '@cds/core/navigation/register.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CdsModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    ClarityIcons.addIcons(applicationIcon, cloudIcon, timesCircleIcon);
    ClarityIcons.addIcons([
      'clarity-logo',
      '<svg height="36" width="36" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m24.702 4.583 11.278 6.679-.019 13.563-11.26 6.66-6.684-3.97 11.652-6.541v-5.898l-4.747-2.604-6.89-3.938" fill="#179bd3"/><path d="m11.331 4.583-11.277 6.679.018 13.563 11.26 6.66 6.685-3.97-10.663-6.541v-5.898l10.678-6.542" fill="#f38b00"/><path d="m18.017 27.515-6.517-3.999 6.522-3.845 6.93 3.952" fill="#00648f"/><path d="m18.031 8.533-6.504 3.985 6.517 3.884 6.862-3.94" fill="#98441e"/></g></svg>',
    ]);
  }
}
