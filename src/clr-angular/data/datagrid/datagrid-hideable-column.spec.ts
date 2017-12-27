/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";

import {ClrDatagridColumn} from "./datagrid-column";
import {ClrDatagridHideableColumn} from "./datagrid-hideable-column";
import {TestContext} from "./helpers.spec";
import {DragDispatcher} from "./providers/drag-dispatcher";
import {FiltersProvider} from "./providers/filters";
import {Page} from "./providers/page";
import {Sort} from "./providers/sort";
import {StateDebouncer} from "./providers/state-debouncer.provider";
import {DomAdapter} from "./render/dom-adapter";
import {DatagridRenderOrganizer} from "./render/render-organizer";

const PROVIDERS_NEEDED =
    [Sort, FiltersProvider, DatagridRenderOrganizer, DomAdapter, DragDispatcher, Page, StateDebouncer];

export default function(): void {
    describe("DatagridHideableColumn directive", function() {
        describe("TypeScript API", function() {
            let context: TestContext<ClrDatagridColumn, HideableTest>;

            beforeEach(function() {
                context = this.create(ClrDatagridColumn, HideableTest, PROVIDERS_NEEDED);
            });

            it("creates a DatagridHideableColumn instance on the DatagridColumn", function() {
                expect(context.clarityDirective.hideable).toBeDefined();
            });

            it("defaults the HideableColumn.hidden property to false", function() {
                expect(context.clarityDirective.hideable.hidden).toBe(false);
            });

            // it("takes an input for {hidden: false}", function () {
            //    // not sure how to test this yet because I can't grab instances with #templateRefs
            // });

            // it("takes an input for {hidden:true}", function () {
            //    // not sure how to test this yet because I can't grab instances with #templateRefs
            //    // AND -> results in EHCAIWC error
            // });

            it("correctly populates the DatagridHideableColumn instance with an id", function() {
                expect(context.clarityDirective.columnId).toEqual(context.clarityDirective.hideable.id);
            });
        });
    });
}

@Component({
    template: ` 
        <clr-dg-column>
            <ng-container *clrDgHideableColumn>
                Name
            </ng-container>
        </clr-dg-column>
    `
})

class HideableTest {
    @ViewChild(ClrDatagridHideableColumn) directive: ClrDatagridHideableColumn;
}
