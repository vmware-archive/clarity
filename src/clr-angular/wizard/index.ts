/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {WizardPageButtonsDirective} from "./directives/page-buttons";
import {WizardPageHeaderActionsDirective} from "./directives/page-header-actions";
import {WizardPageNavTitleDirective} from "./directives/page-navtitle";
import {WizardPageTitleDirective} from "./directives/page-title";
import {Wizard} from "./wizard";
import {WizardButton} from "./wizard-button";
// directives
import {WizardCustomTags} from "./wizard-custom-tags";
import {WizardHeaderAction} from "./wizard-header-action";
import {WizardPage} from "./wizard-page";
import {WizardStepnav} from "./wizard-stepnav";
import {WizardStepnavItem} from "./wizard-stepnav-item";

export * from "./wizard";
export * from "./wizard-page";
export * from "./wizard-stepnav";
export * from "./wizard-stepnav-item";
export * from "./wizard-button";
export * from "./wizard-header-action";

// directives
export * from "./wizard-custom-tags";
export * from "./directives/page-title";
export * from "./directives/page-navtitle";
export * from "./directives/page-buttons";
export * from "./directives/page-header-actions";

export const WIZARD_DIRECTIVES: any[] = [
    Wizard, WizardPage, WizardStepnav, WizardStepnavItem, WizardButton, WizardHeaderAction, WizardCustomTags,
    WizardPageTitleDirective, WizardPageNavTitleDirective, WizardPageButtonsDirective, WizardPageHeaderActionsDirective
];
