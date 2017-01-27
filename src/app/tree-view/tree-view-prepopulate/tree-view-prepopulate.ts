/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree [(clrTreeSelected)]="selection">
        <clr-tree-node [clrTreeModel]="'Audit'" [clrTreeNodeExpanded]="true">
            Audit User Privileges
            <clr-tree-node [clrTreeModel]="'System'">
                System Privileges
                <clr-tree-node [clrTreeModel]="'Create'">
                    Create Users
                </clr-tree-node>
                <clr-tree-node [clrTreeModel]="'Modify'">
                    Modify Users
                </clr-tree-node>
                <clr-tree-node [clrTreeModel]="'Delete'">
                    Delete Users
                </clr-tree-node>
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'View'">
                Viewing Privileges
                <clr-tree-node [clrTreeModel]="'Posts'">
                    View Posts
                </clr-tree-node>
                <clr-tree-node [clrTreeModel]="'Profile'">
                    View Profile Information
                </clr-tree-node>
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'Edit'" [clrTreeNodeExpanded]="true">
                Edit Privileges
                <clr-tree-node [clrTreeModel]="'Settings'">
                    Edit Settings
                </clr-tree-node>
                <clr-tree-node [clrTreeModel]="'Comments'">
                    Add Comments
                </clr-tree-node>
            </clr-tree-node>
        </clr-tree-node>
        <clr-tree-node [clrTreeModel]="'View'" [clrTreeNodeExpanded]="true">
            View Only User Priveleges
            <clr-tree-node [clrTreeModel]="'Edit'">
                Edit Priveleges
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'View'">
                View Privileges
            </clr-tree-node>
        </clr-tree-node>
    </clr-tree>
`;

const EXAMPLE_TS = `
export class TreeViewPrepopulateDemo {
        selection: any[] = [
            {
                model: "Audit",
                selected: false,
                children: [
                    {
                        model: "System",
                        selected: false,
                        children: [
                            {
                                model: "Create",
                                selected: true
                            },
                            {
                                model: "Modify",
                                selected: true
                            }
                        ]
                    },
                    {
                        model: "View",
                        selected: true
                    },
                    {
                        model: "Edit",
                        selected: false,
                        children: [
                            {
                                model: "Comments",
                                selected: true
                            }
                        ]
                    }
                ]
            },
            {
                model: "View",
                selected: false,
                children: [
                    {
                        model: "View",
                        selected: true
                    }
                ]
            }
        ];
    }
`;

@Component({
    moduleId: module.id,
    selector: "clr-tree-view-prepopulate-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "tree-view-prepopulate.html"
})
export class TreeViewPrepopulateDemo {
    exampleHTML = EXAMPLE_HTML;
    exampleTS = EXAMPLE_TS;

    @Input("clrDemoShowCode") showCode: boolean = false;

    selection: any[] = [
        {
            model: "Audit",
            selected: false,
            children: [
                {
                    model: "System",
                    selected: false,
                    children: [
                        {
                            model: "Create",
                            selected: true
                        },
                        {
                            model: "Modify",
                            selected: true
                        }
                    ]
                },
                {
                    model: "View",
                    selected: true
                },
                {
                    model: "Edit",
                    selected: false,
                    children: [
                        {
                            model: "Comments",
                            selected: true
                        }
                    ]
                }
            ]
        },
        {
            model: "View",
            selected: false,
            children: [
                {
                    model: "View",
                    selected: true
                }
            ]
        }
    ];
}
