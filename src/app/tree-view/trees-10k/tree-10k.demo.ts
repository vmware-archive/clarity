/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_1 = `
<clr-tree-node>
    Root Node
    <ng-template clrIfExpanded>
        <clr-tree-node  *ngFor="let node of nodes">
            {{node}}
            <ng-template clrIfExpanded>
                <clr-tree-node  *ngFor="let node of nodes">
                    {{node}}
                    <ng-template clrIfExpanded>
                        <clr-tree-node  *ngFor="let node of nodes">
                            {{node}}
                        </clr-tree-node>
                    </ng-template>
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_2 = `
<clr-tree-node [(clrSelected)]="selected">
    Root Node
    <ng-template clrIfExpanded>
        <clr-tree-node  *ngFor="let node of nodes">
            {{node}}
            <ng-template clrIfExpanded>
                <clr-tree-node  *ngFor="let node of nodes">
                    {{node}}
                    <ng-template clrIfExpanded>
                        <clr-tree-node  *ngFor="let node of nodes">
                            {{node}}
                        </clr-tree-node>
                    </ng-template>
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

@Component({
    moduleId: module.id,
    selector: "clr-tree-node-10k-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "./tree-10k.demo.html"
})
export class TreeNode10kDemo {
    nodes: string[] = Array(10).fill("Tree Node");

    example1 = EXAMPLE_1;
    example2 = EXAMPLE_2;

    selected: boolean = false;
}
