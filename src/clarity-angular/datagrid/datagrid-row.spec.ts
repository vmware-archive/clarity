/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed, fakeAsync, tick} from "@angular/core/testing";
import {TestContext} from "./helpers.spec";
import {DatagridRow} from "./datagrid-row";
import {Selection} from "./providers/selection";
import {Items} from "./providers/items";
import {Filters} from "./providers/filters";
import {Sort} from "./providers/sort";
import {Page} from "./providers/page";

export default function(): void {
    describe("DatagridRow component", function() {
        // Until we can properly type "this"
        let context: TestContext<DatagridRow, FullTest>;
        let selectionProvider: Selection;

        beforeEach(function () {
            context = this.create(DatagridRow, FullTest, [Selection, Items, Filters, Sort, Page]);
            selectionProvider = TestBed.get(Selection);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-row class to the host", function() {
            expect(context.clarityElement.classList.contains("datagrid-row")).toBeTruthy();
        });

        it("receives an input for the row's modal", function () {
            context.testComponent.item = {id: 1};
            context.detectChanges();
            expect(context.clarityDirective.item).toBe(context.testComponent.item);
        });

        it("doesn't display a checkbox when not selectable", function () {
            selectionProvider.selectable = false;
            context.detectChanges();
            expect(context.clarityElement.querySelector("input[type='checkbox']")).toBeNull();
        });

        it("selects the model when the checkbox is clicked", function () {
            selectionProvider.selectable = true;
            context.testComponent.item = {id: 1};
            context.detectChanges();
            let checkbox = context.clarityElement.querySelector("input[type='checkbox']");
            expect(selectionProvider.current).toEqual([]);
            checkbox.click();
            context.detectChanges();
            expect(selectionProvider.current).toEqual([context.testComponent.item]);
            checkbox.click();
            context.detectChanges();
            expect(selectionProvider.current).toEqual([]);
        });

        it("adds the .datagrid-selected class to the host when the row is selected", function() {
            selectionProvider.selectable = true;
            context.testComponent.item = {id: 1};
            context.detectChanges();
            context.clarityDirective.selected = true;
            context.detectChanges();
            expect(context.clarityElement.classList.contains("datagrid-selected")).toBeTruthy();
        });

        it("offers two-way binding on the selected state of the row", fakeAsync(function () {
            selectionProvider.selectable = true;
            context.testComponent.item = {id: 1};
            flushAndAssertSelected(false);
            // Input
            context.testComponent.selected = true;
            flushAndAssertSelected(true);
            // Output
            context.clarityElement.querySelector("input[type='checkbox']").click();
            flushAndAssertSelected(false);
        }));

        it("supports selected rows even if the datagrid isn't selectable", fakeAsync(function () {
            expect(selectionProvider.selectable).toBe(false);
            expect(context.testComponent.item).toBeUndefined();
            expect(context.clarityDirective.selected).toBe(false);
            context.testComponent.selected = true;
            context.detectChanges();
            expect(context.clarityDirective.selected).toBe(true);
            context.testComponent.selected = false;
            context.detectChanges();
            expect(context.clarityDirective.selected).toBe(false);
        }));

        function flushAndAssertSelected(selected: boolean) {
            context.detectChanges();
            // ngModel is asynchronous, we need an extra change detection
            tick();
            context.detectChanges();
            expect(context.testComponent.selected).toBe(selected);
            expect(context.clarityDirective.selected).toBe(selected);
        }
    });
}

@Component({
    template: `<clr-dg-row [clrDgItem]="item" [(clrDgSelected)]="selected">Hello world</clr-dg-row>`
})
class FullTest {
    item: any;
    selected = false;
}