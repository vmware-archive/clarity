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

            <ng-container *ngFor="let page of pages">
                <clr-wizard-page *ngIf="!(page === 2) || showSecondPage" [id]="page">
                    <ng-template clrPageTitle>Page {{ page }}</ng-template>
                    <p>Content for page {{ page }}</p>
                </clr-wizard-page>
            </ng-container>
        </clr-wizard>
    `,
})
export class DynamicWizardTestComponent {
  @ViewChild('wizard') wizard: ClrWizard;
  open: boolean = true;
  pages = [1, 2, 4];
  showSecondPage = true;
}
