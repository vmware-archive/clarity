/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node [(clrTreeNodeExpanded)]="expanded">
        {{expanded ? "I am expanded" : "I am collapsed"}}
    
        <clr-tree-node>
            Child Tree Node
        </clr-tree-node>
    </clr-tree-node>
`;

const EXAMPLE_TS = `
export class TreeNodeLabelChangeOnExpandDemo {
        expanded: boolean = true;
    }
`;

@Component({
    moduleId: module.id,
    selector: "clr-tree-node-label-change-expand-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "./label-change-on-expand.html"
})
export class TreeNodeLabelChangeOnExpandDemo {
    exampleHTML = EXAMPLE_HTML;
    exampleTS = EXAMPLE_TS;

    expanded: boolean = true;
}
