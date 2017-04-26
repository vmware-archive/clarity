/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";
import {FormsModule} from "@angular/forms";

import {WizardStaticDemo} from "./wizard-static.demo";
import {WizardSimple} from "./wizard-simple.demo";
import {WizardBasic} from "./wizard-basic.demo";
import {WizardFormValidation} from "./wizard-form-validation.demo";
import {WizardAsyncValidation} from "./wizard-async-validation.demo";
import {WizardNotClosable} from "./wizard-not-closable.demo";
import {CodeExample} from "./code-example";
import {WizardOptionsDemo} from "./wizard-options.demo";
import { WizardNestedDirectiveDemo } from "./wizard-nested-directives.demo";
import { WizardTitlesDemo } from "./wizard-titles.demo";
import { WizardDefaultButtonsDemo } from "./wizard-buttons.demo";
import { WizardCustomButtonsDemo } from "./wizard-custom-buttons.demo";
import { WizardResetDemo } from "./wizard-reset.demo";
import { WizardAltCancelDemo } from "./wizard-alt-cancel.demo";
import { WizardAltNextDemo } from "./wizard-alt-next.demo";
import { WizardNoCancel } from "./wizard-no-cancel.demo";
import { WizardJumpToDemo } from "./wizard-jump-to.demo";
import { WizardAsyncCompletion } from "./wizard-async-completion.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        FormsModule,
    ],
    declarations: [
        CodeExample,
        WizardBasic,
        WizardSimple,
        WizardFormValidation,
        WizardAsyncValidation,
        WizardStaticDemo,
        WizardOptionsDemo,
        WizardNotClosable,
        WizardNestedDirectiveDemo,
        WizardTitlesDemo,
        WizardDefaultButtonsDemo,
        WizardCustomButtonsDemo,
        WizardResetDemo,
        WizardAltCancelDemo,
        WizardAltNextDemo,
        WizardNoCancel,
        WizardJumpToDemo,
        WizardAsyncCompletion
    ],
    exports: [
        WizardBasic,
        WizardSimple,
        WizardFormValidation,
        WizardAsyncValidation,
        WizardStaticDemo,
        WizardOptionsDemo,
        WizardNotClosable,
        WizardNestedDirectiveDemo,
        WizardTitlesDemo,
        WizardDefaultButtonsDemo,
        WizardCustomButtonsDemo,
        WizardResetDemo,
        WizardAltCancelDemo,
        WizardAltNextDemo,
        WizardNoCancel,
        WizardJumpToDemo,
        WizardAsyncCompletion
    ]
})
export default class WizardDemoModule {
}
