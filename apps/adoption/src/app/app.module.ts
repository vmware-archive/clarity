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
import { NotReadyComponent } from './components/not-ready.component';
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
import { FormPage } from './pages/form.page';
import { ButtonPage } from './pages/button.page';
import { DatalistPage } from './pages/detalist.page';
import { InputPage } from './pages/input.page';
import { ListPage } from './pages/list.page';
import { ModalPage } from './pages/modal.page';
import { PasswordPage } from './pages/password.page';
import { RadioPage } from './pages/radio.page';
import { RangePage } from './pages/range.page';
import { SelectPage } from './pages/select.page';
import { TextareaPage } from './pages/textarea.page';
import { TogglePage } from './pages/toggle.page';
import { CardPage } from './pages/card.page';
import { EslintIntroBlockComponent } from './components/eslint-intro-block/eslint-intro-block.component';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    GettingStartedPage,
    AccordionPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DatalistPage,
    FormPage,
    IconsPage,
    InputPage,
    LabelPage,
    ListPage,
    ModalPage,
    PasswordPage,
    RadioPage,
    RangePage,
    SelectPage,
    TextareaPage,
    TogglePage,
    AdoptionToolingPage,

    /* helpers */
    SourceCodeComponent,
    NotReadyComponent,
    Demo,
    EslintIntroBlockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, BrowserAnimationsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
