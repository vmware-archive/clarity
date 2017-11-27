/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clr-angular/clr.module";

import {SpinnerSizesDemo} from "./spinner-sizes";
import {SpinnerTypesDemo} from "./spinner-types";
import {SpinnerDemo} from "./spinner.demo";
import {ROUTING} from "./spinners.demo.routing";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [SpinnerDemo, SpinnerSizesDemo, SpinnerTypesDemo],
    exports: [SpinnerDemo, SpinnerSizesDemo, SpinnerTypesDemo]
})
export default class SpinnersDemoModule {}
