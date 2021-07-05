/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SourceCodeComponent } from './components/sourcecode.component';
import { Demo } from './components/demo.component';

import '@clr/icons/shapes/all-shapes';
import '@cds/core/divider/register.js';

import { GettingStartedPage } from './pages/getting-started.page';
import { AlertPage } from './pages/alert.page';
import { BadgePage } from './pages/badge.page';
import { LabelPage } from './pages/label.page';
import { IconsPage } from './pages/icons.page';
import { AccordionPage } from './pages/accordion.page';
import { CheckboxPage } from './pages/checkbox.page';
import { AdoptionToolingPage } from './pages/adoption-tooling.page';
import { CardPage } from './pages/card.page';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    GettingStartedPage,
    AccordionPage,
    AlertPage,
    CardPage,
    BadgePage,
    CheckboxPage,
    IconsPage,
    LabelPage,
    AdoptionToolingPage,

    /* helpers */
    SourceCodeComponent,
    Demo,
  ],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, BrowserAnimationsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
