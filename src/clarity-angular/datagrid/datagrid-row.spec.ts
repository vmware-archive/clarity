/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {TestBed, fakeAsync, tick} from "@angular/core/testing";
import {TestContext} from "./helpers.spec";
import {DatagridRow} from "./datagrid-row";
import {Selection, SelectionType} from "./providers/selection";
import {Items} from "./providers/items";
import {FiltersProvider} from "./providers/filters";
import {Sort} from "./providers/sort";
import {Page} from "./providers/page";
import {RowActionService} from "./providers/row-action-service";
import {DatagridRenderOrganizer} from "./render/render-organizer";

export default function(): void {
    describe("DatagridRow component", function() {

        // Until we can properly type "this"
        let context: TestContext<DatagridRow, FullTest>;
        let selectionProvider: Selection;

        beforeEach(function () {
            context = this.create(DatagridRow, FullTest,
                [Selection, Items, FiltersProvider, Sort, Page, RowActionService, DatagridRenderOrganizer]);

            selectionProvider = TestBed.get(Selection);
        });

        it("projects content", function () {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-row class to the host", function () {
            expect(context.clarityElement.classList.contains("datagrid-row")).toBeTruthy();
        });

        it("receives an input for the row's modal", function () {
            context.testComponent.item = { id: 1 };
            context.detectChanges();
            expect(context.clarityDirective.item).toBe(context.testComponent.item);
        });

        it("doesn't display a checkbox unless selection type is multi", function () {
            selectionProvider.selectionType = SelectionType.None;
            context.detectChanges();
            expect(context.clarityElement.querySelector("input[type='checkbox']")).toBeNull();

            selectionProvider.selectionType = SelectionType.Single;
            context.detectChanges();
            expect(context.clarityElement.querySelector("input[type='checkbox']")).toBeNull();
        });

        it("doesn't display a radio button unless selection type is single", function () {
            selectionProvider.selectionType = SelectionType.None;
            context.detectChanges();
            expect(context.clarityElement.querySelector("input[type='radio']")).toBeNull();

            selectionProvider.selectionType = SelectionType.Multi;
            context.detectChanges();
            expect(context.clarityElement.querySelector("input[type='radio']")).toBeNull();
        });

        it("selects the model when the checkbox is clicked", function () {
            selectionProvider.selectionType = SelectionType.Multi;
            context.testComponent.item = { id: 1 };
            context.detectChanges();
            let checkbox = context.clarityElement.querySelector("input[type='checkbox']");
            expect(selectionProvider.current).toEqual([]);
            checkbox.click();
            context.detectChanges();
            expect(selectionProvider.current).toEqual([ context.testComponent.item ]);
            checkbox.click();
            context.detectChanges();
            expect(selectionProvider.current).toEqual([]);
        });

        it("selects the model when the radio button is clicked", function () {
            selectionProvider.selectionType = SelectionType.Single;
            context.testComponent.item = { id: 1 };
            context.detectChanges();
            let radio = context.clarityElement.querySelector("input[type='radio']");
            expect(selectionProvider.currentSingle).toBeUndefined();
            radio.click();
            context.detectChanges();
            expect(selectionProvider.currentSingle).toEqual(context.testComponent.item);
        });

        it("adds the .datagrid-selected class to the host when the row is selected", function () {
            selectionProvider.selectionType = SelectionType.Multi;
            context.testComponent.item = { id: 1 };
            context.detectChanges();
            context.clarityDirective.selected = true;
            context.detectChanges();
            expect(context.clarityElement.classList.contains("datagrid-selected")).toBeTruthy();
        });

        it("offers two-way binding on the selected state of the row", fakeAsync(function () {
            selectionProvider.selectionType = SelectionType.Multi;
            context.testComponent.item = { id: 1 };
            flushAndAssertSelected(false);
            // Input
            context.testComponent.selected = true;
            flushAndAssertSelected(true);
            // Output
            context.clarityElement.querySelector("input[type='checkbox']").click();
            flushAndAssertSelected(false);
        }));

        it("supports selected rows even if the datagrid isn't selectable", fakeAsync(function () {
            selectionProvider.selectionType = SelectionType.None;
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
