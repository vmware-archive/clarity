/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree
        [(clrTreeSelected)]="selection">
        <clr-tree-node
            [clrTreeModel]="'Home'"
            [clrTreeNodeExpanded]="true">
            Home
            <clr-tree-node
                [clrTreeModel]="'Documents'"
                [clrTreeNodeExpanded]="true">
                Documents
                <clr-tree-node [clrTreeModel]="'doc1'">Document1.txt</clr-tree-node>
                <clr-tree-node [clrTreeModel]="'doc2'">Document2.txt</clr-tree-node>
                <clr-tree-node [clrTreeModel]="'doc3'">Document3.txt</clr-tree-node>
            </clr-tree-node>
    
            <clr-tree-node
                [clrTreeNodeExpanded]="true"
                [clrTreeModel]="'Pictures'"
                [clrTreeNodeSelected]="picturesNodeSelection">
                Pictures
                <clr-tree-node [clrTreeModel]="'pic1'">pic1.png</clr-tree-node>
                <clr-tree-node [clrTreeModel]="'pic2'">pic2.png</clr-tree-node>
                <clr-tree-node [clrTreeModel]="'pic3'">pic3.png</clr-tree-node>
            </clr-tree-node>
        </clr-tree-node>
    </clr-tree>
`;

const EXAMPLE_TS = `
export class TreeNodeSelectionDemo {
        selection: any[] = [];
        picturesNodeSelection: boolean = false;
    }
`;

@Component({
    moduleId: module.id,
    selector: "clr-tree-node-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "tree-node-selection.html"
})
export class TreeNodeSelectionDemo {
    exampleHTML = EXAMPLE_HTML;
    exampleTS = EXAMPLE_TS;

    selection: any[] = [];

    picturesNodeSelection: boolean = false;

    togglePicturesSelection() {
        this.picturesNodeSelection = !this.picturesNodeSelection;
    }
}
