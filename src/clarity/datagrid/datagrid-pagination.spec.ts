/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {Page} from "./providers/page";
import {DatagridPagination} from "./datagrid-pagination";
import {TestContext} from "./helpers.spec";

export default function(): void {
    describe("DatagridPagination component", function() {
        describe("Typescript API", function() {
            let pageService: Page;
            let component: DatagridPagination;

            beforeEach(function() {
                pageService = new Page();
                component = new DatagridPagination(pageService);
            });

            afterEach(function() {
                component.ngOnDestroy();
            });

            it("sets the default page size to 10", function() {
                expect(pageService.size).toBe(10);
            });

            it("uses the page service's page size", function() {
                component.pageSize = 20;
                expect(pageService.size).toBe(20);
                pageService.size = 30;
                expect(component.pageSize).toBe(30);
            });

            it("uses the page service's total items", function() {
                component.totalItems = 20;
                expect(pageService.totalItems).toBe(20);
                pageService.totalItems = 30;
                expect(component.totalItems).toBe(30);
            });

            it("uses the page service's last page", function() {
                component.lastPage = 20;
                expect(pageService.last).toBe(20);
                pageService.last = 30;
                expect(component.lastPage).toBe(30);
            });

            it("offers a next() method that delegates to the page service", function() {
                spyOn(pageService, "next");
                component.next();
                expect(pageService.next).toHaveBeenCalled();
            });

            it("offers a previous() method that delegates to the page service", function() {
                spyOn(pageService, "previous");
                component.previous();
                expect(pageService.previous).toHaveBeenCalled();
            });

            it("uses the page service's first and last items", function() {
                pageService.size = 7;
                pageService.current = 42;
                expect(component.firstItem).toBe(pageService.firstItem);
                expect(component.lastItem).toBe(pageService.lastItem);
            });
        });

        describe("Template API", function() {
            // Until we can properly type "this"
            let context: TestContext<DatagridPagination, FullTest>;

            beforeEach(function() {
                context = this.create(DatagridPagination, FullTest, [Page]);
            });

            it("receives an input for page size", function () {
                context.testComponent.size = 42;
                context.detectChanges();
                expect(context.clarityDirective.pageSize).toBe(42);
            });

            it("receives an input for total number of items", function () {
                context.testComponent.total = 42;
                context.detectChanges();
                expect(context.clarityDirective.totalItems).toBe(42);
            });

            it("receives an input for last page", function () {
                context.testComponent.last = 42;
                context.detectChanges();
                expect(context.clarityDirective.lastPage).toBe(42);
            });

            it("offers two-way binding on the current page", function () {
                context.testComponent.current = 42;
                context.detectChanges();
                expect(context.clarityDirective.currentPage).toBe(42);
                context.clarityDirective.currentPage = 3;
                context.detectChanges();
                expect(context.testComponent.current).toBe(3);
            });
        });

        describe("View", function() {
            // Until we can properly type "this"
            let context: TestContext<DatagridPagination, FullTest>;

            beforeEach(function() {
                context = this.create(DatagridPagination, FullTest, [Page]);
            });

            it("doesn't display anything if there is only one page", function () {
                context.testComponent.size = 10;
                context.testComponent.total = 10;
                context.detectChanges();
                expect(context.clarityElement.textContent.trim()).toBe("");
            });

            it("displays a next button", function () {
                context.testComponent.size = 10;
                context.testComponent.total = 100;
                context.testComponent.current = 1;
                context.detectChanges();
                let next = context.clarityElement.querySelector(".pagination-next");
                expect(next).not.toBeNull();
                next.click();
                context.detectChanges();
                expect(context.testComponent.current).toBe(2);
            });

            it("doesn't display the next button on the last page", function () {
                context.testComponent.size = 10;
                context.testComponent.total = 100;
                context.testComponent.current = 10;
                context.detectChanges();
                expect(context.clarityElement.querySelector(".pagination-next")).toBeNull();
            });

            it("displays a previous button", function () {
                context.testComponent.size = 10;
                context.testComponent.total = 100;
                context.testComponent.current = 10;
                context.detectChanges();
                let previous = context.clarityElement.querySelector(".pagination-previous");
                expect(previous).not.toBeNull();
                previous.click();
                context.detectChanges();
                expect(context.testComponent.current).toBe(9);
            });

            it("doesn't display the previous button on the first page", function () {
                context.testComponent.size = 10;
                context.testComponent.total = 100;
                context.testComponent.current = 1;
                context.detectChanges();
                expect(context.clarityElement.querySelector(".pagination-previous")).toBeNull();
            });

            it("displays the first page, last page, and pages around the current one", function () {
                context.testComponent.size = 10;
                context.testComponent.total = 1000;
                context.testComponent.current = 42;
                context.detectChanges();
                expect(context.clarityElement.textContent.trim()).toMatch(/^1\D+41\D+42\D+43\D+100$/);
            });

            it("displays clickable page numbers", function () {
                context.testComponent.size = 10;
                context.testComponent.total = 1000;
                context.testComponent.current = 42;
                context.detectChanges();
                let buttons = context.clarityElement.querySelectorAll("button");
                let previousPageButton = buttons[2];
                // We check we have the correct button
                expect(previousPageButton.textContent.trim()).toBe("41");
                previousPageButton.click();
                expect(context.testComponent.current).toBe(41);
                let lastPageButton = buttons[4];
                // We check we have the correct button
                expect(lastPageButton.textContent.trim()).toBe("100");
                lastPageButton.click();
                expect(context.testComponent.current).toBe(100);
            });
        });
    });
}

@Component({
    template: `<clr-dg-pagination
                    [(clrDgPage)]="current"
                    [clrDgPageSize]="size"
                    [clrDgTotalItems]="total"
                    [clrDgLastPage]="last">
                </clr-dg-pagination>`
})
class FullTest {
    current: number;
    size: number;
    total: number;
    last: number;
}