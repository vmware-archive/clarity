/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {WizardDeprecated} from "clarity-angular";
import {CodeHighlight} from "clarity-angular";

@Component({
    selector: "clr-wizard-basic",
    templateUrl: "./wizard-basic.demo.html"
})
export class WizardBasic {
    @ViewChild("wizardmd") wizardMedium: WizardDeprecated;
    @ViewChild("wizardlg") wizardLarge: WizardDeprecated;
    @ViewChild("wizardxlg") wizardDefault: WizardDeprecated;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    code: string = `
import {Component, ViewChild} from "@angular/core";
import {WizardDeprecated} from "clarity-angular";

@Component({
    ...
})
export class WizardSimple {
    @ViewChild("wizard") wizard: WizardDeprecated;
    open: boolean = false; // you can open the wizard by setting this variable to true

    // you can also open the wizard programmatically here by calling wizard.open()

}
    `;

    html: string = `
<clr-wizard-deprecated #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'lg'">
    <div class="wizard-title">Wizard Title</div>

    <clr-wizard-step>Step 1</clr-wizard-step>
    <clr-wizard-step>Step 2</clr-wizard-step>
    <clr-wizard-step>Step 3</clr-wizard-step>

    <clr-wizard-page-deprecated>Content for step 1</clr-wizard-page-deprecated>
    <clr-wizard-page-deprecated>Content for step 2</clr-wizard-page-deprecated>
    <clr-wizard-page-deprecated>Content for step 3</clr-wizard-page-deprecated>
</clr-wizard-deprecated>
`;
}
