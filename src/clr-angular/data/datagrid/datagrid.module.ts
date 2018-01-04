/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
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
import {ClrDatagridSortOrder} from "./interfaces/sort-order";
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
    ClrDatagridPlaceholder,

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
export class Datagrid extends ClrDatagrid {}
/** @deprecated since 0.11 */
export class DatagridActionBar extends ClrDatagridActionBar {}
/** @deprecated since 0.11 */
export class DatagridActionOverflow extends ClrDatagridActionOverflow {}
/** @deprecated since 0.11 */
export class DatagridColumn extends ClrDatagridColumn {}
/** @deprecated since 0.11 */
export class DatagridColumnToggle extends ClrDatagridColumnToggle {}
/** @deprecated since 0.11 */
export class DatagridHideableColumnDirective extends ClrDatagridHideableColumn {}
/** @deprecated since 0.11 */
export class DatagridFilter extends ClrDatagridFilter {}
/** @deprecated since 0.11 */
export class DatagridItems extends ClrDatagridItems {}
/** @deprecated since 0.11 */
export class DatagridRow extends ClrDatagridRow {}
/** @deprecated since 0.11 */
export class DatagridRowDetail extends ClrDatagridRowDetail {}
/** @deprecated since 0.11 */
export class DatagridCell extends ClrDatagridCell {}
/** @deprecated since 0.11 */
export class DatagridFooter extends ClrDatagridFooter {}
/** @deprecated since 0.11 */
export class DatagridPagination extends ClrDatagridPagination {}
/** @deprecated since 0.11 */
export class DatagridPlaceholder extends ClrDatagridPlaceholder {}
/** @deprecated since 0.11 */
export enum SortOrder {
    // Cannot extend an enum so have to redeclare it
    Unsorted = 0,
    Asc = 1,
    Desc = -1
}
/** @deprecated since 0.11 */
export interface Comparator<T> extends ClrDatagridComparatorInterface<any> {}
/** @deprecated since 0.11 */
export interface Filter<T> extends ClrDatagridFilterInterface<any> {}
/** @deprecated since 0.11 */
export interface State extends ClrDatagridStateInterface {}
/** @deprecated since 0.11 */
export interface StringFilter<T> extends ClrDatagridStringFilterInterface<any> {}
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const DATAGRID_DIRECTIVES = CLR_DATAGRID_DIRECTIVES;
