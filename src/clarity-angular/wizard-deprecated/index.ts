/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {WizardDeprecated} from "./wizard";
import {WizardStep} from "./wizard-step";
import {WizardPageDeprecated} from "./wizard-page";

export * from "./wizard";
export * from "./wizard-step";
export * from "./wizard-page";

export const OLD_WIZARD_DIRECTIVES: any[] = [
   WizardDeprecated,
   WizardStep,
   WizardPageDeprecated
];
