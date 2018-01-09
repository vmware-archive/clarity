/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_1 = `
<clr-tree-node [(clrIndeterminate)]="indeterminate1">
    A
    <ng-template clrIfExpanded>
        <clr-tree-node [(clrSelected)]="selected1">
            A-1
        </clr-tree-node>
        <clr-tree-node>
            A-2
            <ng-template clrIfExpanded>
                <clr-tree-node>
                    A-2.1
                </clr-tree-node>
                <clr-tree-node>
                    A-2.2
                </clr-tree-node>
                <clr-tree-node>
                    A-2.3
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
        <clr-tree-node>
            A-3
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_2 = `
<clr-tree-node [(clrSelected)]="selected2">
    A2
    <clr-tree-node *clrIfExpanded>
        A-1
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded [(clrIndeterminate)]="indeterminate2" [(clrSelected)]="iSelectedNode">
        A-2
        <clr-tree-node *clrIfExpanded>
            A-2.1
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded [(clrSelected)]="selected3">
            A-2.2
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded [(clrSelected)]="selected4">
            A-2.3
        </clr-tree-node>
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded [(clrSelected)]="selected5">
        A-3
    </clr-tree-node>
</clr-tree-node>
`;

const EXAMPLE_3 = `
<clr-tree-node [(clrSelected)]="selected6">
    A3
    <clr-tree-node *clrIfExpanded>
        A-1
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded [(clrIndeterminate)]="indeterminate3">
        A-2
        <clr-tree-node *clrIfExpanded [(clrSelected)]="selected7">
            A-2.1
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded>
            A-2.2
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded>
            A-2.3
        </clr-tree-node>
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded>
        A-3
    </clr-tree-node>
</clr-tree-node>
`;

const EXAMPLE_4 = `
<clr-tree-node [(clrIndeterminate)]="indeterminate4">
    A
    <ng-template clrIfExpanded>
        <clr-tree-node [(clrSelected)]="selected8">
            A-1
        </clr-tree-node>
        <clr-tree-node [(clrSelected)]="selected9">
            A-2
            <ng-template [clrIfExpanded]="true">
                <clr-tree-node>
                    A-2.1
                </clr-tree-node>
                <clr-tree-node>
                    A-2.2
                </clr-tree-node>
                <clr-tree-node>
                    A-2.3
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
        <clr-tree-node [(clrSelected)]="selected10">
            A-3
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

@Component({
    selector: "clr-indeterminate-node-demo",
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./indeterminate-node.html"
})
export class IndeterminateNodeDemo {
    example1 = EXAMPLE_1;
    example2 = EXAMPLE_2;
    example3 = EXAMPLE_3;
    example4 = EXAMPLE_4;

    selected1: boolean = true;
    selected2: boolean = false;
    selected3: boolean = false;
    selected4: boolean = true;
    selected5: boolean = true;
    selected6: boolean = true;
    selected7: boolean = true;
    selected8: boolean = true;
    selected9: boolean = true;
    selected10: boolean = true;

    indeterminate1: boolean = true;
    indeterminate2: boolean = true;
    indeterminate3: boolean = true;
    indeterminate4: boolean = true;

    iSelectedNode: boolean = false;
}
