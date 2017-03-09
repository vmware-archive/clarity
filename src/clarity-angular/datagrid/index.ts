/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {DatagridStringFilter} from "./built-in/filters/datagrid-string-filter";
import {Datagrid} from "./datagrid";
import {DatagridActionBar} from "./datagrid-action-bar";
import {DatagridActionOverflow} from "./datagrid-action-overflow";
import {DatagridCell} from "./datagrid-cell";
import {DatagridColumn} from "./datagrid-column";
import {DatagridFilter} from "./datagrid-filter";
import {DatagridFooter} from "./datagrid-footer";
import {DatagridItems} from "./datagrid-items";
import {DatagridPagination} from "./datagrid-pagination";
import {DatagridRow} from "./datagrid-row";
import {DatagridPlaceholder} from "./datagrid-placeholder";

import {DatagridMainRenderer} from "./render/main-renderer";
import {DatagridTableRenderer} from "./render/table-renderer";
import {DatagridHeaderRenderer} from "./render/header-renderer";
import {DatagridHeadRenderer} from "./render/head-renderer";
import {DatagridBodyRenderer} from "./render/body-renderer";
import {DatagridRowRenderer} from "./render/row-renderer";
import {DatagridCellRenderer} from "./render/cell-renderer";

export * from "./datagrid";
export * from "./datagrid-action-bar";
export * from "./datagrid-action-overflow";
export * from "./datagrid-column";
export * from "./datagrid-filter";
export * from "./datagrid-items";
export * from "./datagrid-row";
export * from "./datagrid-cell";
export * from "./datagrid-footer";
export * from "./datagrid-pagination";
export * from "./datagrid-placeholder";

export * from "./interfaces/state";
export * from "./interfaces/filter";
export * from "./interfaces/string-filter";
export * from "./interfaces/comparator";

export * from "./built-in/filters/datagrid-string-filter";
export * from "./built-in/filters/datagrid-property-string-filter";
export * from "./built-in/comparators/datagrid-property-comparator";

export const DATAGRID_DIRECTIVES: Type<any>[] = [
    // Core
    Datagrid,
    DatagridActionBar,
    DatagridActionOverflow,
    DatagridColumn,
    DatagridFilter,
    DatagridItems,
    DatagridRow,
    DatagridCell,
    DatagridFooter,
    DatagridPagination,
    DatagridPlaceholder,

    // Renderers
    DatagridMainRenderer,
    DatagridTableRenderer,
    DatagridHeadRenderer,
    DatagridHeaderRenderer,
    DatagridBodyRenderer,
    DatagridRowRenderer,
    DatagridCellRenderer,

    // Built-in shortcuts
    DatagridStringFilter
];