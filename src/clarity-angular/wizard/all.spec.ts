/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights
 * Reserved. This software is released under MIT
 * license. The full license information can be
 * found in LICENSE in the root directory of this
 * project.
 */
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {ClrIconModule} from "../icon/icon.module";
import {addHelpers} from "../utils/testing/helpers.spec";

import ButtonHubSpecs from "./providers/button-hub.spec";
import HeaderActionsSpecs from "./providers/header-actions.spec";
import PageCollectionSpecs from "./providers/page-collection.spec";
import WizardNavigationSpecs from "./providers/wizard-navigation.spec";
import WizardButtonSpecs from "./wizard-button.spec";
import WizardHeaderActionSpecs from "./wizard-header-action.spec";
import WizardPageSpecs from "./wizard-page.spec";
import WizardStepnavItemSpecs from "./wizard-stepnav-item.spec";
import WizardStepnavSpecs from "./wizard-stepnav.spec";
import {ClrWizardModule} from "./wizard.module";
import WizardSpecs from "./wizard.spec";

describe("New Wizard Tests", () => {
    addHelpers([ClrWizardModule, ClrIconModule, NoopAnimationsModule]);

    WizardSpecs();
    WizardStepnavSpecs();
    WizardStepnavItemSpecs();
    WizardButtonSpecs();
    WizardHeaderActionSpecs();
    WizardPageSpecs();

    ButtonHubSpecs();
    WizardNavigationSpecs();
    PageCollectionSpecs();
    HeaderActionsSpecs();
});
