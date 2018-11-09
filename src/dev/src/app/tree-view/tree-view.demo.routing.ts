/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeViewDemo } from './tree-view.demo';
import { EagerDeclarativeTreeDemo } from './eager-declarative-tree/eager-declarative-tree';
import { NodesWithIconsDemo } from './nodes-with-icons/nodes-with-icons';
import { TreeNodeRoutingDemo } from './tree-node-routing/tree-node-routing';
import { TreeNodeRoutingAbbeyRoadDemo } from './tree-node-routing/tree-node-routing-abbey-road';
import { TreeNodeRoutingRevolverDemo } from './tree-node-routing/tree-node-routing-revolver';
import { TreeNodeRoutingRubberSoulDemo } from './tree-node-routing/tree-node-routing-rubber-soul';

const ROUTES: Routes = [
  {
    path: '',
    component: TreeViewDemo,
    children: [
      { path: '', redirectTo: 'eager-declarative', pathMatch: 'full' },
      { path: 'eager-declarative', component: EagerDeclarativeTreeDemo },
      { path: 'nodes-with-icons', component: NodesWithIconsDemo },
      {
        path: 'routing',
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
