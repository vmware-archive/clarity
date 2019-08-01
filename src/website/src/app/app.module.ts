/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DocumentationModule } from './documentation/documentation.module';
import { UtilsModule } from './utils/utils.module';
import { SkipLinkComponent } from './utils/skip-link.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, SkipLinkComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'clarity' }),
    BrowserAnimationsModule,
    ClarityModule,
    DocumentationModule,
    UtilsModule,
    AppRoutingModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
