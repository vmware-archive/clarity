/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, TemplateRef, ViewChildren, Renderer2 } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';

import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { TestContext } from './helpers.spec';
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
import { HideableColumnService } from './providers/hideable-column.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';

@Component({
  template: `
        <clr-dg-column-toggle></clr-dg-column-toggle>
        <ng-template #col0>dg-col-0</ng-template>
        <ng-template #col1>dg-col-1</ng-template>
        <ng-template #col2>dg-col-2</ng-template>
        <ng-template #col3>dg-col-3</ng-template>
        <ng-template #col4>dg-col-4</ng-template>
    `,
})
class SimpleTest {
  columnIds: string[] = ['dg-col-0', 'dg-col-1', 'dg-col-2', 'dg-col-3', 'dg-col-4'];
  @ViewChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
}

export default function(): void {
  describe('Datagrid Column Toggle component', function() {
    describe('Typescript API', function() {
      let hideableColumnService: HideableColumnService;
      let columnToggleButtons: ColumnToggleButtonsService;
      let component: ClrDatagridColumnToggle;

      function getTestColumns(): DatagridHideableColumnModel[] {
        // Mixed columns: 1/2 hidden (true) & 1/2 showing (false)
        return [
          new DatagridHideableColumnModel(null, 'dg-col-0'),
          new DatagridHideableColumnModel(null, 'dg-col-1'),
          new DatagridHideableColumnModel(null, 'dg-col-2'),
          new DatagridHideableColumnModel(null, 'dg-col-3', false),
          new DatagridHideableColumnModel(null, 'dg-col-4', false),
          new DatagridHideableColumnModel(null, 'dg-col-5', false),
        ];
      }

      function getHiddenTestColumns(): DatagridHideableColumnModel[] {
        return [
          new DatagridHideableColumnModel(null, 'dg-col-0', true),
          new DatagridHideableColumnModel(null, 'dg-col-1', true),
          new DatagridHideableColumnModel(null, 'dg-col-2', true),
          new DatagridHideableColumnModel(null, 'dg-col-3', true),
          new DatagridHideableColumnModel(null, 'dg-col-4', true),
          new DatagridHideableColumnModel(null, 'dg-col-5', true),
        ];
      }

      beforeEach(function() {
        hideableColumnService = new HideableColumnService();
        columnToggleButtons = new ColumnToggleButtonsService();
        component = new ClrDatagridColumnToggle(hideableColumnService, columnToggleButtons, {}, null);
      });

      it('gets a list of hideable columns from the HideableColumnService', function() {
        // inits to empty array.
        expect(component.columns).toEqual([]);

        // add columns to the service
        const testColumns = getTestColumns();
        hideableColumnService.updateColumnList(testColumns);
        component.ngOnInit();
        expect(component.columns).toEqual(hideableColumnService.getColumns());
      });

      it('updates the hideable column list when the list changes', function() {
        const testColumns = getTestColumns();
        hideableColumnService.updateColumnList(testColumns);
        component.ngOnInit();
        expect(component.columns).toEqual(testColumns);

        const slicedColumn = testColumns.slice(3);
        hideableColumnService.updateColumnList(slicedColumn);
        expect(component.columns).toEqual(slicedColumn);
      });

      it('can select all the columns at once', function() {
        const testColumns = getHiddenTestColumns();

        hideableColumnService.updateColumnList(testColumns);
        component.ngOnInit();
        component.selectAll();
        component.columns.forEach(col => {
          expect(col.hidden).toBe(false);
        });
      });

      it('toggles the hidden state of a column', function() {
        const testColumns = getTestColumns();

        hideableColumnService.updateColumnList(testColumns);
        component.ngOnInit();

        // It inits to true (aka - hidden)
        const testColumn: DatagridHideableColumnModel = component.columns[0];
        const testEvent = false;

        expect(testColumn.hidden).toBe(false); // showing
        component.toggleColumn(testEvent, testColumn);
        expect(testColumn.hidden).toBe(true); // hidden
        component.toggleColumn(!testEvent, testColumn);
        expect(testColumn.hidden).toBe(false); // showing
      });
    });

    describe('View', function() {
      let context: TestContext<ClrDatagridColumnToggle, SimpleTest>;
      let hideableColumnService: HideableColumnService;
      let toggleService: ClrPopoverToggleService;

      beforeEach(function() {
        context = this.create(ClrDatagridColumnToggle, SimpleTest, [
          HideableColumnService,
          ColumnToggleButtonsService,
          ClrPopoverEventsService,
          ClrPopoverPositionService,
          ClrPopoverToggleService,
          Renderer2,
        ]);
        hideableColumnService = context.getClarityProvider(HideableColumnService);
        toggleService = context.getClarityProvider(ClrPopoverToggleService);
      });

      it('has a toggle icon', function() {
        const iconBtn = context.clarityElement.querySelector('.column-switch-wrapper > button');
        expect(iconBtn).toBeDefined();
      });

      it('opens and closes the toggleUI', function() {
        const iconBtn = context.clarityElement.querySelector('.clr-smart-open-close');
        expect(toggleService.open).toBe(false);
        iconBtn.click();
        context.detectChanges();
        expect(toggleService.open).toBe(true);

        iconBtn.click();
        context.detectChanges();
        expect(toggleService.open).toBe(false);

        // Open it to test 'x' closes popover pathway
        iconBtn.click();
        context.detectChanges(); // open it

        // Find the x and click it
        const closeX: HTMLButtonElement = document.querySelector('.clr-smart-close-button');
        closeX.click();
        context.detectChanges();
        expect(toggleService.open).toBe(false);

        // make sure the x is not stil in the dom
        const toggleUI = document.querySelector('.clr-smart-close-button');
        expect(toggleUI).toBeNull();
      });

      it('projects DatagridHideableContent TemplateRefs', function() {
        const hideableColumns: DatagridHideableColumnModel[] = [];
        let nbCol: number = 0;
        const iconBtn = context.clarityElement.querySelector('.column-switch-wrapper > button');

        context.testComponent.templates.forEach(col => {
          hideableColumns.push(new DatagridHideableColumnModel(col, `dg-col-${nbCol}`, false));
          nbCol++;
        });

        hideableColumnService.updateColumnList(hideableColumns);
        iconBtn.click();
        context.detectChanges();

        const renderedTemplates = document.querySelectorAll('.switch-content label');

        // Test the init properly
        expect(hideableColumns.length).toBe(renderedTemplates.length);

        for (let i = 0; i < renderedTemplates.length; i++) {
          const template: HTMLElement = <HTMLElement>renderedTemplates[i];
          expect(hideableColumns[i].id).toEqual(template.innerText.trim());
        }

        // Now test when columns are updated
        const updatedColumns = hideableColumns.slice(3);
        hideableColumnService.updateColumnList(updatedColumns);
        context.detectChanges();

        const updatedRenderedTemplates = document.querySelectorAll('.switch-content label');

        expect(updatedColumns.length).toBe(updatedRenderedTemplates.length);

        for (let i = 0; i < updatedRenderedTemplates.length; i++) {
          const template: HTMLElement = <HTMLElement>updatedRenderedTemplates[i];
          expect(updatedColumns[i].id).toEqual(template.innerText.trim());
        }
      });

      it(
        'toggles any hideable column when clicked',
        fakeAsync(function() {
          const hideableColumns: DatagridHideableColumnModel[] = [];
          let nbCol: number = 0;
          const iconBtn = context.clarityElement.querySelector('.column-switch-wrapper > button');

          context.testComponent.templates.forEach(col => {
            hideableColumns.push(new DatagridHideableColumnModel(col, `dg-col-${nbCol}`, false));
            nbCol++;
          });

          hideableColumnService.updateColumnList(hideableColumns);
          iconBtn.click();
          context.detectChanges();
          // Thank you asynchronous [ngModel]...
          tick();

          const testColumn: DatagridHideableColumnModel = hideableColumns[0];
          expect(testColumn.hidden).toBe(false);

          const col0Clicker: HTMLInputElement = document.querySelector('.switch-content input[type="checkbox"]');
          col0Clicker.click();
          expect(testColumn.hidden).toBe(true);
          col0Clicker.click();
          expect(testColumn.hidden).toBe(false);
        })
      );

      it('shows all of the hidden columns', function() {
        const hideableColumns: DatagridHideableColumnModel[] = [];
        let nbCol: number = 0;
        const iconBtn = context.clarityElement.querySelector('.column-switch-wrapper > button');

        context.testComponent.templates.forEach(col => {
          hideableColumns.push(new DatagridHideableColumnModel(col, `dg-col-${nbCol}`, true));
          nbCol++;
        });

        hideableColumnService.updateColumnList(hideableColumns);
        iconBtn.click();
        context.detectChanges();

        const columnCheckboxes = document.querySelectorAll('.switch-content input[type="checkbox"]');
        const selectAll: HTMLButtonElement = document.querySelector(
          '.clr-popover-content > .switch-footer > div > button'
        );
        for (let i = 0; i > columnCheckboxes.length; i++) {
          const checkbox: HTMLInputElement = <HTMLInputElement>columnCheckboxes[i];
          expect(checkbox.checked).toBe(false);
        }

        selectAll.click();
        context.detectChanges();

        for (let i = 0; i > columnCheckboxes.length; i++) {
          const checkbox: HTMLInputElement = <HTMLInputElement>columnCheckboxes[i];
          expect(checkbox.checked).toBe(true);
        }

        expect(selectAll.disabled).toBe(true);
      });

      it(
        'knows when there is only one column showing',
        fakeAsync(function() {
          const hideableColumns: DatagridHideableColumnModel[] = [];
          let nbCol: number = 0;
          const iconBtn = context.clarityElement.querySelector('.column-switch-wrapper > button');

          context.testComponent.templates.forEach(col => {
            const colId = 'dg-col-' + nbCol.toString();
            hideableColumns.push(new DatagridHideableColumnModel(col, colId, true));
            nbCol++;
          });

          hideableColumns[0].hidden = false;
          hideableColumnService.updateColumnList(hideableColumns);
          iconBtn.click();
          context.detectChanges();
          tick();

          const columnCheckboxes = document.querySelectorAll('.switch-content input[type="checkbox"]');
          const firstBox: HTMLInputElement = <HTMLInputElement>columnCheckboxes[0];
          expect(firstBox.disabled).toBe(true);

          const secondBox: HTMLInputElement = <HTMLInputElement>columnCheckboxes[1];
          secondBox.click();
          hideableColumnService.updateColumnList(hideableColumns);
          context.detectChanges();
          tick();

          expect(firstBox.disabled).toBe(false);
        })
      );

      it('shows the default buttons', function() {
        const iconBtn = context.clarityElement.querySelector('.clr-smart-open-close');
        expect(toggleService.open).toBe(false);
        iconBtn.click();
        context.detectChanges();
        expect(toggleService.open).toBe(true);

        const selectAllBtn: HTMLButtonElement = document.querySelector(
          '.clr-popover-content > .switch-footer > div > button'
        );
        expect(selectAllBtn.innerText.trim().toUpperCase()).toEqual('Select All'.toUpperCase());
        const title = document.querySelector('.clr-popover-content > .switch-header');
        expect(title.innerHTML).toContain('Show Columns');
      });
    });
  });
}
