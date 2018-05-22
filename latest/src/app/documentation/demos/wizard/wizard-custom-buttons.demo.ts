/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    selector: "clr-wizard-custom-buttons",
    templateUrl: "./wizard-custom-buttons.demo.html"
})
export class WizardCustomButtonsDemo {
    @ViewChild("wizard") wizard: ClrWizard;

    open: boolean = false;

    public handleDangerClick(): void {
        this.wizard.finish();
    }

    public showWarning = false;

    public doCustomClick(buttonType: string): void {
        if ("custom-next" === buttonType) {
            this.wizard.next();
        }

        if ("custom-previous" === buttonType) {
            this.wizard.previous();
        }

        if ("custom-danger" === buttonType) {
            this.showWarning = true;
        }
    }

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardCustomButtonsDemo {
    @ViewChild("wizard") wizard: ClrWizard;

    public handleDangerClick(): void {
        this.wizard.finish();
    }

    public showWarning = false;

    public doCustomClick(buttonType: string): void {
        if ("custom-next" === buttonType) {
            this.wizard.next();
        }

        if ("custom-previous" === buttonType) {
            this.wizard.previous();
        }

        if ("custom-danger" === buttonType) {
            this.showWarning = true;
        }
    }
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'lg'">

    <clr-wizard-title>Custom and default buttons</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Default</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Default</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Default</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Default</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 1 with default buttons</ng-template>
        <ng-template clrPageNavTitle>Default buttons</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page (clrWizardPageCustomButton)="doCustomClick($event)">

        <ng-template clrPageTitle>Page 2 with custom buttons</ng-template>
        <ng-template clrPageNavTitle>Custom buttons</ng-template>
        ...

        <ng-template clrPageButtons>
            <clr-wizard-button [type]="'cancel'">Page Override</clr-wizard-button>
            <clr-wizard-button [type]="'custom-previous'">Custom</clr-wizard-button>
            <clr-wizard-button [type]="'custom-next'">Custom</clr-wizard-button>
        </ng-template>
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 3 with default buttons</ng-template>
        <ng-template clrPageNavTitle>Default buttons</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page (clrWizardPageCustomButton)="doCustomClick($event)">
        <ng-template clrPageTitle>Page 4 with custom finish</ng-template>
        <ng-template clrPageNavTitle>Custom buttons</ng-template>

        <p *ngIf="!showWarning">
            ...
        </p>

        <p *ngIf="showWarning">
            <button type="submit" class="btn btn-danger" (click)="handleDangerClick()">
                Click here if you are sure
            </button>
        </p>

        <ng-template clrPageButtons>
            <clr-wizard-button [type]="'cancel'">Page Override</clr-wizard-button>
            <clr-wizard-button [type]="'previous'">Page Override</clr-wizard-button>
            <clr-wizard-button [type]="'custom-danger'">Custom</clr-wizard-button>
        </ng-template>
    </clr-wizard-page>
</clr-wizard>
`;
}
