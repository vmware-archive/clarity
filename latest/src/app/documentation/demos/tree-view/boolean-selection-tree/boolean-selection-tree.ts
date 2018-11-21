/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node [clrExpanded]="true">
    Permissions
    <clr-tree-node *ngFor="let permission of permissions" [clrExpanded]="true">
        {{permission.type}}
        <clr-tree-node *ngFor="let right of permission.rights" 
                       [clrSelected]="right.enable" (clrSelectedChange)="right.enable = !!$event">
            {{right.name}}
        </clr-tree-node>
    </clr-tree-node>
</clr-tree-node>
`;

const EXAMPLE_TS = `
@Component({
    selector: "...",
    templateUrl: "..."
})
export class Permissions {
    permissions: any = [
        {
            type: "Authenticated Users",
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: true
                },
                {
                    name: "Create",
                    enable: false
                },
                {
                    name: "Delete",
                    enable: false
                }
            ]
        },
        {
            type: "Owners",
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: true
                },
                {
                    name: "Create",
                    enable: true
                },
                {
                    name: "Delete",
                    enable: true
                }
            ]
        }
    ];
}
`;

@Component({
    selector: "clr-boolean-selection-tree-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./boolean-selection-tree.html"
})
export class BooleanSelectionTreeDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    permissions: any = [
        {
            type: "Authenticated Users",
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: true
                },
                {
                    name: "Create",
                    enable: false
                },
                {
                    name: "Delete",
                    enable: false
                }
            ]
        },
        {
            type: "Owners",
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: true
                },
                {
                    name: "Create",
                    enable: true
                },
                {
                    name: "Delete",
                    enable: true
                }
            ]
        },
        {
            type: "Public",
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: false
                },
                {
                    name: "Create",
                    enable: false
                },
                {
                    name: "Delete",
                    enable: false
                }
            ]
        }
    ];

    get displayPermissions(): string {
        return JSON.stringify(this.permissions, null, "  ");
    }
}
