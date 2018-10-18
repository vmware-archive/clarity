/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClrFormsModule } from '../../forms/forms.module';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonPopoverModule } from '../../popover/common/popover.module';
import { ClrIfExpandModule } from '../../utils/expand/if-expand.module';
import { ClrLoadingModule } from '../../utils/loading/loading.module';
import { ClrOutsideClickModule } from '../../utils/outside-click/outside-click.module';

import { DatagridRowExpandAnimation } from './animation-hack/row-expand-animation';
import { DatagridStringFilter } from './built-in/filters/datagrid-string-filter';
import { ActionableOompaLoompa } from './chocolate/actionable-oompa-loompa';
import { DatagridWillyWonka } from './chocolate/datagrid-willy-wonka';
import { ExpandableOompaLoompa } from './chocolate/expandable-oompa-loompa';
import { ClrDatagrid } from './datagrid';
import { ClrDatagridActionBar } from './datagrid-action-bar';
import { ClrDatagridActionOverflow } from './datagrid-action-overflow';
import { ClrDatagridCell } from './datagrid-cell';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { ClrDatagridColumnToggleTitle } from './datagrid-column-toggle-title';
import { DatagridDetailRegisterer } from './datagrid-detail-registerer';
import { ClrDatagridFilter } from './datagrid-filter';
import { ClrDatagridFooter } from './datagrid-footer';
import { ClrDatagridHideableColumn } from './datagrid-hideable-column';
import { ClrDatagridItems } from './datagrid-items';
import { ClrDatagridItemsTrackBy } from './datagrid-items-trackby';
import { ClrDatagridPagination } from './datagrid-pagination';
import { ClrDatagridPageSize } from './datagrid-page-size';
import { ClrDatagridPlaceholder } from './datagrid-placeholder';
import { ClrDatagridRow } from './datagrid-row';
import { ClrDatagridRowDetail } from './datagrid-row-detail';
import { DatagridCellRenderer } from './render/cell-renderer';
import { DatagridColumnResizer } from './render/column-resizer';
import { DatagridHeaderRenderer } from './render/header-renderer';
import { DatagridMainRenderer } from './render/main-renderer';
import { DatagridRowRenderer } from './render/row-renderer';
import { WrappedCell } from './wrapped-cell';
import { WrappedColumn } from './wrapped-column';
import { WrappedRow } from './wrapped-row';

export const CLR_DATAGRID_DIRECTIVES: Type<any>[] = [
  // Core
  ClrDatagrid,
  ClrDatagridActionBar,
  ClrDatagridActionOverflow,
  ClrDatagridColumn,
  ClrDatagridColumnToggle,
  ClrDatagridHideableColumn,
  ClrDatagridFilter,
  ClrDatagridItems,
  ClrDatagridItemsTrackBy,
  ClrDatagridRow,
  ClrDatagridRowDetail,
  DatagridDetailRegisterer,
  ClrDatagridCell,
  ClrDatagridFooter,
  ClrDatagridPagination,
  ClrDatagridPageSize,
  ClrDatagridPlaceholder,
  ClrDatagridColumnToggleButton,
  ClrDatagridColumnToggleTitle,
  WrappedCell,
  WrappedColumn,
  WrappedRow,

  // Renderers
  DatagridMainRenderer,
  DatagridHeaderRenderer,
  DatagridColumnResizer,
  DatagridRowRenderer,
  DatagridCellRenderer,

  // Chocolate
  DatagridWillyWonka,
  ActionableOompaLoompa,
  ExpandableOompaLoompa,

  // Animation hack
  DatagridRowExpandAnimation,

  // Built-in shortcuts
  DatagridStringFilter,
];

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    ClrFormsModule,
    FormsModule,
    ClrCommonPopoverModule,
    ClrLoadingModule,
    ClrOutsideClickModule,
  ],
  declarations: [CLR_DATAGRID_DIRECTIVES],
  exports: [CLR_DATAGRID_DIRECTIVES, ClrIfExpandModule],
  entryComponents: [WrappedCell, WrappedColumn, WrappedRow],
})
export class ClrDatagridModule {}
