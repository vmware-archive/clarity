/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";

import {DatagridPlaceholder} from "./datagrid-placeholder";
import {TestContext} from "./helpers.spec";
import {FiltersProvider} from "./providers/filters";
import {Items} from "./providers/items";
import {Page} from "./providers/page";
import {Sort} from "./providers/sort";

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
        });

        describe("View", function() {
            let context: TestContext<DatagridPlaceholder, SimpleTest>;
            let itemsProvider: Items;
            let pageProvider: Page;

            beforeEach(function() {
                context = this.create(DatagridPlaceholder, SimpleTest, [Items, Page, Sort, FiltersProvider]);
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

            it("has height 1px (which acts as a bottom border for the last row)" +
                   "when no empty rows are needed",
               function() {
                   itemsProvider.all = new Array(2);
                   context.detectChanges();
                   expect(context.clarityElement.scrollHeight).toBe(1);
               });
        });
    });
}

@Component({template: `<clr-dg-placeholder>Hello world</clr-dg-placeholder>`})
class SimpleTest {}