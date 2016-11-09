import {Component, ViewChild} from "@angular/core";
import {Subject} from "rxjs";
import {TestContext} from "./helpers.spec";
import {DatagridColumn} from "./datagrid-column";
import {Sort} from "./providers/sort";
import {Comparator} from "./interfaces/comparator";
import {Filters} from "./providers/filters";
import {Filter} from "./interfaces/filter";
import {DatagridPropertyComparator} from "./built-in/comparators/datagrid-property-comparator";
import {StringFilter} from "./interfaces/string-filter";
import {TestBed} from "@angular/core/testing";
import {DatagridStringFilter} from "./built-in/filters/datagrid-string-filter";

export default function(): void {
    describe("DatagridColumn component", function() {
        describe("Typescript API", function() {
            let sortService: Sort;
            let comparator: TestComparator;
            let component: DatagridColumn;

            beforeEach(function() {
                sortService = new Sort();
                comparator = new TestComparator();
                component = new DatagridColumn(sortService, null);
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
        });

        describe("Template API", function() {
            it("receives an input for the comparator", function() {
                this.context = this.create(DatagridColumn, SimpleTest, [Sort, Filters]);
                this.comparator = new TestComparator();
                this.context.testComponent.comparator = this.comparator;
                this.context.detectChanges();
                expect(this.context.clarityDirective.sortBy).toBe(this.comparator);
            });

            it("receives an input for the property name", function() {
                this.context = this.create(DatagridColumn, SimpleTest, [Sort, Filters]);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityDirective.field).toBe("test");
            });

            it("accepts a custom filter in the projected content", function() {
                this.context = this.create(DatagridColumn, FilterTest, [Sort, Filters]);
                expect(TestBed.get(Filters).getActiveFilters()).toEqual([this.context.testComponent.filter]);
            });

            it("accepts a custom string filter in the projected content", function() {
                this.context = this.create(DatagridColumn, StringFilterTest, [Sort, Filters]);
                this.stringFilter = this.context.testComponent.stringFilter;
                // We make the filter active to see if the Filters provider knows about it
                this.stringFilter.value = "hello";
                this.context.detectChanges();
                expect(TestBed.get(Filters).getActiveFilters()).toEqual([this.stringFilter]);
            });

            it("prioritizes custom comparators over the default property name one", function() {
                this.context = this.create(DatagridColumn, SimpleTest, [Sort, Filters]);
                this.comparator = new TestComparator();
                this.context.testComponent.comparator = this.comparator;
                this.context.detectChanges();
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityDirective.sortBy).toBe(this.comparator);
            });

            it("prioritizes custom filters over the default property name one", function() {
                this.context = this.create(DatagridColumn, FilterTest, [Sort, Filters]);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityElement.querySelectorAll("clr-dg-filter").length).toBe(1);
                expect(TestBed.get(Filters).getActiveFilters()).toEqual([this.context.testComponent.filter]);
            });

            it("prioritizes custom string filters over the default property name one", function() {
                this.context = this.create(DatagridColumn, StringFilterTest, [Sort, Filters]);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                this.stringFilter = this.context.testComponent.stringFilter;
                // We make the filter active to see if the Filters provider knows about it
                this.stringFilter.value = "hello";
                this.context.detectChanges();
                expect(this.context.clarityElement.querySelectorAll("clr-dg-filter").length).toBe(1);
                expect(TestBed.get(Filters).getActiveFilters()).toEqual([this.stringFilter]);
            });
        });

        describe("View basics", function() {
            let context: TestContext<DatagridColumn, SimpleTest>;

            beforeEach(function () {
                context = this.create(DatagridColumn, SimpleTest, [Sort, Filters]);
            });

            it("projects content", function() {
                expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
            });

            it("adds the .datagrid-column class to the host", function() {
                expect(context.clarityElement.classList.contains("datagrid-column")).toBeTruthy();
            });

            it("displays a clickable column title to sort if the column is sortable", function() {
                let title = context.clarityElement.querySelector("button.datagrid-column-title");
                expect(title.disabled).toBe(true);
                title.click();
                context.detectChanges();
                expect(context.clarityDirective.sorted).toBe(false);

                context.testComponent.comparator = new TestComparator();
                context.detectChanges();
                expect(title.disabled).toBe(false);
                title.click();
                context.detectChanges();
                expect(context.clarityDirective.sorted).toBe(true);
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
        });

        describe("View filters", function() {
            it("doesn't display any filter by default", function() {
                this.context = this.create(DatagridColumn, SimpleTest, [Sort, Filters]);
                expect(this.context.clarityElement.querySelector("clr-dg-filter")).toBeNull();
            });

            it("displays a string filter when using a property name", function() {
                this.context = this.create(DatagridColumn, SimpleTest, [Sort, Filters]);
                this.context.testComponent.field = "test";
                this.context.detectChanges();
                expect(this.context.clarityElement.querySelector("clr-dg-string-filter")).not.toBeNull();
            });

            it("projects custom filters outside of the title", function() {
                this.context = this.create(DatagridColumn, FilterTest, [Sort, Filters]);
                expect(this.context.clarityElement.querySelector(".my-filter")).not.toBeNull();
                let title = this.context.clarityElement.querySelector(".datagrid-column-title");
                expect(title.querySelector(".my-filter")).toBeNull();
            });

            it("projects custom string filters outside of the title", function() {
                this.context = this.create(DatagridColumn, StringFilterTest, [Sort, Filters]);
                expect(this.context.clarityElement.querySelector(".my-string-filter")).not.toBeNull();
                let title = this.context.clarityElement.querySelector(".datagrid-column-title");
                expect(title.querySelector(".my-string-filter")).toBeNull();
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
    };

    accepts(n: number): boolean {
        return true;
    };

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
            [clrDgField]="field">
            Hello world
        </clr-dg-column>
    `
})
class SimpleTest {
    comparator: Comparator<any>;
    field: string;
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