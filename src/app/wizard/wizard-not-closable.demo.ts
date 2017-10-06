/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";

import {CodeHighlight} from "../../clarity-angular/code/syntax-highlight/syntax-highlight";
import {Wizard} from "../../clarity-angular/wizard/wizard";

@Component({selector: "clr-wizard-basic", templateUrl: "./wizard-not-closable.demo.html"})
export class WizardNotClosableDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;
    open: boolean = false;

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";

@Component({
    ...
})
export class WizardNotClosableDemo {
    @ViewChild("wizard") wizard: Wizard;
    open: boolean = false;
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardClosable]="false">
    <clr-wizard-title>Wizard, not closable</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 1</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 2</ng-template>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
