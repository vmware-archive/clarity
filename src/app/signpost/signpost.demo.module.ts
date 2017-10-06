/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClarityModule} from "../../clarity-angular/clarity.module";

import {SignpostDemo} from "./signpost.demo";
import {ROUTING} from "./signpost.routing";

@NgModule({
    imports: [CommonModule, FormsModule, ClarityModule, ROUTING],
    declarations: [SignpostDemo],
    exports: [SignpostDemo]
})
export default class SignpostsDemoModule {}
