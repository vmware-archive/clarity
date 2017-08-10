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
        <ng-template [(clrIfActive)]="dashboardActive">
            <clr-tab-content>
                ...
            </clr-tab-content>
        </ng-template>
    </clr-tab>

    <clr-tab>
        <button clrTabLink>Management</button>
        <ng-template [(clrIfActive)]="managementActive">
            <clr-tab-content>
                ...
            </clr-tab-content>
        </ng-template>
    </clr-tab>

    <clr-tab>
        <button clrTabLink>Cloud</button>
        <ng-template [(clrIfActive)]="cloudActive">
            <clr-tab-content>
                ...
            </clr-tab-content>
        </ng-template>
    </clr-tab>

    <clr-tab>
        <button clrTabLink>Infrastructure</button>
        <ng-template [(clrIfActive)]="infrastructureActive">
            <clr-tab-content>
                ...
            </clr-tab-content>
        </ng-template>
    </clr-tab>
</clr-tabs>
`;

@Component({
    selector: "clr-modal-tabs-angular",
    templateUrl: "./tabs-angular.demo.html"
})
export class TabsAngularDemo {
    example = EXAMPLE;
    dashboardActive = true;
    managementActive = false;
    cloudActive = false;
    infrastructureActive = false;
}
