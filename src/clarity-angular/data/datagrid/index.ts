/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {DatagridRowExpandAnimation} from "./animation-hack/row-expand-animation";
import {DatagridStringFilter} from "./built-in/filters/datagrid-string-filter";
import {ActionableOompaLoompa} from "./chocolate/actionable-oompa-loompa";
import {DatagridWillyWonka} from "./chocolate/datagrid-willy-wonka";
import {ExpandableOompaLoompa} from "./chocolate/expandable-oompa-loompa";
import {Datagrid} from "./datagrid";
import {DatagridActionBar} from "./datagrid-action-bar";
import {DatagridActionOverflow} from "./datagrid-action-overflow";
import {DatagridCell} from "./datagrid-cell";
import {DatagridColumn} from "./datagrid-column";
import {DatagridColumnToggle} from "./datagrid-column-toggle";
import {DatagridDetailRegisterer} from "./datagrid-detail-registerer";
import {DatagridFilter} from "./datagrid-filter";
import {DatagridFooter} from "./datagrid-footer";
import {DatagridHideableColumnDirective} from "./datagrid-hidable-column.directive";
import {DatagridItems} from "./datagrid-items";
import {DatagridPagination} from "./datagrid-pagination";
import {DatagridPlaceholder} from "./datagrid-placeholder";
import {DatagridRow} from "./datagrid-row";
import {DatagridRowDetail} from "./datagrid-row-detail";
import {DatagridBodyRenderer} from "./render/body-renderer";
import {DatagridCellRenderer} from "./render/cell-renderer";
import {DatagridColumnResizer} from "./render/column-resizer";
import {DatagridHeadRenderer} from "./render/head-renderer";
import {DatagridHeaderRenderer} from "./render/header-renderer";
import {DatagridMainRenderer} from "./render/main-renderer";
import {DatagridRowMasterRenderer} from "./render/row-master-renderer";
import {DatagridRowRenderer} from "./render/row-renderer";
import {DatagridTableRenderer} from "./render/table-renderer";


export * from "./datagrid";
export * from "./datagrid-action-bar";
export * from "./datagrid-action-overflow";
export * from "./datagrid-column";
export * from "./datagrid-column-toggle";
export * from "./datagrid-hidable-column.directive";
export * from "./datagrid-filter";
export * from "./datagrid-items";
export * from "./datagrid-row";
export * from "./datagrid-row-detail";
export * from "./datagrid-cell";
export * from "./datagrid-footer";
export * from "./datagrid-pagination";
export * from "./datagrid-placeholder";

export * from "./interfaces/state";
export * from "./interfaces/sort-order";
export * from "./interfaces/filter";
export * from "./interfaces/string-filter";
export * from "./interfaces/comparator";

export * from "./built-in/filters/datagrid-string-filter";
export * from "./built-in/filters/datagrid-property-string-filter";
export * from "./built-in/comparators/datagrid-property-comparator";

export const DATAGRID_DIRECTIVES: Type<any>[] = [
    // Core
    Datagrid, DatagridActionBar, DatagridActionOverflow, DatagridColumn, DatagridColumnToggle,
    DatagridHideableColumnDirective, DatagridFilter, DatagridItems, DatagridRow, DatagridRowDetail,
    DatagridDetailRegisterer, DatagridCell, DatagridFooter, DatagridPagination, DatagridPlaceholder,

    // Renderers
    DatagridMainRenderer, DatagridTableRenderer, DatagridHeadRenderer, DatagridHeaderRenderer, DatagridBodyRenderer,
    DatagridColumnResizer, DatagridRowRenderer, DatagridRowMasterRenderer, DatagridCellRenderer,

    // Chocolate
    DatagridWillyWonka, ActionableOompaLoompa, ExpandableOompaLoompa,

    // Animation hack
    DatagridRowExpandAnimation,

    // Built-in shortcuts
    DatagridStringFilter
];
