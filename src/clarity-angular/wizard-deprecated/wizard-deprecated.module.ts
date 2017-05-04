/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OLD_WIZARD_DIRECTIVES } from "./index";
import { ClrModalModule } from "../modal/modal.module";
import { ClrAlertModule } from "../emphasis/alert/alert.module";

@NgModule({
    imports: [
        CommonModule,
        ClrModalModule,
        ClrAlertModule
    ],
    declarations: [
        OLD_WIZARD_DIRECTIVES
    ],
    exports: [
        OLD_WIZARD_DIRECTIVES
    ]
})
export class ClrWizardDeprecatedModule {}
