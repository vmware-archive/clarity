/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-tree-node [clrTreeNodeExpanded]="true">
        David Wallace (CFO)
        <clr-tree-node [clrTreeNodeExpanded]="true">
            Michael Scott (Regional Manager)
    
            <clr-tree-node>Dwight K. Schrute (Assistant to the Regional Manager)</clr-tree-node>
    
            <clr-tree-node>
                Jim Halpert (Head of Sales)
                <clr-tree-node>Andy Bernard</clr-tree-node>
                <clr-tree-node>Stanley Hudson</clr-tree-node>
                <clr-tree-node>Phyllis Vance</clr-tree-node>
                <clr-tree-node>Todd Packer</clr-tree-node>
            </clr-tree-node>
    
            <clr-tree-node>
                Angela Martin (Head of Accounting)
                <clr-tree-node>Kevin Malone</clr-tree-node>
                <clr-tree-node>Oscar Martinez</clr-tree-node>
            </clr-tree-node>
    
            <clr-tree-node>
                Kelly Kapoor (Head of Customer Service)
                <clr-tree-node>Ryan Howard (Temp)</clr-tree-node>
            </clr-tree-node>
    
            <clr-tree-node>
                Creed Bratton (Quality Assurance)
            </clr-tree-node>
    
            <clr-tree-node>
                Meredith Palmer (Supplier Relations)
            </clr-tree-node>
    
            <clr-tree-node>
                Toby Flenderson (Human Resources)
            </clr-tree-node>
    
            <clr-tree-node>
                Pam Beesly (Reception)
            </clr-tree-node>
    
            <clr-tree-node>
                Darryl Philbin (Warehouse)
            </clr-tree-node>
        </clr-tree-node>
    </clr-tree-node>
`;


@Component({
    moduleId: module.id,
    selector: "clr-tree-node-basic-structure-dm-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "tree-node-basic-DM.html"
})
export class TreeNodeBasicStructureDMDemo {
    example = EXAMPLE;
}
