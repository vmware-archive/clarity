/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";
import { WizardPage } from "../../clarity-angular/wizard/wizard-page";
import { CodeHighlight } from "../../clarity-angular/code/code-highlight";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-options",
    templateUrl: "./wizard-options.demo.html"
})
export class WizardOptionsDemo implements OnInit {
    @ViewChild("wizardmd") wizardMedium: Wizard;
    @ViewChild("wizardlg") wizardLarge: Wizard;
    @ViewChild("wizardxlg") wizardDefault: Wizard;
    @ViewChild("stepTwoInput") myInput: any;
    @ViewChild("myPage") myPage: WizardPage;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    code: string = `
import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";

@Component({
    ...
})
export class WizardSimple {
    @ViewChild("wizard") wizard: Wizard;
    open: boolean = false; // you can open the wizard by setting this variable to true

    // you can also open the wizard programmatically here by calling wizard.open()

}
    `;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'lg'">
    <div class="wizard-title">Wizard Title</div>

    <clr-wizard-step>Step 1</clr-wizard-step>
    <clr-wizard-step>Step 2</clr-wizard-step>
    <clr-wizard-step>Step 3</clr-wizard-step>

    <clr-wizard-page>Content for step 1</clr-wizard-page>
    <clr-wizard-page>Content for step 2</clr-wizard-page>
    <clr-wizard-page>Content for step 3</clr-wizard-page>
</clr-wizard>
`;

    public showStepThree: boolean = false;

    public model: any;

    public ngOnInit() {
        this.model = {
            forceReset: false,
            okToClick: false,
            myNumber: null
        };
    }

    public handlePrimaryClick(page: any): void {
        // SPECME
    }

    public handleDangerClick(page: any): void {
        // SPECME
    }

    public handleFinishClick(page: any): void {
        // SPECME
    }

    public highVoltage() {
        // SPECME
    }

    public doTestHere(): boolean {
        return true;
    }

    public handlePageChange(): void {
        // SPECME: make sure this works
    }

    public get stepFourIsReady(): boolean {
        if (!this.myInput || !this.myInput.nativeElement.value) {
            return false;
        }
        // TOFIX? THIS IS THE ABSOLUTE WORST WAY TO DO THIS...
        return !isNaN(this.myInput.nativeElement.value);
    }

    public wizardLevelCustomCancel(): void {
        if (confirm("Do you really, really want to close the wizard?")) {
            this.wizardMedium.close();
        }
    }

    public stepThreeCustomCancel(): void {
        if (confirm("Do you want to close the wizard from this page?")) {
            this.wizardMedium.close();
        }
    }

    public doCustomClick(buttonType: string): void {
        if ("custom-next" === buttonType) {
            if (this.model.okToClick) {
                this.wizardMedium.next(false);
            } else {
                console.log("hi, i am the demo. i can't move to the next page...");
            }
            // SPECME
        }

        if ("custom-previous" === buttonType) {
            this.wizardMedium.previous();
        }
    }

    public notifyReset(): void {
        console.log("This is the basic demo. I just did a reset.");
    }

    public doCancel(): void {
        console.log("This is the demo. I'm telling you I got a cancel.");
        this.doReset();
    }

    public doReset(): void {
        if (this.model.forceReset) {
            this.wizardMedium.reset();
            this.model.okToClick = false;
            this.model.forceReset = false;
            this.model.myNumber = null;
        }
    }

    public funkyOpen(): void {
        if (this.myPage.completed) {
            this.wizardMedium.navService.setCurrentPage(this.myPage);
        } else {
            this.wizardMedium.navService.setLastEnabledPageCurrent();
        }
        this.wizardMedium.open();
        // SPECME... THIS TYPE OF CODE JUMPS TO A SPECIFIED PAGE...
    }

    public headerActionClicked(headerActionId: string): void {
        console.log("What did we get?", headerActionId);
        console.log("Thanks for clicking the header action!");
    }
}
