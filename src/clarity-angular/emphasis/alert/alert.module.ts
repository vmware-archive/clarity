/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrIconModule} from "../../icon/icon.module";
import {ClrDropdownModule} from "../../popover/dropdown/dropdown.module";

import {ALERT_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrIconModule, ClrDropdownModule],
    declarations: [ALERT_DIRECTIVES],
    exports: [ALERT_DIRECTIVES]
})
export class ClrAlertModule {}
