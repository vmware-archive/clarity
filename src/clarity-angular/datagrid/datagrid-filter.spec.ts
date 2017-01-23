/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {TestContext} from "./helpers.spec";
import {DatagridFilter} from "./datagrid-filter";
import {Filters} from "./providers/filters";
import {CustomFilter} from "./providers/custom-filter";
import {Filter} from "./interfaces/filter";

export default function(): void {
    describe("DatagridFilter component", function() {
        describe("Typescript API", function() {
            let filterService: Filters;
            let filter: TestFilter;
            let component: DatagridFilter;

            beforeEach(function() {
                filterService = new Filters();
                filter = new TestFilter();
                component = new DatagridFilter(filterService);
            });

            afterEach(function() {
                component.ngOnDestroy();
            });

            it("can open and close the dropdown toggle", function() {
                expect(component.open).toBe(false);
                component.toggle();
                expect(component.open).toBe(true);
            });

            it("registers to the Filters provider", function() {
                expect(filterService.getActiveFilters()).toEqual([]);
                component.filter = filter;
                expect(filterService.getActiveFilters()).toEqual([filter]);
            });

            it("unregisters when destroyed", function() {
                component.filter = filter;
                expect(filterService.getActiveFilters()).toEqual([filter]);
                component.ngOnDestroy();
                expect(filterService.getActiveFilters()).toEqual([]);
            });

            it("detects if the filter is active", function() {
                expect(component.active).toEqual(false);
                component.filter = filter;
                expect(component.active).toEqual(true);
                filter.active = false;
                expect(component.active).toEqual(false);
            });
        });

        describe("Template API", function() {
            // Until we can properly type "this"
            let context: TestContext<DatagridFilter, FullTest>;
            let filter: TestFilter;

            beforeEach(function () {
                filter = new TestFilter();
                context = this.create(DatagridFilter, FullTest, [Filters]);
            });

            it("receives an input for the filter logic", function () {
                context.testComponent.filter = filter;
                context.detectChanges();
                expect(context.clarityDirective.filter).toBe(filter);
            });

            it("offers two-way binding on he open state of the filter dropdown", function () {
                context.testComponent.filter = filter;
                context.testComponent.open = true;
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(true);
                context.clarityDirective.open = false;
                context.detectChanges();
                expect(context.testComponent.open).toBe(false);
            });

            it("registers itself as a CustomFilter provider", function() {
                expect(context.testComponent.customFilter).toBe(context.clarityDirective);
            });
        });

        describe("View", function() {
            let context: TestContext<DatagridFilter, FullTest>;

            beforeEach(function () {
                context = this.create(DatagridFilter, FullTest, [Filters]);
            });

            it("projects content into the dropdown", function() {
                expect(context.clarityElement.textContent.trim()).toBe("");
                context.clarityDirective.open = true;
                context.detectChanges();
                expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
            });

            it("opens and closes the dropdown when the toggle is clicked", function() {
                let toggle = context.clarityElement.querySelector(".datagrid-filter-toggle");
                expect(context.clarityDirective.open).toBe(false);
                toggle.click();
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(true);
                toggle.click();
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(false);
            });
        });
    });
}

class TestFilter implements Filter<number> {
    public active = true;

    isActive(): boolean {
        return this.active;
    };

    accepts(n: number): boolean {
        return true;
    };

    changes = new Subject<boolean>();
}

@Component({
    template: `<clr-dg-filter [clrDgFilter]="filter" [(clrDgFilterOpen)]="open">Hello world</clr-dg-filter>`
})
class FullTest {
    @ViewChild(CustomFilter) customFilter: CustomFilter;

    filter: Filter<any>;
    open: boolean;
}