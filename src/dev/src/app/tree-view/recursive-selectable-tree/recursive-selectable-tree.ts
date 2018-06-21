/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tree-recursive-selectable-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './recursive-selectable-tree.html',
})
export class RecursiveSelectableTreeDemo {
  selectableRoot = {
    name: 'A1',
    selected: false,
    expanded: true,
    children: [
      { name: 'B1', selected: false, children: [{ name: 'C1' }, { name: 'C2' }, { name: 'C3' }] },
      {
        name: 'B2',
        selected: true,
        expanded: true,
        children: [{ name: 'D1' }, { name: 'D2', selected: false }, { name: 'D3' }],
      },
      { name: 'B3', selected: true, children: [{ name: 'E1' }, { name: 'E2' }, { name: 'E3' }] },
    ],
  };
}
