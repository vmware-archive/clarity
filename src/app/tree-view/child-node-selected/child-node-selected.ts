/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_1 = `
<clr-tree-node [(clrSelected)]="selected1">
    A
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node [(clrSelected)]="selected2">
            A-1
        </clr-tree-node>
        <clr-tree-node>
            A-2
            <ng-template clrIfExpanded>
                <clr-tree-node [(clrSelected)]="selected3">
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
<clr-tree-node [(clrSelected)]="selected4">
    A2
    <clr-tree-node *clrIfExpanded>
        A-1
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded>
        A-2
        <clr-tree-node *clrIfExpanded>
            A-2.1
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded [(clrSelected)]="selected5">
            A-2.2
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded>
            A-2.3
        </clr-tree-node>
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded [(clrSelected)]="selected6">
        A-3
    </clr-tree-node>
</clr-tree-node>
`;

const EXAMPLE_3 = `
<clr-tree-node [(clrSelected)]="selected7">
    A3
    <clr-tree-node *clrIfExpanded>
        A-1
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded [(clrSelected)]="selected8">
        A-2
        <clr-tree-node *clrIfExpanded>
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
<clr-tree-node [(clrSelected)]="selected9">
    A
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node [(clrSelected)]="selected10">
            A-1
        </clr-tree-node>
        <clr-tree-node [(clrSelected)]="selected11">
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
        <clr-tree-node>
            A-3
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

@Component({
    selector: "clr-child-node-selected-demo",
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./child-node-selected.html"
})
export class ChildNodeSelectedDemo {
    example1 = EXAMPLE_1;
    example2 = EXAMPLE_2;
    example3 = EXAMPLE_3;
    example4 = EXAMPLE_4;

    selected1: boolean = false;
    selected2: boolean = true;
    selected3: boolean = true;
    selected4: boolean = true;
    selected5: boolean = false;
    selected6: boolean = false;
    selected7: boolean = false;
    selected8: boolean = true;
    selected9: boolean = true;
    selected10: boolean = false;
    selected11: boolean = true;
}
