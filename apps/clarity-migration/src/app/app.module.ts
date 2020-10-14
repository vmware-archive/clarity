import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePage } from './pages/home/home.page';
import { ButtonPage } from './pages/button/button.page';
import { AlertPage } from './pages/alert/alert.page';

import { SourceCodeComponent } from './components/sourcecode.component';
import { DynamicHostDirective } from './components/dynamic/dynamic-host-directive';
import { EmbedComponent } from './components/dynamic/embed-component.component';
import { ExampleWrapper } from './components/example-wrapper';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    AlertPage,
    HomePage,
    ButtonPage,

    /* helpers */
    SourceCodeComponent,
    DynamicHostDirective,
    EmbedComponent,
    ExampleWrapper,
  ],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, BrowserAnimationsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
