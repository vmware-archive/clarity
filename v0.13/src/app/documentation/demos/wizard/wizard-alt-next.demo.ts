/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, OnInit } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-alt-next",
    templateUrl: "./wizard-alt-next.demo.html",
    styles: [".stress { color: red; }"]
})
export class WizardAltNextDemo implements OnInit {
    @ViewChild("wizard") wizard: ClrWizard;

    open: boolean = false;
    showCancelConfirm: boolean = false;

    public model: any;
    public stressText: boolean = false;
    public errorFlag: boolean = false;

    public ngOnInit() {
        this.model = {
            allowNext: false,
            sequenceOne: "",
            sequenceTwo: "",
            sequenceThree: ""
        };
    }

    public pageCustomNext(): void {
        if (confirm("Are you sure you got it right?")) {
            this.errorFlag = false;
            this.wizard.forceNext();
        }
    }

    public doFinish() {
        let sequenceOneIsCorrect = this.model.sequenceOne === 3;
        let sequenceTwoIsCorrect = this.model.sequenceTwo === 5;
        let sequenceThreeIsCorrect = this.model.sequenceThree === 8;
        let allAreCorrect = sequenceOneIsCorrect && sequenceTwoIsCorrect && sequenceThreeIsCorrect;

        if (allAreCorrect) {
            this.wizard.forceFinish();
            // resetting for another pass through
            this.model.allowNext = false;
            this.model.sequenceOne = "";
            this.model.sequenceTwo = "";
            this.model.sequenceThree = "";
            this.wizard.reset();
            this.errorFlag = false;
        } else {
            this.errorFlag = true;
        }
    }

    public doNext() {
        if (this.model.allowNext) {
            this.wizard.forceNext();
            this.stressText = false;
        } else {
            this.stressText = true;
        }
    }

    code: string = `
import { Component, ViewChild, OnInit } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardAltNextDemo implements OnInit {
    @ViewChild("wizard") wizard: ClrWizard;

    public model: any;
    public stressText: boolean = false;
    public errorFlag: boolean = false;

    public ngOnInit() {
        this.model = {
            allowNext: false,
            sequenceOne: "",
            sequenceTwo: "",
            sequenceThree: ""
        };
    }

    public pageCustomNext(): void {
        if (confirm("Are you sure you got it right?")) {
            this.errorFlag = false;
            this.wizard.forceNext();
        }
    }

    public doFinish() {
        let sequenceOneIsCorrect = this.model.sequenceOne === 3;
        let sequenceTwoIsCorrect = this.model.sequenceTwo === 5;
        let sequenceThreeIsCorrect = this.model.sequenceThree === 8;
        let allAreCorrect = sequenceOneIsCorrect && sequenceTwoIsCorrect && sequenceThreeIsCorrect;

        if (allAreCorrect) {
            this.wizard.forceFinish();
            // resetting for another pass through
            this.model.allowNext = false;
            this.model.sequenceOne = "";
            this.model.sequenceTwo = "";
            this.model.sequenceThree = "";
            this.wizard.reset();
            this.errorFlag = false;
        } else {
            this.errorFlag = true;
        }
    }

    public doNext() {
        if (this.model.allowNext) {
            this.wizard.forceNext();
            this.stressText = false;
        } else {
            this.stressText = true;
        }
    }
}
`;

    html: string = `
<clr-wizard #wizard
    [(clrWizardOpen)]="open"
    [clrWizardSize]="'lg'"
    (clrWizardOnNext)="doNext()"
    (clrWizardOnFinish)="doFinish()"
    [clrWizardPreventDefaultNext]="true"
    >
    <clr-wizard-title>Wizard with alternate next flows</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Wizard level alt-next</ng-template>
        <p [class.stress]="stressText">Alt-Next means you manually move users to the next page.</p>
        <p></p>
        <label>
            <input #allowNext type="checkbox" name="allowNext" [(ngModel)]="model.allowNext">
            Check the box if you want to go to the next page
        </label>
    </clr-wizard-page>

    <clr-wizard-page (clrWizardPageNext)="pageCustomNext()"
        [clrWizardPagePreventDefaultNext]="true">
        <ng-template clrPageTitle>Page level alt-next</ng-template>
        <p *ngIf="showCancelConfirm">Complete this fibonacci sequence</p>

        <p>1, 2...</p>

        <div class="form-group">
            <label for="formFields_1">What comes after 2?</label>
            <input type="number" id="formFields_1" placeholder="Enter a number"
                [(ngModel)]="model.sequenceOne">
        </div>

        <p></p>

        <div class="form-group">
            <label for="formFields_2">What is the next number in the sequence?</label>
            <input type="number" id="formFields_2" placeholder="Enter a number"
                [(ngModel)]="model.sequenceTwo">
        </div>

        <p></p>

        <div class="form-group">
            <label for="formFields_3">What is the next number in the sequence?</label>
            <input type="number" id="formFields_3" placeholder="Enter a number"
                [(ngModel)]="model.sequenceThree">
        </div>
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Wizard level alt-next and the finish button</ng-template>
        <clr-alert *ngIf="errorFlag" clrAlertType="alert-danger">
            <div class="alert-item">
                Your sequence should be 1, 2, 3, 5, 8.
            </div>
        </clr-alert>

        <ng-container *ngIf="!errorFlag">
            <p>Alt-next at the wizard level also affects the finish button!</p>
            <p>So make sure to call through to finish when you use it.</p>
            <p>Click the finish button to test your answers.</p>
        </ng-container>

        <p *ngIf="errorFlag">Click back to the previous page to change your answers.</p>
    </clr-wizard-page>
</clr-wizard>
`;
}
