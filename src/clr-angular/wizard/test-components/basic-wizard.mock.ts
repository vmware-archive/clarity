/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '../wizard';

@Component({
  template: `
        <clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'lg'">
            <clr-wizard-title>My Wizard Title</clr-wizard-title>
            <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
            <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
            <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
            <clr-wizard-button [type]="'finish'">Fait Accompli</clr-wizard-button>

            <clr-wizard-page>
                <ng-template clrPageTitle>Longer Title for Page 1</ng-template>
                <p>Content for step 1</p>
            </clr-wizard-page>
            <clr-wizard-page>
                <ng-template clrPageTitle>Title for Page 2</ng-template>
                <p>Content for step 2</p>
            </clr-wizard-page>
            <clr-wizard-page>
                <ng-template clrPageTitle>Title for Page 3</ng-template>
                <p>Content for step 3</p>
            </clr-wizard-page>
            <clr-wizard-page>
                <ng-template clrPageTitle>Title for Page 4</ng-template>
                <p>Content for step 4</p>
            </clr-wizard-page>
            <clr-wizard-page>
                <ng-template clrPageTitle>Title for Page 5</ng-template>
                <p>Content for step 5</p>
            </clr-wizard-page>
        </clr-wizard>
    `,
})
export class BasicWizardTestComponent {
  @ViewChild('wizard') wizard: ClrWizard;
  open: boolean = true;
}
