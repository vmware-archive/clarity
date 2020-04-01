/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-form-validation',
  templateUrl: './wizard-form-validation.demo.html',
})
export class WizardFormValidation {
  @ViewChild('wizard', { static: true })
  wizard: ClrWizard;
  @ViewChild('number', { static: true })
  numberField: any;

  open = false;

  model = {
    name: '',
    favorite: '',
    number: '',
  };

  code = `
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardFormValidation {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("number") numberFi: any;

    model = {
        name: "",
        favorite: "",
        number: ""
    };
}
`;

  html = `
<clr-wizard #wizard [(clrWizardOpen)]="open">
  <clr-wizard-title>Wizard with form validation</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Close</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Previous</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Done</clr-wizard-button>

  <clr-wizard-page [clrWizardPageNextDisabled]="name.pristine || !formPageOne.valid">
      <ng-template clrPageTitle>Form with validation</ng-template> <!-- mandatory -->

      <form clrForm #formPageOne="ngForm">
        <clr-input-container>
          <label>Name</label>
          <input clrInput required [(ngModel)]="model.name" name="name" #name="ngModel" />
          <clr-control-error>This field is required!</clr-control-error>
        </clr-input-container>

        <clr-input-container>
          <label>Favorite food</label>
          <input clrInput [(ngModel)]="model.favorite" name="favorite" />
        </clr-input-container>
      </form>
  </clr-wizard-page>

  <clr-wizard-page [clrWizardPageNextDisabled]="number.pristine || !formPageTwo.valid">
      <ng-template clrPageTitle>We need a number</ng-template> <!-- mandatory -->
      <ng-template clrPageNavTitle>Enter a number</ng-template> <!-- optional -->

      <form #formPageTwo="ngForm">
        <label>Please your lucky number!</label>
        <clr-input-container>
          <label>Your number</label>
          <input clrInput required type="number" [(ngModel)]="model.number" name="number" #number="ngModel" />
          <clr-control-error>This field is required!</clr-control-error>
        </clr-input-container>
      </form>
  </clr-wizard-page>

  <clr-wizard-page [clrWizardPageNextDisabled]="!formPageOne.valid || !formPageTwo.valid">
      <ng-template clrPageTitle>Title for page 3</ng-template> <!-- mandatory -->
      <ng-template clrPageNavTitle>
          <span *ngIf="formPageOne.valid && formPageTwo.valid">
              Ready to go!
          </span>
          <span *ngIf="!formPageOne.valid || !formPageTwo.valid">
              Not ready yet
          </span>
      </ng-template> <!-- optional -->

      <div *ngIf="formPageOne.valid && formPageTwo.valid">
          <p>Congratulations! You are done with this wizard.</p>
          <label>Your information</label>
          <section>
            <p>
              <label>Your name:</label>
              <span>{{ this.model.name }}</span>
            </p>
            <p>
              <label>Your favorite food:</label>
              <span>{{ this.model.favorite }}</span>
            </p>
            <p>
              <label>Your lucky number:</label>
              <span>{{ this.model.number }}</span>
            </p>
          </section>
      </div>

      <div *ngIf="!formPageOne.valid || !formPageTwo.valid">
          <p>Not quite there yet.</p>
      </div>

  </clr-wizard-page>
</clr-wizard>
`;
}
