/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrLoadingModule} from "../../utils/loading/loading.module";

import {LOADING_BUTTON_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrLoadingModule],
    declarations: [LOADING_BUTTON_DIRECTIVES],
    exports: [LOADING_BUTTON_DIRECTIVES, ClrLoadingModule]
})
export class ClrLoadingButtonModule {}
