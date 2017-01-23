/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {TestContext} from "./helpers.spec";
import {Datagrid} from "./datagrid";
import {State} from "./interfaces/state";
import {Selection} from "./providers/selection";
import {Sort} from "./providers/sort";
import {Filters} from "./providers/filters";
import {Page} from "./providers/page";
import {Comparator} from "./interfaces/comparator";
import {Filter} from "./interfaces/filter";

export default function(): void {
    describe("Datagrid component", function() {
        describe("Template API", function() {
            let context: TestContext<Datagrid, FullTest>;

            beforeEach(function () {
                context = this.create(Datagrid, FullTest);
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
                expect(context.testComponent.selected).toEqual([2, 1]);
            });

            it("allows to set pre-selected items when initializing the full list of items", function() {
                let selection: Selection = context.getClarityProvider(Selection);
                context.testComponent.items = [4, 5, 6];
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
                    let filters: Filters = context.getClarityProvider(Filters);
                    let filter = new TestFilter();
                    filters.add(filter);
                    filter.changes.next(true);
                    expect(context.testComponent.nbRefreshed).toBe(1);
                });

                it("emits once when the page changes", function() {
                    context.testComponent.nbRefreshed = 0;
                    let page: Page = context.getClarityProvider(Page);
                    page.current = 2;
                    expect(context.testComponent.nbRefreshed).toBe(1);
                });

                it("emits the complete state of the datagrid", function() {
                    context.testComponent.items = [1, 2, 3, 4, 5, 6];
                    context.detectChanges();
                    let comparator = new TestComparator();
                    let sort: Sort = context.getClarityProvider(Sort);
                    sort.toggle(comparator);
                    let filters: Filters = context.getClarityProvider(Filters);
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
            });
        });

        describe("View basics", function() {
            let context: TestContext<Datagrid, FullTest>;

            beforeEach(function () {
                context = this.create(Datagrid, FullTest);
            });

            it("projects columns in the header", function () {
                let header = context.clarityElement.querySelector(".datagrid-head");
                expect(header.textContent).toMatch(/First\s*Second/);
            });

            it("projects the footer", function () {
                expect(context.clarityElement.querySelector(".datagrid-foot")).not.toBeNull();
            });
        });

        describe("Iterators", function() {
            it("projects rows when using ngFor", function () {
                this.context = this.create(Datagrid, NgForTest);
                let body = this.context.clarityElement.querySelector(".datagrid-body");
                expect(body.textContent).toMatch(/1\s*1\s*2\s*4\s*3\s*9/);
            });

            it("uses the rows template when using clrDgItems", function () {
                this.context = this.create(Datagrid, FullTest);
                let body = this.context.clarityElement.querySelector(".datagrid-body");
                expect(body.textContent).toMatch(/1\s*1\s*2\s*4\s*3\s*9/);
            });

            it("respects the trackBy option when using clrDgItems", function () {
                this.context = this.create(Datagrid, TrackByTest);
                let oldFirstRow = this.context.clarityElement.querySelector("clr-dg-row");
                this.context.testComponent.items = [42];
                this.context.detectChanges();
                let newFirstRow = this.context.clarityElement.querySelector("clr-dg-row");
                expect(newFirstRow).toBe(oldFirstRow);
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
    items = [1, 2, 3];

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
    items = [1, 2, 3];
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
    items = [1, 2, 3];
    trackByIndex(index: number, item: any) {
        return index;
    }
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
