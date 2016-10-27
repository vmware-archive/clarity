import {Component, ViewChild} from "@angular/core";
import {Wizard} from "../wizard";

@Component({
    selector: "clr-wizard-simple",
    templateUrl: "./wizard-simple.demo.html"
})
export class WizardSimple {
    @ViewChild("wizard") wizard: Wizard;
    stepToSkip: string = "step2";

    onChangeStepToSkip(tabId: string): void {
        if (tabId === "step2") {
            this.wizard.skipTab(tabId);
            this.wizard.unSkipTab("step3");
        } else {
            this.wizard.skipTab(tabId);
            this.wizard.unSkipTab("step2");
        }
    }

    code: string = `
import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";

@Component({
    ...
})
export class WizardSimple {
    @ViewChild("wizard") wizard: Wizard;

    stepToSkip: string = "step2";

    onChangeStepToSkip(tabId: string): void {
        if (tabId === "step2") {
            this.wizard.skipTab(tabId);
            this.wizard.unSkipTab("step3");
        } else {
            this.wizard.skipTab(tabId);
            this.wizard.unSkipTab("step2");
        }
    }
}
    `;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open">
    <div class="wizard-title">Wizard Title</div>

    <clr-wizard-step>Step 1</clr-wizard-step>

    <clr-wizard-step
            [clrWizardStepId]="'step2'"
            [clrWizardStepIsSkipped]="true">
        Step 2
    </clr-wizard-step>

    <clr-wizard-step [clrWizardStepId]="'step3'">
        Step 3
    </clr-wizard-step>

    <clr-wizard-page>
        <form #myForm="ngForm"
              (change)="onChangeStepToSkip(stepToSkip)">
            <section class="form-block">
                <p>
                    Select the step to skip
                </p>
                <div class="form-group validated-input ">
                    <label for="selectStepToSkip">Step</label>
                    <div class="select">
                        <select id="selectStepToSkip" [(ngModel)]="stepToSkip" name="stepToSkip">
                            <option value="step2" selected>Step 2</option>
                            <option value="step3">Step 3</option>
                        </select>
                    </div>
                </div>
            </section>
        </form>
    </clr-wizard-page>

    <clr-wizard-page [clrWizardPageIsSkipped]="true">
        <div class="wizard-page-title">My custom title for step 2</div>
        Step 2 is your last step, because you opted to skip step 3.
    </clr-wizard-page>

    <clr-wizard-page>
        We went straight to Step 3, because you opted to skip step 2.
    </clr-wizard-page>
</clr-wizard>
    `;

}
