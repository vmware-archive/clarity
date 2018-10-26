/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node [(clrSelected)]="selected">
    Permissions
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node
                *ngFor="let permission of permissions"
                [(clrSelected)]="permission.selected">
            {{permission.type}}
            <ng-template [(clrIfExpanded)]="permission.expanded">
                <clr-tree-node *ngFor="let right of permission.rights" [(clrSelected)]="right.enable">
                    {{right.name}}
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_TS = `
@Component({
    selector: "...",
    templateUrl: "..."
})
export class Permissions {
    selected: boolean = false;

    permissions: any = [
        {
            type: "Authenticated Users",
            expanded: true,
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
            expanded: true,
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
    selector: "clr-tree-view-basic-structure-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./tree-view-basic.html"
})
export class TreeViewBasicStructureDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    selected: boolean = false;
    permissions: any = [
        {
            type: "Authenticated Users",
            selected: false,
            expanded: true,
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
            selected: false,
            expanded: true,
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
            selected: false,
            expanded: true,
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
