/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {ClrHostWrappingModule} from "../../utils/host-wrapping/host-wrapping.module";
import {ClrConditionalModule} from "../../utils/conditional/conditional.module";
import {ClrIconModule} from "../../icon";
import {ClrFocusTrapModule} from "../../utils/focus-trap/focus-trap.module";
import {ClrDatepicker} from "./datepicker";
import {ClrDatepickerContainer} from "./datepicker-container";
import {ClrCalendar} from "./calendar";
import {ClrMonthPicker} from "./monthpicker";


export const CLR_DATEPICKER_MODULE: Type<any>[] = [
    ClrDatepickerContainer,
    ClrDatepicker,
    ClrCalendar,
    ClrMonthPicker
];

@NgModule({
    imports: [
        CommonModule,
        ClrHostWrappingModule,
        ClrConditionalModule,
        ClrIconModule,
        ClrFocusTrapModule
    ],
    declarations: [CLR_DATEPICKER_MODULE],
    exports: [CLR_DATEPICKER_MODULE],
    entryComponents: [ClrDatepickerContainer]
})
export class ClrDatepickerModule {}
