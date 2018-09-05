/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {ClrWizard} from "@clr/angular";

@Component({
    selector: "clr-wizard-basic",
    templateUrl: "./wizard-basic.demo.html"
})
export class WizardBasic {
    @ViewChild("wizardmd") wizardMedium: ClrWizard;
    @ViewChild("wizardlg") wizardLarge: ClrWizard;
    @ViewChild("wizardxl") wizardExtraLarge: ClrWizard;

    mdOpen: boolean = false;
    lgOpen: boolean = false;
    xlOpen: boolean = false;

    code: string = `import {Component, ViewChild} from "@angular/core";
import {ClrWizard} from "@clr/angular";

@Component({
    ...
})
export class WizardBasic {
    @ViewChild("wizardmd") wizardMedium: ClrWizard;
    @ViewChild("wizardlg") wizardLarge: ClrWizard;
    @ViewChild("wizardxl") wizardExtraLarge: ClrWizard;

    mdOpen: boolean = false;
    lgOpen: boolean = false;
    xlOpen: boolean = false;
`;

    html: string = `<clr-wizard #wizardmd [(clrWizardOpen)]="mdOpen" clrWizardSize="md">
    <clr-wizard-title>Medium-Sized Wizard</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 1</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 2</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 3</ng-template>
        ...
    </clr-wizard-page>
</clr-wizard>

<clr-wizard #wizardlg [(clrWizardOpen)]="lgOpen" clrWizardSize="lg">
    <clr-wizard-title>Large-Sized Wizard</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 1</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 2</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 3</ng-template>
        ...
    </clr-wizard-page>
</clr-wizard>

<clr-wizard #wizardxl [(clrWizardOpen)]="xlOpen">
    <clr-wizard-title>XL Wizard (Default)</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 1</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 2</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 3</ng-template>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
