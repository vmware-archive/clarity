/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */

import DatagridRowExpandAnimationSpecs from "./animation-hack/row-expand-animation.spec";
import DatagridPropertyComparatorSpecs from "./built-in/comparators/datagrid-property-comparator.spec";
import DatagridPropertyStringFilterSpecs from "./built-in/filters/datagrid-property-string-filter.spec";
import DatagridStringFilterSpecs from "./built-in/filters/datagrid-string-filter.spec";
import NestedPropertySpecs from "./built-in/nested-property.spec";
import DatagridActionBarSpecs from "./datagrid-action-bar.spec";
import DatagridActionOverflowSpecs from "./datagrid-action-overflow.spec";
import DatagridCellSpecs from "./datagrid-cell.spec";
import DatagridColumnToggle from "./datagrid-column-toggle.spec";
import DatagridColumnSpecs from "./datagrid-column.spec";
import DatagridFilterSpecs from "./datagrid-filter.spec";
import DatagridFooterSpecs from "./datagrid-footer.spec";
import DatagridHideableColumnDirectiveSpec from "./datagrid-hideable-column.directive.spec";
import DatagridHideableColumnSpec from "./datagrid-hideable-column.spec";
import DatagridItemsSpecs from "./datagrid-items.spec";
import DatagridPaginationSpecs from "./datagrid-pagination.spec";
import DatagridPlaceholderSpecs from "./datagrid-placeholder.spec";
import DatagridRowDetailSpecs from "./datagrid-row-detail.spec";
import DatagridRowSpecs from "./datagrid-row.spec";
import DatagridSpecs from "./datagrid.spec";
import {addHelpers} from "./helpers.spec";
import FiltersProviderSpecs from "./providers/filters.spec";
import DatagridHideableColumnServiceSpecs from "./providers/hideable-column.service.spec";
import ItemsProviderSpecs from "./providers/items.spec";
import PageProviderSpecs from "./providers/page.spec";
import SelectionProviderSpecs from "./providers/selection.spec";
import SortProviderSpecs from "./providers/sort.spec";
import DatagridBodyRendererSpecs from "./render/body-renderer.spec";
import DatagridCellRendererSpecs from "./render/cell-renderer.spec";
import DatagridColumnResizerSpecs from "./render/column-resizer.spec";
import DomAdapterSpecs from "./render/dom-adapter.spec";
import DatagridHeadRendererSpecs from "./render/head-renderer.spec";
import DatagridHeaderRendererSpecs from "./render/header-renderer.spec";
import DatagridMainRendererSpecs from "./render/main-renderer.spec";
import DatagridRenderOrganizerSpecs from "./render/render-organizer.spec";
import DatagridRowMasterRendererSpecs from "./render/row-master-renderer.spec";
import DatagridRowRendererSpecs from "./render/row-renderer.spec";
import DatagridTableRendererSpecs from "./render/table-renderer.spec";

describe("Datagrid", function() {
    addHelpers();

    describe("Providers", function() {
        SortProviderSpecs();
        FiltersProviderSpecs();
        PageProviderSpecs();
        ItemsProviderSpecs();
        SelectionProviderSpecs();
        DatagridHideableColumnServiceSpecs();
    });
    describe("Components", function() {
        DatagridActionBarSpecs();
        DatagridActionOverflowSpecs();
        DatagridCellSpecs();
        DatagridFilterSpecs();
        DatagridColumnSpecs();
        DatagridItemsSpecs();
        DatagridRowSpecs();
        DatagridRowDetailSpecs();
        DatagridPaginationSpecs();
        DatagridFooterSpecs();
        DatagridPlaceholderSpecs();
        DatagridSpecs();
        DatagridHideableColumnSpec();
        DatagridColumnToggle();
        DatagridHideableColumnDirectiveSpec();
    });
    describe("Render", function() {
        DomAdapterSpecs();
        DatagridRenderOrganizerSpecs();
        DatagridCellRendererSpecs();
        DatagridRowRendererSpecs();
        DatagridRowMasterRendererSpecs();
        DatagridBodyRendererSpecs();
        DatagridHeaderRendererSpecs();
        DatagridHeadRendererSpecs();
        DatagridColumnResizerSpecs();
        DatagridTableRendererSpecs();
        DatagridMainRendererSpecs();
        DatagridRowExpandAnimationSpecs();
    });
    describe("Built-in", function() {
        NestedPropertySpecs();
        DatagridPropertyComparatorSpecs();
        DatagridPropertyStringFilterSpecs();
        DatagridStringFilterSpecs();
    });
});
