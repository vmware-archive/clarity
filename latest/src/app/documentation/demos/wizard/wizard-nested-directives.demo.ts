/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-wizard-nested-directives",
    template: `
        <clr-code-snippet [clrLanguage]="'html'" [clrCode]="html"></clr-code-snippet>
    `
})
export class WizardNestedDirectiveDemo {

    html: string = `<clr-wizard #wizard [(clrWizardOpen)]="open">
    <clr-wizard-title>Wizard Title</clr-wizard-title>

    <clr-wizard-button type="cancel">Cancel</clr-wizard-button>
    <clr-wizard-button type="previous">Back</clr-wizard-button>
    <clr-wizard-button type="next">Next</clr-wizard-button>
    <clr-wizard-button type="finish">Finish</clr-wizard-button>

    <ng-container *ngFor="let page of pages; let i=index">
        <clr-wizard-page *ngIf="!page.skipped">
            <ng-template clrPageTitle>
                Page {{index}}
            </ng-template>
            Content for page {{index}}
        </clr-wizard-page>
    </ng-container>
</clr-wizard>
`;
}
