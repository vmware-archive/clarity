/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {TestContext} from "../helpers.spec";

import {DatagridHeadRenderer} from "./head-renderer";
import {DatagridRenderOrganizer} from "./render-organizer";
import {MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer} from "./render-organizer.mock";

export default function(): void {
    describe("DatagridHeadRenderer directive", function() {
        let context: TestContext<DatagridHeadRenderer, SimpleTest>;
        let organizer: MockDatagridRenderOrganizer;

        beforeEach(function() {
            context = this.create(DatagridHeadRenderer, SimpleTest, [MOCK_ORGANIZER_PROVIDER]);
            organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
        });

        it("adds right padding corresponding to the scrollbar of the body", function() {
            organizer.scrollbarWidth.next(42);
            expect(context.clarityElement.style.paddingRight).toBe("42px");
            organizer.scrollbarWidth.next(0);
            expect(context.clarityElement.style.paddingRight).toBe("0px");
        });
    });
}

@Component({template: `<div clrDgHead>Hello world</div>`})
class SimpleTest {}
