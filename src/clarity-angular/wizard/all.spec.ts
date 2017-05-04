import { addHelpers } from "../utils/testing/helpers.spec";

import WizardSpecs from "./wizard.spec";
import WizardStepnavItemSpecs from "./wizard-stepnav-item.spec";
import WizardStepnavSpecs from "./wizard-stepnav.spec";
import WizardButtonSpecs from "./wizard-button.spec";
import WizardHeaderActionSpecs from "./wizard-header-action.spec";
import WizardPageSpecs from "./wizard-page.spec";

import ButtonHubSpecs from "./providers/button-hub.spec";
import WizardNavigationSpecs from "./providers/wizard-navigation.spec";
import PageCollectionSpecs from "./providers/page-collection.spec";
import HeaderActionsSpecs from "./providers/header-actions.spec";

import { ClrWizardModule } from "./wizard.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ClrIconModule } from "../icon/icon.module";

describe("New Wizard Tests", () => {
    addHelpers([
        ClrWizardModule,
        ClrIconModule,
        NoopAnimationsModule
    ]);

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
