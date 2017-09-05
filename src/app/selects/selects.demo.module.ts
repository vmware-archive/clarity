/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clarity-angular/clarity.module";

import {BasicSelectDemo} from "./angular/basic-select/basic-select";
import {SelectAngularDemo} from "./angular/select-angular";
import {SelectsDemo} from "./selects.demo";
import {ROUTING} from "./selects.demo.routing";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [SelectsDemo, SelectAngularDemo, BasicSelectDemo],
    exports: [SelectsDemo, SelectAngularDemo, BasicSelectDemo]
})
export default class SelectsDemoModule {
}
