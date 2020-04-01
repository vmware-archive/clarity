/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrSelectedState } from '@clr/angular';

interface SelectedMap {
  [key: string]: ClrSelectedState;
}

interface TreeNode {
  name: string;
  selected?: ClrSelectedState;
  children?: TreeNode[];
}
@Component({
  selector: 'clr-eager-recursive-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './eager-recursive-tree.html',
})
export class EagerRecursiveTreeDemo {
  singleRoot: TreeNode = {
    name: 'A',
    children: [
      { name: 'AA', children: [{ name: 'AAA' }, { name: 'AAB' }, { name: 'AAC' }] },
      { name: 'AB' },
      { name: 'AC', children: [{ name: 'ACA' }, { name: 'ACB' }] },
    ],
  };

  multiRoot: TreeNode[] = [
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

  private buildDefaultSelected(rootMap: TreeNode | TreeNode[], selectedMap: SelectedMap = {}) {
    if (!Array.isArray(rootMap)) {
      rootMap = [rootMap];
    }
    rootMap.forEach(node => {
      selectedMap[node.name] = ClrSelectedState.UNSELECTED;
      if (node.children) {
        this.buildDefaultSelected(node.children, selectedMap);
      }
    });
    return selectedMap;
  }

  singleRootSelected: SelectedMap = this.buildDefaultSelected(this.singleRoot);
  multiRootSelected: SelectedMap = this.buildDefaultSelected(this.multiRoot);

  synchronousChildren = (node: TreeNode) => node.children;

  selectedString(selectedMap: SelectedMap) {
    return Object.keys(selectedMap)
      .filter(key => selectedMap[key] === ClrSelectedState.SELECTED)
      .join(', ');
  }
}
