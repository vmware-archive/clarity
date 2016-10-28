import {Wizard} from "./wizard";
import {WizardStep} from "./wizard-step";
import {WizardPage} from "./wizard-page";

export * from "./wizard";
export * from "./wizard-step";
export * from "./wizard-page";

export const WIZARD_DIRECTIVES: any[] = [
   Wizard,
   WizardStep,
   WizardPage
];
