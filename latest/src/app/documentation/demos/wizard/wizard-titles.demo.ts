/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-wizard-titles",
    template: `
        <clr-code-snippet [clrLanguage]="'html'" [clrCode]="html"></clr-code-snippet>
    `
})
export class WizardTitlesDemo {

    html: string = `<clr-wizard #wizard [(clrWizardOpen)]="open">
    <clr-wizard-title>Wizard Title</clr-wizard-title>

    <clr-wizard-button type="cancel">Cancel</clr-wizard-button>
    <clr-wizard-button type="previous">Back</clr-wizard-button>
    <clr-wizard-button type="next">Next</clr-wizard-button>
    <clr-wizard-button type="finish">Finish</clr-wizard-button>

    <clr-wizard-page>
        <ng-template clrPageTitle>
            This title will appear in the content area and the sidebar
        </ng-template>
        Content for page 1
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>
            This title will appear in the content area
        </ng-template>
        <ng-template clrPageNavTitle>
            This title in the sidebar
        </ng-template>
        Content for page 2
    </clr-wizard-page>

    <clr-wizard-page>
        <ng-template clrPageTitle>
            {{projectedTitle}}
        </ng-template>
        Content for page 3
    </clr-wizard-page>
</clr-wizard>
`;
}
