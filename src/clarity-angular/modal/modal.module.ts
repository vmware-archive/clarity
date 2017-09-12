/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrIconModule} from "../icon/icon.module";
import {ClrFocusTrapModule} from "../utils/focus-trap/focus-trap.module";

import {MODAL_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrIconModule, ClrFocusTrapModule],
    declarations: [MODAL_DIRECTIVES],
    exports: [MODAL_DIRECTIVES]
})
export class ClrModalModule {}
