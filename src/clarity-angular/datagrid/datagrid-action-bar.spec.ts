/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
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

        beforeEach(function() {
            context = this.create(DatagridActionBar, SimpleTest, [Selection, Items, FiltersProvider, Sort, Page]);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });
    });
}

@Component({
    template: `<clr-dg-action-bar>Hello world</clr-dg-action-bar>`
})
class SimpleTest {
}
