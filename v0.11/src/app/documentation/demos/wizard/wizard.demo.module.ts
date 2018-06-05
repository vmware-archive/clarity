/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";
import {FormsModule} from "@angular/forms";

import {WizardStaticDemo} from "./wizard-static.demo";
import {WizardSimple} from "./wizard-simple.demo";
import {WizardBasic} from "./wizard-basic.demo";
import {WizardFormValidation} from "./wizard-form-validation.demo";
import {WizardAsyncValidation} from "./wizard-async-validation.demo";
import {WizardNotClosable} from "./wizard-not-closable.demo";
import {WizardNestedDirectiveDemo} from "./wizard-nested-directives.demo";
import {WizardTitlesDemo} from "./wizard-titles.demo";
import {WizardDefaultButtonsDemo} from "./wizard-buttons.demo";
import {WizardCustomButtonsDemo} from "./wizard-custom-buttons.demo";
import {WizardResetDemo} from "./wizard-reset.demo";
import {WizardAltCancelDemo} from "./wizard-alt-cancel.demo";
import {WizardAltNextDemo} from "./wizard-alt-next.demo";
import {WizardNoCancel} from "./wizard-no-cancel.demo";
import {WizardJumpToDemo} from "./wizard-jump-to.demo";
import {WizardDesignDemo} from "./wizard-design.demo";
import {WizardDesignSizeDemo} from "./wizard-design-size.demo";
import {WizardAsyncCompletion} from "./wizard-async-completion.demo";
import {WizardForceForwardDemo} from "./wizard-force-forward.demo";
import {WizardStopNavigation} from "./wizard-stop-navigation.demo";
import {WizardDemo} from "./wizard.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: WizardDemo}]),
        UtilsModule
    ],
    declarations: [
        WizardBasic,
        WizardSimple,
        WizardFormValidation,
        WizardAsyncValidation,
        WizardStaticDemo,
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
        WizardAsyncCompletion,
        WizardForceForwardDemo,
        WizardDemo,
        WizardDesignDemo,
        WizardDesignSizeDemo,
        WizardStopNavigation
    ],
    exports: [
        WizardDemo
    ]
})
export class WizardDemoModule {
}
