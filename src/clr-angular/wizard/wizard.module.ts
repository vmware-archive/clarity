/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrAlertModule} from "../emphasis/alert/alert.module";
import {ClrModalModule} from "../modal/modal.module";

import {ClrWizard} from "./wizard";
import {ClrWizardButton} from "./wizard-button";
import {ClrWizardCustomTags} from "./wizard-custom-tags";
import {ClrWizardHeaderAction} from "./wizard-header-action";
import {ClrWizardPage} from "./wizard-page";
import {ClrWizardPageButtons} from "./wizard-page-buttons";
import {ClrWizardPageHeaderActions} from "./wizard-page-header-actions";
import {ClrWizardPageNavTitle} from "./wizard-page-navtitle";
import {ClrWizardPageTitle} from "./wizard-page-title";
import {ClrWizardStepnav} from "./wizard-stepnav";
import {ClrWizardStepnavItem} from "./wizard-stepnav-item";

export const CLR_WIZARD_DIRECTIVES: any[] = [
    ClrWizard, ClrWizardPage, ClrWizardStepnav, ClrWizardStepnavItem, ClrWizardButton, ClrWizardHeaderAction,
    ClrWizardCustomTags, ClrWizardPageTitle, ClrWizardPageNavTitle, ClrWizardPageButtons, ClrWizardPageHeaderActions
];

@NgModule({
    imports: [CommonModule, ClrModalModule, ClrAlertModule],
    declarations: [CLR_WIZARD_DIRECTIVES],
    exports: [CLR_WIZARD_DIRECTIVES]
})
export class ClrWizardModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export const Wizard = ClrWizard;
/** @deprecated since 0.11 */
export const WizardPage = ClrWizardPage;
/** @deprecated since 0.11 */
export const WizardStepnav = ClrWizardStepnav;
/** @deprecated since 0.11 */
export const WizardStepnavItem = ClrWizardStepnavItem;
/** @deprecated since 0.11 */
export const WizardButton = ClrWizardButton;
/** @deprecated since 0.11 */
export const WizardHeaderAction = ClrWizardHeaderAction;
/** @deprecated since 0.11 */
export const WizardCustomTags = ClrWizardCustomTags;
/** @deprecated since 0.11 */
export const WizardPageTitleDirective = ClrWizardPageTitle;
/** @deprecated since 0.11 */
export const WizardPageNavTitleDirective = ClrWizardPageNavTitle;
/** @deprecated since 0.11 */
export const WizardPageButtonsDirective = ClrWizardPageButtons;
/** @deprecated since 0.11 */
export const WizardPageHeaderActionsDirective = ClrWizardPageHeaderActions;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const WIZARD_DIRECTIVES = CLR_WIZARD_DIRECTIVES;
