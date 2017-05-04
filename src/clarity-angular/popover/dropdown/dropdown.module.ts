/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClrCommonPopoverModule } from "../common/popover.module";
import { ClrIconModule } from "../../icon/icon.module";
import { DROPDOWN_DIRECTIVES } from "./index";

@NgModule({
    imports: [
        CommonModule,
        ClrCommonPopoverModule,
        ClrIconModule
    ],
    declarations: [
        DROPDOWN_DIRECTIVES
    ],
    exports: [
        DROPDOWN_DIRECTIVES
    ]
})
export class ClrDropdownModule {}

