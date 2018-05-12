/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrHostWrappingModule} from "../../utils/host-wrapping/host-wrapping.module";
import {ClrCommonFormsModule} from "../common/common.module";

import {ClrCheckboxNext} from "./checkbox";
import {ClrCheckboxContainer} from "./checkbox-container";

@NgModule({
    imports: [CommonModule, ClrCommonFormsModule, ClrHostWrappingModule],
    declarations: [ClrCheckboxNext, ClrCheckboxContainer],
    exports: [ClrCommonFormsModule, ClrCheckboxNext, ClrCheckboxContainer],
    entryComponents: [ClrCheckboxContainer]
})
export class ClrCheckboxNextModule {
}
