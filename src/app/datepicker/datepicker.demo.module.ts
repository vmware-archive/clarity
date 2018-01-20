/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {BasicDatepickerDemo} from "./basic-datepicker";
import {ROUTING} from "./datepicker.demo.routing";
import {DatepickerDemo} from "./datepicker.demo";
import {ClarityModule} from "../../clr-angular";
import {FormsModule} from "@angular/forms";
import {DatepickerInFormDemo} from "./datepicker-in-form";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING, FormsModule],
    declarations: [DatepickerDemo, BasicDatepickerDemo, DatepickerInFormDemo],
    exports: [DatepickerDemo, BasicDatepickerDemo, DatepickerInFormDemo]
})
export default class DatepickerDemoModule {
}
