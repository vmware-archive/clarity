/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestContext} from "./helpers.spec";
import {DatagridFooter} from "./datagrid-footer";
import {Selection, SelectionType} from "./providers/selection";
import {FiltersProvider} from "./providers/filters";
import {Items} from "./providers/items";
import {Sort} from "./providers/sort";
import {Page} from "./providers/page";
import { HideableColumnService } from "./providers/hideable-column.service";

const PROVIDERS_NEEDED = [Selection, Items, FiltersProvider, Sort, Page, HideableColumnService];

export default function(): void {
    describe("DatagridFooter component", function() {
        let context: TestContext<DatagridFooter, SimpleTest>;

        beforeEach(function() {
            context = this.create(DatagridFooter, SimpleTest, PROVIDERS_NEEDED);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-cell class to the host", function() {
            expect(context.clarityElement.classList.contains("datagrid-foot")).toBeTruthy();
        });

        it("does not show the selection details when selection type is None", function() {
            let clarityDirectiveSelection: Selection = context.clarityDirective.selection;
            clarityDirectiveSelection.selectionType = SelectionType.None;

            context.detectChanges();

            expect(context.clarityElement.querySelector(".datagrid-foot-select")).toBeNull();
        });

        it("does not show the selection details when selection type is single", function() {
            let clarityDirectiveSelection: Selection = context.clarityDirective.selection;
            clarityDirectiveSelection.selectionType = SelectionType.Single;
            clarityDirectiveSelection.current.push(1);

            context.detectChanges();

            expect(context.clarityElement.querySelector(".datagrid-foot-select")).toBeNull();
        });

        it("shows the selection details when more than one item is selected", function() {
            let clarityDirectiveSelection: Selection = context.clarityDirective.selection;
            clarityDirectiveSelection.selectionType = SelectionType.Multi;
            clarityDirectiveSelection.current.push(1);

            context.clarityDirective.cdr.markForCheck();
            context.detectChanges();

            expect(context.clarityElement.querySelector(".datagrid-foot-select")).not.toBeNull();
            expect(context.clarityElement.querySelector(".datagrid-foot-select").textContent).toMatch("1");


            clarityDirectiveSelection.current.push(1);
            context.clarityDirective.cdr.markForCheck();
            context.detectChanges();

            expect(context.clarityElement.querySelector(".datagrid-foot-select")).not.toBeNull();
            expect(context.clarityElement.querySelector(".datagrid-foot-select").textContent).toMatch("2");

            clarityDirectiveSelection.current = [];

            context.clarityDirective.cdr.markForCheck();
            context.detectChanges();

            expect(context.clarityElement.querySelector(".datagrid-foot-select")).toBeNull();
        });
    });
}

@Component({
    template: `<clr-dg-footer>Hello world</clr-dg-footer>`
})
class SimpleTest {
}
