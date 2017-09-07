/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {Subject} from "rxjs/Subject";

import {DatagridPropertyComparator} from "./built-in/comparators/datagrid-property-comparator";
import {DatagridStringFilter} from "./built-in/filters/datagrid-string-filter";
import {DatagridColumn} from "./datagrid-column";
import {DatagridHideableColumnDirective} from "./datagrid-hidable-column.directive";
import {DatagridHideableColumn} from "./datagrid-hideable-column";
import {TestContext} from "./helpers.spec";
import {Comparator} from "./interfaces/comparator";
import {Filter} from "./interfaces/filter";
import {SortOrder} from "./interfaces/sort-order";
import {StringFilter} from "./interfaces/string-filter";
import {DragDispatcher} from "./providers/drag-dispatcher";
import {FiltersProvider} from "./providers/filters";
import {Page} from "./providers/page";
import {Sort} from "./providers/sort";
import {DomAdapter} from "./render/dom-adapter";
import {DatagridRenderOrganizer} from "./render/render-organizer";

const PROVIDERS_NEEDED = [Sort, FiltersProvider, DatagridRenderOrganizer, DomAdapter, DragDispatcher, Page];

export default function(): void {
    describe("DatagridColumn component", function() {
        describe("Typescript API", function() {
            let sortService: Sort;
            let filtersService: FiltersProvider;
            let dragDispatcherService: DragDispatcher;
            let comparator: TestComparator;
            let component: DatagridColumn;

            beforeEach(function() {
                sortService = new Sort();
                filtersService = new FiltersProvider(new Page());
                comparator = new TestComparator();
                dragDispatcherService = undefined;
                component = new DatagridColumn(sortService, filtersService, dragDispatcherService);
            });

            it("has an id for identification", function() {
                expect(component.columnId).toBeDefined();
                expect(component.columnId).toEqual(jasmine.any(String));
            });

            it("receives a comparator to sort the column", function() {
                expect(component.sortable).toBe(false);
                component.sortBy = comparator;
                expect(component.sortable).toBe(true);
            });

            it("can sort according to the given comparator", function() {
                component.sortBy = comparator;
                expect(sortService.comparator).toBeUndefined();
                component.sort();
                expect(sortService.comparator).toBe(component.sortBy);
                expect(sortService.reverse).toBe(false);
                component.sort();
                expect(sortService.comparator).toBe(component.sortBy);
                expect(sortService.reverse).toBe(true);
            });

            it("doesn't sort without a comparator", function() {
                expect(sortService.comparator).toBeUndefined();
                component.sort();
                expect(sortService.comparator).toBeUndefined();
            });

            it("knows if the column is currently sorted", function() {
                component.sortBy = comparator;
                expect(component.sorted).toBe(false);
                component.sort();
                expect(component.sorted).toBe(true);
                component.sort();
                expect(component.sorted).toBe(true);
            });

            it("sorts according to the optional input parameter", function() {
                component.sortBy = comparator;
                expect(component.sortOrder).toBe(SortOrder.Unsorted);
                component.sort(true);
                expect(component.sortOrder).toBe(SortOrder.Desc);
                component.sort(true);
                expect(component.sortOrder).toBe(SortOrder.Desc);
                component.sort(false);
                expect(component.sortOrder).toBe(SortOrder.Asc);
            });

            it("knows the column current sorting order", function() {
                component.sortBy = comparator;
                expect(component.sortOrder).toBe(SortOrder.Unsorted);
                component.sort();
                expect(component.sortOrder).toBe(SortOrder.Asc);
                component.sort();
                expect(component.sortOrder).toBe(SortOrder.Desc);
            });

            it("knows if the column is currently sorted in ascending order", function() {
                component.sortBy = comparator;
                expect(component.asc).toBe(false);
                component.sort();
                expect(component.asc).toBe(true);
                component.sort();
                expect(component.asc).toBe(false);
            });

            it("knows if the column is currently sorted in descending order", function() {
                component.sortBy = comparator;
                expect(component.desc).toBe(false);
                component.sort();
                expect(component.desc).toBe(false);
                component.sort();
                expect(component.desc).toBe(true);
            });

            it("offers a shortcut to sort based on a property name", function() {
                component.field = "test";
                expect(sortService.comparator).toBeUndefined();
                component.sort();
                expect(sortService.comparator).toEqual(new DatagridPropertyComparator("test"));
            });

            it("sorts based on a property name if sortyBy is undefined", function() {
                component.field = "test";
                component.sortBy = undefined;
                expect(sortService.comparator).toBeUndefined();
                component.sort();
                expect(sortService.comparator).toEqual(new DatagridPropertyComparator("test"));
            });

            it("sorts based on a property name if sortyBy becomes undefined", function() {
                component.sortBy = comparator;
                component.field = "test";
                component.sortBy = undefined;
                expect(sortService.comparator).toBeUndefined();
                component.sort();
                expect(sortService.comparator).toEqual(new DatagridPropertyComparator("test"));
            });

            it("sorts based on a property shortcut for sortBy without a given comparator", function() {
                component.sortBy = "test";
                expect(sortService.comparator).toBeUndefined();
                component.sort();
                expect(sortService.comparator).toEqual(new DatagridPropertyComparator("test"));
            });
        });

        describe("Template API", function() {
            it("receives an input for the comparator", function() {
                this.context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
                this.comparator = new TestComparator();
                this.context.testComponent.comparator = this.comparator;
                this.context.detectChanges();
                expect(this.context.clarityDirective.sortBy).toBe(this.comparator);
            });

            it("receives a string input for the property shortcut comparator", function() {
                this.context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
                this.comparator = new DatagridPropertyComparator("test");
                this.context.testComponent.comparator = "test";
                this.context.detectChanges();
                expect(this.context.clarityDirective.sortBy).toEqual(this.comparator);
            });

            it("receives an input for the property name", function() {
                this.context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityDirective.field).toBe("test");
            });

            it("receives an input for the property filter value", function() {
                this.context = this.create(DatagridColumn, PreFilterTest, PROVIDERS_NEEDED);
                this.context.testComponent.field = "test";
                this.context.testComponent.filterValue = "M";
                this.context.detectChanges();
                expect(this.context.clarityDirective.filterValue).toBe("M");
            });

            it("offers two-way binding on the sorted state", function() {
                this.context = this.create(DatagridColumn, SimpleDeprecatedTest, PROVIDERS_NEEDED);
                this.comparator = new TestComparator();
                this.context.testComponent.comparator = this.comparator;
                this.context.testComponent.sorted = true;
                this.context.detectChanges();
                expect(this.context.clarityDirective.sorted).toBe(true);  // dg col instance
                this.context.getClarityProvider(Sort).clear();
                this.context.detectChanges();
                expect(this.context.testComponent.sorted).toBe(false);
            });

            it("offers two-way binding on the sortOrder state", function() {
                this.context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
                this.comparator = new TestComparator();
                this.context.testComponent.comparator = this.comparator;
                this.context.testComponent.sortOrder = SortOrder.Desc;
                this.context.detectChanges();
                expect(this.context.clarityDirective.sortOrder).toBe(SortOrder.Desc);  // dg col instance
                this.context.getClarityProvider(Sort).clear();
                this.context.detectChanges();
                expect(this.context.testComponent.sortOrder).toBe(SortOrder.Unsorted);
                this.context.clarityDirective.sortOrder = SortOrder.Asc;
                this.context.detectChanges();
                expect(this.context.testComponent.sortOrder).toBe(SortOrder.Asc);
            });

            it("offers two way binding on the filtered state", function() {
                this.context = this.create(DatagridColumn, PreFilterTest, PROVIDERS_NEEDED);
                this.context.testComponent.field = "test";
                this.context.testComponent.filterValue = "M";
                this.context.detectChanges();
                expect(this.context.clarityDirective.filterValue).toBe("M");
                this.context.clarityDirective.filterValue = "t";
                this.context.detectChanges();
                expect(this.context.testComponent.filterValue).toBe("t");
            });

            it("accepts a custom filter in the projected content", function() {
                this.context = this.create(DatagridColumn, FilterTest, PROVIDERS_NEEDED);
                expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.context.testComponent.filter]);
            });

            it("accepts a custom string filter in the projected content", function() {
                this.context = this.create(DatagridColumn, StringFilterTest, PROVIDERS_NEEDED);
                this.stringFilter = this.context.testComponent.stringFilter.filter;
                // We make the filter active to see if the FiltersProvider provider knows about it
                this.stringFilter.value = "hello";
                this.context.detectChanges();
                expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.stringFilter]);
            });

            it("prioritizes custom comparators over the default property name one", function() {
                this.context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
                this.comparator = new TestComparator();
                this.context.testComponent.comparator = this.comparator;
                this.context.detectChanges();
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityDirective.sortBy).toBe(this.comparator);
            });

            it("prioritizes custom filters over the default property name one", function() {
                this.context = this.create(DatagridColumn, FilterTest, PROVIDERS_NEEDED);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityElement.querySelectorAll("clr-dg-filter").length).toBe(1);
                expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.context.testComponent.filter]);
            });

            it("prioritizes custom string filters over the default property name one", function() {
                this.context = this.create(DatagridColumn, StringFilterTest, PROVIDERS_NEEDED);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                this.stringFilter = this.context.testComponent.stringFilter.filter;
                // We make the filter active to see if the FiltersProvider provider knows about it
                this.stringFilter.value = "hello";
                this.context.detectChanges();
                expect(this.context.clarityElement.querySelectorAll("clr-dg-filter").length).toBe(1);
                expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.stringFilter]);
            });
        });

        describe("View basics", function() {
            let context: TestContext<DatagridColumn, SimpleTest>;

            beforeEach(function() {
                context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
            });

            it("projects content", function() {
                expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
            });

            it("adds the .datagrid-column class to the host", function() {
                expect(context.clarityElement.classList.contains("datagrid-column")).toBeTruthy();
            });

            it("displays a clickable column title to sort if the column is sortable", function() {
                let title = context.clarityElement.querySelector(".datagrid-column-title");
                expect(title.tagName).toBe("SPAN");
                title.click();
                context.detectChanges();
                expect(context.clarityDirective.sortOrder).toBe(SortOrder.Unsorted);
                context.testComponent.comparator = new TestComparator();
                context.detectChanges();
                title = context.clarityElement.querySelector(".datagrid-column-title");
                expect(title.tagName).toBe("BUTTON");
                title.click();
                context.detectChanges();
                expect(context.clarityDirective.sortOrder).toBe(SortOrder.Asc);
                title.click();
                context.detectChanges();
                expect(context.clarityDirective.sortOrder).toBe(SortOrder.Desc);
            });

            it("adds the .asc class to the host when sorted in ascending order", function() {
                context.clarityDirective.sortBy = new TestComparator();
                context.clarityDirective.sort();
                context.detectChanges();
                expect(context.clarityElement.classList.contains("asc")).toBeTruthy();
                expect(context.clarityElement.classList.contains("desc")).toBeFalsy();
            });

            it("adds the .desc class to the host when sorted in descending order", function() {
                context.clarityDirective.sortBy = new TestComparator();
                context.clarityDirective.sort();
                context.clarityDirective.sort();
                context.detectChanges();
                expect(context.clarityElement.classList.contains("asc")).toBeFalsy();
                expect(context.clarityElement.classList.contains("desc")).toBeTruthy();
            });

            it("adds the .datagrid-column--hidden when not visible", function() {

                context.clarityDirective.hideable = new DatagridHideableColumn(null, "dg-col-0", true);
                context.detectChanges();
                expect(context.clarityElement.classList.contains("datagrid-column--hidden")).toBeTruthy();
            });
        });

        describe("View filters", function() {
            it("doesn't display any filter by default", function() {
                this.context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
                expect(this.context.clarityElement.querySelector("clr-dg-filter")).toBeNull();
            });

            it("displays a string filter when using a property name", function() {
                this.context = this.create(DatagridColumn, SimpleTest, PROVIDERS_NEEDED);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityElement.querySelector("clr-dg-string-filter")).not.toBeNull();
            });

            it("projects custom filters outside of the title", function() {
                this.context = this.create(DatagridColumn, FilterTest, PROVIDERS_NEEDED);
                expect(this.context.clarityElement.querySelector(".my-filter")).not.toBeNull();
                const title = this.context.clarityElement.querySelector(".datagrid-column-title");
                expect(title.querySelector(".my-filter")).toBeNull();
            });

            it("projects custom string filters outside of the title", function() {
                this.context = this.create(DatagridColumn, StringFilterTest, PROVIDERS_NEEDED);
                expect(this.context.clarityElement.querySelector(".my-string-filter")).not.toBeNull();
                const title = this.context.clarityElement.querySelector(".datagrid-column-title");
                expect(title.querySelector(".my-string-filter")).toBeNull();
            });

            it("un-registers the correct filter", function() {
                this.context = this.create(DatagridColumn, UnregisterTest, PROVIDERS_NEEDED);
                this.context.testComponent.show = true;
                this.context.clarityDirective.filters.add(new TestFilter());
                this.context.clarityDirective.filters.add(new TestFilter());
                this.context.detectChanges();
                const activeFilters = this.context.clarityDirective.filters.getActiveFilters();
                expect(activeFilters.length).toBe(3);
                this.context.testComponent.show = false;
                this.context.detectChanges();
                const activeFiltersTest = this.context.clarityDirective.filters.getActiveFilters();
                expect(activeFiltersTest.length).toBe(2);
            });
        });

        describe("View hideability", function() {
            it("is hideable when there is a HideableColumnDirective", function() {
                this.context = this.create(DatagridColumn, HideableTest, PROVIDERS_NEEDED);
                expect(this.context.clarityDirective.hideable).toBeTruthy();
            });
            it("takes an input for the dgHideableColumnDirective", function() {
                this.context = this.create(DatagridColumn, HideableTest, PROVIDERS_NEEDED);
                expect(this.context.clarityDirective.hidden).toEqual(false);
            });
        });
    });
}

class TestComparator implements Comparator<number> {
    compare(a: number, b: number): number {
        return 0;
    }
}

class TestFilter implements Filter<number> {
    isActive(): boolean {
        return true;
    }

    accepts(n: number): boolean {
        return true;
    }

    changes = new Subject<boolean>();
}

class TestStringFilter implements StringFilter<string> {
    accepts(s: string, search: string): boolean {
        return true;
    }
}

@Component({
    template: `
        <clr-dg-column
                [clrDgSortBy]="comparator"
                [clrDgField]="field"
                [(clrDgSorted)]="sorted">
            Hello world
        </clr-dg-column>
    `
})
class SimpleDeprecatedTest {
    comparator: Comparator<any>;
    field: string;
    sorted = false;
}

@Component({
    template: `
        <clr-dg-column
                [clrDgSortBy]="comparator"
                [clrDgField]="field"
                [(clrDgSortOrder)]="sortOrder">
            Hello world
        </clr-dg-column>
    `
})
class SimpleTest {
    comparator: Comparator<any>|string;
    field: string;
    sortOrder = SortOrder.Unsorted;
}

@Component({
    template: `
        <clr-dg-column [clrDgField]="field">
            Column title
            <clr-dg-filter class="my-filter" [clrDgFilter]="filter">
                Filter content
            </clr-dg-filter>
        </clr-dg-column>
    `
})
class FilterTest {
    filter = new TestFilter();
    field: string;
}

@Component({
    template: `
        <clr-dg-column [clrDgField]="field">
            Hello world
            <clr-dg-string-filter class="my-string-filter" [clrDgStringFilter]="filter"></clr-dg-string-filter>
        </clr-dg-column>
    `
})

class StringFilterTest {
    filter = new TestStringFilter();
    field: string;

    @ViewChild(DatagridStringFilter) stringFilter: DatagridStringFilter;
}

@Component({
    template: `
        <clr-dg-column [clrDgField]="field" [(clrFilterValue)]="filterValue">
            Column Title
        </clr-dg-column>
    `
})
class PreFilterTest {
    field: string;
    filterValue: string;
}

@Component({
    template: `
        <clr-dg-column>
            Column Title
            <clr-dg-string-filter *ngIf="show" [(clrFilterValue)]="filterValue"
                                  [clrDgStringFilter]="filter"></clr-dg-string-filter>
        </clr-dg-column>
    `
})
class UnregisterTest {
    show: boolean;
    filter = new TestStringFilter();
    filterValue = "M";
}

@Component({
    template: `
        <clr-dg-column>
            <ng-container *clrDgHideableColumn="{hidden: false}">
                Name
            </ng-container>
        </clr-dg-column>`
})

class HideableTest {
    @ViewChild(DatagridHideableColumnDirective) dgHideable: DatagridHideableColumnDirective;
}
