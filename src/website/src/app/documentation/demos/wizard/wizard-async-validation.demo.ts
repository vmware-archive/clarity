/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-async-validation',
  templateUrl: './wizard-async-validation.demo.html',
})
export class WizardAsyncValidation {
  @ViewChild('wizard', { static: true })
  wizard: ClrWizard;
  @ViewChild('myForm', { static: true })
  formData: any;

  loadingFlag = false;
  errorFlag = false;
  answer: number = null;
  open = false;

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizard.close();
  }

  onCommit(): void {
    const value: any = this.formData.value;
    this.loadingFlag = true;
    this.errorFlag = false;

    setTimeout(() => {
      if (value.answer === '42') {
        this.wizard.forceNext();
      } else {
        this.errorFlag = true;
      }
      this.loadingFlag = false;
    }, 1000);
  }

  code = `
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

  html = `
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
      <ng-template clrPageTitle>Form with async validation</ng-template> <!-- mandatory -->

      <clr-spinner *ngIf="loadingFlag">
          Loading
      </clr-spinner>
      <clr-alert [clrAlertType]="'alert-info'" [clrAlertClosable]="false" [clrCloseButtonAriaLabel]="'Close Wiki alert'">
          <clr-alert-item>
              This&nbsp;<a
                  href="https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy"
                  target="_blank">wiki article</a>&nbsp;might help you answer the question.
          </clr-alert-item>
      </clr-alert>
      <clr-alert *ngIf="errorFlag" [clrAlertType]="'alert-danger'" [clrCloseButtonAriaLabel]="'Close Answer alert'">
          <clr-alert-item>
              Your answer is incorrect.
          </clr-alert-item>
      </clr-alert>

      <form clrForm #myForm="ngForm" [class.hide]="loadingFlag">
        <clr-input-container>
          <label>The answer to life, the universe and everything</label>
          <input clrInput [(ngModel)]="answer" name="answer" />
        </clr-input-container>
      </form>
  </clr-wizard-page>
  <clr-wizard-page>
    ...
  </clr-wizard-page>
</clr-wizard>
`;
}
