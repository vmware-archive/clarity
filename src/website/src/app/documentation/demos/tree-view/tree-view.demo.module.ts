/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { UtilsModule } from '../../../utils/utils.module';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { TreeBasicDMDemo } from './basic-tree-DM/tree-basic-DM';
import { TreeBasicDemo } from './basic-tree/tree-basic';
import { BooleanSelectionTreeDemo } from './boolean-selection-tree/boolean-selection-tree';
import { TreeNodeLabelChangeOnExpandDemo } from './label-change-on-expand/label-change-on-expand';
import { LazyLoadingRecursiveTreeDemo } from './lazy-loading-recursive-tree/lazy-loading-recursive-tree';
import { GroceryItemsComponent } from './lazy-loading-selection-tree/grocery-items';
import { LazyLoadingSelectionTreeDemo } from './lazy-loading-selection-tree/lazy-loading-selection-tree';
import { LazyLoadingTreeDemo } from './lazy-loading-tree/lazy-loading-tree';
import { RecursiveTreeDemo } from './recursive-tree/recursive-tree';
import { SelectionTreeDemo } from './selection-tree/selection-tree';
import { SmallSelectionTreeDemo } from './small-selection-tree/small-selection-tree';
import { TreeNodeRoutingDemo } from './tree-node-routing/tree-node-routing';
import { TreeViewDynamicDemo } from './tree-view-dynamic/tree-view-dynamic';
import { TreeViewDemo } from './tree-view.demo';
import { TreeNodeRoutingAbbeyRoadDemo } from '../../../../../../dev/src/app/tree-view/tree-node-routing/tree-node-routing-abbey-road';
import { TreeNodeRoutingRevolverDemo } from '../../../../../../dev/src/app/tree-view/tree-node-routing/tree-node-routing-revolver';
import { TreeNodeRoutingRubberSoulDemo } from '../../../../../../dev/src/app/tree-view/tree-node-routing/tree-node-routing-rubber-soul';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {
        path: '',
        component: TreeViewDemo,
        children: [
          { path: '', redirectTo: 'album1', pathMatch: 'full' },
          { path: 'album1', component: TreeNodeRoutingAbbeyRoadDemo },
          { path: 'album2', component: TreeNodeRoutingRevolverDemo },
          { path: 'album3', component: TreeNodeRoutingRubberSoulDemo },
        ],
      },
    ]),
    DocWrapperModule,
    UtilsModule,
  ],
  declarations: [
    TreeBasicDemo,
    TreeBasicDMDemo,
    BooleanSelectionTreeDemo,
    TreeViewDynamicDemo,
    LazyLoadingTreeDemo,
    TreeNodeLabelChangeOnExpandDemo,
    SelectionTreeDemo,
    TreeNodeRoutingDemo,
    SmallSelectionTreeDemo,
    TreeViewDemo,
    RecursiveTreeDemo,
    LazyLoadingSelectionTreeDemo,
    GroceryItemsComponent,
    LazyLoadingRecursiveTreeDemo,
  ],
  exports: [TreeViewDemo],
})
export class TreeDemoModule {}
