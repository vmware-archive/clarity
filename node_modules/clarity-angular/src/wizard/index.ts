/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
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
