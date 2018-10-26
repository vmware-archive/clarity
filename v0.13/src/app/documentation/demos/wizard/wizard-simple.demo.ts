/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-simple",
    templateUrl: "./wizard-simple.demo.html"
})
export class WizardSimple {
    @ViewChild("wizard") wizard: ClrWizard;
    skipStepTwo: boolean = true;
    _open: boolean = false;

    toggleStepTwo() {
        this.skipStepTwo = !this.skipStepTwo;
    }

    open() {
        this._open = !this.open;
    }

    code: string = `
@Component({
    ...
})
export class WizardSimple {
    @ViewChild("wizard") wizard: ClrWizard;
    skipStepTwo: boolean = true;
    _open: boolean = false;

    toggleStepTwo() {
        this.skipStepTwo = !this.skipStepTwo;
    }

    open() {
        this._open = !this.open;
    }
}
    `;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="_open">
    <clr-wizard-title>Skipping Page Two</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Title for page 1</ng-template>
        <ng-template clrPageNavTitle>Step 1</ng-template>
        ...
        <p>
            <button class="btn btn-secondary" (click)="wizard.toggleStepTwo()">
                <span *ngIf="skipStepTwo">Show Page 2</span>
                <span *ngIf="!skipStepTwo">Hide Page 2</span>
            </button>
        </p>
    </clr-wizard-page>

    <clr-wizard-page *ngIf="!skipStepTwo">
        <ng-template clrPageTitle>Title for page 2</ng-template>
        <ng-template clrPageNavTitle>Step 2</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Title for page 3</ng-template>
        <ng-template clrPageNavTitle>Step 3</ng-template>
        <p *ngIf="skipStepTwo">Page 3 is the last page because we skipped page 2.</p>
        <p *ngIf="!skipStepTwo">Now our wizard has three pages/steps.</p>
    </clr-wizard-page>
</clr-wizard>
`;
}
