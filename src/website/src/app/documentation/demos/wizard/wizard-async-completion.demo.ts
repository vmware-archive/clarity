/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ClrWizard, ClrWizardPage } from '@clr/angular';

@Component({
  selector: 'clr-wizard-async-completion',
  templateUrl: './wizard-async-completion.demo.html',
})
export class WizardAsyncCompletion {
  @ViewChild('wizard', { static: true })
  wizard: ClrWizard;
  @ViewChild('myForm', { static: true })
  formData: any;
  @ViewChild('myFinishPage', { static: true })
  finishPage: ClrWizardPage;

  loadingFlag = false;
  errorFlag = false;
  checked = false;
  finished = false;
  open = false;
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
    const value: any = this.formData.value;
    this.loadingFlag = true;
    this.errorFlag = false;

    if (this.finished) {
      this.doFinish();
      return;
    }

    setTimeout(() => {
      if (value.answer === '42') {
        this.finished = true;
      } else {
        this.finishPage.completed = false;
        this.errorFlag = true;
      }
      this.checked = true;
      this.loadingFlag = false;
    }, 1000);
  }

  code = `import { ClrWizard, ClrWizard } from "@clr/angular";

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

  html = `
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

        <clr-alert [clrAlertType]="'alert-info'" [clrAlertClosable]="false" [clrCloseButtonAriaLabel]="'Close Wiki alert'">
            <div class="alert-item">
                This&nbsp;<a
                    href="https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy"
                    target="_blank">wiki article</a>&nbsp;might help you answer the question.
            </div>
        </clr-alert>
        <form clrForm #myForm="ngForm">
          <clr-input-container>
            <label>The answer to life, the universe and everything</label>
            <input clrInput [(ngModel)]="answer" name="answer" />
          </clr-input-container>
        </form>
    </clr-wizard-page>
    <clr-wizard-page #myFinishPage
        clrWizardPagePreventDefault="true"
        (clrWizardPageOnCommit)="onCommit()"
        (clrWizardPageOnCancel)="doCancel()"
        (clrWizardPagePrevious)="goBack()">
        <ng-template clrPageTitle>Async validation on finish</ng-template> <!-- mandatory -->

        <clr-alert *ngIf="errorFlag" [clrAlertType]="'alert-danger'" [clrCloseButtonAriaLabel]="'Close Answer alert'">
            <div class="alert-item">
                Your answer is incorrect.
            </div>
        </clr-alert>

        <clr-spinner *ngIf="loadingFlag">
            Loading
        </clr-spinner>

        <p *ngIf="errorFlag && !loadingFlag">Go back and try again!</p>

        <p *ngIf="showCongrats && !loadingFlag">Congratulations! Now you know the answer to life, the universe and everything!</p>

        <p *ngIf="!checked && !loadingFlag">Click finish to see if you got the answer right.</p>
    </clr-wizard-page>
</clr-wizard>
`;
}
