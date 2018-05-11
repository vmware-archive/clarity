/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule, ClrRadioModule} from "@clr/angular";

import {RadiosDemo} from "./radios.demo";
import {ROUTING} from "./radios.demo.routing";

@NgModule({
    imports: [CommonModule, ClarityModule, ClrRadioModule, ROUTING],
    declarations: [RadiosDemo],
    exports: [RadiosDemo]
})
export class RadiosDemoModule {
}
