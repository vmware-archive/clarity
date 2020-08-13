/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import * as Sentry from '@sentry/browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DocumentationModule } from './documentation/documentation.module';
import { UtilsModule } from './utils/utils.module';
import { SkipLinkComponent } from './utils/skip-link.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, SkipLinkComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, DocumentationModule, UtilsModule, AppRoutingModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    Sentry.init({ dsn: 'https://599f74625b9940c9a7f6ca4edaca1926@o378402.ingest.sentry.io/5397122' });
  }
}
