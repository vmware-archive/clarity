/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestContext} from "../helpers.spec";
import {DatagridBodyRenderer} from "./body-renderer";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DomAdapter} from "./dom-adapter";
import {MockDomAdapter, MOCK_DOM_ADAPTER_PROVIDER} from "./dom-adapter.mock";

export default function(): void {
    describe("DatagridBodyRenderer directive", function() {
        let context: TestContext<DatagridBodyRenderer, SimpleTest>;

        beforeEach(function() {
            context = this.create(DatagridBodyRenderer, SimpleTest,
                [DatagridRenderOrganizer, MOCK_DOM_ADAPTER_PROVIDER]);
        });

        it("emits its scrollbar width when notified of a change", function() {
            let mockDomAdapter: MockDomAdapter = context.getClarityProvider(DomAdapter);
            let organizer: DatagridRenderOrganizer = context.getClarityProvider(DatagridRenderOrganizer);
            let scrollbarWidth: number;
            organizer.scrollbarWidth.subscribe(width => scrollbarWidth = width);
            expect(scrollbarWidth).toBeUndefined();
            organizer.scrollbar.next();
            expect(scrollbarWidth).toBe(0);
            mockDomAdapter._scrollBarWidth = 42;
            organizer.scrollbar.next();
            expect(scrollbarWidth).toBe(42);
        });
    });
}

@Component({
    template: `<div clrDgBody>Hello world</div>`
})
class SimpleTest {
}