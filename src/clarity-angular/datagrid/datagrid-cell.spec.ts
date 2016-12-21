/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestContext} from "./helpers.spec";
import {DatagridCell} from "./datagrid-cell";

export default function(): void {
    describe("DatagridCell component", function() {
        let context: TestContext<DatagridCell, SimpleTest>;

        beforeEach(function() {
            context = this.create(DatagridCell, SimpleTest);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-cell class to the host", function() {
            expect(context.clarityElement.classList.contains("datagrid-cell")).toBeTruthy();
        });
    });
}

@Component({
    template: `<clr-dg-cell>Hello world</clr-dg-cell>`
})
class SimpleTest {
}