/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {TestContext} from "./helpers.spec";
import {DatagridRowActions} from "./datagrid-row-actions";
import {RowActionService} from "./providers/row-action-service";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {Selection} from "./providers/selection";
import {Items} from "./providers/items";
import {FiltersProvider} from "./providers/filters";
import {Sort} from "./providers/sort";
import {Page} from "./providers/page";
import {ExpandableRowsCount} from "./providers/global-expandable-rows";
import {HideableColumnService} from "./providers/hideable-column.service";
import {DatagridRenderOrganizer} from "./render/render-organizer";
import {DatagridWillyWonka} from "./chocolate/datagrid-willy-wonka";
import {DomAdapter} from "./render/dom-adapter";

export default function(): void {
    fdescribe("DatagridRowActions component", function() {
        let context: TestContext<DatagridRowActions, SimpleTest>;
        let toggle: HTMLElement;

        beforeEach(function() {
            context = this.create(DatagridRowActions, SimpleTest, [Page, ExpandableRowsCount, HideableColumnService,
                RowActionService, IfOpenService, Selection, Items, FiltersProvider, Sort, DatagridRenderOrganizer,
                DatagridWillyWonka, DomAdapter]);
            toggle = context.clarityElement.querySelector("clr-icon");
        });

        it("offers two-way binding on clrDgActionOverflowOpen", function() {
            context.clarityDirective.open = true;
            context.detectChanges();
            expect(context.testComponent.open).toBe(true);
            context.testComponent.open = false;
            context.detectChanges();
            expect(context.clarityDirective.open).toBe(false);
        });

        it("projects menu content when open", function() {
            context.clarityDirective.open = true;
            context.detectChanges();
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("opens and closes the menu when the toggle is clicked", function() {
            expect(context.clarityDirective.open).toBe(false);
            toggle.click();
            context.detectChanges();
            expect(context.clarityDirective.open).toBe(true);
            toggle.click();
            context.detectChanges();
            expect(context.clarityDirective.open).toBe(false);
        });

        it("closes the menu when clicked outside of the host", () => {
            const outsideDiv: HTMLElement = context.testElement.querySelector(".outside-click-test");

            // should be closed initially
            expect(context.clarityDirective.open).toBe(false);

            // should open when the ellipses icon is clicked
            toggle.click();
            context.detectChanges();
            expect(context.clarityDirective.open).toBe(true);

            // should close when an area outside of the component is clicked
            outsideDiv.click();
            context.detectChanges();
            expect(context.clarityDirective.open).toBe(false);
        });

        it("doesn't close the menu when an action menu item container is clicked", () => {
            // should open when the ellipses icon is clicked
            toggle.click();
            context.detectChanges();

            const actionOverflowMenu: HTMLElement = context.clarityElement.querySelector(".datagrid-action-overflow");
            actionOverflowMenu.click();
            context.detectChanges();
            expect(context.clarityDirective.open).toBe(true);
        });

        it("closes the menu when an action menu item is clicked", () => {
            // should open when the ellipses icon is clicked
            toggle.click();
            context.detectChanges();

            const actionItem: HTMLElement = context.clarityElement.querySelector(".action-item");
            actionItem.click();
            context.detectChanges();
            expect(context.clarityDirective.open).toBe(false);
        });

    });
}

@Component({
    providers: [IfOpenService],
    template: `
        <div class="outside-click-test">
            This is an area outside of the actions
        </div>
        <clr-dg-row>
            <button clrDatagridRowActionsTrigger>
                <clr-icon shape="ellipsis-vertical"></clr-icon>
            </button>
            <clr-dg-row-actions [(clrDgActionOverflowOpen)]="open">
                <button class="action-item">Hello world</button>
            </clr-dg-row-actions>
        </clr-dg-row>`
})
class SimpleTest {
    open: boolean;
}
