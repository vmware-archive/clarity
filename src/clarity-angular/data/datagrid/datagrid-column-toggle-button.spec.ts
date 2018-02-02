/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, QueryList, TemplateRef, ViewChildren} from "@angular/core";

import {DatagridColumnToggle} from "./datagrid-column-toggle";
import {DatagridColumnToggleButton} from "./datagrid-column-toggle-button";
import {DatagridHideableColumn} from "./datagrid-hideable-column";
import {TestContext} from "./helpers.spec";
import {ColumnToggleButtonsService} from "./providers/column-toggle-buttons.service";
import {HideableColumnService} from "./providers/hideable-column.service";

export default function(): void {
    describe("Datagrid Column Toggle Button component", function() {
        describe("Typescript API", function() {
            let columnToggleButtons: ColumnToggleButtonsService;
            let component: DatagridColumnToggleButton;

            beforeEach(function() {
                columnToggleButtons = new ColumnToggleButtonsService();
                component = new DatagridColumnToggleButton(columnToggleButtons);
            });

            it("knows if the button isOk()", function() {
                component.clrType = "ok";
                expect(component.isOk()).toBe(true);
                component.clrType = "selectAll";
                expect(component.isOk()).toBe(false);
            });

            it("gets the correct classes", function() {
                component.clrType = "ok";
                expect(component.getClasses()).toEqual("btn btn-primary");
                component.clrType = "selectAll";
                expect(component.getClasses()).toEqual("btn btn-sm btn-link p6 text-uppercase");
            });

            it("calls the click method", function() {
                component.clrType = "ok";
                spyOn(columnToggleButtons, "buttonClicked");
                component.click();
                expect(columnToggleButtons.buttonClicked).toHaveBeenCalledWith(component.clrType);
            });
        });

        describe("View", function() {
            // Until we can properly type "this"
            let context: TestContext<DatagridColumnToggleButton, ButtonTest>;
            let columnToggleButtons: ColumnToggleButtonsService;
            let button;

            beforeEach(function() {
                context = this.create(DatagridColumnToggleButton, ButtonTest, [ColumnToggleButtonsService]);
                columnToggleButtons = context.getClarityProvider(ColumnToggleButtonsService);
                button = context.clarityElement.querySelector("button");
            });

            it("has a button", function() {
                expect(button).toBeDefined();
                expect(button.className).toContain("btn btn-primary");
                context.testComponent.type = "selectAll";
                context.detectChanges();
                expect(button.className).toContain("btn btn-sm");
            });

            it("projects content", function() {
                expect(button.innerText).toEqual("Testing 1 2 3".toUpperCase());
            });

            it("should disable the button when all are active", function() {
                context.testComponent.type = "selectAll";
                columnToggleButtons.selectAllDisabled = true;
                context.detectChanges();
                expect(button.disabled).toBe(true);
            });
        });
    });
}

@Component({
    template: `
        <clr-dg-column-toggle-button [clrType]="type">Testing 1 2 3</clr-dg-column-toggle-button>
    `
})
class ButtonTest {
    type = "ok";
}
