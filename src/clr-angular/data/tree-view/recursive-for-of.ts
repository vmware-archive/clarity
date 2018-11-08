/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input, OnChanges, TemplateRef } from '@angular/core';
import { TreeFeaturesService } from './tree-features.service';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';
import { TreeNodeModel } from './models/tree-node.model';
import { AsyncArray } from './models/async-array';

export interface ClrRecursiveForOfContext<T> {
  $implicit: T;
  clrModel: TreeNodeModel<T>;
}

@Directive({ selector: '[clrRecursiveFor][clrRecursiveForOf]' })
export class ClrRecursiveForOf<T> implements OnChanges {
  constructor(
    private template: TemplateRef<ClrRecursiveForOfContext<T>>,
    private featuresService: TreeFeaturesService<T>
  ) {}

  // TODO: accept NgIterable<T>
  @Input('clrRecursiveForOf') nodes: T | T[];

  // TODO: accept NgIterable<T> return type
  @Input('clrRecursiveForGetChildren') getChildren: (node: T) => AsyncArray<T>;

  // I'm using OnChanges instead of OnInit to easily keep up to date with dynamic trees. Maybe optimizable later.
  ngOnChanges() {
    let wrapped: RecursiveTreeNodeModel<T>[];
    if (Array.isArray(this.nodes)) {
      wrapped = this.nodes.map(node => new RecursiveTreeNodeModel(node, null, this.getChildren));
    } else {
      wrapped = [new RecursiveTreeNodeModel(this.nodes, null, this.getChildren)];
    }
    this.featuresService.recursion = {
      template: this.template,
      root: wrapped,
    };
  }
}
