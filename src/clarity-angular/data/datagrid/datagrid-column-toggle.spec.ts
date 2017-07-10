/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, TemplateRef, ViewChildren } from "@angular/core";
import { TestContext } from "./helpers.spec";
import { HideableColumnService } from "./providers/hideable-column.service";
import { DatagridColumnToggle } from "./datagrid-column-toggle";
import { DatagridHideableColumn } from "./datagrid-hideable-column";

export default function (): void {
    describe("Datagrid Column Toggle component", function () {
        describe("Typescript API", function () {
            let hideableColumnService: HideableColumnService;
            let component: DatagridColumnToggle;

            function getTestColumns(): DatagridHideableColumn[] {
                // Mixed columns: 1/2 hidden (true) & 1/2 showing (false)
                return [
                    new DatagridHideableColumn(null, "dg-col-0"),
                    new DatagridHideableColumn(null, "dg-col-0"),
                    new DatagridHideableColumn(null, "dg-col-0"),
                    new DatagridHideableColumn(null, "dg-col-0", false),
                    new DatagridHideableColumn(null, "dg-col-0", false),
                    new DatagridHideableColumn(null, "dg-col-0", false)
                ];
            }

            function getHiddenTestColumns(): DatagridHideableColumn[] {
                return [
                    new DatagridHideableColumn(null, "dg-col-0", true),
                    new DatagridHideableColumn(null, "dg-col-0", true),
                    new DatagridHideableColumn(null, "dg-col-0", true),
                    new DatagridHideableColumn(null, "dg-col-0", true),
                    new DatagridHideableColumn(null, "dg-col-0", true),
                    new DatagridHideableColumn(null, "dg-col-0", true)
                ];
            }

            beforeEach(function () {
                hideableColumnService = new HideableColumnService();
                component = new DatagridColumnToggle(hideableColumnService);
            });

            it("gets a list of hideable columns from the HideableColumnService", function () {
                // inits to empty array.
                expect(component.columns).toEqual([]);

                // add columns to the service
                let testColumns = getTestColumns();
                hideableColumnService.updateColumnList(testColumns);
                component.ngOnInit();
                expect(component.columns).toEqual(hideableColumnService.getColumns());
            });

            it("updates the hideable column list when the list changes", function () {
                let testColumns = getTestColumns();
                hideableColumnService.updateColumnList(testColumns);
                component.ngOnInit();
                expect(component.columns).toEqual(testColumns);

                let slicedColumn = testColumns.slice(3);
                hideableColumnService.updateColumnList(slicedColumn);
                expect(component.columns).toEqual(slicedColumn);
            });

            it("can select all the columns at once", function () {
                let testColumns = getHiddenTestColumns();

                hideableColumnService.updateColumnList(testColumns);
                component.ngOnInit();
                component.selectAll();
                component.columns.forEach(col => {
                    expect(col.hidden).toBe(false);
                });
            });

            it("toggles the hidden state of a column", function () {
                let testColumns = getTestColumns();

                hideableColumnService.updateColumnList(testColumns);
                component.ngOnInit();

                // It inits to true (aka - hidden)
                let testColumn: DatagridHideableColumn = component.columns[ 0 ];
                let testEvent = false;

                expect(testColumn.hidden).toBe(false);    // showing
                component.toggleColumn(testEvent, testColumn);
                expect(testColumn.hidden).toBe(true);   // hidden
                component.toggleColumn(!testEvent, testColumn);
                expect(testColumn.hidden).toBe(false);    // showing
            });
            it("toggles the open state of the UI", function () {
                expect(component.open).toEqual(false);
                component.toggleUI();
                expect(component.open).toEqual(true);
            });
        });

        describe("View", function () {
            // Until we can properly type "this"
            let context: TestContext<DatagridColumnToggle, SimpleTest>;
            let hideableColumnService: HideableColumnService;

            beforeEach(function () {
                context = this.create(DatagridColumnToggle, SimpleTest, [ HideableColumnService ]);
                hideableColumnService = context.getClarityProvider(HideableColumnService);
            });

            it("has a toggle icon", function () {
                let iconBtn = context.clarityElement.querySelector(".column-switch-wrapper > button");
                expect(iconBtn).toBeDefined();
            });

            it("opens and closes the toggleUI", function () {
                let iconBtn = context.clarityElement.querySelector(".column-switch-wrapper > button");
                expect(context.clarityDirective.open).toBe(false);
                iconBtn.click();
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(true);
                iconBtn.click();
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(false);

                // Open it to test 'x' closes popover pathway
                iconBtn.click();
                context.detectChanges(); // open it
                // Find the x and click it
                let closeX = context.clarityElement.querySelector(".switch-header > button");
                closeX.click();
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(false);
                // make sure the x is not stil in the dom
                let toggleUI = context.clarityElement.querySelector(".column-switch");
                expect(toggleUI).toBeNull();

                // Open it for 'OK' btn close pathway
                iconBtn.click();
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(true);

                // Testing 'OK'
                let closeOK = context.clarityElement.querySelector(".switch-footer > .action-right > button");
                closeOK.click();
                context.detectChanges();
                expect(context.clarityDirective.open).toBe(false);
                expect(toggleUI).toBeNull();
            });

            it("projects DatagridHideableContent TemplateRefs", function () {
                let hideableColumns: DatagridHideableColumn[] = [];
                let nbCol: number = 0;
                let iconBtn = context.clarityElement.querySelector(".column-switch-wrapper > button");

                context.testComponent.templates.forEach(( col ) => {
                    hideableColumns.push(
                        new DatagridHideableColumn(col, `dg-col-${nbCol}`, false)
                    );
                    nbCol++;
                });

                hideableColumnService.updateColumnList(hideableColumns);
                iconBtn.click();
                context.detectChanges();

                let renderedTemplates = context.clarityElement.querySelectorAll(
                    ".switch-content > li > clr-checkbox > label"
                );

                // Test the init properly
                expect(hideableColumns.length).toBe(renderedTemplates.length);

                for ( let i = 0; i < renderedTemplates.length; i++ ) {
                    expect(hideableColumns[ i ].id).toEqual(renderedTemplates[ i ].innerText);
                }

                // Now test when columns are updated
                let updatedColumns = hideableColumns.slice(3);
                hideableColumnService.updateColumnList(updatedColumns);
                context.detectChanges();

                let updatedRenderedTemplates = context.clarityElement.querySelectorAll(
                    ".switch-content > li > clr-checkbox > label"
                );

                expect(updatedColumns.length).toBe(updatedRenderedTemplates.length);

                for ( let i = 0; i < updatedRenderedTemplates.length; i++ ) {
                    expect(updatedColumns[ i ].id).toEqual(updatedRenderedTemplates[ i ].innerText);
                }
            });

            it("toggles any hideable column when clicked", function () {
                let hideableColumns: DatagridHideableColumn[] = [];
                let nbCol: number = 0;
                let iconBtn = context.clarityElement.querySelector(".column-switch-wrapper > button");

                context.testComponent.templates.forEach(( col ) => {
                    hideableColumns.push(
                        new DatagridHideableColumn(col, `dg-col-${nbCol}`, false)
                    );
                    nbCol++;
                });

                hideableColumnService.updateColumnList(hideableColumns);
                iconBtn.click();
                context.detectChanges();

                let testColumn: DatagridHideableColumn = hideableColumns[ 0 ];
                expect(testColumn.hidden).toBe(false);

                let col0Clicker = context.clarityElement.querySelector(".switch-content > li > clr-checkbox > input");
                col0Clicker.click();
                expect(testColumn.hidden).toBe(true);
                col0Clicker.click();
                expect(testColumn.hidden).toBe(false);
            });

            it("shows all of the hidden columns", function () {
                let hideableColumns: DatagridHideableColumn[] = [];
                let nbCol: number = 0;
                let iconBtn = context.clarityElement.querySelector(".column-switch-wrapper > button");

                context.testComponent.templates.forEach(( col ) => {
                    hideableColumns.push(
                        new DatagridHideableColumn(col, `dg-col-${nbCol}`, true)
                    );
                    nbCol++;
                });

                hideableColumnService.updateColumnList(hideableColumns);
                iconBtn.click();
                context.detectChanges();

                let columnCheckboxes =
                    context.clarityElement.querySelectorAll(".switch-content > li > clr-checkbox > input");
                let selectAll = context.clarityElement.querySelector(".switch-footer > div > button");
                for ( let i = 0; i > columnCheckboxes.length; i++ ) {
                    let checkbox = columnCheckboxes[ i ];
                    expect(checkbox.checked).toBe(false);
                }

                selectAll.click();
                context.detectChanges();

                for ( let i = 0; i > columnCheckboxes.length; i++ ) {
                    let checkbox = columnCheckboxes[ i ];
                    expect(checkbox.checked).toBe(true);
                }

                expect(selectAll.disabled).toBe(true);
            });

            it("knows when there is only one column showing", function () {
                let hideableColumns: DatagridHideableColumn[] = [];
                let nbCol: number = 0;
                let iconBtn = context.clarityElement.querySelector(".column-switch-wrapper > button");

                context.testComponent.templates.forEach(( col ) => {
                    hideableColumns.push(
                        new DatagridHideableColumn(col, `dg-col-${nbCol}`, true)
                    );
                    nbCol++;
                });

                let showing: TemplateRef<any> = context.testComponent.templates.first;
                hideableColumns.push(
                    new DatagridHideableColumn(showing, `dg-col-${nbCol}`, false)
                );

                hideableColumnService.updateColumnList(hideableColumns);
                iconBtn.click();
                context.detectChanges();

                let columnCheckboxes =
                    context.clarityElement.querySelectorAll(".switch-content > li > clr-checkbox > input");
                expect(columnCheckboxes[ columnCheckboxes.length - 1 ].disabled).toBe(true);
                columnCheckboxes[ 0 ].click();
                context.detectChanges();
                expect(columnCheckboxes[ columnCheckboxes.length - 1 ].disabled).toBe(false);
            });
        });
    });
}

@Component({
    template: `
        <clr-dg-column-toggle></clr-dg-column-toggle>
        <ng-template #col0>dg-col-0</ng-template>
        <ng-template #col1>dg-col-1</ng-template>
        <ng-template #col2>dg-col-2</ng-template>
        <ng-template #col3>dg-col-3</ng-template>
        <ng-template #col4>dg-col-4</ng-template>
    `
})
class SimpleTest {
    columnIds: string[] = [ "dg-col-0", "dg-col-1", "dg-col-2", "dg-col-3", "dg-col-4" ];
    @ViewChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
    shown: boolean = true;
}
