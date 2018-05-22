/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-no-cancel",
    templateUrl: "./wizard-no-cancel.demo.html"
})
export class WizardNoCancel {
    @ViewChild("wizard") wizard: ClrWizard;

    open: boolean = false;

    pageArray: string[] = [ "1", "2", "3" ];

    // adding a reset here for sanity's sake
    reset(): void {
        this.wizard.reset();
    }

    code: string = `
@Component({
    ...
})
export class WizardNoCancel {
    @ViewChild("wizard") wizard: ClrWizard;
    open: boolean = false;
    pageArray: string[] = [ "1", "2", "3" ];

    // adding a reset here for sanity's sake
    reset(): void {
        this.wizard.reset();
    }
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open"
    [clrWizardClosable]="false"
    [clrWizardSize]="'md'"
    (clrWizardOnFinish)="reset()">
    <clr-wizard-title>Wizard that you can't close</clr-wizard-title>

    <clr-wizard-button type="previous">Back</clr-wizard-button>
    <clr-wizard-button type="next">Next</clr-wizard-button>

    <clr-wizard-page *ngFor="let page of pageArray">
        <ng-template clrPageTitle>Page {{page}}</ng-template> <!-- mandatory -->
        <p>Page {{ page }} of {{ pageArray.length }}</p>

        <ng-template clrPageButtons *ngIf="page === '3'">
            <clr-wizard-button type="finish">YAY</clr-wizard-button>
        </ng-template>
    </clr-wizard-page>
</clr-wizard>
`;
}
