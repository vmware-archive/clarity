import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
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
    });
}

@Component({
    template: `<clr-dg-row [clrDgItem]="item">Hello world</clr-dg-row>`
})
class FullTest {
    item: any;
}