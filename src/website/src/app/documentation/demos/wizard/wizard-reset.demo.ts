/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-reset',
  templateUrl: './wizard-reset.demo.html',
})
export class WizardResetDemo implements OnInit {
  @ViewChild('wizard', { static: true })
  wizard: ClrWizard;

  public open = false;

  public model: any;

  public ngOnInit() {
    this.model = {
      forceReset: false,
      favoriteColor: '',
      luckyNumber: '',
      flavorOfIceCream: '',
    };
  }

  public doFinish(): void {
    this.doReset();
  }

  public doReset(): void {
    if (this.model.forceReset) {
      this.wizard.reset();
      this.model.forceReset = false;
      this.model.favoriteColor = '';
      this.model.luckyNumber = '';
      this.model.flavorOfIceCream = '';
    }
  }

  code = `
import { Component, OnInit, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-reset",
    templateUrl: "./wizard-reset.demo.html"
})
export class WizardResetDemo implements OnInit {
    @ViewChild("wizard") wizard: ClrWizard;

    public open: boolean = false;

    public model: any;

    public ngOnInit() {
        this.model = {
            forceReset: false,
            favoriteColor: "",
            luckyNumber: "",
            flavorOfIceCream: ""
        };
    }

    public doFinish(): void {
        this.doReset();
    }

    public doReset(): void {
        if (this.model.forceReset) {
            this.wizard.reset();
            this.model.forceReset = false;
            this.model.favoriteColor = "";
            this.model.luckyNumber = "";
            this.model.flavorOfIceCream = "";
        }
    }
}
`;

  html = `
<clr-wizard #wizard 
  [(clrWizardOpen)]="open"
  [clrWizardSize]="'md'"
  (clrWizardOnFinish)="doFinish()"
  (clrWizardOnCancel)="doFinish()">

  <clr-wizard-title>
      {{ model.forceReset ? "Wizard resets" : "Wizard doesn't reset" }}
  </clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">OK</clr-wizard-button>

  <clr-wizard-page>
      <ng-template clrPageTitle>Page 1</ng-template> <!-- mandatory -->

      <p>Check below if you want the wizard to reset when it finishes or closes.</p>

      <clr-checkbox-wrapper>
        <input #forceReset type="checkbox" clrCheckbox name="forceReset" [(ngModel)]="model.forceReset" />
        <label>Force reset on close</label>
      </clr-checkbox-wrapper>
  </clr-wizard-page>

  <clr-wizard-page>
      <ng-template clrPageTitle>Page 2</ng-template> <!-- mandatory -->
      <clr-input-container>
        <label>What is your favorite color?</label>
        <input clrInput placeholder="Color?" #stepTwoInput [(ngModel)]="model.favoriteColor" />
      </clr-input-container>
  </clr-wizard-page>

  <clr-wizard-page>
      <ng-template clrPageTitle>Page 3</ng-template> <!-- mandatory -->
      <clr-input-container>
        <label>What is your favorite ice cream?</label>
        <input clrInput placeholder="Flavor?" #stepThreeInput [(ngModel)]="model.flavorOfIceCream" />
      </clr-input-container>
  </clr-wizard-page>

  <clr-wizard-page>
      <ng-template clrPageTitle>Page 4</ng-template> <!-- mandatory -->
      <clr-input-container>
        <label>What is your lucky number?</label>
        <input clrInput placeholder="Lucky number?" #stepFourInput type="number" [(ngModel)]="model.luckyNumber" />
      </clr-input-container>
  </clr-wizard-page>
</clr-wizard>
`;
}
