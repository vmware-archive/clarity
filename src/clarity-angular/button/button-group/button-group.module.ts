/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrIconModule} from "../../icon/icon.module";
import {ClrCommonPopoverModule} from "../../popover/common/popover.module";

import {BUTTON_GROUP_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrIconModule, ClrCommonPopoverModule],
    declarations: [BUTTON_GROUP_DIRECTIVES],
    exports: [BUTTON_GROUP_DIRECTIVES]
})
export class ClrButtonGroupModule {}
