/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { ClrWizard, ClrWizardPage } from "@clr/angular";

@Component({
    selector: "clr-wizard-jump-to",
    templateUrl: "./wizard-jump-to.demo.html"
})
export class WizardJumpToDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("pageThree") pageThree: ClrWizardPage;
    @ViewChild("pageFive") pageFive: ClrWizardPage;

    open: boolean = false;

    public jumpTo(page: ClrWizardPage) {
        if (page && page.completed) {
            this.wizard.navService.currentPage = page;
        } else {
            this.wizard.navService.setLastEnabledPageCurrent();
        }
        this.wizard.open();
    }

    public jumpToThree(): void {
        this.jumpTo(this.pageThree);
    }

    public jumpToFive(): void {
        this.jumpTo(this.pageFive);
    }

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { ClrWizard, ClrWizardPage } from "@clr/angular";

@Component({
    ...
})
export class WizardJumpToDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("pageThree") pageThree: ClrWizardPage;
    @ViewChild("pageFive") pageFive: ClrWizardPage;

    public jumpTo(page: ClrWizardPage) {
        if (page && page.completed) {
            this.wizard.navService.currentPage = page;
        } else {
            this.wizard.navService.setLastEnabledPageCurrent();
        }
        this.wizard.open();
    }

    public jumpToThree(): void {
        this.jumpTo(this.pageThree);
    }

    public jumpToFive(): void {
        this.jumpTo(this.pageFive);
    }
}
    `;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'md'">
    <clr-wizard-title>Jump-To Wizard</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Done</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 1</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 2</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page #pageThree>
        <ng-template clrPageTitle>Page 3</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 4</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page #pageFive>
        <ng-template clrPageTitle>Page 5</ng-template>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
