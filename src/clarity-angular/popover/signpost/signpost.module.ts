/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrIconModule} from "../../icon/icon.module";
import {ClrConditionalModule} from "../../utils/conditional/conditional.module";
import {ClrCommonPopoverModule} from "../common/popover.module";

import {SIGNPOST_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrCommonPopoverModule, ClrIconModule],
    declarations: [SIGNPOST_DIRECTIVES],
    exports: [SIGNPOST_DIRECTIVES, ClrConditionalModule],
    providers: []
})

export class ClrSignpostModule {}
