/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, QueryList, ViewChildren, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClrDatagrid } from './datagrid';
import { ClrDatagridCell } from './datagrid-cell';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridModule } from './datagrid.module';
import { ColumnReorderService } from './providers/column-reorder.service';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { FIRST_VISIBLE_COLUMN_CLASS, LAST_VISIBLE_COLUMN_CLASS, STRICT_WIDTH_CLASS } from './render/constants';
import { ColumnsService } from './providers/columns.service';
import { DatagridColumnChanges } from './enums/column-changes.enum';
import { debug } from 'util';

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column [clrDgColumnOrder]="column_0_order" [style.width.px]="column_0_width">
        <ng-container *clrDgHideableColumn>
          A
        </ng-container>
      </clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column_1_order" [style.width.px]="column_1_width" *ngIf="!hideMiddle">
        <ng-container *clrDgHideableColumn>
          B
        </ng-container>
      </clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column_2_order" [style.width.px]="column_2_width">
        <ng-container *clrDgHideableColumn>
          C
        </ng-container>
      </clr-dg-column>

      <clr-dg-row *ngFor="let item of items">
        <clr-dg-cell>a</clr-dg-cell>
        <clr-dg-cell *ngIf="!hideMiddle">b</clr-dg-cell>
        <clr-dg-cell>c</clr-dg-cell>

        <clr-dg-row-detail *clrIfExpanded="rowExpanded">
          <clr-dg-cell>aa</clr-dg-cell>
          <clr-dg-cell *ngIf="!hideMiddle">bb</clr-dg-cell>
          <clr-dg-cell>cc</clr-dg-cell>
        </clr-dg-row-detail>
      </clr-dg-row>

      <clr-dg-footer>
        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
        of {{pagination.totalItems}} users
        <clr-dg-pagination #pagination [clrDgPageSize]="currentPageSize"></clr-dg-pagination>
      </clr-dg-footer>
    </clr-datagrid>
  `,
})
class ReorderWithExpandRowTest {
  items = [1];
  column_0_order: number;
  column_1_order: number;
  column_2_order: number;

  column_0_width: number;
  column_1_width: number;
  column_2_width: number;

  hideMiddle = false;

  rowExpanded = false;

  currentPageSize = 10;

  @ViewChildren(ClrDatagridColumn) columns: QueryList<ClrDatagridColumn>;
  @ViewChildren(ClrDatagridCell) cells: QueryList<ClrDatagridCell>;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column [clrDgColumnOrder]="column_0_order">
        <ng-container *clrDgHideableColumn>
          A
        </ng-container>
      </clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column_1_order" *ngIf="!hideMiddle">
        <ng-container *clrDgHideableColumn>
          B
        </ng-container>
      </clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column_2_order">
        <ng-container *clrDgHideableColumn>
          C
        </ng-container>
      </clr-dg-column>

      <clr-dg-row *ngFor="let item of items" [clrDgItem]="item">
        <clr-dg-cell>a</clr-dg-cell>
        <clr-dg-cell>b</clr-dg-cell>
        <clr-dg-cell>c</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-detail *clrIfDetail="let detail">
        <clr-dg-detail-header>{{detail | json}}</clr-dg-detail-header>
        <clr-dg-detail-body>
          {{detail | json}}
        </clr-dg-detail-body>
      </clr-dg-detail>
    </clr-datagrid>
  `,
})
class ReorderWithDetailPaneTest {
  items = [1];
  column_0_order: number;
  column_1_order: number;
  column_2_order: number;

  @ViewChildren(ClrDatagridColumn) columns: QueryList<ClrDatagridColumn>;
  @ViewChildren(ClrDatagridCell) cells: QueryList<ClrDatagridCell>;
}

export default function(): void {
  describe('Datagrid Reorder Columns', function() {
    describe('Template API', function() {
      let fixture: ComponentFixture<any>;
      let testComponent: ReorderWithExpandRowTest;

      let columnReorderService: ColumnReorderService;
      let columns: ClrDatagridColumn[];
      let cells: ClrDatagridCell[];

      const toggleColumnWithMiddleDom = function() {
        testComponent.hideMiddle = !testComponent.hideMiddle;
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
      };

      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [ReorderWithExpandRowTest],
          imports: [ClrDatagridModule, NoopAnimationsModule, ClrConditionalModule],
        });

        fixture = TestBed.createComponent(ReorderWithExpandRowTest);
        testComponent = fixture.componentInstance;
        columnReorderService = fixture.debugElement.query(By.directive(ClrDatagrid)).injector.get(ColumnReorderService);
      });

      afterEach(function() {
        fixture.destroy();
        testComponent = null;
        columns = null;
        cells = null;
      });

      it(`sets column and cell orders from their dom positions in row`, function() {
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        expect(columns.map(c => c.order)).toEqual([0, 1, 2]);
        expect(cells.map(c => c.order)).toEqual([0, 1, 2]);
      });

      it(`can set column and cell orders from inputs`, function() {
        testComponent.column_0_order = 1;
        testComponent.column_1_order = 0;
        testComponent.column_2_order = 2;
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        expect(columns.map(c => c.order)).toEqual([1, 0, 2]);
        expect(cells.map(c => c.order)).toEqual([1, 0, 2]);
      });

      it(`updates orders correctly after reordering`, function() {
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        expect(columns.map(c => c.order)).toEqual([0, 1, 2]);
        expect(cells.map(c => c.order)).toEqual([0, 1, 2]);
        columnReorderService.requestReorder(0, 1);
        expect(columns.map(c => c.order)).toEqual([1, 0, 2]);
        expect(cells.map(c => c.order)).toEqual([1, 0, 2]);
        columnReorderService.requestReorder(2, 0);
        expect(columns.map(c => c.order)).toEqual([2, 1, 0]);
        expect(cells.map(c => c.order)).toEqual([2, 1, 0]);
      });

      it(`keeps existing position orders even after one or more columns get deleted`, function() {
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        expect(columns.map(c => c.order)).toEqual([2, 1, 0]);
        expect(cells.map(c => c.order)).toEqual([2, 1, 0]);
        toggleColumnWithMiddleDom();
        expect(columns.map(c => c.order)).toEqual([1, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 0]);
      });

      it(`inserts new column at original DOM position without breaking the existing visual orders`, function() {
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        toggleColumnWithMiddleDom();
        expect(columns.map(c => c.order)).toEqual([1, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 0]);
        toggleColumnWithMiddleDom();
        expect(columns[1].order).toBe(1, 'newly added column should get its dom position order');
        expect(columns.map(c => c.order)).toEqual([2, 1, 0]);
        expect(cells.map(c => c.order)).toEqual([2, 1, 0]);
      });

      it(`inserts new column at user defined position without breaking the existing visual orders`, function() {
        testComponent.column_0_order = 1;
        testComponent.column_1_order = 0;
        testComponent.column_2_order = 2;
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        columnReorderService.requestReorder(0, 1); // [0, 1, 2]
        columnReorderService.requestReorder(2, 0); // [1, 2, 0]
        expect(columns.map(c => c.order)).toEqual([1, 2, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 2, 0]);
        toggleColumnWithMiddleDom();
        expect(columns.map(c => c.order)).toEqual([1, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 0]);
        toggleColumnWithMiddleDom();
        expect(columns[1].order).toBe(0, 'newly added column should get its user defined position order');
        expect(columns.map(c => c.order)).toEqual([2, 0, 1]);
        expect(cells.map(c => c.order)).toEqual([2, 0, 1]);
      });
    });

    describe('View', function() {
      let fixture: ComponentFixture<any>;
      let testComponent: ReorderWithExpandRowTest;
      let testElement: any;

      let columnsService: ColumnsService;
      let columnReorderService: ColumnReorderService;

      let columnEls: HTMLElement[];
      let cellEls: HTMLElement[];

      const toggleColumnWithMiddleDom = function() {
        testComponent.hideMiddle = !testComponent.hideMiddle;
        fixture.detectChanges();
      };

      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [ReorderWithExpandRowTest],
          imports: [ClrDatagridModule, NoopAnimationsModule, ClrConditionalModule],
        });

        fixture = TestBed.createComponent(ReorderWithExpandRowTest);

        testComponent = fixture.componentInstance;
        testElement = fixture.nativeElement;
        columnsService = fixture.debugElement.query(By.directive(ClrDatagrid)).injector.get(ColumnsService);
        columnReorderService = fixture.debugElement.query(By.directive(ClrDatagrid)).injector.get(ColumnReorderService);
      });

      afterEach(function() {
        fixture.destroy();
        testComponent = null;
        columnEls = null;
        cellEls = null;
      });

      it(`sets last visible header width flexible if there is no flexible headers after hiding`, function() {
        testComponent.column_0_width = 123;
        testComponent.column_1_width = 123;
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(STRICT_WIDTH_CLASS)).toBeTruthy();
        expect(columnEls[1].classList.contains(STRICT_WIDTH_CLASS)).toBeTruthy();
        expect(columnEls[2].classList.contains(STRICT_WIDTH_CLASS)).toBeFalsy();

        columnsService.emitStateChangeAt(2, { changes: [DatagridColumnChanges.HIDDEN], hidden: true });
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(STRICT_WIDTH_CLASS)).toBeTruthy();
        expect(columnEls[1].classList.contains(STRICT_WIDTH_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(STRICT_WIDTH_CLASS)).toBeFalsy();
      });

      it(`sets last visible header width flexible if there is no flexible headers after deleting`, function() {
        testComponent.column_0_width = 123;
        testComponent.column_2_width = 123;
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(STRICT_WIDTH_CLASS)).toBeTruthy();
        expect(columnEls[1].classList.contains(STRICT_WIDTH_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(STRICT_WIDTH_CLASS)).toBeTruthy();

        testComponent.hideMiddle = true;
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(STRICT_WIDTH_CLASS)).toBeTruthy();
        expect(columnEls[1].classList.contains(STRICT_WIDTH_CLASS)).toBeFalsy();
      });

      it(`adds first and last visible column classes to appropriate columns initially`, function() {
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));

        expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
        expect(columnEls[0].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
      });

      it(`adds first and last visible column classes to appropriate columns after reordering`, function() {
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(1, 2);
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
        expect(columnEls[0].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
      });

      it(`adds first and last visible column classes to appropriate columns after removing column`, function() {
        fixture.detectChanges();
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
        expect(columnEls[0].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
      });

      it(`adds first and last visible column classes to appropriate columns after adding column`, function() {
        toggleColumnWithMiddleDom();
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
        expect(columnEls[0].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
        expect(columnEls[0].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[1].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeFalsy();
        expect(columnEls[2].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTruthy();
      });

      it(`positions column and cell DOMs at user defined order`, function() {
        testComponent.column_0_order = 1;
        testComponent.column_1_order = 0;
        testComponent.column_2_order = 2;
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'A', 'C']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c']);
      });

      it(`positions column and cell DOMs correctly after reordering`, function() {
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['A', 'B', 'C']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['a', 'b', 'c']);
        columnReorderService.requestReorder(0, 1);
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'A', 'C']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c']);
        columnReorderService.requestReorder(2, 0);
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['C', 'B', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'b', 'a']);
      });

      it(`keeps existing column positions even after one or more columns get deleted`, function() {
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['C', 'B', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'b', 'a']);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'a']);
      });

      it(`keeps existing column positions even after even after one or more columns get added in`, function() {
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'a']);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['C', 'B', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'b', 'a']);
      });

      it(`inserts new column at user defined position without breaking the existing DOM positions`, function() {
        // ["B", "A", "C"]
        testComponent.column_0_order = 1;
        testComponent.column_1_order = 0;
        testComponent.column_2_order = 2;
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'a']);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'c', 'a']);
      });

      describe('With Detail Row', function() {
        it(`positions detail cell DOMs at user defined order`, function() {
          testComponent.column_0_order = 1;
          testComponent.column_1_order = 0;
          testComponent.column_2_order = 2;
          testComponent.rowExpanded = true;
          fixture.detectChanges();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c', 'bb', 'aa', 'cc']);
          testComponent.rowExpanded = false;
          fixture.detectChanges();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c']);
          testComponent.rowExpanded = true;
          fixture.detectChanges();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c', 'bb', 'aa', 'cc']);
        });

        it(`positions detail cell DOMs correctly after reordering`, function() {
          testComponent.rowExpanded = true;
          fixture.detectChanges();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['a', 'b', 'c', 'aa', 'bb', 'cc']);
          columnReorderService.requestReorder(0, 1);
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c', 'bb', 'aa', 'cc']);
          columnReorderService.requestReorder(2, 0);
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'b', 'a', 'cc', 'bb', 'aa']);
        });

        it(`keeps existing column positions in detail row even after one or more columns get deleted`, function() {
          testComponent.rowExpanded = true;
          fixture.detectChanges();
          columnReorderService.requestReorder(0, 1);
          columnReorderService.requestReorder(2, 0);
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'b', 'a', 'cc', 'bb', 'aa']);
          toggleColumnWithMiddleDom();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'a', 'cc', 'aa']);
        });

        it(`keeps existing column positions in detail row even after even after one or more columns get added in`, function() {
          testComponent.rowExpanded = true;
          fixture.detectChanges();
          columnReorderService.requestReorder(0, 1);
          columnReorderService.requestReorder(2, 0);
          toggleColumnWithMiddleDom();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'a', 'cc', 'aa']);
          toggleColumnWithMiddleDom();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'b', 'a', 'cc', 'bb', 'aa']);
        });

        it(`inserts new column at user defined position without breaking the existing DOM positions`, function() {
          // ["B", "A", "C"]
          testComponent.rowExpanded = true;
          testComponent.column_0_order = 1;
          testComponent.column_1_order = 0;
          testComponent.column_2_order = 2;
          fixture.detectChanges();
          columnReorderService.requestReorder(0, 1);
          columnReorderService.requestReorder(2, 0);
          toggleColumnWithMiddleDom();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'a', 'cc', 'aa']);
          toggleColumnWithMiddleDom();
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'c', 'a', 'bb', 'cc', 'aa']);
        });
      });

      describe('With Hideable Column', function() {
        const toggleHiddenAt = (index: number, hidden: boolean) => {
          columnsService.emitStateChangeAt(index, {
            changes: [DatagridColumnChanges.HIDDEN],
            hidden: hidden,
          });
        };

        beforeEach(function() {
          testComponent.column_0_order = 1;
          testComponent.column_1_order = 0;
          testComponent.column_2_order = 2;
          fixture.detectChanges();
        });

        it(`keeps existing visual orders after hiding last visible column`, function() {
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'A', 'C']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c']);
          toggleHiddenAt(2, true);
          fixture.detectChanges();
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'A']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a']);
          expect(columnEls[1].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTrue();
        });

        it(`keeps existing visual orders after hiding first visible column`, function() {
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'A', 'C']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c']);
          toggleHiddenAt(1, true);
          fixture.detectChanges();
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['A', 'C']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['a', 'c']);
          expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTrue();
        });

        it(`keeps existing visual orders after hiding visible column in the middle`, function() {
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'A', 'C']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c']);
          toggleHiddenAt(0, true);
          fixture.detectChanges();
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'C']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'c']);
          expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTrue();
          expect(columnEls[1].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTrue();
        });

        it(`can reorder columns after hiding column`, function() {
          // hiding the column at the index of 0, which is A
          toggleHiddenAt(0, true);
          fixture.detectChanges();
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'C']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'c']);
          columnReorderService.requestReorder(0, 2); // A was in the middle
          fixture.detectChanges();
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['C', 'B']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['c', 'b']);
          toggleHiddenAt(0, false);
          columnEls = Array.from(
            testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
          );
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['A', 'C', 'B']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['a', 'c', 'b']);
        });

        it(`applies columns orders to column titles in hideable column switch`, function() {
          columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
          cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
          expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'A', 'C']);
          expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'a', 'c']);
          testElement.querySelector('.column-toggle--action').click();
          fixture.detectChanges();
          let switchContentList = Array.from(document.querySelectorAll('.switch-content li'));
          expect(switchContentList.map(li => li.textContent.trim())).toEqual(['B', 'A', 'C']);
          columnReorderService.requestReorder(0, 1);
          fixture.detectChanges();
          switchContentList = Array.from(document.querySelectorAll('.switch-content li'));
          expect(switchContentList.map(li => li.textContent.trim())).toEqual(['A', 'B', 'C']);
        });
      });
    });

    describe('With Detail Pane', function() {
      let fixture: ComponentFixture<any>;
      let testComponent: ReorderWithExpandRowTest;
      let testElement: any;

      let columnEls: HTMLElement[];
      let cellEls: HTMLElement[];

      const toggleColumnWithMiddleDom = function() {
        testComponent.hideMiddle = !testComponent.hideMiddle;
        fixture.detectChanges();
      };

      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [ReorderWithDetailPaneTest],
          imports: [ClrDatagridModule, NoopAnimationsModule, ClrConditionalModule],
        });

        fixture = TestBed.createComponent(ReorderWithDetailPaneTest);

        testComponent = fixture.componentInstance;
        testElement = fixture.nativeElement;
      });

      afterEach(function() {
        fixture.destroy();
        testComponent = null;
        columnEls = null;
        cellEls = null;
      });

      it(`hides all columns except first visible one after showing detail pane`, function() {
        testComponent.column_0_order = 2;
        testComponent.column_1_order = 0;
        testComponent.column_2_order = 1;
        fixture.detectChanges();
        testElement.querySelector('.datagrid-detail-caret-button').click();
        fixture.detectChanges();
        columnEls = Array.from(
          testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
        );
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b']);
      });

      it(`shows columns in their previous orders after hiding detail pane`, function() {
        testComponent.column_0_order = 2;
        testComponent.column_1_order = 0;
        testComponent.column_2_order = 1;
        fixture.detectChanges();
        testElement.querySelector('.datagrid-detail-caret-button').click();
        fixture.detectChanges();
        columnEls = Array.from(
          testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
        );
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell:not(.datagrid-hidden-column)'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b']);
        testElement.querySelector('.datagrid-detail-caret-button').click();
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('clr-dg-column.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('clr-dg-cell.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent.trim())).toEqual(['B', 'C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent.trim())).toEqual(['b', 'c', 'a']);
      });

      it(`should add both first and last visible column classes to only visible column after showing detail pane`, function() {
        testComponent.column_0_order = 2;
        testComponent.column_1_order = 0;
        testComponent.column_2_order = 1;
        fixture.detectChanges();
        testElement.querySelector('.datagrid-detail-caret-button').click();
        fixture.detectChanges();
        columnEls = Array.from(
          testElement.querySelectorAll('clr-dg-column.datagrid-column:not(.datagrid-hidden-column)')
        );
        expect(columnEls[0].classList.contains(FIRST_VISIBLE_COLUMN_CLASS)).toBeTrue();
        expect(columnEls[0].classList.contains(LAST_VISIBLE_COLUMN_CLASS)).toBeTrue();
      });
    });
  });
}
