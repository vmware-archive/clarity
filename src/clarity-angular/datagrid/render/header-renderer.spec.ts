/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestContext} from "../helpers.spec";
import {DatagridHeaderRenderer} from "./header-renderer";
import {DomAdapter} from "./dom-adapter";
import {DatagridRenderOrganizer} from "./render-organizer";
import {MockDatagridRenderOrganizer, MOCK_ORGANIZER_PROVIDER} from "./render-organizer.mock";
import {MockDomAdapter, MOCK_DOM_ADAPTER_PROVIDER} from "./dom-adapter.mock";
import {Sort} from "../providers/sort";
import {FiltersProvider} from "../providers/filters";

export default function(): void {
    describe("DatagridHeaderRenderer directive", function() {
        let context: TestContext<DatagridHeaderRenderer, SimpleTest>;
        let domAdapter: MockDomAdapter;
        let organizer: MockDatagridRenderOrganizer;

        beforeEach(function() {
            context = this.create(DatagridHeaderRenderer, SimpleTest,
                [MOCK_ORGANIZER_PROVIDER, MOCK_DOM_ADAPTER_PROVIDER, Sort, FiltersProvider]);
            domAdapter = context.getClarityProvider(DomAdapter);
            organizer = context.getClarityProvider(DatagridRenderOrganizer);
        });

        it("computes and sets the width of a column based on its scrollWidth", function() {
            domAdapter._scrollWidth = 42;
            expect(context.clarityDirective.computeWidth()).toBe(42);
            expect(context.clarityElement.style.width).toBe("42px");
        });

        it("resets the column to default width when notified", function() {
            domAdapter._scrollWidth = 42;
            context.clarityDirective.computeWidth();
            expect(context.clarityElement.style.width).toBe("42px");
            organizer.clearWidths.next();
            expect(context.clarityElement.style.width).toBeFalsy();
        });

        it("sets a strict column width upon clearing when the user declared one", function() {
            domAdapter._userDefinedWidth = 42;
            organizer.clearWidths.next();
            expect(context.clarityDirective.strictWidth).toBe(42);
            domAdapter._userDefinedWidth = 0;
            organizer.clearWidths.next();
            expect(context.clarityDirective.strictWidth).toBeUndefined();
        });

        it("does not remove the width defined by the user", function() {
            context.clarityElement.style.width = "42px";
            domAdapter._userDefinedWidth = 42;
            organizer.clearWidths.next();
            expect(context.clarityElement.style.width).toBe("42px");
            // One extra cycle to be sure, because clearing widths before computing them
            // might have a special case handling
            context.clarityDirective.computeWidth();
            expect(context.clarityElement.style.width).toBe("42px");
            organizer.clearWidths.next();
            expect(context.clarityElement.style.width).toBe("42px");
        });

        it("does not set the width when the user declared a strict one", function() {
            domAdapter._scrollWidth = 42;
            context.clarityDirective.strictWidth = 24;
            expect(context.clarityDirective.computeWidth()).toBe(24);
            expect(context.clarityElement.style.width).toBeFalsy();
            expect(context.clarityElement.classList).toContain("datagrid-fixed-width");
            delete context.clarityDirective.strictWidth;
            expect(context.clarityDirective.computeWidth()).toBe(42);
            expect(context.clarityElement.style.width).toBe("42px");
            expect(context.clarityElement.classList).not.toContain("datagrid-fixed-width");
        });
    });
}

@Component({
    template: `<clr-dg-column>Hello world</clr-dg-column>`
})
class SimpleTest {
}