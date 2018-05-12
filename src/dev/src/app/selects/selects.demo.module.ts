/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "@clr/angular";

import {SelectsDemo} from "./selects.demo";
import {ROUTING} from "./selects.demo.routing";

@NgModule({imports: [CommonModule, ClarityModule, ROUTING], declarations: [SelectsDemo], exports: [SelectsDemo]})
export class SelectsDemoModule {
}
