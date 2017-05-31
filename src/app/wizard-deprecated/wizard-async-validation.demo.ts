/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ViewChild} from "@angular/core";
import {Wizard} from "../../clarity-angular/wizard/wizard";

@Component({
    moduleId: module.id,
    selector: "clr-old-wizard-async-validation",
    templateUrl: "./wizard-async-validation.demo.html"
})
export class WizardAsyncValidation {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("myForm") formData: any;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        setTimeout(() => {
            if (value.answer === "42") {
                this.wizard.next();
            } else {
                this.errorFlag = true;
            }
            this.loadingFlag = false;
        }, 1000);
    }

    code: string = `
import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";
import {MyValidationService} from "service/my-validation";

@Component({
    ...
    providers: [MyValidationService]
})
export class WizardAsyncValidation {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("myForm") formData: any;

    open: boolean = false;
    loadingFlag: boolean = false;
    errorFlag: boolean = false;

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        MyValidationService.validate(this.formData.value)
            .subscribe(
                data => {
                    this.loadingFlag = false;
                    // on passing validation, programmatically call next to move to next step
                    this.wizard.next(); 
                },
                error => {
                    this.loadingFlag = false;
                    this.errorFlag = true;
                }
            );
    }
}
    `;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open">
    <div class="wizard-title">
        Wizard Title
    </div>

    <clr-wizard-step>Async validation</clr-wizard-step>
    <clr-wizard-step>Wizard complete</clr-wizard-step>

    <clr-wizard-page [clrWizardPagePreventDefault]="true" (clrWizardPageOnCommit)="onCommit()">
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
        Congratulations! Now you know the answer to life, the universe and everything!
    </clr-wizard-page>
</clr-wizard>
`;

}
