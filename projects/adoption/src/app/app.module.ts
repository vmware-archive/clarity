import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GettingStartedPage } from './pages/getting-started/getting-started.page';
import { AlertPage } from './pages/alert/alert.page';
import { ButtonPage } from './pages/button/button.page';
import { BadgePage } from './pages/badge/badge.page';
import { LabelPage } from './pages/label/label.page';
import { ListPage } from './pages/list/list.page';

import { SourceCodeComponent } from './components/sourcecode.component';
import { DynamicHostDirective } from './components/dynamic/dynamic-host-directive';
import { EmbedComponent } from './components/dynamic/embed-component.component';
import { ExampleWrapper } from './components/example-wrapper';

import '@clr/icons/shapes/all-shapes';
import '@cds/core/divider/register.js';
import { IconsPage } from './pages/icons/icons.page';
import { AccordionPage } from './pages/accordion/accordion.page';
import { CheckboxPage } from './pages/checkbox/checkbox.page';
import { AdoptionToolingPage } from './pages/adoption-tooling/adoption-tooling.page';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    GettingStartedPage,
    AccordionPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CheckboxPage,
    IconsPage,
    LabelPage,
    ListPage,
    AdoptionToolingPage,

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
