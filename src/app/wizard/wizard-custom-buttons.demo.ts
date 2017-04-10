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
    selector: "clr-wizard-custom-buttons",
    templateUrl: "./wizard-custom-buttons.demo.html"
})
export class WizardCustomButtonsDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

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
import { Wizard } from "../../clarity-angular/wizard/wizard";

@Component({
    ...
})
export class WizardCustomButtonsDemo {
    @ViewChild("wizard") wizard: Wizard;

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
        <template clrPageTitle>Page 1 with default buttons</template>
        <template clrPageNavTitle>Default buttons</template>
        ...
    </clr-wizard-page>

    <clr-wizard-page (clrWizardPageCustomButton)="doCustomClick($event)">

        <template clrPageTitle>Page 2 with custom buttons</template>
        <template clrPageNavTitle>Custom buttons</template>
        ...

        <template clrPageButtons>
            <clr-wizard-button [type]="'cancel'">Page Override</clr-wizard-button>
            <clr-wizard-button [type]="'custom-previous'">Custom</clr-wizard-button>
            <clr-wizard-button [type]="'custom-next'">Custom</clr-wizard-button>
        </template>
    </clr-wizard-page>

    <clr-wizard-page>
        <template clrPageTitle>Page 3 with default buttons</template>
        <template clrPageNavTitle>Default buttons</template>
        ...
    </clr-wizard-page>

    <clr-wizard-page (clrWizardPageCustomButton)="doCustomClick($event)">
        <template clrPageTitle>Page 4 with custom finish</template>
        <template clrPageNavTitle>Custom buttons</template>

        <p *ngIf="!showWarning">
            ...
        </p>

        <p *ngIf="showWarning">
            <button type="submit" class="btn btn-danger" (click)="handleDangerClick()">
                Click here if you are sure
            </button>
        </p>

        <template clrPageButtons>
            <clr-wizard-button [type]="'cancel'">Page Override</clr-wizard-button>
            <clr-wizard-button [type]="'previous'">Page Override</clr-wizard-button>
            <clr-wizard-button [type]="'custom-danger'">Custom</clr-wizard-button>
        </template>
    </clr-wizard-page>
</clr-wizard>
`;
}
