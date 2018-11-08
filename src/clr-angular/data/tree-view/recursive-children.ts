/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input, Optional } from '@angular/core';
import { Subscription } from 'rxjs';

import { Expand } from '../../utils/expand/providers/expand';
import { TreeFeaturesService } from './tree-features.service';
import { TreeNodeModel } from './models/tree-node.model';
import { ClrRecursiveForOfContext } from './recursive-for-of';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';

@Component({
  selector: 'clr-recursive-children',
  template: `
    <ng-container *ngIf="shouldRender()">
      <ng-container *ngFor="let child of parent?.children || children">
        <ng-container *ngTemplateOutlet="featuresService.recursion.template; context: getContext(child)"></ng-container>
      </ng-container>
    </ng-container>
  `,
})
/**
 * Internal component, do not export!
 * This is part of the hack to get around https://github.com/angular/angular/issues/15998
 */
export class RecursiveChildren<T> {
  constructor(public featuresService: TreeFeaturesService<T>, @Optional() private expandService: Expand) {
    if (expandService && featuresService.recursion) {
      this.subscription = this.expandService.expandChange.subscribe(value => {
        if (value && this.parent) {
          // Once again, I'm sure we can find a way to avoid this casting by typing every component in a way that
          // lets us use the more specific model classes depending on the use of *clrRecursiveForOf or not.
          // But it would take time, which we don't have right now.
          (<RecursiveTreeNodeModel<T>>this.parent).fetchChildren();
        }
      });
    }
  }

  shouldRender() {
    return (
      this.featuresService.recursion &&
      // In the smart case, we eagerly render all the recursive children
      // to make sure two-way bindings for selection are available.
      // They will be hidden with CSS by the parent.
      (this.featuresService.eager || !this.expandService || this.expandService.expanded)
    );
  }

  // Offering the option to either give the parent node to recurse potentially lazily,
  // or directly the list of children to display.
  @Input('parent') parent: TreeNodeModel<T>;
  @Input('children') children: TreeNodeModel<T>[];

  getContext(node: TreeNodeModel<T>): ClrRecursiveForOfContext<T> {
    return {
      $implicit: node.model,
      clrModel: node,
    };
  }

  subscription: Subscription;

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
