/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClrFormsModule } from '../../forms/forms.module';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrLoadingModule } from '../../utils/loading/loading.module';
import { ClrOutsideClickModule } from '../../utils/outside-click/outside-click.module';
import { ClrDragAndDropModule } from '../../utils/drag-and-drop/drag-and-drop.module';
import { ClrExpandableAnimationModule } from '../../utils/animations/expandable-animation/expandable-animation.module';
import { ClrSpinnerModule } from '../../progress/spinner/spinner.module';
import { ClrPopoverModuleNext } from '../../utils/popover/popover.module';
import { ClrFocusTrapModule } from '../../utils/focus-trap/focus-trap.module';
import { ClrFocusOnViewInitModule } from '../../utils/focus/focus-on-view-init/focus-on-view-init.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';

import { DatagridStringFilter } from './built-in/filters/datagrid-string-filter';
import { DatagridNumericFilter } from './built-in/filters/datagrid-numeric-filter';
import { ActionableOompaLoompa } from './chocolate/actionable-oompa-loompa';
import { DatagridWillyWonka } from './chocolate/datagrid-willy-wonka';
import { ExpandableOompaLoompa } from './chocolate/expandable-oompa-loompa';
import { ClrDatagrid } from './datagrid';
import { ClrDatagridActionBar } from './datagrid-action-bar';
import { ClrDatagridActionOverflow } from './datagrid-action-overflow';
import { ClrDatagridCell } from './datagrid-cell';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridColumnSeparator } from './datagrid-column-separator';
import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { ClrDatagridColumnToggleTitle } from './datagrid-column-toggle-title';
import { DatagridDetailRegisterer } from './datagrid-detail-registerer';
import { ClrDatagridDetail } from './datagrid-detail';
import { ClrIfDetail } from './datagrid-if-detail';
import { ClrDatagridDetailHeader } from './datagrid-detail-header';
import { ClrDatagridDetailBody } from './datagrid-detail-body';
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
import { DatagridHeaderRenderer } from './render/header-renderer';
import { DatagridMainRenderer } from './render/main-renderer';
import { DatagridRowRenderer } from './render/row-renderer';
import { WrappedCell } from './wrapped-cell';
import { WrappedColumn } from './wrapped-column';
import { WrappedRow } from './wrapped-row';
import {
  angleDoubleIcon,
  arrowIcon,
  ClarityIcons,
  ellipsisVerticalIcon,
  filterGridCircleIcon,
  filterGridIcon,
  stepForward2Icon,
  timesIcon,
  viewColumnsIcon,
  windowCloseIcon,
} from '@cds/core/icon';

export const CLR_DATAGRID_DIRECTIVES: Type<any>[] = [
  // Core
  ClrDatagrid,
  ClrDatagridActionBar,
  ClrDatagridActionOverflow,
  ClrDatagridColumn,
  ClrDatagridColumnSeparator,
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
  ClrDatagridDetail,
  ClrIfDetail,
  ClrDatagridDetailHeader,
  ClrDatagridDetailBody,
  WrappedCell,
  WrappedColumn,
  WrappedRow,

  // Renderers
  DatagridMainRenderer,
  DatagridHeaderRenderer,
  DatagridRowRenderer,
  DatagridCellRenderer,

  // Chocolate
  DatagridWillyWonka,
  ActionableOompaLoompa,
  ExpandableOompaLoompa,

  // Built-in shortcuts
  DatagridStringFilter,
  DatagridNumericFilter,
];

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    ClrFormsModule,
    FormsModule,
    ClrLoadingModule,
    ClrConditionalModule,
    ClrOutsideClickModule,
    ClrExpandableAnimationModule,
    ClrDragAndDropModule,
    ClrSpinnerModule,
    ClrPopoverModuleNext,
    ClrFocusTrapModule,
    ClrFocusOnViewInitModule,
  ],
  declarations: [CLR_DATAGRID_DIRECTIVES],
  exports: [CLR_DATAGRID_DIRECTIVES],
  entryComponents: [WrappedCell, WrappedColumn, WrappedRow],
})
export class ClrDatagridModule {
  constructor() {
    ClarityIcons.addIcons(
      ellipsisVerticalIcon,
      viewColumnsIcon,
      windowCloseIcon,
      arrowIcon,
      timesIcon,
      stepForward2Icon,
      angleDoubleIcon,
      filterGridCircleIcon,
      filterGridIcon
    );
  }
}
