/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';
import { UtilsDemoModule } from '../_utils/utils.module';

import { TreeViewDemo } from './tree-view.demo';
import { ROUTING } from './tree-view.demo.routing';
import { EagerDeclarativeTreeDemo } from './eager-declarative-tree/eager-declarative-tree';
import { EagerRecursiveTreeDemo } from './eager-recursive-tree/eager-recursive-tree';
import { LazyDeclarativeTreeDemo } from './lazy-declarative-tree/lazy-declarative-tree';
import { LazyRecursiveTreeDemo } from './lazy-recursive-tree/lazy-recursive-tree';
import { NodesWithIconsDemo } from './nodes-with-icons/nodes-with-icons';
import { TreeNodeRoutingDemo } from './tree-node-routing/tree-node-routing';
import { TreeNodeRoutingAbbeyRoadDemo } from './tree-node-routing/tree-node-routing-abbey-road';
import { TreeNodeRoutingRevolverDemo } from './tree-node-routing/tree-node-routing-revolver';
import { TreeNodeRoutingRubberSoulDemo } from './tree-node-routing/tree-node-routing-rubber-soul';
import { PreSelectionDemo } from './pre-selection/pre-selection';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING, UtilsDemoModule],
  declarations: [
    TreeViewDemo,
    EagerDeclarativeTreeDemo,
    EagerRecursiveTreeDemo,
    LazyDeclarativeTreeDemo,
    LazyRecursiveTreeDemo,
    NodesWithIconsDemo,
    TreeNodeRoutingDemo,
    TreeNodeRoutingAbbeyRoadDemo,
    TreeNodeRoutingRevolverDemo,
    TreeNodeRoutingRubberSoulDemo,
    PreSelectionDemo,
  ],
  exports: [TreeViewDemo],
})
export class TreeViewDemoModule {}
