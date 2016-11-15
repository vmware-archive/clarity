/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {TestBed, tick, fakeAsync} from "@angular/core/testing";
import {TestContext} from "../../helpers.spec";
import {DatagridStringFilter} from "./datagrid-string-filter";
import {Filters} from "../../providers/filters";
import {CustomFilter} from "../../providers/custom-filter";
import {StringFilter} from "../../interfaces/string-filter";

export default function(): void {
    describe("DatagridStringFilter component", function() {
        // Until we can properly type "this"
        let context: TestContext<DatagridStringFilter, FullTest>;
        let filter: TestFilter;
        let filtersInstance: Filters;

        function openFilter() {
            context.clarityElement.querySelector(".datagrid-filter-toggle").click();
            context.detectChanges();
        }

        beforeEach(function () {
            filter = new TestFilter();
            context = this.create(DatagridStringFilter, FullTest, [Filters]);
            filtersInstance = TestBed.get(Filters);
        });

        it("receives an input for the filter logic", function () {
            context.testComponent.filter = filter;
            context.detectChanges();
            expect(context.clarityDirective.filter).toBe(filter);
        });

        it("updates the lowercase value when the raw value changes", function() {
            expect(context.clarityDirective.value).toBe("");
            expect(context.clarityDirective.lowerCaseValue).toBe("");
            context.clarityDirective.value = "TEST";
            expect(context.clarityDirective.value).toBe("TEST");
            expect(context.clarityDirective.lowerCaseValue).toBe("test");
        });

        it("becomes active when the value isn't empty", function () {
            expect(context.clarityDirective.isActive()).toBe(false);
            context.clarityDirective.value = "test";
            expect(context.clarityDirective.isActive()).toBe(true);
            context.clarityDirective.value = "";
            expect(context.clarityDirective.isActive()).toBe(false);
        });

        it("filters according to the StringFilter provided", function () {
            context.clarityDirective.filter = filter;
            expect(context.clarityDirective.accepts("test")).toBe(false);
            context.clarityDirective.value = "tes";
            expect(context.clarityDirective.accepts("test")).toBe(false);
            context.clarityDirective.value = "test";
            expect(context.clarityDirective.accepts("test")).toBe(true);
            context.clarityDirective.value = "tests";
            expect(context.clarityDirective.accepts("test")).toBe(false);
        });

        it("ignores case when filtering", function () {
            context.clarityDirective.filter = filter;
            context.clarityDirective.value = "TEST";
            expect(context.clarityDirective.accepts("test")).toBe(true);
            context.clarityDirective.value = "test";
            expect(context.clarityDirective.accepts("TEST")).toBe(true);
        });

        it("registers itself as a filter", function() {
            context.clarityDirective.value = "test";
            expect(filtersInstance.getActiveFilters().length).toBe(1);
            expect(filtersInstance.getActiveFilters()[0]).toBe(context.clarityDirective);
        });

        it("registers itself as a CustomFilter provider", function() {
            expect(context.testComponent.customFilter).toBe(context.clarityDirective);
        });

        it("displays a text input when open", function() {
            expect(context.clarityElement.querySelector("input[type='text']")).toBeNull();
            openFilter();
            expect(context.clarityElement.querySelector("input[type='text']")).not.toBeNull();
        });

        it("focuses on the input when the filter opens", fakeAsync(function() {
            openFilter();
            let input = context.clarityElement.querySelector("input[type='text']");
            spyOn(input, "focus");
            expect(input.focus).not.toHaveBeenCalled();
            tick();
            expect(input.focus).toHaveBeenCalled();
        }));

        xit("closes when the user presses Enter in the input", function() {
            // TODO
            openFilter();
        });

        xit("closes when the user presses Escape in the input", function() {
            // TODO
            openFilter();
        });

        xit("exposes an Observable to follow filter changes", fakeAsync(function() {
            // TODO
            let nbChanges = 0;
            let latestInput: string;
            context.clarityDirective.changes.subscribe((search: string) => {
                nbChanges++;
                latestInput = search;
            });
            openFilter();
            let input = context.clarityElement.querySelector("input[type='text']");
            input.value = "t";
            context.detectChanges();
            expect(latestInput).toBe("t");
            input.value = "test";
            context.detectChanges();
            expect(latestInput).toBe("test");
            input.value = "tes";
            context.detectChanges();
            expect(latestInput).toBe("tes");
            expect(nbChanges).toBe(3);
        }));
    });
}

class TestFilter implements StringFilter<string> {
    accepts(item: string, search: string) {
        return item.toLowerCase() === search;
    };
}

@Component({
    template: `<clr-dg-string-filter [clrDgStringFilter]="filter"></clr-dg-string-filter>`
})
class FullTest {
    @ViewChild(CustomFilter) customFilter: CustomFilter;

    filter: StringFilter<any>;
}