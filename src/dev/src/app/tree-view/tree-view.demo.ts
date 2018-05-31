/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tree-view-demo',
  styleUrls: ['./tree-view.demo.scss'],
  template: `
        <h2>New Tree View</h2>

        <ul>
            <li><a [routerLink]="['./basic-tree-node']">New Tree View</a></li>
            <li><a [routerLink]="['./basic-tree-node-expanded']">New Tree View Expanded</a></li>
            <li><a [routerLink]="['./label-change-on-expand']">Label Change on Expand</a></li>
            <li><a [routerLink]="['./basic-selection-tree']">Basic Selection Tree</a></li>
            <li><a [routerLink]="['./child-node-selected']">Child Node Selected</a></li>
            <li><a [routerLink]="['./indeterminate-node']">Indeterminate Node</a></li>
            <li><a [routerLink]="['./tree-node-dynamic']">Dynamically generated Tree</a></li>
            <li><a [routerLink]="['./tree-node-dynamic-test']">Dynamically generated Tree - Test</a></li>
            <li><a [routerLink]="['./tree-10k']">10k Tree Nodes Test</a></li>
            <li><a [routerLink]="['./lazy-load']">Lazy Load Tree Nodes</a></li>
            <li><a [routerLink]="['./recursive-tree']">Recursive Tree</a></li>
            <li><a [routerLink]="['./recursive-selectable-tree']">Recursive Selectable Tree</a></li>
            <li><a [routerLink]="['./recursive-lazy-tree']">Recursive Lazy Tree</a></li>
            <li><a [routerLink]="['./tree-node-routing']">Tree Node Routing</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class TreeViewDemo {}
