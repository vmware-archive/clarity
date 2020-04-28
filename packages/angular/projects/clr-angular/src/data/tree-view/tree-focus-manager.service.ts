/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TreeNodeModel } from './models/tree-node.model';

@Injectable()
export class TreeFocusManagerService<T> {
  public rootNodeModels: TreeNodeModel<T>[];

  private focusedNodeId: string;

  private _focusRequest: Subject<string> = new Subject();

  private _focusChange: Subject<string> = new Subject();

  get focusRequest(): Observable<string> {
    return this._focusRequest.asObservable();
  }

  get focusChange(): Observable<string> {
    return this._focusChange.asObservable();
  }

  private findSiblings(model: TreeNodeModel<T>): TreeNodeModel<T>[] {
    // the method will return not only sibling models but also itself among them
    if (model.parent) {
      return model.parent.children;
    } else {
      return this.rootNodeModels;
    }
  }

  private findLastVisibleInNode(model: TreeNodeModel<T>): TreeNodeModel<T> {
    // the method will traverse through until it finds the last visible node from the given node
    if (!model) {
      return null;
    }
    if (model.expanded && model.children.length > 0) {
      const children = model.children;
      const lastChild = children[children.length - 1];
      return this.findLastVisibleInNode(lastChild);
    } else {
      return model;
    }
  }

  private findNextFocusable(model: TreeNodeModel<T>): TreeNodeModel<T> {
    if (!model) {
      return null;
    }

    const siblings = this.findSiblings(model);
    const selfIndex = siblings.indexOf(model);

    if (selfIndex < siblings.length - 1) {
      return siblings[selfIndex + 1];
    } else if (selfIndex === siblings.length - 1) {
      return this.findNextFocusable(model.parent);
    }
    return null;
  }

  private findLastVisibleInTree(): TreeNodeModel<T> {
    const lastRootNode =
      this.rootNodeModels && this.rootNodeModels.length && this.rootNodeModels[this.rootNodeModels.length - 1];
    return this.findLastVisibleInNode(lastRootNode);
  }

  private findNodeAbove(model: TreeNodeModel<T>): TreeNodeModel<T> {
    if (!model) {
      return null;
    }

    const siblings = this.findSiblings(model);
    const selfIndex = siblings.indexOf(model);

    if (selfIndex === 0) {
      return model.parent;
    } else if (selfIndex > 0) {
      return this.findLastVisibleInNode(siblings[selfIndex - 1]);
    }
    return null;
  }

  private findNodeBelow(model: TreeNodeModel<T>): TreeNodeModel<T> {
    if (!model) {
      return null;
    }

    if (model.expanded && model.children.length > 0) {
      return model.children[0];
    } else {
      return this.findNextFocusable(model);
    }
  }

  focusNode(model: TreeNodeModel<T>): void {
    if (model) {
      this._focusRequest.next(model.nodeId);
    }
  }

  broadcastFocusedNode(nodeId: string): void {
    if (this.focusedNodeId !== nodeId) {
      this.focusedNodeId = nodeId;
      this._focusChange.next(nodeId);
    }
  }

  focusParent(model: TreeNodeModel<T>): void {
    if (model) {
      this.focusNode(model.parent);
    }
  }

  focusFirstVisibleNode(): void {
    const focusModel = this.rootNodeModels && this.rootNodeModels[0];
    this.focusNode(focusModel);
  }

  focusLastVisibleNode(): void {
    this.focusNode(this.findLastVisibleInTree());
  }

  focusNodeAbove(model: TreeNodeModel<T>): void {
    this.focusNode(this.findNodeAbove(model));
  }

  focusNodeBelow(model: TreeNodeModel<T>): void {
    this.focusNode(this.findNodeBelow(model));
  }
}
