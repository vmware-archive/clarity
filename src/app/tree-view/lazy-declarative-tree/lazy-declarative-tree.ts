/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { InfiniteTree } from '../utils/infinite-tree';
import { AsyncInfiniteTree } from '../utils/async-infinite-tree';

@Component({
  selector: 'clr-lazy-declarative-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './lazy-declarative-tree.html',
})
export class LazyDeclarativeTreeDemo {
  tree = new InfiniteTree(9);

  asyncTree = new AsyncInfiniteTree(3, 500);

  loading: { [key: string]: boolean } = {};
  children: { [key: string]: Observable<string[]> } = {};

  fetchChildren(node: string, justDoIt: boolean) {
    if (!justDoIt) {
      return;
    }
    this.loading[node] = true;
    this.children[node] = this.asyncTree.fetchChildren(node).pipe(tap(_ => (this.loading[node] = false)));
  }
}
