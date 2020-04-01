/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-stop-navigation',
  templateUrl: './wizard-stop-navigation.demo.html',
})
export class WizardStopNavigation {
  @ViewChild('wizard', { static: true })
  wizard: ClrWizard;

  untouched = true;
  loading = false;
  errorFlag = false;
  progress = 0;
  open = false;

  get readyToFinish(): boolean {
    return !this.untouched && !this.loading;
  }

  model = {
    won: '',
    too: '',
    tree: '',
  };

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizard.close();
    this.resetWizard();
  }

  resetWizard(): void {
    this.wizard.reset();
    this.model.won = '';
    this.model.too = '';
    this.model.tree = '';
    this.progress = 0;
  }

  onCommit(): void {
    if (this.untouched) {
      this.untouched = false;
      this.loading = true;
      const timer = setInterval(() => {
        this.progress = this.progress + 14;

        if (this.progress > 99) {
          this.progress = 100;
          this.loading = false;
          clearInterval(timer);
        }
      }, 1000);
    } else {
      this.wizard.forceFinish();
      this.resetWizard();
    }
  }

  code = `
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardStopNavigation {
    @ViewChild("wizard") wizard: ClrWizard;

    untouched: boolean = true;
    loading: boolean = false;
    errorFlag: boolean = false;
    progress: number = 0;

    get readyToFinish(): boolean {
        return !this.untouched && !this.loading;
    }

    model = {
        won: "",
        too: "",
        tree: ""
    };

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
        this.resetWizard();
    }

    resetWizard(): void {
        this.wizard.reset();
        this.model.won = "";
        this.model.too = "";
        this.model.tree = "";
        this.progress = 0;
    }

    onCommit(): void {
        if (this.untouched) {
            this.untouched = false;
            this.loading = true;
            let timer = setInterval(() => {
                this.progress = this.progress + 14;

                if (this.progress > 99) {
                    this.progress = 100;
                    this.loading = false;
                    clearInterval(timer);
                }
            }, 1000);
        } else {
            this.wizard.forceFinish();
            this.resetWizard();
        }
    }
`;

  html = `
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'lg'"
    [clrWizardPreventNavigation]="loading"
    [clrWizardDisableStepnav]="readyToFinish"
    [clrWizardPreventDefaultCancel]="true"
    (clrWizardOnCancel)="doCancel()"
    [clrWizardClosable]="!readyToFinish">
    <clr-wizard-title>Wizard stops navigating while validating</clr-wizard-title>

    <clr-wizard-button type="cancel" *ngIf="!readyToFinish">Cancel</clr-wizard-button>
    <clr-wizard-button type="previous" *ngIf="!readyToFinish">Back</clr-wizard-button>
    <clr-wizard-button type="next">Next</clr-wizard-button>
    <clr-wizard-button type="finish">
        <span *ngIf="untouched && !loading">Validate</span>
        <span *ngIf="loading">Please wait...</span>
        <span *ngIf="readyToFinish">OK</span>
    </clr-wizard-button>

    <clr-wizard-page
        [clrWizardPageNextDisabled]="(name.pristine && quest.pristine && velocity.pristine) || !formPage.valid">
        <ng-template clrPageTitle>Form to submit</ng-template> <!-- mandatory -->

        <form clrForm #formPage="ngForm">
          <label>To proceed, you must answer these three questions...</label>
          <clr-input-container>
            <label>What is your name?</label>
            <input clrInput name="name" required [(ngModel)]="model.won" #name="ngModel" />
            <clr-control-error>This field is required!</clr-control-error>
          </clr-input-container>

          <clr-input-container>
            <label>What is your quest?</label>
            <input clrInput name="quest" required [(ngModel)]="model.too" #quest="ngModel" />
            <clr-control-error>This field is required!</clr-control-error>
          </clr-input-container>

          <clr-input-container>
            <label>What is the air-speed velocity of an unladen swallow?</label>
            <input clrInput name="velocity" required [(ngModel)]="model.tree" #velocity="ngModel" />
            <clr-control-error>This field is required!</clr-control-error>
          </clr-input-container>
        </form>
    </clr-wizard-page>
    <clr-wizard-page
        [clrWizardPagePreventDefaultNext]="true"
        (clrWizardPageOnCommit)="onCommit()">
        <ng-template clrPageTitle>
            Validate your information
        </ng-template>
        <ng-template clrPageNavTitle>
            <span *ngIf="!readyToFinish">Validate Info</span>
            <span *ngIf="readyToFinish">Ready to Go!</span>
        </ng-template>

        <p *ngIf="untouched && !loading">
            Click the Validate button to kick off a timed routine. While the validation is running,
            try clicking buttons and stepnav items. Note that they don't do anything while the
            validation is running. The validation is just an exercise. It will not fail.
        </p>

        <ng-container *ngIf="loading">
            <p>Loading...</p>
            <div class="progress">
                <progress [value]="progress" max="100" [attr.data-displayval]="progress + '%'"></progress>
            </div>
        </ng-container>

        <p *ngIf="readyToFinish">
            Click on the OK button to close the wizard.
        </p>
    </clr-wizard-page>
</clr-wizard>
`;
}
