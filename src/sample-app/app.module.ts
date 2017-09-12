/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    ClrAlertModule,
    ClrButtonGroupModule,
    ClrDataModule,
    ClrFormsModule,
    ClrIconModule,
    ClrLayoutModule,
    ClrPopoverModule
} from "clarity-angular";

import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserAnimationsModule, BrowserModule,
        ClrLayoutModule,  // Includes MainContainer, Navigation, & Tabs
        ClrIconModule, ClrButtonGroupModule, ClrDataModule, ClrFormsModule, ClrAlertModule, ClrPopoverModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
