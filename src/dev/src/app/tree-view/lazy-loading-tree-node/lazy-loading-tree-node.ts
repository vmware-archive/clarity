/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE_1 = `
<clr-tree-node>
    A
    <ng-template clrIfExpanded>
        <ng-template [clrFakeLoader]="slowLoad" clrLoading>
            <clr-tree-node>
                B
                <clr-tree-node *clrIfExpanded>
                    B.1
                    <ng-template clrIfExpanded>
                        <ng-template [clrFakeLoader]="slowLoad" clrLoading>
                            <clr-tree-node>
                                B.1.1
                            </clr-tree-node>
                            <clr-tree-node>
                                B.1.2
                            </clr-tree-node>
                        </ng-template>
                    </ng-template>
                </clr-tree-node>

                <clr-tree-node *clrIfExpanded>
                    B.2
                </clr-tree-node>
            </clr-tree-node>
            <clr-tree-node>
                C
            </clr-tree-node>
        </ng-template>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_2 = `
<clr-tree-node [(clrSelected)]="parentSelected">
    A
    <ng-template clrIfExpanded>
        <ng-template [clrFakeLoader]="slowLoad" clrLoading>
            <clr-tree-node>
                B
                <clr-tree-node *clrIfExpanded [(clrSelected)]="selected">
                    B.1
                    <ng-template clrIfExpanded>
                        <ng-template [clrFakeLoader]="slowLoad" clrLoading>
                            <clr-tree-node>
                                B.1.1
                            </clr-tree-node>
                            <clr-tree-node>
                                B.1.2
                            </clr-tree-node>
                        </ng-template>
                    </ng-template>
                </clr-tree-node>

                <clr-tree-node *clrIfExpanded>
                    B.2
                </clr-tree-node>
            </clr-tree-node>
            <clr-tree-node>
                C
            </clr-tree-node>
        </ng-template>
    </ng-template>
</clr-tree-node>
`;

@Component({
  selector: 'clr-tree-lazy-loading-node-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './lazy-loading-tree-node.html',
})
export class LazyLoadingTreeNodeDemo {
  slowLoad = true;

  example1 = EXAMPLE_1;
  example2 = EXAMPLE_2;

  selected: boolean = true;

  parentSelected: boolean = false;
}
