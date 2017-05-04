/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { TestContext } from "./helpers.spec";
import { DatagridCell } from "./datagrid-cell";
import { DatagridRenderOrganizer } from "./render/render-organizer";
import { HideableColumnService } from "./providers/hideable-column.service";
import { DatagridHideableColumn } from "./datagrid-hideable-column";

export default function (): void {
    describe("DatagridCell component", function () {
        let context: TestContext<DatagridCell, SimpleTest>;
        let hideableColumnService: HideableColumnService;

        beforeEach(function () {
            context = this.create(DatagridCell, SimpleTest, [ DatagridRenderOrganizer, HideableColumnService ]);
        });

        it("projects content", function () {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-cell class to the host", function () {
            expect(context.clarityElement.classList.contains("datagrid-cell")).toBeTruthy();
        });

        it("adds the .datagrid-cell--hidden class to the host", function () {
            let testColumn: DatagridHideableColumn[] = [
                new DatagridHideableColumn(null, "dg-col-0", true)
            ];
            hideableColumnService = context.getClarityProvider(HideableColumnService);
            hideableColumnService.updateColumnList(testColumn);
            context.clarityDirective.id = "dg-col-0";
            context.detectChanges();
            expect(context.clarityElement.classList.contains("datagrid-cell--hidden")).toBeTruthy();
        });
    });
}

@Component({
    template: `
        <clr-dg-cell>Hello world</clr-dg-cell>`
})
class SimpleTest { }
