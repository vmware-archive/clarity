/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {TestContext} from "./helpers.spec";
import {DatagridPlaceholder} from "./datagrid-placeholder";
import {Items} from "./providers/items";
import {Page} from "./providers/page";
import {Sort} from "./providers/sort";
import {Filters} from "./providers/filters";

export default function(): void {
    describe("DatagridPlaceholder component", function() {
        describe("Typescript API", function() {
            beforeEach(function() {
                this.pageProvider = new Page();
                this.itemsProvider = new Items(null, null, this.pageProvider);
                this.component = new DatagridPlaceholder(this.itemsProvider, this.pageProvider);
            });

            it("detects if the Datagrid is empty", function() {
                expect(this.component.emptyDatagrid).toBe(true);
                this.itemsProvider.all = new Array(1);
                expect(this.component.emptyDatagrid).toBe(false);
                this.itemsProvider.all = [];
                expect(this.component.emptyDatagrid).toBe(true);
            });

            it("counts the numbers of empty rows needed to complete the page", function() {
                this.pageProvider.size = 10;
                expect(this.component.nbEmptyRows).toBe(10);
                this.itemsProvider.all = new Array(3);
                expect(this.component.nbEmptyRows).toBe(7);
                this.itemsProvider.all = new Array(10);
                expect(this.component.nbEmptyRows).toBeLessThanOrEqual(0);
                this.itemsProvider.all = new Array(42);
                expect(this.component.nbEmptyRows).toBeLessThanOrEqual(0);
            });

            it("always leaves space for at least 2 rows", function() {
                expect(this.component.nbEmptyRows).toBe(2);
                this.pageProvider.size = 1;
                expect(this.component.nbEmptyRows).toBe(2);
                this.itemsProvider.all = new Array(1);
                expect(this.component.nbEmptyRows).toBe(1);
            });
        });

        describe("View", function() {
            let context: TestContext<DatagridPlaceholder, SimpleTest>;
            let itemsProvider: Items;
            let pageProvider: Page;

            beforeEach(function() {
                context = this.create(DatagridPlaceholder, SimpleTest, [Items, Page, Sort, Filters]);
                itemsProvider = TestBed.get(Items);
                pageProvider = TestBed.get(Page);
            });

            it("is empty when there are items", function() {
                itemsProvider.all = new Array(1);
                context.detectChanges();
                expect(context.clarityElement.textContent.trim()).toMatch("");
            });

            it("is empty when the data is loading", function() {
                itemsProvider.loading = true;
                context.detectChanges();
                expect(context.clarityElement.textContent.trim()).toMatch("");
            });

            it("projects content when there are no items", function() {
                expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
            });

            it("has height 0 when no empty rows are needed", function() {
                itemsProvider.all = new Array(2);
                context.detectChanges();
                expect(context.clarityElement.scrollHeight).toBe(0);
            });

            // Yuck. But hey, if we're hard-coding a height, we might as well make sure it we don't mess it up.
            it("adds 36px to its height for each row needed", function() {
                pageProvider.size = 10;
                context.detectChanges();
                expect(context.clarityElement.scrollHeight).toBe(360);
                itemsProvider.all = new Array(9);
                context.detectChanges();
                expect(context.clarityElement.scrollHeight).toBe(36);
            });
        });
    });
}

@Component({
    template: `<clr-dg-placeholder>Hello world</clr-dg-placeholder>`
})
class SimpleTest {
}