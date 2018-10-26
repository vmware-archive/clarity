/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
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

    code: string = `
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

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open" (clrWizardOnFinish)="doFinish()"
    (clrWizardOnCancel)="doFinish()">

    <clr-wizard-title>
        {{ model.forceReset ? "Wizard resets" : "Wizard doesn't reset" }}
    </clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">OK</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 1</ng-template>
        <p>Check below if you want the wizard to reset when it finishes or closes.</p>
        <p>
            <label>
                <input #forceReset type="checkbox" name="forceReset" [(ngModel)]="model.forceReset">
                Force reset on close
            </label>
        </p>
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 2</ng-template>
        <div class="form-group">
            <label for="formFields_1">What is your favorite color?</label>
            <input #stepTwoInput type="text" id="formFields_1" placeholder="Color?" [(ngModel)]="model.favoriteColor">
        </div>
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 3</ng-template>
        <div class="form-group">
            <label for="formFields_2">What is your favorite ice cream?</label>
            <input #stepThreeInput type="text" id="formFields_2" placeholder="Flavor?"
                [(ngModel)]="model.flavorOfIceCream">
        </div>
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>Page 4</ng-template>
        <div class="form-group">
            <label for="formFields_3">What is your lucky number?</label>
            <input #stepFourInput type="number" id="formFields_3" placeholder="Lucky number?"
                [(ngModel)]="model.luckyNumber">
        </div>
    </clr-wizard-page>
</clr-wizard>
`;
}
