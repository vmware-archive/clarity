/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrSelectedState } from '@clr/angular';

export class InfiniteTree {
  constructor(width: number) {
    this.possibleValues = new Array(width).fill(0).map((_, i) => '' + (i + 1));
    this.root = this.possibleValues;
  }

  private readonly possibleValues: string[];
  root: string[];

  getChildren(node: string) {
    return this.possibleValues.map(i => node + '.' + i);
  }

  // For the purpose of this demo, we just store the shortest prefix of each selected subtree.
  selected: string[] = [];

  isSelected(node: string) {
    if (this.selected.some(s => node.startsWith(s))) {
      return ClrSelectedState.SELECTED;
    } else if (this.selected.some(s => s.startsWith(node))) {
      return ClrSelectedState.INDETERMINATE;
    }
    return ClrSelectedState.UNSELECTED;
  }

  // This is demo code to keep it short, without server, and consistent with an infinite tree.
  // I apologize if it's hard to read, but I figured maintenance is not critical since this is neither public
  // nor written to be build upon.
  select(node: string, state: ClrSelectedState) {
    switch (state) {
      case ClrSelectedState.SELECTED:
        if (this.isSelected(node) !== ClrSelectedState.SELECTED) {
          this.selected = this.selected.filter(s => !s.startsWith(node));
          this.selected.push(node);
        }
        break;
      case ClrSelectedState.UNSELECTED:
        const prefixIndex = this.selected.findIndex(s => node.startsWith(s));
        if (prefixIndex >= 0) {
          const [prefix] = this.selected.splice(prefixIndex, 1);
          if (prefix !== node) {
            const relativePath = node.substring(prefix.length + 1).split('.');
            let soFar = prefix + '.';
            for (const step of relativePath) {
              this.selected.push(...this.possibleValues.filter(n => n !== step).map(n => soFar + n));
              soFar += step + '.';
            }
          }
        }
        break;
      default:
    }
  }
}
