/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_TS = `
export class TreeViewBasicStructureDemo {
        selection: any[] = [];
    }
`;

const EXAMPLE_HTML = `
<clr-tree [(clrTreeSelected)]="selection">
        <clr-tree-node [clrTreeModel]="'Users'" [clrTreeNodeExpanded]="true">
            Authenticated Users
            <clr-tree-node [clrTreeModel]="'read'">
                Read
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'modify'">
                Modify
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'create'">
                Create
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'delete'">
                Delete
            </clr-tree-node>
        </clr-tree-node>
        <clr-tree-node [clrTreeModel]="'Owner'" [clrTreeNodeExpanded]="true">
            Owners
            <clr-tree-node [clrTreeModel]="'read'">
                Read
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'modify'">
                Modify
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'create'">
                Create
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'delete'">
                Delete
            </clr-tree-node>
        </clr-tree-node>
        <clr-tree-node [clrTreeModel]="'Public'" [clrTreeNodeExpanded]="true">
            Public
            <clr-tree-node [clrTreeModel]="'read'">
                Read
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'modify'">
                Modify
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'create'">
                Create
            </clr-tree-node>
            <clr-tree-node [clrTreeModel]="'delete'">
                Delete
            </clr-tree-node>
        </clr-tree-node>
    </clr-tree>
`;

@Component({
    moduleId: module.id,
    selector: "clr-tree-view-basic-structure-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./tree-view-basic.html"
})
export class TreeViewBasicStructureDemo {

    exampleHTML = EXAMPLE_HTML;
    exampleTS = EXAMPLE_TS;

    selection: any[] = [];

    displaySelection: string = "";

    onSelectionChange(value: any[]) {
        this.selection = value;
        this.displaySelection = JSON.stringify(value, null, "\t");
    }
}
