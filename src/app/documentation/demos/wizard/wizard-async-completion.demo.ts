/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from "@angular/core";
import { ClrWizard, ClrWizardPage } from "@clr/angular";

@Component({
  selector: "clr-wizard-async-completion",
  templateUrl: "./wizard-async-completion.demo.html"
})
export class WizardAsyncCompletion {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("myForm") formData: any;
    @ViewChild("myFinishPage") finishPage: ClrWizardPage;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;
    checked = false;
    finished = false;
    open: boolean = false;
    answer: number = null;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
    }

    get showCongrats(): boolean {
      return !this.errorFlag && this.checked;
    }

    resetFinalPage(): void {
      this.loadingFlag = false;
      this.errorFlag = false;
      this.checked = false;
    }

    goBack(): void {
      this.wizard.previous();
    }

    doFinish(): void {
      this.wizard.forceFinish();
      this.resetFinalPage();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        if (this.finished) {
          this.doFinish();
          return;
        }

        setTimeout(() => {
            if (value.answer === "42") {
              this.finished = true;
            } else {
                this.finishPage.completed = false;
                this.errorFlag = true;
            }
            this.checked = true;
            this.loadingFlag = false;
        }, 1000);
    }

    code: string = `import { ClrWizard, ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardAsyncCompletion {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("myForm") formData: any;
    @ViewChild("myFinishPage") finishPage: ClrWizardPage;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;
    checked = false;
    finished = false;
    open: boolean = false;
    answer: number = null;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
    }

    get showCongrats(): boolean {
      return !this.errorFlag && this.checked;
    }

    resetFinalPage(): void {
      this.loadingFlag = false;
      this.errorFlag = false;
      this.checked = false;
    }

    goBack(): void {
      this.wizard.previous();
    }

    doFinish(): void {
      this.wizard.forceFinish();
      this.resetFinalPage();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        if (this.finished) {
          this.doFinish();
          return;
        }

        setTimeout(() => {
            if (value.answer === "42") {
              this.finished = true;
            } else {
                this.finishPage.completed = false;
                this.errorFlag = true;
            }
            this.checked = true;
            this.loadingFlag = false;
        }, 1000);
    }
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open" (clrWizardCurrentPageChanged)="resetFinalPage()">
    <clr-wizard-title>Async validation on completion</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">
      {{ finished ? "Done" : "Check Form" }}
    </clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Form question</ng-template> <!-- mandatory -->

        <clr-alert [clrAlertType]="'alert-info'" [clrAlertClosable]="false">
            <div class="alert-item">
                This&nbsp;<a
                    href="https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy"
                    target="_blank">wiki article</a>&nbsp;might help you answer the question.
            </div>
        </clr-alert>
        <form #myForm="ngForm">
            <section class="form-block">
                <div class="form-group">
                    <label for="fourtyTwoInput">The answer to life, the universe and everything</label>
                    <input type="text" id="fourtyTwoInput" [(ngModel)]="answer" name="answer">
                </div>
            </section>
        </form>
    </clr-wizard-page>
    <clr-wizard-page #myFinishPage
        clrWizardPagePreventDefault="true"
        (clrWizardPageOnCommit)="onCommit()"
        (clrWizardPageOnCancel)="doCancel()"
        (clrWizardPagePrevious)="goBack()">
        <ng-template clrPageTitle>Async validation on finish</ng-template> <!-- mandatory -->

        <clr-alert *ngIf="errorFlag" [clrAlertType]="'alert-danger'">
            <div class="alert-item">
                Your answer is incorrect.
            </div>
        </clr-alert>

        <div class="spinner" *ngIf="loadingFlag">
            Loading...
        </div>

        <p *ngIf="errorFlag && !loadingFlag">Go back and try again!</p>

        <p *ngIf="showCongrats && !loadingFlag">Congratulations! Now you know the answer to life, the universe and everything!</p>

        <p *ngIf="!checked && !loadingFlag">Click finish to see if you got the answer right.</p>
    </clr-wizard-page>
</clr-wizard>
`;
}
