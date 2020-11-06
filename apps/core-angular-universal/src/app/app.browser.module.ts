import { NgModule } from '@angular/core';
import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
