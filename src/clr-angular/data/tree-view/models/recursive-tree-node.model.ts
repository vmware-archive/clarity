/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isObservable, Subscription } from 'rxjs';

import { TreeNodeModel } from './tree-node.model';
import { AsyncArray, isPromise } from './async-array';

/*
 * A recursive model is built received from the app and traversed to create the corresponding components.
 * Recursive = Model dictates the tree node components
 */
export class RecursiveTreeNodeModel<T> extends TreeNodeModel<T> {
  constructor(
    model: T,
    parent: RecursiveTreeNodeModel<T> | null,
    private getChildren: (node: T) => AsyncArray<T> | undefined
  ) {
    super();
    this.model = model;
    this.parent = parent;
  }

  parent: RecursiveTreeNodeModel<T> | null;

  private childrenFetched = false;

  fetchChildren() {
    if (this.childrenFetched) {
      return;
    }

    const asyncChildren = this.getChildren(this.model);
    if (isPromise(asyncChildren)) {
      this.loading = true;
      asyncChildren.then(raw => {
        this._children = this.wrapChildren(raw);
        this.loading = false;
      });
    } else if (isObservable(asyncChildren)) {
      this.loading = true;
      this.subscription = asyncChildren.subscribe(raw => {
        this._children = this.wrapChildren(raw);
        this.loading = false;
      });
    } else if (asyncChildren) {
      // Synchronous case
      this._children = this.wrapChildren(asyncChildren);
    } else {
      this._children = [];
    }
    this.childrenFetched = true;
  }

  private wrapChildren(rawModels: T[]) {
    return rawModels.map(m => new RecursiveTreeNodeModel(m, this, this.getChildren));
  }

  private _children: RecursiveTreeNodeModel<T>[] = [];
  get children(): RecursiveTreeNodeModel<T>[] {
    this.fetchChildren();
    return this._children;
  }
  set children(value: RecursiveTreeNodeModel<T>[]) {
    this._children = value;
  }

  private subscription: Subscription;

  destroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    super.destroy();
  }
}
