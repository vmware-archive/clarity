/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestContext} from "./helpers.spec";
import {DatagridRowDetail} from "./datagrid-row-detail";
import {Selection, SelectionType} from "./providers/selection";
import {Items} from "./providers/items";
import {FiltersProvider} from "./providers/filters";
import {Sort} from "./providers/sort";
import {Page} from "./providers/page";
import {RowActionService} from "./providers/row-action-service";
import {DatagridRenderOrganizer} from "./render/render-organizer";
import { HideableColumnService } from "./providers/hideable-column.service";
import {Expand} from "../../utils/expand/providers/expand";

export default function(): void {
    describe("DatagridRowDetail component", function() {
        let context: TestContext<DatagridRowDetail, FullTest>;

        beforeEach(function() {
            context = this.create(DatagridRowDetail, FullTest,
                [Selection, Items, FiltersProvider, Sort, Page, RowActionService, Expand, DatagridRenderOrganizer,
                    HideableColumnService]);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-row-flex class to the host", function() {
            expect(context.clarityElement.classList.contains("datagrid-row-flex")).toBe(true);
        });

        it("adds the .datagrid-row-detail class to the host if not replacing the row itself", function() {
            expect(context.clarityElement.classList.contains("datagrid-row-detail")).toBe(true);
            context.testComponent.replace = true;
            context.detectChanges();
            expect(context.clarityElement.classList.contains("datagrid-row-detail")).toBe(false);
        });

        it("adds the .datagrid-container class to the host if it doesn't contain cells", function() {
            expect(context.clarityElement.classList.contains("datagrid-container")).toBe(true);
            context.testComponent.cell = true;
            context.detectChanges();
            expect(context.clarityElement.classList.contains("datagrid-container")).toBe(false);
        });

        it("updates the Expand provider with the [clrDgReplace] input", function() {
            let expand: Expand = context.getClarityProvider(Expand);
            expect(expand.replace).toBe(false);
            context.testComponent.replace = true;
            context.detectChanges();
            expect(expand.replace).toBe(true);
        });

        it("displays an empty cell in place of the caret", function() {
            expect(context.clarityElement.querySelectorAll(".datagrid-fixed-column").length).toBe(1);
        });

        it("displays an extra empty cell when the datagrid is selectable", function() {
            let selection: Selection = context.getClarityProvider(Selection);
            selection.selectionType = SelectionType.Multi;
            context.detectChanges();
            expect(context.clarityElement.querySelectorAll(".datagrid-fixed-column").length).toBe(2);
            selection.selectionType = SelectionType.Single;
            context.detectChanges();
            expect(context.clarityElement.querySelectorAll(".datagrid-fixed-column").length).toBe(2);
        });

        it("displays an extra empty cell when the datagrid has an actionable row", function() {
            context.getClarityProvider(RowActionService).hasActionableRow = true;
            context.detectChanges();
            expect(context.clarityElement.querySelectorAll(".datagrid-fixed-column").length).toBe(2);
        });

        it("displays as many extra empty cells as needed", function() {
            let selection: Selection = context.getClarityProvider(Selection);
            selection.selectionType = SelectionType.Multi;
            context.getClarityProvider(RowActionService).hasActionableRow = true;
            context.detectChanges();
            expect(context.clarityElement.querySelectorAll(".datagrid-fixed-column").length).toBe(3);
        });

        it("doesn't display any empty cell when replacing", function() {
            context.testComponent.replace = true;
            context.detectChanges();
            expect(context.clarityElement.querySelectorAll(".datagrid-fixed-column").length).toBe(0);
            let selection: Selection = context.getClarityProvider(Selection);
            selection.selectionType = SelectionType.Multi;
            context.getClarityProvider(RowActionService).hasActionableRow = true;
            context.detectChanges();
            expect(context.clarityElement.querySelectorAll(".datagrid-fixed-column").length).toBe(0);
        });
    });
}

@Component({
    template: `
        <clr-dg-row-detail [clrDgReplace]="replace">
            <ng-container *ngIf="!cell">Hello world</ng-container>
            <clr-dg-cell *ngIf="cell">This is a cell</clr-dg-cell>
        </clr-dg-row-detail>
    `
})
class FullTest {
    public replace = false;
    public cell = false;
}
