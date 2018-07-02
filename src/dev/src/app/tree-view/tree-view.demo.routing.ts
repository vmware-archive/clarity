/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicSelectionTreeDemo } from './basic-selection-tree/basic-selection-tree';
import { TreeNodeBasicExpandedStructureDemo } from './basic-tree-node-expanded/tree-node-basic-expanded';
import { TreeNodeBasicStructureDemo } from './basic-tree-node/tree-node-basic';
import { ChildNodeSelectedDemo } from './child-node-selected/child-node-selected';
import { IndeterminateNodeDemo } from './intedeterminate-node/indeterminate-node';
import { TreeNodeLabelChangeOnExpandDemo } from './label-change-on-expand/label-change-on-expand';
import { LazyLoadingTreeNodeDemo } from './lazy-loading-tree-node/lazy-loading-tree-node';
import { RecursiveLazyLoadComponent } from './recursive-lazy-load/recursive-lazy-load';
import { RecursiveSelectableTreeDemo } from './recursive-selectable-tree/recursive-selectable-tree';
import { RecursiveTreeDemo } from './recursive-tree/recursive-tree';
import { TreeNodeRoutingDemo } from './tree-node-routing/tree-node-routing';
import { TreeNodeRoutingAbbeyRoadDemo } from './tree-node-routing/tree-node-routing-abbey-road';
import { TreeNodeRoutingRevolverDemo } from './tree-node-routing/tree-node-routing-revolver';
import { TreeNodeRoutingRubberSoulDemo } from './tree-node-routing/tree-node-routing-rubber-soul';
import { TreeViewDynamicDemo } from './tree-view-dynamic/tree-view-dynamic';
import { TreeViewDynamicTestDemo } from './tree-view-dynamic/tree-view-dynamic-test';
import { TreeViewDemo } from './tree-view.demo';
import { TreeNode10kDemo } from './trees-10k/tree-10k.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: TreeViewDemo,
    children: [
      { path: '', redirectTo: 'basic-tree-node', pathMatch: 'full' },
      { path: 'basic-tree-node', component: TreeNodeBasicStructureDemo },
      { path: 'basic-tree-node-expanded', component: TreeNodeBasicExpandedStructureDemo },
      { path: 'label-change-on-expand', component: TreeNodeLabelChangeOnExpandDemo },
      { path: 'basic-selection-tree', component: BasicSelectionTreeDemo },
      { path: 'child-node-selected', component: ChildNodeSelectedDemo },
      { path: 'indeterminate-node', component: IndeterminateNodeDemo },
      { path: 'tree-node-dynamic', component: TreeViewDynamicDemo },
      { path: 'tree-node-dynamic-test', component: TreeViewDynamicTestDemo },
      { path: 'tree-10k', component: TreeNode10kDemo },
      { path: 'lazy-load', component: LazyLoadingTreeNodeDemo },
      { path: 'recursive-tree', component: RecursiveTreeDemo },
      { path: 'recursive-selectable-tree', component: RecursiveSelectableTreeDemo },
      { path: 'recursive-lazy-tree', component: RecursiveLazyLoadComponent },
      {
        path: 'tree-node-routing',
        component: TreeNodeRoutingDemo,
        children: [
          { path: 'album1', component: TreeNodeRoutingAbbeyRoadDemo },
          { path: 'album2', component: TreeNodeRoutingRevolverDemo },
          { path: 'album3', component: TreeNodeRoutingRubberSoulDemo },
        ],
      },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
