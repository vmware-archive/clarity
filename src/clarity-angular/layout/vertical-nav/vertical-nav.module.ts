/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrIconModule} from "../../icon/icon.module";
import {ClrIfExpandModule} from "../../utils/expand/if-expand.module";

import {VERTICAL_NAV_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrIconModule, ClrIfExpandModule],
    declarations: [VERTICAL_NAV_DIRECTIVES],
    exports: [VERTICAL_NAV_DIRECTIVES, ClrIfExpandModule, ClrIconModule]
})
export class ClrVerticalNavModule {}
