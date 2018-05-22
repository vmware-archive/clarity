/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    selector: "clr-wizard-async-validation",
    templateUrl: "./wizard-async-validation.demo.html"
})
export class WizardAsyncValidation {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("myForm") formData: any;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;
    answer: number = null;
    open: boolean = false;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        setTimeout(() => {
            if (value.answer === "42") {
                this.wizard.forceNext();
            } else {
                this.errorFlag = true;
            }
            this.loadingFlag = false;
        }, 1000);
    }

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardAsyncValidation {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("myForm") formData: any;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call 
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        setTimeout(() => {
            if (value.answer === "42") {
                this.wizard.forceNext();
            } else {
                this.errorFlag = true;
            }
            this.loadingFlag = false;
        }, 1000);
    }
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open">
    <clr-wizard-title>Async validation</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page
        clrWizardPagePreventDefault="true"
        (clrWizardPageOnCommit)="onCommit()"
        (clrWizardPageOnCancel)="doCancel()">
        <ng-template clrPageTitle>Form with async validation</ng-template>

        <div class="spinner" *ngIf="loadingFlag">
            Loading...
        </div>
        <clr-alert [clrAlertType]="'alert-info'" [clrAlertClosable]="false">
            <div class="alert-item">
                This&nbsp;<a
                    href="https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy"
                    target="_blank">wiki article</a>&nbsp;might help you answer the question.
            </div>
        </clr-alert>
        <clr-alert *ngIf="errorFlag" [clrAlertType]="'alert-danger'">
            <div class="alert-item">
                Your answer is incorrect.
            </div>
        </clr-alert>
        <form #myForm="ngForm" [class.hide]="loadingFlag">
            <section class="form-block">
                <div class="form-group">
                    <label for="fourtyTwoInput">The answer to life, the universe and everything</label>
                    <input type="text" id="fourtyTwoInput" [(ngModel)]="answer" name="answer">
                </div>
            </section>
        </form>
    </clr-wizard-page>
    <clr-wizard-page>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
