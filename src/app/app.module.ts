/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { ROUTING } from "./app.routing";

import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing.component";
import { ClarityModule } from "../clarity-angular/clarity.module";




@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        LandingComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
