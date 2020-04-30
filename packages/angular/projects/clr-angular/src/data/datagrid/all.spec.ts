/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */

import DatagridPropertyComparatorSpecs from './built-in/comparators/datagrid-property-comparator.spec';
import DatagridPropertyStringFilterSpecs from './built-in/filters/datagrid-property-string-filter.spec';
import DatagridStringFilterSpecs from './built-in/filters/datagrid-string-filter.spec';
import DatagridStringFilterImplSpecs from './built-in/filters/datagrid-string-filter-impl.spec';
import DatagridNumericFilterSpecs from './built-in/filters/datagrid-numeric-filter.spec';
import DatagridNumericFilterImplSpecs from './built-in/filters/datagrid-numeric-filter-impl.spec';
import NestedPropertySpecs from './built-in/nested-property.spec';
import DatagridActionBarSpecs from './datagrid-action-bar.spec';
import DatagridActionOverflowSpecs from './datagrid-action-overflow.spec';
import DatagridCellSpecs from './datagrid-cell.spec';
import DatagridColumnToggleButtonSpecs from './datagrid-column-toggle-button.spec';
import DatagridColumnToggleSpecs from './datagrid-column-toggle.spec';
import DatagridColumnSpecs from './datagrid-column.spec';
import DatagridColumnSeparatorSpecs from './datagrid-column-separator.spec';
import DatagridFilterSpecs from './datagrid-filter.spec';
import DatagridFooterSpecs from './datagrid-footer.spec';
import DatagridHideableColumnDirectiveSpec from './datagrid-hideable-column.spec';
import DatagridItemsTrackBySpecs from './datagrid-items-trackby.spec';
import DatagridItemsSpecs from './datagrid-items.spec';
import DatagridPageSizeSpecs from './datagrid-page-size.spec';
import DatagridPaginationSpecs from './datagrid-pagination.spec';
import DatagridPaginationIntegrationSpecs from './datagrid-pagination.integration.spec';
import DatagridPlaceholderSpecs from './datagrid-placeholder.spec';
import DatagridRowDetailSpecs from './datagrid-row-detail.spec';
import DatagridRowSpecs from './datagrid-row.spec';
import DatagridSpecs from './datagrid.spec';
import { addHelpers } from './helpers.spec';
import DisplayModeServiceSpecs from './providers/display-mode.service.spec';
import FiltersProviderSpecs from './providers/filters.spec';
import ItemsProviderSpecs from './providers/items.spec';
import PageProviderSpecs from './providers/page.spec';
import SelectionProviderSpecs from './providers/selection.spec';
import SortProviderSpecs from './providers/sort.spec';
import TableSizeServiceSpec from './providers/table-size.service.spec';
import DatagridCellRendererSpecs from './render/cell-renderer.spec';
import DomAdapterSpecs from '../../utils/dom-adapter/dom-adapter.spec';
import DatagridHeaderRendererSpecs from './render/header-renderer.spec';
import DatagridMainRendererSpecs from './render/main-renderer.spec';
import NoopDomAdapterSpecs from './render/noop-dom-adapter.spec';
import DatagridRenderOrganizerSpecs from './render/render-organizer.spec';
import DatagridRowRendererSpecs from './render/row-renderer.spec';
import WrappedCellSpec from './wrapped-cell.spec';
import WrappedColumnSpec from './wrapped-column.spec';
import WrappedRowSpec from './wrapped-row.spec';
import ColumnResizerServiceSpecs from './providers/column-resizer.service.spec';

describe('Datagrid', function () {
  addHelpers();

  describe('Providers', function () {
    SortProviderSpecs();
    FiltersProviderSpecs();
    PageProviderSpecs();
    ItemsProviderSpecs();
    SelectionProviderSpecs();
    DisplayModeServiceSpecs();
    TableSizeServiceSpec();
    ColumnResizerServiceSpecs();
  });
  describe('Components', function () {
    DatagridActionBarSpecs();
    DatagridActionOverflowSpecs();
    DatagridCellSpecs();
    DatagridFilterSpecs();
    DatagridColumnSpecs();
    DatagridColumnSeparatorSpecs();
    DatagridItemsSpecs();
    DatagridItemsTrackBySpecs();
    DatagridRowSpecs();
    DatagridRowDetailSpecs();
    DatagridPageSizeSpecs();
    DatagridPaginationSpecs();
    DatagridPaginationIntegrationSpecs();
    DatagridFooterSpecs();
    DatagridPlaceholderSpecs();
    DatagridSpecs();
    DatagridColumnToggleSpecs();
    DatagridColumnToggleButtonSpecs();
    DatagridHideableColumnDirectiveSpec();
    WrappedCellSpec();
    WrappedColumnSpec();
    WrappedRowSpec();
  });
  describe('Render', function () {
    DomAdapterSpecs();
    NoopDomAdapterSpecs();
    DatagridRenderOrganizerSpecs();
    DatagridCellRendererSpecs();
    DatagridRowRendererSpecs();
    DatagridHeaderRendererSpecs();
    DatagridMainRendererSpecs();
  });
  describe('Built-in', function () {
    NestedPropertySpecs();
    DatagridPropertyComparatorSpecs();
    DatagridPropertyStringFilterSpecs();
    DatagridStringFilterSpecs();
    DatagridStringFilterImplSpecs();
    DatagridNumericFilterSpecs();
    DatagridNumericFilterImplSpecs();
  });
});
