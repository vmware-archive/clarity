/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_1 = `
<clr-tree-node>
    A
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node>
            B
            <ng-template clrIfExpanded>
                <clr-tree-node>
                    B.1
                </clr-tree-node>

                <clr-tree-node>
                    B.2
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
        <clr-tree-node>
            C
        </clr-tree-node>
        <clr-tree-node>
            D
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_2 = `
<clr-tree-node [(clrSelected)]="selected">
    A
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node>
            B
            <ng-template clrIfExpanded>
                <clr-tree-node>
                    B.1
                </clr-tree-node>

                <clr-tree-node>
                    B.2
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded>
            C
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded>
            D
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_3 = `
<clr-tree-node>
    A
    <clr-tree-node *clrIfExpanded="true">
        B
        <clr-tree-node *clrIfExpanded>
            B.1
            <clr-tree-node *clrIfExpanded>
                B.1.1
            </clr-tree-node>
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded>
            B.2
        </clr-tree-node>
    </clr-tree-node>
</clr-tree-node>
`;

const EXAMPLE_4 = `
<clr-tree-node>
    A
    <clr-tree-node *clrIfExpanded>
        B
        <clr-tree-node *clrIfExpanded>
            B.1
            <clr-tree-node *clrIfExpanded="true">
                B.1.1
            </clr-tree-node>
        </clr-tree-node>
        <clr-tree-node *clrIfExpanded>
            B.2
        </clr-tree-node>
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded>
        C
    </clr-tree-node>
</clr-tree-node>
`;

@Component({
    selector: "clr-tree-node-basic-expanded-structure-demo",
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./tree-node-basic-expanded.html"
})
export class TreeNodeBasicExpandedStructureDemo {
    example1 = EXAMPLE_1;
    example2 = EXAMPLE_2;
    example3 = EXAMPLE_3;
    example4 = EXAMPLE_4;

    selected: boolean = false;
}
