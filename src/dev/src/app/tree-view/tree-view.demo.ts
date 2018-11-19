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
        <h2>Tree View</h2>

        <ul>
            <li><a [routerLink]="['./eager-declarative']">Eager declarative tree</a></li>
            <li><a [routerLink]="['./eager-recursive']">Eager recursive tree</a></li>
            <li><a [routerLink]="['./lazy-declarative']">Lazy declarative tree</a></li>
            <li><a [routerLink]="['./lazy-recursive']">Lazy recursive tree</a></li>
            <li><a [routerLink]="['./nodes-with-icons']">Nodes with icons</a></li>
            <li><a [routerLink]="['./routing']">Routing tree</a></li>
            <li><a [routerLink]="['./pre-selection']">Pre-selection cases dump</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class TreeViewDemo {}
