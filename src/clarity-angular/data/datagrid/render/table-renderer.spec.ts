/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {TestContext} from "../helpers.spec";

import {DatagridRenderOrganizer} from "./render-organizer";
import {MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer} from "./render-organizer.mock";
import {DatagridTableRenderer} from "./table-renderer";

export default function(): void {
    describe("DatagridTableRenderer directive", function() {
        let context: TestContext<DatagridTableRenderer, SimpleTest>;
        let organizer: MockDatagridRenderOrganizer;

        beforeEach(function() {
            context = this.create(DatagridTableRenderer, SimpleTest, [MOCK_ORGANIZER_PROVIDER]);
            organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
        });

        it("toggles in and out of table mode when notified", function() {
            expect(context.clarityElement.classList).not.toContain("datagrid-computing-columns-width");
            organizer.tableMode.next(true);
            expect(context.clarityElement.classList).toContain("datagrid-computing-columns-width");
            organizer.tableMode.next(false);
            expect(context.clarityElement.classList).not.toContain("datagrid-computing-columns-width");
        });
    });
}

@Component({template: `<div clrDgTableWrapper>Hello World</div>`})
class SimpleTest {}
