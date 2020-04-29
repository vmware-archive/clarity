import { NgModule } from '@angular/core';
import '@clr/core/alert';
import '@clr/core/button';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
