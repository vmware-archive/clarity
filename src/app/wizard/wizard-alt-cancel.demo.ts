/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";
import { CodeHighlight } from "../../clarity-angular/code/code-highlight";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-alt-cancel",
    templateUrl: "./wizard-alt-cancel.demo.html"
})
export class WizardAltCancelDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    public showCancelConfirm: boolean = false;

    private alreadyCancelled: boolean = false;

    public pageCustomCancel(): void {
        this.showCancelConfirm = true;
    }

    public doPageCancel() {
        // catches cancel when it falls through to wizard
        this.alreadyCancelled = true;
        this.wizard.close();
    }

    public doCancel() {
        if (this.alreadyCancelled) {
            // resets for next trip through
            this.alreadyCancelled = false;
        } else if (confirm("Do you really, really want to close the wizard?")) {
            this.alreadyCancelled = true;
            this.wizard.close();
        }
    }

    code: string = `
import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";

@Component({
    ...
})
export class WizardAltCancelDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    public showCancelConfirm: boolean = false;

    private alreadyCancelled: boolea false;

    public pageCustomCancel(): void {
        this.showCancelConfirm = true;
    }

    public doPageCancel() {
        // catches cancel when it falls through to wizard
        this.alreadyCancelled = true;
        this.wizard.close();
    }

    public doCancel() {
        if (this.alreadyCancelled) {
            // resets for next trip through
            this.alreadyCancelled = false;
        } else if (confirm("Do you really, really want to close the wizard?")) {
            this.alreadyCancelled = true;
            this.wizard.close();
        }
    }
`;

    html: string = `
<clr-wizard #wizard (clrWizardOnCancel)="doCancel()" [clrWizardPreventDefaultCancel]="true">
    <clr-wizard-title>Wizard with alternate cancel</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page>
        ...
    </clr-wizard-page>

    <clr-wizard-page (clrWizardPageOnCancel)="pageCustomCancel()"
        [clrWizardPagePreventDefaultCancel]="true">
        <template pageTitle>Page level alt-cancel</template>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
