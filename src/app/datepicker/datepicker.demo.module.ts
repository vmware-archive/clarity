/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClarityModule} from "../../clr-angular";

import {BasicDatepickerDemo} from "./basic-datepicker";
import {DatepickerInFormDemo} from "./datepicker-in-form";
import {DatepickerDemo} from "./datepicker.demo";
import {ROUTING} from "./datepicker.demo.routing";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING, FormsModule],
    declarations: [DatepickerDemo, BasicDatepickerDemo, DatepickerInFormDemo],
    exports: [DatepickerDemo, BasicDatepickerDemo, DatepickerInFormDemo]
})
export default class DatepickerDemoModule {}
