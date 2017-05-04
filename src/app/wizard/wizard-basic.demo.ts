/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";
import { CodeHighlight } from "../../clarity-angular/code/syntax-highlight/syntax-highlight";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-basic",
    templateUrl: "./wizard-basic.demo.html"
})
export class WizardBasicDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;
    open: boolean = false;

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";

@Component({
    ...
})
export class WizardBasicDemo {
    @ViewChild("wizard") wizard: Wizard;
    open: boolean = false; // you can open the wizard by setting this variable to true

    // you can also open the wizard programmatically here by calling wizard.open()
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open">
    <clr-wizard-title>Wizard Title</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Title for page 1</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Title for page 2</ng-template>
        <ng-template clrPageNavTitle>Step 2</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Title for page 3</ng-template>
        <ng-template clrPageNavTitle>Step 3</ng-template>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
