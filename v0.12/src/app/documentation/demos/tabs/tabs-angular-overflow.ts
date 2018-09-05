/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

const EXAMPLE = `
<clr-tabs>
    <clr-tab>
        <button clrTabLink>Dashboard</button>
        <clr-tab-content *clrIfActive>
            ...
        </clr-tab-content>
    </clr-tab>

    <clr-tab>
        <button clrTabLink>Management</button>
        <clr-tab-content *clrIfActive>
            ...
        </clr-tab-content>
    </clr-tab>

    <clr-tab>
        <button clrTabLink>Cloud</button>
        <clr-tab-content *clrIfActive>
            ...
        </clr-tab-content>
    </clr-tab>

    <clr-tab>
        <button clrTabLink [clrTabLinkInOverflow]="inOverflow">Settings</button>
        <clr-tab-content *clrIfActive>
            ...
        </clr-tab-content>
    </clr-tab>
    
    <clr-tab>
        <button clrTabLink [clrTabLinkInOverflow]="inOverflow">Alerts</button>
        <clr-tab-content *clrIfActive>
            ...
        </clr-tab-content>
    </clr-tab>
</clr-tabs>
`;

@Component({
    selector: "clr-modal-tabs-angular-overflow",
    templateUrl: "./tabs-angular-overflow.demo.html"
})
export class TabsAngularOverflowDemo {
    example = EXAMPLE;
    inOverflow = true;
}
