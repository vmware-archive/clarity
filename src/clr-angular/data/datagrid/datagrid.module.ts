/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClrFormsModule} from "../../forms/forms.module";
import {ClrIconModule} from "../../icon/icon.module";
import {ClrCommonPopoverModule} from "../../popover/common/popover.module";
import {ClrIfExpandModule} from "../../utils/expand/if-expand.module";
import {ClrLoadingModule} from "../../utils/loading/loading.module";
import {ClrOutsideClickModule} from "../../utils/outside-click/outside-click.module";

import {DatagridRowExpandAnimation} from "./animation-hack/row-expand-animation";
import {DatagridStringFilter} from "./built-in/filters/datagrid-string-filter";
import {ActionableOompaLoompa} from "./chocolate/actionable-oompa-loompa";
import {DatagridWillyWonka} from "./chocolate/datagrid-willy-wonka";
import {ExpandableOompaLoompa} from "./chocolate/expandable-oompa-loompa";
import {ClrDatagrid} from "./datagrid";
import {ClrDatagridActionBar} from "./datagrid-action-bar";
import {ClrDatagridActionOverflow} from "./datagrid-action-overflow";
import {ClrDatagridCell} from "./datagrid-cell";
import {ClrDatagridColumn} from "./datagrid-column";
import {ClrDatagridColumnToggle} from "./datagrid-column-toggle";
import {ClrDatagridColumnToggleButton} from "./datagrid-column-toggle-button";
import {ClrDatagridColumnToggleTitle} from "./datagrid-column-toggle-title";
import {DatagridDetailRegisterer} from "./datagrid-detail-registerer";
import {ClrDatagridFilter} from "./datagrid-filter";
import {ClrDatagridFooter} from "./datagrid-footer";
import {ClrDatagridHideableColumn} from "./datagrid-hideable-column";
import {ClrDatagridItems} from "./datagrid-items";
import {ClrDatagridItemsTrackBy} from "./datagrid-items-trackby";
import {ClrDatagridPagination} from "./datagrid-pagination";
import {ClrDatagridPlaceholder} from "./datagrid-placeholder";
import {ClrDatagridRow} from "./datagrid-row";
import {ClrDatagridRowDetail} from "./datagrid-row-detail";
import {ClrDatagridComparatorInterface} from "./interfaces/comparator.interface";
import {ClrDatagridFilterInterface} from "./interfaces/filter.interface";
import {ClrDatagridStateInterface} from "./interfaces/state.interface";
import {ClrDatagridStringFilterInterface} from "./interfaces/string-filter.interface";
import {DatagridBodyRenderer} from "./render/body-renderer";
import {DatagridCellRenderer} from "./render/cell-renderer";
import {DatagridColumnResizer} from "./render/column-resizer";
import {DatagridHeadRenderer} from "./render/head-renderer";
import {DatagridHeaderRenderer} from "./render/header-renderer";
import {DatagridMainRenderer} from "./render/main-renderer";
import {DatagridRowRenderer} from "./render/row-renderer";
import {DatagridTableRenderer} from "./render/table-renderer";

export const CLR_DATAGRID_DIRECTIVES: Type<any>[] = [
    // Core
    ClrDatagrid, ClrDatagridActionBar, ClrDatagridActionOverflow, ClrDatagridColumn, ClrDatagridColumnToggle,
    ClrDatagridHideableColumn, ClrDatagridFilter, ClrDatagridItems, ClrDatagridItemsTrackBy, ClrDatagridRow,
    ClrDatagridRowDetail, DatagridDetailRegisterer, ClrDatagridCell, ClrDatagridFooter, ClrDatagridPagination,
    ClrDatagridPlaceholder, ClrDatagridColumnToggleButton, ClrDatagridColumnToggleTitle,

    // Renderers
    DatagridMainRenderer, DatagridTableRenderer, DatagridHeadRenderer, DatagridHeaderRenderer, DatagridBodyRenderer,
    DatagridColumnResizer, DatagridRowRenderer, DatagridCellRenderer,

    // Chocolate
    DatagridWillyWonka, ActionableOompaLoompa, ExpandableOompaLoompa,

    // Animation hack
    DatagridRowExpandAnimation,

    // Built-in shortcuts
    DatagridStringFilter
];

@NgModule({
    imports: [
        CommonModule, ClrIconModule, ClrFormsModule, FormsModule, ClrCommonPopoverModule, ClrLoadingModule,
        ClrOutsideClickModule
    ],
    declarations: [
        CLR_DATAGRID_DIRECTIVES,
    ],
    exports: [CLR_DATAGRID_DIRECTIVES, ClrIfExpandModule]
})
export class ClrDatagridModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface Datagrid extends ClrDatagrid {}
/** @deprecated since 0.11 */
export const Datagrid = ClrDatagrid;
/** @deprecated since 0.11 */
export interface DatagridActionBar extends ClrDatagridActionBar {}
/** @deprecated since 0.11 */
export const DatagridActionBar = ClrDatagridActionBar;
/** @deprecated since 0.11 */
export interface DatagridActionOverflow extends ClrDatagridActionOverflow {}
/** @deprecated since 0.11 */
export const DatagridActionOverflow = ClrDatagridActionOverflow;
/** @deprecated since 0.11 */
export interface DatagridColumn extends ClrDatagridColumn {}
/** @deprecated since 0.11 */
export const DatagridColumn = ClrDatagridColumn;
/** @deprecated since 0.11 */
export interface DatagridColumnToggle extends ClrDatagridColumnToggle {}
/** @deprecated since 0.11 */
export const DatagridColumnToggle = ClrDatagridColumnToggle;
/** @deprecated since 0.11 */
export interface DatagridHideableColumnDirective extends ClrDatagridHideableColumn {}
/** @deprecated since 0.11 */
export const DatagridHideableColumnDirective = ClrDatagridHideableColumn;
/** @deprecated since 0.11 */
export interface DatagridFilter extends ClrDatagridFilter {}
/** @deprecated since 0.11 */
export const DatagridFilter = ClrDatagridFilter;
/** @deprecated since 0.11 */
export interface DatagridItems extends ClrDatagridItems {}
/** @deprecated since 0.11 */
export const DatagridItems = ClrDatagridItems;
/** @deprecated since 0.11 */
export interface DatagridRow extends ClrDatagridRow {}
/** @deprecated since 0.11 */
export const DatagridRow = ClrDatagridRow;
/** @deprecated since 0.11 */
export interface DatagridRowDetail extends ClrDatagridRowDetail {}
/** @deprecated since 0.11 */
export const DatagridRowDetail = ClrDatagridRowDetail;
/** @deprecated since 0.11 */
export interface DatagridCell extends ClrDatagridCell {}
/** @deprecated since 0.11 */
export const DatagridCell = ClrDatagridCell;
/** @deprecated since 0.11 */
export interface DatagridFooter extends ClrDatagridFooter {}
/** @deprecated since 0.11 */
export const DatagridFooter = ClrDatagridFooter;
/** @deprecated since 0.11 */
export interface DatagridPagination extends ClrDatagridPagination {}
/** @deprecated since 0.11 */
export const DatagridPagination = ClrDatagridPagination;
/** @deprecated since 0.11 */
export interface DatagridPlaceholder extends ClrDatagridPlaceholder {}
/** @deprecated since 0.11 */
export const DatagridPlaceholder = ClrDatagridPlaceholder;
/** @deprecated since 0.11 */
export enum SortOrder {
    // Cannot extend an enum so have to redeclare it
    Unsorted = 0,
    Asc = 1,
    Desc = -1
}
/** @deprecated since 0.11 */
export interface Comparator<T> extends ClrDatagridComparatorInterface<T> {}
/** @deprecated since 0.11 */
export interface Filter<T> extends ClrDatagridFilterInterface<T> {}
/** @deprecated since 0.11 */
export interface State extends ClrDatagridStateInterface {}
/** @deprecated since 0.11 */
export interface StringFilter<T> extends ClrDatagridStringFilterInterface<T> {}
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const DATAGRID_DIRECTIVES = CLR_DATAGRID_DIRECTIVES;
