/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE_1 = `
<clr-tree-node [(clrSelected)]="selected1">
    A
    <ng-template clrIfExpanded>
        <clr-tree-node [(clrSelected)]="selected1Child">
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
    A
    <clr-tree-node *clrIfExpanded>
        A-1
    </clr-tree-node>
    <clr-tree-node *clrIfExpanded>
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

@Component({
  selector: 'clr-basic-selection-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './basic-selection-tree.html',
})
export class BasicSelectionTreeDemo {
  example1 = EXAMPLE_1;
  example2 = EXAMPLE_2;

  selected1: boolean = false;
  selected1Child: boolean = false;
  selected2: boolean = false;
}
