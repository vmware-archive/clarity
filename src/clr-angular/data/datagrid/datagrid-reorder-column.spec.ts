/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ClrDatagrid } from './datagrid';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridCell } from './datagrid-cell';
import { ColumnReorderService } from './providers/column-reorder.service';
import { ClrDatagridModule } from './datagrid.module';
import { ColumnsService } from './providers/columns.service';

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column [clrDgColumnOrder]="column1Order">A</clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column2Order" *ngIf="!hideMiddle">B</clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column3Order">C</clr-dg-column>

      <clr-dg-row *ngFor="let item of items">
        <clr-dg-cell>a</clr-dg-cell>
        <clr-dg-cell *ngIf="!hideMiddle">b</clr-dg-cell>
        <clr-dg-cell>c</clr-dg-cell>
      </clr-dg-row>
    </clr-datagrid>
  `,
})
class BasicReorderColumnTest {
  items = [1];
  column1Order: number;
  column2Order: number;
  column3Order: number;

  hideMiddle = false;

  @ViewChildren(ClrDatagridColumn) columns: QueryList<ClrDatagridColumn>;
  @ViewChildren(ClrDatagridCell) cells: QueryList<ClrDatagridCell>;
}

export default function(): void {
  describe('Datagrid Reorder Columns', function() {
    let fixture: ComponentFixture<any>;
    let testComponent: BasicReorderColumnTest;
    let testElement: any;
    let columnsService: ColumnsService;
    let columnReorderService: ColumnReorderService;
    let columns: ClrDatagridColumn[];
    let cells: ClrDatagridCell[];
    let columnEls: HTMLElement[];
    let cellEls: HTMLElement[];

    const toggleColumnWithMiddleDom = function() {
      testComponent.hideMiddle = !testComponent.hideMiddle;
      fixture.detectChanges();
      columns = testComponent.columns.toArray();
      cells = testComponent.cells.toArray();
    };

    beforeEach(function() {
      TestBed.configureTestingModule({
        declarations: [BasicReorderColumnTest],
        imports: [ClrDatagridModule],
      });

      fixture = TestBed.createComponent(BasicReorderColumnTest);

      testComponent = fixture.componentInstance;
      testElement = fixture.nativeElement;
      columnReorderService = fixture.debugElement.query(By.directive(ClrDatagrid)).injector.get(ColumnReorderService);
      columnsService = fixture.debugElement.query(By.directive(ClrDatagrid)).injector.get(ColumnsService);
    });

    afterEach(function() {
      fixture.destroy();
      columns = null;
      cells = null;
      columnEls = null;
      cellEls = null;
    });

    describe('Template API', function() {
      it(`sets column and cell orders from their dom positions in row`, function() {
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        expect(columns.map(c => c.order)).toEqual([0, 1, 2]);
        expect(cells.map(c => c.order)).toEqual([0, 1, 2]);
      });

      it(`can set column and cell orders from inputs`, function() {
        testComponent.column1Order = 1;
        testComponent.column2Order = 0;
        testComponent.column3Order = 2;
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

      it(`keeps existing position orders even after one or more columns get added in`, function() {
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

      it(`positions new column at user defined position without breaking the existing orders`, function() {
        testComponent.column1Order = 1;
        testComponent.column2Order = 0;
        testComponent.column3Order = 2;
        fixture.detectChanges();
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        toggleColumnWithMiddleDom();
        expect(columns.map(c => c.order)).toEqual([1, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 0]);
        toggleColumnWithMiddleDom();
        expect(columns[1].order).toBe(0);
        expect(columns.map(c => c.order)).toEqual([2, 0, 1]);
        expect(cells.map(c => c.order)).toEqual([2, 0, 1]);
      });
    });

    describe('View', function() {
      it(`adds corresponding classes of first and last visible column initially`, function() {
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        expect(columnEls[0].classList.contains('datagrid-first-visible-column')).toBeTruthy();
        expect(columnEls[0].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-last-visible-column')).toBeTruthy();
      });

      it(`adds corresponding classes of first and last visible column on reordering`, function() {
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(1, 2);
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        expect(columnEls[0].classList.contains('datagrid-first-visible-column')).toBeTruthy();
        expect(columnEls[0].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-last-visible-column')).toBeTruthy();
      });

      it(`adds corresponding classes of first and last visible column on removing column`, function() {
        fixture.detectChanges();
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        expect(columnEls[0].classList.contains('datagrid-first-visible-column')).toBeTruthy();
        expect(columnEls[0].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-last-visible-column')).toBeTruthy();
      });

      it(`adds corresponding classes of first and last visible column on adding column`, function() {
        toggleColumnWithMiddleDom();
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        expect(columnEls[0].classList.contains('datagrid-first-visible-column')).toBeTruthy();
        expect(columnEls[0].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-last-visible-column')).toBeTruthy();
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        expect(columnEls[0].classList.contains('datagrid-first-visible-column')).toBeTruthy();
        expect(columnEls[0].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-last-visible-column')).toBeTruthy();
      });

      it(`positions column and cell DOMs at user defined order`, function() {
        testComponent.column1Order = 1;
        testComponent.column2Order = 0;
        testComponent.column3Order = 2;
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['B', 'A', 'C']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['b', 'a', 'c']);
      });

      it(`positions column and cell DOMs correctly after reordering`, function() {
        fixture.detectChanges();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['A', 'B', 'C']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['a', 'b', 'c']);
        columnReorderService.requestReorder(0, 1);
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['B', 'A', 'C']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['b', 'a', 'c']);
        columnReorderService.requestReorder(2, 0);
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['C', 'B', 'A']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['c', 'b', 'a']);
      });

      it(`keeps DOM positions even after one or more columns get deleted`, function() {
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['C', 'B', 'A']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['c', 'b', 'a']);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['c', 'a']);
      });

      it(`keeps DOM positions even after even after one or more columns get added in`, function() {
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['c', 'a']);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['C', 'B', 'A']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['c', 'b', 'a']);
      });

      it(`positions new column DOM at its user defined position without breaking the existing DOM positions`, function() {
        // ["B", "A", "C"]
        testComponent.column1Order = 1;
        testComponent.column2Order = 0;
        testComponent.column3Order = 2;
        fixture.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['c', 'a']);
        toggleColumnWithMiddleDom();
        columnEls = Array.from(testElement.querySelectorAll('.datagrid-column'));
        cellEls = Array.from(testElement.querySelectorAll('.datagrid-cell'));
        expect(columnEls.map(cEl => cEl.textContent)).toEqual(['B', 'C', 'A']);
        expect(cellEls.map(cEl => cEl.textContent)).toEqual(['b', 'c', 'a']);
      });
    });
  });
}
