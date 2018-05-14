/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ClarityModule} from "@clr/angular";

import {BasicNgSelectDemo} from "./basic-ng-select";
import {SelectStaticDemo} from "./select-static";
import {SelectsDemo} from "./selects.demo";
import {ROUTING} from "./selects.demo.routing";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [SelectsDemo, SelectStaticDemo, BasicNgSelectDemo],
    exports: [SelectsDemo, SelectStaticDemo, BasicNgSelectDemo]
})
export class SelectsDemoModule {
}
