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

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [DatepickerDemo, BasicDatepickerDemo],
    exports: [DatepickerDemo, BasicDatepickerDemo]
})
export default class DatepickerDemoModule {
}
