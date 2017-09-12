/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ClarityModule} from "../clarity-angular/clarity.module";

import {AppComponent} from "./app.component";
import {ROUTING} from "./app.routing";
import {LandingComponent} from "./landing.component";



@NgModule({
    imports: [BrowserAnimationsModule, CommonModule, FormsModule, ClarityModule, ROUTING],
    declarations: [AppComponent, LandingComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
