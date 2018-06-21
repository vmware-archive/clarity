/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tree-recursive-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './recursive-tree.html',
})
export class RecursiveTreeDemo {
  root = {
    name: 'A1',
    expanded: true,
    children: [
      { name: 'B1', children: [{ name: 'C1' }, { name: 'C2' }, { name: 'C3' }] },
      { name: 'B2', expanded: true, children: [{ name: 'D1' }, { name: 'D2' }, { name: 'D3' }] },
      { name: 'B3', expanded: true, children: [{ name: 'E1' }, { name: 'E2' }, { name: 'E3' }] },
    ],
  };
}
