/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TreeFocusManagerService } from './tree-focus-manager.service';
import { TreeFeaturesService, TREE_FEATURES_PROVIDER } from './tree-features.service';
import { ClrTreeNode } from './tree-node';

@Component({
  selector: 'clr-tree',
  template: `
    <ng-content></ng-content>
    <clr-recursive-children
      *ngIf="featuresService.recursion"
      [children]="featuresService.recursion.root"
    ></clr-recursive-children>
  `,
  providers: [TREE_FEATURES_PROVIDER, TreeFocusManagerService],
  host: {
    '[attr.tabindex]': 'tabindex',
    '[attr.role]': '"tree"',
    '[attr.aria-multiselectable]': 'isMultiSelectable',
  },
})
export class ClrTree<T> implements AfterContentInit, OnDestroy {
  constructor(
    public featuresService: TreeFeaturesService<T>,
    private focusManagerService: TreeFocusManagerService<T>,
    private el: ElementRef
  ) {}

  private subscriptions: Subscription[] = [];

  @Input('clrLazy')
  set lazy(value: boolean) {
    this.featuresService.eager = !value;
  }

  tabindex = 0;

  get isMultiSelectable() {
    return this.featuresService.selectable && this.rootNodes.length > 0;
  }

  @HostListener('focusin', ['$event'])
  onFocusIn(event: FocusEvent) {
    if (event.target === this.el.nativeElement) {
      // After discussing with the team, I've made it so that when the tree receives focus, the first visible node will be focused.
      // This will prevent from the page scrolling abruptly to the first selected node if it exist in a deeply nested tree.
      this.focusManagerService.focusFirstVisibleNode();

      // when the first child gets focus,
      // tree should no longer have tabindex of 0;
      delete this.tabindex;
    }
  }

  @ContentChildren(ClrTreeNode) private rootNodes: QueryList<ClrTreeNode<T>>;

  ngAfterContentInit() {
    this.setRootNodes();
    this.subscriptions.push(
      this.rootNodes.changes.subscribe(() => {
        this.setRootNodes();
      })
    );
  }

  private setRootNodes(): void {
    // if node has no parent, it's a root node
    // for recursive tree, this.rootNodes registers also nested children
    // so we have to use filter to extract the ones that are truly root nodes
    this.focusManagerService.rootNodeModels = this.rootNodes.map(node => node._model).filter(node => !node.parent);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
