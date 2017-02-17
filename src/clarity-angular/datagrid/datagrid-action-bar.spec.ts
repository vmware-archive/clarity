/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {TestContext} from "./helpers.spec";
import {DatagridActionBar} from "./datagrid-action-bar";
import {Selection} from "./providers/selection";
import {Items} from "./providers/items";
import {FiltersProvider} from "./providers/filters";
import {Sort} from "./providers/sort";
import {Page} from "./providers/page";

export default function(): void {
    describe("DatagridActionBar component", function() {
        let context: TestContext<DatagridActionBar, SimpleTest>;
        let selectionProvider: Selection;

        beforeEach(function() {
            context = this.create(DatagridActionBar, SimpleTest, [Selection, Items, FiltersProvider, Sort, Page]);
            selectionProvider = TestBed.get(Selection);
        });

        it("projects content only if selection.current has items", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("");

            selectionProvider.current = [1];
            context.detectChanges();
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");

            selectionProvider.current = [];
            context.detectChanges();
            expect(context.clarityElement.textContent.trim()).toMatch("");
        });
    });
}

@Component({
    template: `<clr-dg-action-bar>Hello world</clr-dg-action-bar>`
})
class SimpleTest {
}
