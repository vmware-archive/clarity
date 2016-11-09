/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 *
 * We could also check here that we do export publicly all the directives needed to use Stack View,
 * but I don't see a way to do it simply without it being completely irrelevant.
 */

import {addHelpers} from "./helpers.spec";
import SortProviderSpecs from "./providers/sort.spec";
import FiltersProviderSpecs from "./providers/filters.spec";
import PageProviderSpecs from "./providers/page.spec";
import ItemsProviderSpecs from "./providers/items.spec";
import SelectionProviderSpecs from "./providers/selection.spec";
import DatagridCellSpecs from "./datagrid-cell.spec";
import DatagridFilterSpecs from "./datagrid-filter.spec";
import DatagridColumnSpecs from "./datagrid-column.spec";
import DatagridItemsSpecs from "./datagrid-items.spec";
import DatagridRowSpecs from "./datagrid-row.spec";
import DatagridFooterSpecs from "./datagrid-footer.spec";
import DatagridPaginationSpecs from "./datagrid-pagination.spec";
import NestedPropertySpec from "./built-in/nested-property.spec";
import DatagridPropertyComparatorSpecs from "./built-in/comparators/datagrid-property-comparator.spec";
import DatagridPropertyStringFilterSpecs from "./built-in/filters/datagrid-property-string-filter.spec";
import DatagridStringFilterSpecs from "./built-in/filters/datagrid-string-filter.spec";

describe("Datagrid", function() {
    addHelpers();

    describe("Providers", function() {
        SortProviderSpecs();
        FiltersProviderSpecs();
        PageProviderSpecs();
        ItemsProviderSpecs();
        SelectionProviderSpecs();
    });
    describe("Components", function() {
        DatagridCellSpecs();
        DatagridFilterSpecs();
        DatagridColumnSpecs();
        DatagridItemsSpecs();
        DatagridRowSpecs();
        DatagridPaginationSpecs();
        DatagridFooterSpecs();
    });
    describe("Built-in", function() {
        NestedPropertySpec();
        DatagridPropertyComparatorSpecs();
        DatagridPropertyStringFilterSpecs();
        DatagridStringFilterSpecs();
    });
});