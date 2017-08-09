/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node>
    {{expanded ? "I am expanded" : "I am collapsed"}}
    <ng-template [(clrIfExpanded)]="expanded">
        <clr-tree-node>
            Child Tree Node
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_TS = `
export class TreeNodeLabelChangeOnExpandDemo {
    expanded: boolean = true;
}
`;

@Component({
    selector: "clr-tree-node-label-change-expand-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./label-change-on-expand.html"
})
export class TreeNodeLabelChangeOnExpandDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    expanded: boolean = true;
}
