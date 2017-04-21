/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";
import {FormsModule} from "@angular/forms";

import {WizardDeprecatedAngularDemo} from "./wizard-angular";
import {WizardDeprecatedStaticDemo} from "./wizard-static.demo";
import {WizardDeprecatedSimple} from "./wizard-simple.demo";
import {WizardDeprecatedBasic} from "./wizard-basic.demo";
import {WizardDeprecatedFormValidation} from "./wizard-form-validation.demo";
import {WizardDeprecatedAsyncValidation} from "./wizard-async-validation.demo";
import {WizardDeprecatedNotClosable} from "./wizard-not-closable.demo";
import {CodeExample} from "./code-example";
import {WizardDeprecatedOptionsDemo} from "./wizard-options.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        FormsModule,
    ],
    declarations: [
        CodeExample,
        WizardDeprecatedBasic,
        WizardDeprecatedSimple,
        WizardDeprecatedFormValidation,
        WizardDeprecatedAsyncValidation,
        WizardDeprecatedAngularDemo,
        WizardDeprecatedStaticDemo,
        WizardDeprecatedOptionsDemo,
        WizardDeprecatedNotClosable
    ],
    exports: [
        WizardDeprecatedBasic,
        WizardDeprecatedSimple,
        WizardDeprecatedFormValidation,
        WizardDeprecatedAsyncValidation,
        WizardDeprecatedAngularDemo,
        WizardDeprecatedStaticDemo,
        WizardDeprecatedOptionsDemo,
        WizardDeprecatedNotClosable
    ]
})
export default class WizardDeprecatedDemoModule {
}
