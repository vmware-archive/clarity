/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { TestContext } from "./helpers.spec";
import { Datagrid } from "./datagrid";
import { State } from "./interfaces/state";
import { Selection } from "./providers/selection";
import { Sort } from "./providers/sort";
import { FiltersProvider } from "./providers/filters";
import { Page } from "./providers/page";
import { Items } from "./providers/items";
import { Comparator } from "./interfaces/comparator";
import { Filter } from "./interfaces/filter";
import { RowActionService } from "./providers/row-action-service";
import { StringFilter } from "./interfaces/string-filter";
import { DatagridStringFilterImpl } from "./built-in/filters/datagrid-string-filter-impl";
import { DatagridPropertyStringFilter } from "./built-in/filters/datagrid-property-string-filter";
import { GlobalExpandableRows } from "./providers/global-expandable-rows";
import { DatagridRenderOrganizer } from "./render/render-organizer";
import { HideableColumnService } from "./providers/hideable-column.service";

export default function(): void {
    describe("Datagrid component", function() {
        describe("Typescript API", function() {
            let context: TestContext<Datagrid, FullTest>;

            beforeEach(function() {
                context = this.create(Datagrid, FullTest, [HideableColumnService]);
            });

            it("allows to manually force a refresh of displayed items when data mutates", function() {
                let items: Items = context.getClarityProvider(Items);
                let refreshed = false;
                items.change.subscribe(() => refreshed = true);
                expect(refreshed).toBe(false);
                context.clarityDirective.dataChanged();
                expect(refreshed).toBe(true);
            });

            it("allows to manually resize the datagrid", function() {
                let organizer: DatagridRenderOrganizer = context.getClarityProvider(DatagridRenderOrganizer);
                let resizeDone: boolean = false;
                organizer.done.subscribe(() => {
                    resizeDone = true;
                });
                expect(resizeDone).toBe(false);
                context.clarityDirective.resize();
                expect(resizeDone).toBe(true);
            });

        });

        describe("Template API", function() {
            let context: TestContext<Datagrid, FullTest>;

            beforeEach(function() {
                context = this.create(Datagrid, FullTest, [HideableColumnService]);
            });

            it("receives an input for the loading state", function() {
                expect(context.clarityDirective.loading).toBe(false);
                context.testComponent.loading = true;
                context.detectChanges();
                expect(context.clarityDirective.loading).toBe(true);
            });

            it("offers two-way binding on the currently selected items", function() {
                let selection: Selection = context.getClarityProvider(Selection);
                context.testComponent.selected = [2];
                context.detectChanges();
                expect(selection.current).toEqual([2]);
                selection.setSelected(1, true);
                context.detectChanges();
                expect(context.testComponent.selected).toEqual([
                    2,
                    1
                ]);
            });

            it("allows to set pre-selected items when initializing the full list of items", function() {
                let selection: Selection = context.getClarityProvider(Selection);
                context.testComponent.items = [
                    4,
                    5,
                    6
                ];
                context.testComponent.selected = [5];
                context.detectChanges();
                expect(selection.current).toEqual([5]);
            });

            describe("clrDgRefresh output", function() {
                it("emits once when the datagrid is ready", function() {
                    expect(context.testComponent.nbRefreshed).toBe(1);
                });

                it("emits once when the sort order changes", function() {
                    context.testComponent.nbRefreshed = 0;
                    let sort: Sort = context.getClarityProvider(Sort);
                    sort.toggle(new TestComparator());
                    expect(context.testComponent.nbRefreshed).toBe(1);
                });

                it("emits once when the filters change", function() {
                    context.testComponent.nbRefreshed = 0;
                    let filters: FiltersProvider = context.getClarityProvider(FiltersProvider);
                    let filter = new TestFilter();
                    filters.add(filter);
                    expect(context.testComponent.nbRefreshed).toBe(1);
                });

                it("emits once when the page changes", function() {
                    context.testComponent.nbRefreshed = 0;
                    let page: Page = context.getClarityProvider(Page);
                    page.current = 2;
                    expect(context.testComponent.nbRefreshed).toBe(1);
                });

                it("emits the complete state of the datagrid", function() {
                    context.testComponent.items = [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ];
                    context.detectChanges();
                    let comparator = new TestComparator();
                    let sort: Sort = context.getClarityProvider(Sort);
                    sort.toggle(comparator);
                    let filters: FiltersProvider = context.getClarityProvider(FiltersProvider);
                    let filter = new TestFilter();
                    filters.add(filter);
                    let page: Page = context.getClarityProvider(Page);
                    page.size = 2;
                    page.current = 2;
                    expect(context.testComponent.latestState).toEqual({
                        page: {
                            from: 2,
                            to: 3,
                            size: 2,
                        },
                        sort: {
                            by: comparator,
                            reverse: false,
                        },
                        filters: [filter]
                    });
                });

                it("emits the correct data for all filter types", function() {
                    let filters: FiltersProvider = context.getClarityProvider(FiltersProvider);
                    let customFilter = new TestFilter();
                    let testStringFilter = new DatagridStringFilterImpl(new TestStringFilter());
                    testStringFilter.value = "whatever";
                    let builtinStringFilter = new DatagridStringFilterImpl(new DatagridPropertyStringFilter("test"));
                    builtinStringFilter.value = "1234";
                    filters.add(customFilter); // custom filter
                    filters.add(testStringFilter); // custom StringFilter ??
                    filters.add(builtinStringFilter);
                    expect(context.testComponent.latestState.filters).toEqual([
                        customFilter,
                        testStringFilter,
                        {
                            property: "test",
                            value: "1234"
                        }
                    ]);
                });
            });
        });

        describe("View basics", function() {
            let context: TestContext<Datagrid, FullTest>;

            beforeEach(function() {
                context = this.create(Datagrid, FullTest, [HideableColumnService]);
            });

            it("projects columns in the header", function() {
                let header = context.clarityElement.querySelector(".datagrid-head");
                expect(header.textContent).toMatch(/First\s*Second/);
            });

            it("projects the footer", function() {
                expect(context.clarityElement.querySelector(".datagrid-foot")).not.toBeNull();
            });
        });

        describe("Iterators", function() {
            it("projects rows when using ngFor", function() {
                this.context = this.create(Datagrid, NgForTest, [HideableColumnService]);
                let body = this.context.clarityElement.querySelector(".datagrid-body");
                expect(body.textContent).toMatch(/1\s*1\s*2\s*4\s*3\s*9/);
            });

            it("uses the rows template when using clrDgItems", function() {
                this.context = this.create(Datagrid, FullTest, [HideableColumnService]);
                let body = this.context.clarityElement.querySelector(".datagrid-body");
                expect(body.textContent).toMatch(/1\s*1\s*2\s*4\s*3\s*9/);
            });

            it("respects the trackBy option when using clrDgItems", function() {
                this.context = this.create(Datagrid, TrackByTest, [HideableColumnService]);
                let oldFirstRow = this.context.clarityElement.querySelector("clr-dg-row");
                this.context.testComponent.items = [42];
                this.context.detectChanges();
                let newFirstRow = this.context.clarityElement.querySelector("clr-dg-row");
                expect(newFirstRow).toBe(oldFirstRow);
            });
        });

        describe("Actionable rows", function() {
            let context: TestContext<Datagrid, ActionableRowTest>;
            let rowActionService: RowActionService;
            let headActionOverflowCell: HTMLElement;
            let actionOverflowCell: HTMLElement[];
            let actionOverflow: HTMLElement[];

            it("it has cells for action overflows if there is at least one of them.", function() {
                context = this.create(Datagrid, ActionableRowTest, [HideableColumnService]);
                rowActionService = context.getClarityProvider(RowActionService);
                context.detectChanges();
                expect(rowActionService.hasActionableRow).toBe(true);
                let datagridHead = context.clarityElement.querySelector(".datagrid-head");
                headActionOverflowCell = datagridHead.querySelector(".datagrid-column.datagrid-row-actions");
                actionOverflowCell = context.clarityElement.querySelectorAll("clr-dg-cell.datagrid-row-actions");
                actionOverflow = context.clarityElement.querySelectorAll("clr-dg-action-overflow");
                expect(headActionOverflowCell).not.toBeNull();
                expect(actionOverflowCell.length).toEqual(3);
                expect(actionOverflow.length).toEqual(3);
            });

            it("it has no cells for action overflows if there is none of them.", function() {
                context = this.create(Datagrid, ActionableRowTest, [HideableColumnService]);
                rowActionService = context.getClarityProvider(RowActionService);
                context.testComponent.showIfGreaterThan = 10;
                /*
                 * TODO: We need to investigate if we really need two change detections here.
                 * At this point, it seems that we need two change detections as one is for the action of removing
                 * action overflows themselves and this action will be listened to
                 * by their QueryList and update the service.
                 * Consequently, the service will require another change detection for updating the host cells.
                 * */
                context.detectChanges();
                context.detectChanges();
                actionOverflow = context.clarityElement.querySelectorAll("clr-dg-action-overflow");
                expect(actionOverflow.length).toEqual(0);
                expect(rowActionService.hasActionableRow).toBe(false);
                let datagridHead = context.clarityElement.querySelector(".datagrid-head");
                headActionOverflowCell = datagridHead.querySelector(".datagrid-column.datagrid-row-actions");
                actionOverflowCell = context.clarityElement.querySelectorAll("clr-dg-cell.datagrid-single-select");
                expect(headActionOverflowCell).toBeNull();
                expect(actionOverflowCell.length).toEqual(0);
            });

        });

        describe("Expandable rows", function() {
            it("detects if there is at least one expandable row", function() {
                let context = this.create(Datagrid, ExpandableRowTest, [HideableColumnService]);
                let globalExpandableRows: GlobalExpandableRows = context.getClarityProvider(GlobalExpandableRows);
                /*
                 * Why do we need an extra change detection here? See actionable rows solution above, same issue.
                 * Not losing time on this right now.
                 */
                context.detectChanges();
                expect(globalExpandableRows.hasExpandableRow).toBe(true);
                expect(context.clarityElement.querySelector(".datagrid-column.datagrid-expandable-caret"))
                    .not.toBeNull();
                context.testComponent.expandable = false;
                // Same here, why do we need an extra change detection?
                context.detectChanges();
                context.detectChanges();
                expect(globalExpandableRows.hasExpandableRow).toBe(false);
                expect(context.clarityElement.querySelector(".datagrid-column.datagrid-expandable-caret")).toBeNull();
            });
        });

    });
}

@Component({
    template: `
    <clr-datagrid [(clrDgSelected)]="selected" [clrDgLoading]="loading" (clrDgRefresh)="refresh($event)">
        <clr-dg-column>First</clr-dg-column>
        <clr-dg-column>Second</clr-dg-column>
    
        <clr-dg-row *clrDgItems="let item of items">
            <clr-dg-cell>{{item}}</clr-dg-cell>
            <clr-dg-cell>{{item * item}}</clr-dg-cell>
        </clr-dg-row>
    
        <clr-dg-footer>{{items.length}} items</clr-dg-footer>
    </clr-datagrid>
`
})
class FullTest {
    items = [
        1,
        2,
        3
    ];

    loading = false;
    selected: number[];

    nbRefreshed = 0;
    latestState: State;

    refresh(state: State) {
        this.nbRefreshed++;
        this.latestState = state;
    }
}

@Component({
    template: `
    <clr-datagrid>
        <clr-dg-column>First</clr-dg-column>
        <clr-dg-column>Second</clr-dg-column>
    
        <clr-dg-row *ngFor="let item of items">
            <clr-dg-cell>{{item}}</clr-dg-cell>
            <clr-dg-cell>{{item * item}}</clr-dg-cell>
        </clr-dg-row>
    
        <clr-dg-footer>{{items.length}} items</clr-dg-footer>
    </clr-datagrid>
`
})
class NgForTest {
    items = [
        1,
        2,
        3
    ];
}

@Component({
    template: `
    <clr-datagrid>
        <clr-dg-column>First</clr-dg-column>
        <clr-dg-column>Second</clr-dg-column>
    
        <clr-dg-row *clrDgItems="let item of items; trackBy: trackByIndex">
            <clr-dg-cell>{{item}}</clr-dg-cell>
            <clr-dg-cell>{{item * item}}</clr-dg-cell>
        </clr-dg-row>
    
        <clr-dg-footer>{{items.length}} items</clr-dg-footer>
    </clr-datagrid>
`
})
class TrackByTest {
    items = [
        1,
        2,
        3
    ];

    trackByIndex(index: number, item: any) {
        return index;
    }
}

@Component({
    template: `
    <clr-datagrid>
        <clr-dg-column>First</clr-dg-column>
        <clr-dg-column>Second</clr-dg-column>
    
        <clr-dg-row *clrDgItems="let item of items;" [clrDgItem]="item">
        
            <clr-dg-action-overflow *ngIf="item > showIfGreaterThan">
                <button class="action-item">Edit</button>
            </clr-dg-action-overflow>
                
            <clr-dg-cell>{{item}}</clr-dg-cell>
            <clr-dg-cell>{{item * item}}</clr-dg-cell>
        </clr-dg-row>
    
        <clr-dg-footer>{{items.length}} items</clr-dg-footer>
    </clr-datagrid>
`
})
class ActionableRowTest {
    items = [
        1,
        2,
        3
    ];
    showIfGreaterThan = 0;
}

@Component({
    template: `
    <clr-datagrid>
        <clr-dg-column>First</clr-dg-column>
        <clr-dg-column>Second</clr-dg-column>
    
        <clr-dg-row *clrDgItems="let item of items;" [clrDgItem]="item">
            <clr-dg-cell>{{item}}</clr-dg-cell>
            <clr-dg-cell>{{item * item}}</clr-dg-cell>
            <ng-template [ngIf]="expandable">
                <clr-dg-row-detail *clrIfExpanded>Detail</clr-dg-row-detail>
            </ng-template>
        </clr-dg-row>
    
        <clr-dg-footer>{{items.length}} items</clr-dg-footer>
    </clr-datagrid>
`
})
class ExpandableRowTest {
    items = [
        1,
        2,
        3
    ];
    expandable = true;
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

class TestStringFilter implements StringFilter<number> {
    accepts(item: number, search: string) {
        return true;
    };
}
