/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {DatagridCell} from "./datagrid-cell";
import {DatagridHideableColumn} from "./datagrid-hideable-column";
import {TestContext} from "./helpers.spec";
import {HideableColumnService} from "./providers/hideable-column.service";
import {DatagridRenderOrganizer} from "./render/render-organizer";

export default function(): void {
    describe("DatagridCell component", function() {
        let context: TestContext<DatagridCell, SimpleTest>;
        let hideableColumnService: HideableColumnService;

        beforeEach(function() {
            context = this.create(DatagridCell, SimpleTest, [DatagridRenderOrganizer, HideableColumnService]);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-cell class to the host", function() {
            expect(context.clarityElement.classList.contains("datagrid-cell")).toBeTruthy();
        });

        it("adds the .datagrid-cell--hidden class to the host", function() {
            const testColumn: DatagridHideableColumn[] = [new DatagridHideableColumn(null, "dg-col-0", true)];
            hideableColumnService = context.getClarityProvider(HideableColumnService);
            hideableColumnService.updateColumnList(testColumn);
            context.clarityDirective.id = "dg-col-0";
            context.detectChanges();
            expect(context.clarityElement.classList.contains("datagrid-cell--hidden")).toBeTruthy();
        });

        it("does only adds .datagrid-signpost-trigger class when there is a signpost", function() {
            expect(context.clarityElement.classList.contains("datagrid-signpost-trigger")).toBeFalsy();
            context.testComponent.signpostTest = true;
            context.detectChanges();
            expect(context.clarityElement.classList.contains("datagrid-signpost-trigger")).toBeTruthy();
        });
    });
}

@Component({
    template: `
        <clr-dg-cell>
            Hello world
            <clr-signpost *ngIf="signpostTest">
                <clr-signpost-content *clrIfOpen>
                    The user is strong.
                </clr-signpost-content>
            </clr-signpost>
        </clr-dg-cell>`
})
class SimpleTest {
    signpostTest: boolean = false;
}
