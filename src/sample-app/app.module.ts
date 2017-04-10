/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { AppComponent }  from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports:      [
        BrowserAnimationsModule,
        BrowserModule,
        ClarityModule.forRoot()
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
