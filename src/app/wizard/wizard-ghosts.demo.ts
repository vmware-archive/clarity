/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ViewChild} from "@angular/core";

import {ClrCodeHighlight} from "../../clr-angular/code/syntax-highlight/syntax-highlight";
import {ClrWizard} from "../../clr-angular/wizard/wizard";

@Component({selector: "clr-wizard-ghosts", templateUrl: "./wizard-ghosts.demo.html"})
export class WizardGhostsDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild(ClrCodeHighlight) codeHighlight: ClrCodeHighlight;

    public model: any;

    public ngOnInit() {
        this.model = {typesOfPages: ""};
    }

    open: boolean = false;

    typesOfPages = ["All", "Odd", "First and even", "First and last"];

    get isAll(): boolean {
        return this.model.typesOfPages === "" || this.model.typesOfPages === "All" || this.model.typesOfPages === null;
    }

    get showEvenPages(): boolean {
        return this.isAll || this.model.typesOfPages === "First and even";
    }

    get showPageThree(): boolean {
        return this.isAll || this.model.typesOfPages === "Odd";
    }

    get showPageFive(): boolean {
        return this.isAll || this.model.typesOfPages === "Odd" || this.model.typesOfPages === "First and last";
    }

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clr-angular/wizard/wizard";

@Component({
    ...
})
export class WizardGhostsDemo {
    @ViewChild("wizard") wizard: Wizard;
    ...
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardShowGhostPages]="true">
    <clr-wizard-title>Ghost Pages</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Title for page 1</ng-template>
        <ng-template clrPageNavTitle>Step 1</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page *ngIf="showEvenPages">
        <ng-template clrPageTitle>Title for page 2</ng-template>
        <ng-template clrPageNavTitle>Step 2</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page *ngIf="showPageThree">
        <ng-template clrPageTitle>Title for page 3</ng-template>
        <ng-template clrPageNavTitle>Step 3</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page *ngIf="showEvenPages">
        <ng-template clrPageTitle>Title for page 4</ng-template>
        <ng-template clrPageNavTitle>Step 4</ng-template>
        ...
    </clr-wizard-page>

    <clr-wizard-page *ngIf="showPageFive">
        <ng-template clrPageTitle>Title for page 5</ng-template>
        <ng-template clrPageNavTitle>Step 5</ng-template>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
