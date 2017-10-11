/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";

import {Expand} from "../../utils/expand/providers/expand";
import {LoadingListener} from "../../utils/loading/loading-listener";

import {DatagridWillyWonka} from "./chocolate/datagrid-willy-wonka";
import {DatagridHideableColumn} from "./datagrid-hideable-column";
import {DatagridRow} from "./datagrid-row";
import {TestContext} from "./helpers.spec";
import {FiltersProvider} from "./providers/filters";
import {ExpandableRowsCount} from "./providers/global-expandable-rows";
import {HideableColumnService} from "./providers/hideable-column.service";
import {Items} from "./providers/items";
import {Page} from "./providers/page";
import {RowActionService} from "./providers/row-action-service";
import {Selection, SelectionType} from "./providers/selection";
import {Sort} from "./providers/sort";
import {StateDebouncer} from "./providers/state-debouncer.provider";
import {DomAdapter} from "./render/dom-adapter";
import {DatagridRenderOrganizer} from "./render/render-organizer";

const PROVIDERS = [
    Selection, Items, FiltersProvider, Sort, Page, RowActionService, ExpandableRowsCount, DatagridRenderOrganizer,
    DomAdapter, HideableColumnService, DatagridWillyWonka, StateDebouncer
];

export default function(): void {
    describe("DatagridRow component", function() {

        describe("View", function() {
            // Until we can properly type "this"
            let context: TestContext<DatagridRow, FullTest>;

            beforeEach(function() {
                context = this.create(DatagridRow, FullTest, PROVIDERS);
            });

            it("projects content", function() {
                expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
            });

            it("adds the .datagrid-row class to the host", function() {
                expect(context.clarityElement.classList.contains("datagrid-row")).toBeTruthy();
            });

            it("receives an input for the row's modal", function() {
                context.testComponent.item = {id: 1};
                context.detectChanges();
                expect(context.clarityDirective.item).toBe(context.testComponent.item);
            });

            it("displays an empty cell when one of the rows is expandable", function() {
                expect(context.clarityElement.querySelector(".datagrid-fixed-column")).toBeNull();
                context.getClarityProvider(ExpandableRowsCount).register();
                context.detectChanges();
                expect(context.clarityElement.querySelector(".datagrid-fixed-column")).not.toBeNull();
            });
        });

        describe("Selection", function() {
            // Until we can properly type "this"
            let context: TestContext<DatagridRow, FullTest>;
            let selectionProvider: Selection;

            beforeEach(function() {
                context = this.create(DatagridRow, FullTest, PROVIDERS);
                selectionProvider = TestBed.get(Selection);
            });

            it("doesn't display a checkbox unless selection type is multi", function() {
                selectionProvider.selectionType = SelectionType.None;
                context.detectChanges();
                expect(context.clarityElement.querySelector("input[type='checkbox']")).toBeNull();

                selectionProvider.selectionType = SelectionType.Single;
                context.detectChanges();
                expect(context.clarityElement.querySelector("input[type='checkbox']")).toBeNull();
            });

            it("doesn't display a radio button unless selection type is single", function() {
                selectionProvider.selectionType = SelectionType.None;
                context.detectChanges();
                expect(context.clarityElement.querySelector("input[type='radio']")).toBeNull();

                selectionProvider.selectionType = SelectionType.Multi;
                context.detectChanges();
                expect(context.clarityElement.querySelector("input[type='radio']")).toBeNull();
            });

            it("selects the model when the checkbox is clicked", function() {
                selectionProvider.selectionType = SelectionType.Multi;
                context.testComponent.item = {id: 1};
                context.detectChanges();
                const checkbox = context.clarityElement.querySelector("input[type='checkbox']");
                expect(selectionProvider.current).toEqual([]);
                checkbox.click();
                context.detectChanges();
                expect(selectionProvider.current).toEqual([context.testComponent.item]);
                checkbox.click();
                context.detectChanges();
                expect(selectionProvider.current).toEqual([]);
            });

            it("selects the model when the radio button is clicked", function() {
                selectionProvider.selectionType = SelectionType.Single;
                context.testComponent.item = {id: 1};
                context.detectChanges();
                const radio = context.clarityElement.querySelector("input[type='radio']");
                expect(selectionProvider.currentSingle).toBeUndefined();
                radio.click();
                context.detectChanges();
                expect(selectionProvider.currentSingle).toEqual(context.testComponent.item);
            });

            it("adds the .datagrid-selected class to the host when the row is selected", function() {
                selectionProvider.selectionType = SelectionType.Multi;
                context.testComponent.item = {id: 1};
                context.detectChanges();
                context.clarityDirective.selected = true;
                context.detectChanges();
                expect(context.clarityElement.classList.contains("datagrid-selected")).toBeTruthy();
            });

            it("offers two-way binding on the selected state of the row", fakeAsync(function() {
                   selectionProvider.selectionType = SelectionType.Multi;
                   context.testComponent.item = {id: 1};
                   flushAndAssertSelected(false);
                   // Input
                   context.testComponent.selected = true;
                   flushAndAssertSelected(true);
                   // Output
                   context.clarityElement.querySelector("input[type='checkbox']").click();
                   flushAndAssertSelected(false);
               }));

            it("supports selected rows even if the datagrid isn't selectable", fakeAsync(function() {
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

            it("selects the model on click only when `rowSelectionMode` is enabled (Single selection)", function() {
                selectionProvider.selectionType = SelectionType.Single;
                context.testComponent.item = {id: 1};
                context.detectChanges();
                const row = context.clarityElement;
                row.click();
                context.detectChanges();
                expect(selectionProvider.currentSingle).toBeUndefined();

                // Enabling the rowSelectionMode
                selectionProvider.rowSelectionMode = true;
                context.detectChanges();
                row.click();
                context.detectChanges();
                expect(selectionProvider.currentSingle).toEqual(context.testComponent.item);
            });

            it("selects the model on click only when `rowSelectionMode` is enabled (Multi selection)", function() {
                selectionProvider.selectionType = SelectionType.Multi;
                context.testComponent.item = {id: 1};
                context.detectChanges();
                const row = context.clarityElement;
                expect(selectionProvider.current).toEqual([]);
                row.click();
                context.detectChanges();
                expect(selectionProvider.current).toEqual([]);

                // Enabling the rowSelectionMode
                selectionProvider.rowSelectionMode = true;
                context.detectChanges();
                row.click();
                context.detectChanges();
                expect(selectionProvider.current).toEqual([context.testComponent.item]);

                row.click();
                context.detectChanges();
                expect(selectionProvider.current).toEqual([]);
            });

            it("select the model on space or enter when `rowSelectionMode` is enabled", function() {
                selectionProvider.selectionType = SelectionType.Multi;
                selectionProvider.rowSelectionMode = true;
                context.testComponent.item = {id: 1};
                const row = context.clarityElement;
                context.detectChanges();

                const event: any = new Event("keypress");
                event.keyCode = 13;  // Enter
                row.dispatchEvent(event);
                context.detectChanges();
                expect(selectionProvider.current).toEqual([context.testComponent.item]);

                event.keyCode = 32;  // Space
                row.dispatchEvent(event);
                context.detectChanges();
                expect(selectionProvider.current).toEqual([]);
            });

            function flushAndAssertSelected(selected: boolean) {
                context.detectChanges();
                // ngModel is asynchronous, we need an extra change detection
                tick();
                context.detectChanges();
                expect(context.testComponent.selected).toBe(selected);
                expect(context.clarityDirective.selected).toBe(selected);
            }
        });

        describe("Expand/Collapse", function() {
            // Until we can properly type "this"
            let context: TestContext<DatagridRow, ExpandTest>;
            let expand: Expand;

            beforeEach(function() {
                context = this.create(DatagridRow, ExpandTest, PROVIDERS);
                context.detectChanges();
                expand = context.getClarityProvider(Expand);
            });

            it("registers a LoadingListener", function() {
                expect(context.getClarityProvider(LoadingListener)).toBeTruthy();
            });

            it("displays a clickable caret when the row is expandable", function() {
                expect(context.clarityElement.querySelector("button clr-icon[shape^=caret]")).not.toBeNull();
            });

            it("displays a spinner instead of the caret when the details are loading", function() {
                expect(context.clarityElement.querySelector(".spinner")).toBeNull();
                expand.loading = true;
                context.detectChanges();
                expect(context.clarityElement.querySelector(".spinner")).not.toBeNull();
            });

            it("doesn't display the details when collapsed", function() {
                expect(context.clarityElement.textContent).toMatch("Hello world");
                expect(context.clarityElement.textContent).not.toMatch("Detail");
                expand.replace = true;
                context.detectChanges();
                expect(context.clarityElement.textContent).toMatch("Hello world");
                expect(context.clarityElement.textContent).not.toMatch("Detail");
            });

            it("displays both the row and the details when expanded and not replacing", fakeAsync(function() {
                   expand.expanded = true;
                   tick();
                   context.detectChanges();
                   expect(context.clarityElement.textContent).toMatch("Hello world");
                   expect(context.clarityElement.textContent).toMatch("Detail");
               }));

            it("displays only the details when expanded and replacing", fakeAsync(function() {
                   expand.replace = true;
                   expand.expanded = true;
                   tick();
                   context.detectChanges();
                   expect(context.clarityElement.textContent).not.toMatch("Hello world");
                   expect(context.clarityElement.textContent).toMatch("Detail");
               }));

            it("doesn't display the details while loading", fakeAsync(function() {
                   expand.expanded = true;
                   expand.loading = true;
                   tick();
                   context.detectChanges();
                   expect(context.clarityElement.textContent).not.toMatch("Detail");
               }));

            it("expands and collapses when the caret is clicked", fakeAsync(function() {
                   const caret = context.clarityElement.querySelector(".datagrid-expandable-caret button");
                   caret.click();
                   flushAnimations();
                   expect(expand.expanded).toBe(true);
                   caret.click();
                   flushAnimations();
                   expect(expand.expanded).toBe(false);
               }));

            it("offers 2-way binding on the expanded state of the row", fakeAsync(function() {
                   context.testComponent.expanded = true;
                   flushAnimations();
                   expect(context.clarityDirective.expanded).toBe(true);
                   context.clarityElement.querySelector(".datagrid-expandable-caret button").click();
                   flushAnimations();
                   expect(context.testComponent.expanded).toBe(false);
               }));

            function flushAnimations() {
                context.detectChanges();
                tick();
                context.detectChanges();
            }
        });

        describe("Hide/Show", function() {
            let context: TestContext<DatagridRow, ExpandTest>;
            let hideableColumnService: HideableColumnService;

            beforeEach(function() {
                context = this.create(DatagridRow, HideShowTest, PROVIDERS);
                hideableColumnService = context.getClarityProvider(HideableColumnService);
            });

            it("should update cells for columns", function() {
                // TODO: ffigure out how to test for cell changes and make sure updateCellsForColumns is called
                spyOn(context.clarityDirective, "updateCellsForColumns");
                hideableColumnService = context.getClarityProvider(HideableColumnService);

                const hiddenColumns: DatagridHideableColumn[] = [
                    new DatagridHideableColumn(null, "dg-col-0", false),
                    new DatagridHideableColumn(null, "dg-col-1", true)
                ];

                hideableColumnService.updateColumnList(hiddenColumns);
                expect(context.clarityDirective.updateCellsForColumns).toHaveBeenCalled();

            });
        });
    });
}

@Component({template: `<clr-dg-row [clrDgItem]="item" [(clrDgSelected)]="selected">Hello world</clr-dg-row>`})
class FullTest {
    item: any;
    selected = false;
}

@Component({
    template: `
        <clr-dg-row [(clrDgExpanded)]="expanded">
            Hello world
            <clr-dg-row-detail *clrIfExpanded>
                Detail
            </clr-dg-row-detail>
        </clr-dg-row>`
})
class ExpandTest {
    expanded = false;
}

@Component({
    template: `
        <clr-dg-row>
            <clr-dg-cell>ID</clr-dg-cell>
            <clr-dg-cell>Name</clr-dg-cell>
        </clr-dg-row>`
})
class HideShowTest {}
