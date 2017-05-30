/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ViewChild} from "@angular/core";
import {WizardDeprecated} from "../../clarity-angular/wizard-deprecated/wizard";
import {CodeHighlight} from "../../clarity-angular/code/syntax-highlight/syntax-highlight";

@Component({
    moduleId: module.id,
    selector: "clr-old-wizard-not-closable",
    templateUrl: "./wizard-not-closable.demo.html"
})
export class WizardNotClosable {
    @ViewChild("wizardclos") wizardClosable: WizardDeprecated;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    html: string = `
<clr-wizard-deprecated #wizardclos [(clrWizardOpen)]="open" [clrWizardClosable]="false" [clrWizardSize]="'md'">
    <div class="wizard-title">Wizard Title</div>

    <clr-wizard-step>Step 1</clr-wizard-step>
    <clr-wizard-step>Step 2</clr-wizard-step>
    <clr-wizard-step>Step 3</clr-wizard-step>

    <clr-wizard-page-deprecated>
      Note that there is no close (<clr-icon shape="close"></clr-icon>) icon in the top right.
    </clr-wizard-page-deprecated>
    <clr-wizard-page-deprecated>Content for step 2</clr-wizard-page-deprecated>
    <clr-wizard-page-deprecated>Content for step 3</clr-wizard-page-deprecated>
</clr-wizard-deprecated>
    `;
}
