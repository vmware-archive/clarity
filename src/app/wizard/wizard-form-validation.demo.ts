/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ViewChild} from "@angular/core";
import {Wizard} from "../../clarity-angular/wizard/wizard";

@Component(
    {moduleId: module.id, selector: "clr-wizard-form-validation", templateUrl: "./wizard-form-validation.demo.html"})
export class WizardFormValidation {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("number") numberField: any;

    model = {name: "", favorite: "", number: ""};

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";

@Component({
    ...
})
export class WizardFormValidation {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("number") numberFi: any;

    model = {
        name: "",
        favorite: "",
        number: ""
    };
}
`;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open">
    <clr-wizard-title>Wizard with form validation</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Close</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Previous</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Done</clr-wizard-button>

    <clr-wizard-page [clrWizardPageNextDisabled]="name.pristine || !formPageOne.valid">
        <ng-template clrPageTitle>Form with validation</ng-template> <!-- mandatory -->
        <form #formPageOne="ngForm">
            <section class="form-block">
                <label>Enter a name and favorite food</label>
                <div class="form-group">
                    <label>Name</label>
                    <label for="nameInput" aria-haspopup="true" role="tooltip"
                        [class.invalid]="name.touched && !name.valid"
                        class="tooltip tooltip-validation tooltip-md tooltip-bottom-right">
                        <input type="text" id="nameInput" required [(ngModel)]="model.name" name="name" #name="ngModel">
                        <span class="tooltip-content">This field cannot be empty!</span>
                    </label>
                </div>
                <div class="form-group">
                    <label for="favInput">Favorite food</label>
                    <input type="text" id="favInput" [(ngModel)]="model.favorite" name="favorite">
                </div>
            </section>
        </form>
    </clr-wizard-page>

    <clr-wizard-page [clrWizardPageNextDisabled]="number.pristine || !formPageTwo.valid">
        <ng-template clrPageTitle>We need a number</ng-template> <!-- mandatory -->
        <ng-template clrPageNavTitle>
            Enter a number
        </ng-template> <!-- optional -->
        <form #formPageTwo="ngForm">
            <section class="form-block">
                <label>Please your lucky number!</label>
                <div class="form-group">
                    <label>Your number</label>
                    <label for="numberInput" aria-haspopup="true" role="tooltip"
                        [class.invalid]="number.touched && !number.valid"
                        class="tooltip tooltip-validation tooltip-md tooltip-bottom-right">
                        <input type="number" id="numberInput" required [(ngModel)]="model.number" 
                            name="number" #number="ngModel">
                        <span class="tooltip-content">
                            This field cannot be empty!
                        </span>
                    </label>
                </div>
            </section>
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
            <form class="compact">
                <label>Your information</label>
                <section class="form-block">
                    <div class="form-group">
                        <label>Your name:</label>
                        <span>{{ this.model.name }}</span>
                    </div>
                    <div class="form-group">
                        <label>Your favorite food:</label>
                        <span>{{ this.model.favorite }}</span>
                    </div>
                    <div class="form-group">
                        <label>Your lucky number:</label>
                        <span>{{ this.model.number }}</span>
                    </div>
                </section>
            </form>
        </div>

        <div *ngIf="!formPageOne.valid || !formPageTwo.valid">
            <p>Not quite there yet.</p>
        </div>

    </clr-wizard-page>
</clr-wizard>
`;
}
