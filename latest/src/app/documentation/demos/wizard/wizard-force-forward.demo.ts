/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    selector: "clr-wizard-force-forward",
    templateUrl: "./wizard-force-forward.demo.html"
})
export class WizardForceForwardDemo {
    @ViewChild("wizard") wizard: ClrWizard;

    _open: boolean = false;

    open() {
        this._open = !this.open;
    }

    code: string = `import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardForceForwardDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    _open: boolean = false;

    open() {
        this._open = !this.open;
    }
}
    `;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="_open" [clrWizardForceForwardNavigation]="true">
    <clr-wizard-title>Wizard, Only Forward Navigation</clr-wizard-title>

    <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
    <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
    <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
    <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

    <clr-wizard-page *ngFor="let page of [1, 2, 3, 4]">
        <ng-template clrPageTitle>Title for page {{ page }}</ng-template>
        <p>Content for page {{ page }}.</p>
    </clr-wizard-page>
</clr-wizard>
`;
}
