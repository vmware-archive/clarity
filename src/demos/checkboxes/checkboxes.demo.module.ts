/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from 'clarity-angular';

import {CheckboxesDemo} from "./checkboxes.demo";

import {Status} from "./data/status";
import {Example} from "./utils/example";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forRoot(),
    ],
    declarations: [
        CheckboxesDemo,
        Example
    ],
    providers: [
        Status
    ],
    exports: [
        CheckboxesDemo
    ]
})
export default class CheckboxesDemoModule {
}
