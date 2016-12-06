/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {FormsModule} from "@angular/forms";
import {ROUTING} from "./wizard.demo.routing";
import {WizardDemo} from "./wizard.demo";
import {WizardAngularDemo} from "./wizard-angular";
import {WizardStaticDemo} from "./wizard-static.demo";
import {WizardSimple} from "./wizard-simple.demo";
import {WizardBasic} from "./wizard-basic.demo";
import {WizardFormValidation} from "./wizard-form-validation.demo";
import {WizardAsyncValidation} from "./wizard-async-validation.demo";
import {WizardNotClosable} from "./wizard-not-closable.demo";
import {CodeExample} from "./code-example";
import {WizardOptionsDemo} from "./wizard-options.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        ROUTING
    ],
    declarations: [
        CodeExample,
        WizardBasic,
        WizardSimple,
        WizardFormValidation,
        WizardAsyncValidation,
        WizardDemo,
        WizardAngularDemo,
        WizardStaticDemo,
        WizardOptionsDemo,
        WizardNotClosable
    ],
    exports: [
        WizardBasic,
        WizardSimple,
        WizardFormValidation,
        WizardAsyncValidation,
        WizardDemo,
        WizardAngularDemo,
        WizardStaticDemo,
        WizardOptionsDemo,
        WizardNotClosable
    ]
})
export default class WizardDemoModule {
}