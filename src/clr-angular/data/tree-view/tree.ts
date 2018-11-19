/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';
import { TREE_FEATURES_PROVIDER, TreeFeaturesService } from './tree-features.service';

@Component({
  selector: 'clr-tree',
  template: `
    <ng-content></ng-content>
    <clr-recursive-children *ngIf="featuresService.recursion"
                            [children]="featuresService.recursion.root"></clr-recursive-children>
  `,
  providers: [TREE_FEATURES_PROVIDER],
})
export class ClrTree<T> {
  // This component can also be used just to declare providers once for trees with multiple root nodes.

  constructor(public featuresService: TreeFeaturesService<T>) {}

  @Input('clrLazy')
  set lazy(value: boolean) {
    this.featuresService.eager = !value;
  }
}
