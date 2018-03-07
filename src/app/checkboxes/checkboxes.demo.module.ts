/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClarityModule} from "../../clr-angular/clr-angular.module";

import {CheckboxesDemo} from "./checkboxes.demo";
import {ROUTING} from "./checkboxes.demo.routing";
import {Status} from "./data/status";

@NgModule({
    imports: [CommonModule, FormsModule, ClarityModule, ROUTING],
    declarations: [CheckboxesDemo],
    providers: [Status],
    exports: [CheckboxesDemo]
})
export class CheckboxesDemoModule {}
