/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";
import {CodeHighlight} from "clarity-angular";

@Component({
    selector: "clr-wizard-not-closable",
    templateUrl: "./wizard-not-closable.demo.html"
})
export class WizardNotClosable {
    @ViewChild("wizardclos") wizardClosable: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    html: string = `
<clr-wizard [(clrWizardOpen)]="open" [clrWizardClosable]="false" [clrWizardSize]="'md'">
    <div class="wizard-title">Wizard Title</div>

    <clr-wizard-step>Step 1</clr-wizard-step>
    <clr-wizard-step>Step 2</clr-wizard-step>
    <clr-wizard-step>Step 3</clr-wizard-step>

    <clr-wizard-page>Note that there is no closing <clr-icon shape="close"></clr-icon> icon in the top right.</clr-wizard-page>
    <clr-wizard-page>Content for step 2</clr-wizard-page>
    <clr-wizard-page>Content for step 3</clr-wizard-page>
</clr-wizard>
    `;
}
