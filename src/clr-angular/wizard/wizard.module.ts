/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrAlertModule} from "../emphasis/alert/alert.module";
import {ClrModalModule} from "../modal/modal.module";

import {WIZARD_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrModalModule, ClrAlertModule],
    declarations: [WIZARD_DIRECTIVES],
    exports: [WIZARD_DIRECTIVES]
})
export class ClrWizardModule {}
