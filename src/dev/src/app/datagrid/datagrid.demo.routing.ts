/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatagridBasicStructureDemo } from './basic-structure/basic-structure';
import { DatagridBindingPropertiesDemo } from './binding-properties/binding-properties';
import { DatagridColumnSizingDemo } from './column-sizing/column-sizing';
import { DatagridCompactDemo } from './compact/compact';
import { DatagridCustomRenderingDemo } from './custom-rendering/custom-rendering';
import { DatagridDemo } from './datagrid.demo';
import { DatagridExpandableRowsDemo } from './expandable-rows/expandable-rows';
import { DatagridFilteringDemo } from './filtering/filtering';
import { DatagridFullDemo } from './full/full';
import { DatagridHideShowDemo } from './hide-show-columns/hide-show';
import { DatagridKitchenSinkDemo } from './kitchen-sink/kitchen-sink';
import { DatagridConditionalPaginationDemo } from './pagination-conditional/pagination-conditional';
import { DatagridPaginationScrollingDemo } from './pagination-scrolling/pagination-scrolling';
import { DatagridPaginationDemo } from './pagination/pagination';
import { DatagridPlaceholderDemo } from './placeholder/placeholder';
import { DatagridPreserveSelectionDemo } from './preserve-selection/preserve-selection';
import { DatagridScrollingDemo } from './scrolling/scrolling';
import { DatagridSelectionRowModeDemo } from './selection-row-mode/selection-row-mode';
import { DatagridSelectionSingleDemo } from './selection-single/selection-single';
import { DatagridSelectionDemo } from './selection/selection';
import { DatagridServerDrivenDemo } from './server-driven/server-driven';
import { DatagridSmartIteratorDemo } from './smart-iterator/smart-iterator';
import { DatagridSortingDemo } from './sorting/sorting';
import { DatagridStringFilteringDemo } from './string-filtering/string-filtering';
import { DatagridTestCasesAsyncDemo } from './test-cases-async/test-cases-async';
import { DatagridTestCasesDemo } from './test-cases/test-cases';

const ROUTES: Routes = [
  {
    path: '',
    component: DatagridDemo,
    children: [
      { path: '', redirectTo: 'structure', pathMatch: 'full' },
      { path: 'kitchen-sink', component: DatagridKitchenSinkDemo },
      { path: 'structure', component: DatagridBasicStructureDemo },
      { path: 'custom-rendering', component: DatagridCustomRenderingDemo },
      { path: 'smart-iterator', component: DatagridSmartIteratorDemo },
      { path: 'binding-properties', component: DatagridBindingPropertiesDemo },
      { path: 'sorting', component: DatagridSortingDemo },
      { path: 'filtering', component: DatagridFilteringDemo },
      { path: 'string-filtering', component: DatagridStringFilteringDemo },
      { path: 'pagination', component: DatagridPaginationDemo },
      { path: 'pagination-scrolling', component: DatagridPaginationScrollingDemo },
      { path: 'pagination-conditional', component: DatagridConditionalPaginationDemo },
      { path: 'selection', component: DatagridSelectionDemo },
      { path: 'selection-single', component: DatagridSelectionSingleDemo },
      { path: 'selection-row-mode', component: DatagridSelectionRowModeDemo },
      { path: 'preserve-selection', component: DatagridPreserveSelectionDemo },
      { path: 'server-driven', component: DatagridServerDrivenDemo },
      { path: 'placeholder', component: DatagridPlaceholderDemo },
      { path: 'scrolling', component: DatagridScrollingDemo },
      { path: 'column-sizing', component: DatagridColumnSizingDemo },
      { path: 'compact', component: DatagridCompactDemo },
      { path: 'expandable-rows', component: DatagridExpandableRowsDemo },
      { path: 'full', component: DatagridFullDemo },
      { path: 'test-cases', component: DatagridTestCasesDemo },
      { path: 'test-cases-async', component: DatagridTestCasesAsyncDemo },
      { path: 'hide-show', component: DatagridHideShowDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
