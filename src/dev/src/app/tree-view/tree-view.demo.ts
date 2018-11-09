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
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class TreeViewDemo {}
