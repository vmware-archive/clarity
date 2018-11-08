/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrSelectedState } from '@clr/angular';

@Component({
  selector: 'clr-eager-recursive-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './eager-recursive-tree.html',
})
export class EagerRecursiveTreeDemo {
  singleRoot = {
    name: 'A',
    children: [
      { name: 'AA', children: [{ name: 'AAA' }, { name: 'AAB' }, { name: 'AAC' }] },
      { name: 'AB' },
      { name: 'AC', children: [{ name: 'ACA' }, { name: 'ACB' }] },
    ],
  };

  multiRoot = [
    {
      name: 'A',
      children: [
        { name: 'AA', children: [{ name: 'AAA' }, { name: 'AAB' }, { name: 'AAC' }] },
        { name: 'AB' },
        { name: 'AC', children: [{ name: 'ACA' }, { name: 'ACB' }] },
      ],
    },
    {
      name: 'B',
      children: [
        { name: 'BA', children: [{ name: 'BAA' }, { name: 'BAB' }, { name: 'BAC' }] },
        { name: 'BB', children: [{ name: 'BBA' }, { name: 'BBC' }] },
        { name: 'BC' },
      ],
    },
  ];

  singleRootSelected: { [key: string]: ClrSelectedState } = {};
  multiRootSelected: { [key: string]: ClrSelectedState } = {};

  synchronousChildren = node => node.children;

  selectedString(selectedMap: { [key: string]: ClrSelectedState }) {
    return Object.keys(selectedMap)
      .filter(key => selectedMap[key] === ClrSelectedState.SELECTED)
      .join(', ');
  }
}
