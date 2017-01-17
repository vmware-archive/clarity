/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";
import { WizardPage } from "../../clarity-angular/wizard/wizard-page";
import { CodeHighlight } from "../../clarity-angular/code/code-highlight";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-jump-to",
    templateUrl: "./wizard-jump-to.demo.html"
})
export class WizardJumpToDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("pageThree") pageThree: WizardPage;
    @ViewChild("pageFive") pageFive: WizardPage;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    public jumpTo(page: WizardPage) {
        if (page && page.completed) {
            this.wizard.navService.setCurrentPage(page);
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
import { Wizard } from "../../clarity-angular/wizard/wizard";
import { WizardPage } from "../../clarity-angular/wizard/wizard-page";

@Component({
    ...
})
export class WizardJumpToDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("pageThree") pageThree: WizardPage;
    @ViewChild("pageFive") pageFive: WizardPage;

    public jumpTo(page: WizardPage) {
        if (page && page.completed) {
            this.wizard.navService.setCurrentPage(page);
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
        <template pageTitle>Page 1</template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <template pageTitle>Page 2</template>
        ...
    </clr-wizard-page>

    <clr-wizard-page #pageThree>
        <template pageTitle>Page 3</template>
        ...
    </clr-wizard-page>

    <clr-wizard-page>
        <template pageTitle>Page 4</template>
        ...
    </clr-wizard-page>

    <clr-wizard-page #pageFive>
        <template pageTitle>Page 5</template>
        ...
    </clr-wizard-page>
</clr-wizard>
`;
}
