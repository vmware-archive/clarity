/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrSelectedState } from '@clr/angular';

import { InfiniteTree } from './infinite-tree';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

export class AsyncInfiniteTree {
  constructor(width: number, latency = 100, disabledNode?: string) {
    this.tree = new InfiniteTree(width, disabledNode);
    this.delay = timer(latency);
  }

  /*
   * Pure proxy for synchronous behaviors
   */

  private tree: InfiniteTree;

  get root() {
    return this.tree.root;
  }

  get selected() {
    return this.tree.selected;
  }

  isSelected(node: string): ClrSelectedState {
    return this.tree.isSelected(node);
  }

  isDisabled(node): boolean {
    return this.tree.isDisabled(node);
  }

  select(node: string, state: ClrSelectedState): void {
    return this.tree.select(node, state);
  }

  /*
   * Async behaviors
   */
  private delay: Observable<number>;

  fetchChildren(node: string): Observable<string[]> {
    return this.delay.pipe(map(_ => this.tree.getChildren(node)));
  }
}
