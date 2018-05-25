/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE_1 = `
<clr-tree-node>
    {{expanded ? "I am expanded" : "I am collapsed"}}
    <ng-template [(clrIfExpanded)]="expanded">
        <clr-tree-node>
            Child Tree Node 1
        </clr-tree-node>
        <clr-tree-node>
            Child Tree Node 2
        </clr-tree-node>
        <clr-tree-node>
            Child Tree Node 3
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_2 = `
<clr-tree-node [(clrSelected)]="selected">
    {{expanded ? "I am expanded" : "I am collapsed"}}
    <ng-template [(clrIfExpanded)]="expanded">
        <clr-tree-node>
            Child Tree Node 1
        </clr-tree-node>
        <clr-tree-node>
            Child Tree Node 2
        </clr-tree-node>
        <clr-tree-node>
            Child Tree Node 3
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`;

@Component({
  selector: 'clr-tree-node-label-change-expand-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './label-change-on-expand.html',
})
export class TreeNodeLabelChangeOnExpandDemo {
  private _expanded: boolean = false;

  example1 = EXAMPLE_1;
  example2 = EXAMPLE_2;

  get expanded(): boolean {
    return this._expanded;
  }

  set expanded(value: boolean) {
    this._expanded = value;
  }

  selected: boolean = false;
}
