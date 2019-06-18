/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, ViewChildren } from '@angular/core';
import { DATAGRID_SPEC_PROVIDERS } from './helpers.spec';
import { ClrDatagrid } from './datagrid';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridCell } from '@clr/angular';
import { ColumnReorderService } from './providers/column-reorder.service';

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column [clrDgColumnOrder]="column1Order">1st header</clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column2Order" *ngIf="!hideMiddle">2nd header</clr-dg-column>
      <clr-dg-column [clrDgColumnOrder]="column3Order">3rd header</clr-dg-column>

      <clr-dg-row *ngFor="let item of items">
        <clr-dg-cell>1st cell</clr-dg-cell>
        <clr-dg-cell *ngIf="!hideMiddle">2nd cell</clr-dg-cell>
        <clr-dg-cell>3rd cell</clr-dg-cell>
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
    describe('Template API', function() {
      let testComponent: BasicReorderColumnTest;
      let columnReorderService: ColumnReorderService;
      let columns: ClrDatagridColumn[];
      let cells: ClrDatagridCell[];

      let toggleColumnWithMiddleDom: () => void;

      beforeEach(function() {
        this.context = this.create(ClrDatagrid, BasicReorderColumnTest, DATAGRID_SPEC_PROVIDERS);
        testComponent = this.context.testComponent;
        columnReorderService = this.context.getClarityProvider(ColumnReorderService);
        columns = testComponent.columns.toArray();
        cells = testComponent.cells.toArray();
        toggleColumnWithMiddleDom = function() {
          testComponent.hideMiddle = !testComponent.hideMiddle;
          this.context.detectChanges();
          columns = testComponent.columns.toArray();
          cells = testComponent.cells.toArray();
        }.bind(this);
      });

      it(`sets column and cell orders from their dom positions in row`, function() {
        expect(columns.map(c => c.order)).toEqual([0, 1, 2]);
        expect(cells.map(c => c.order)).toEqual([0, 1, 2]);
      });

      it(`can set column and cell orders from inputs`, function() {
        testComponent.column1Order = 1;
        testComponent.column2Order = 0;
        testComponent.column3Order = 2;
        this.context.detectChanges();
        expect(columns.map(c => c.order)).toEqual([1, 0, 2]);
        expect(cells.map(c => c.order)).toEqual([1, 0, 2]);
      });

      it(`updates orders correctly after reordering`, function() {
        expect(columns.map(c => c.order)).toEqual([0, 1, 2]);
        expect(cells.map(c => c.order)).toEqual([0, 1, 2]);
        columnReorderService.requestReorder(0, 1);
        expect(columns.map(c => c.order)).toEqual([1, 0, 2]);
        expect(cells.map(c => c.order)).toEqual([1, 0, 2]);
        columnReorderService.requestReorder(2, 0);
        expect(columns.map(c => c.order)).toEqual([2, 1, 0]);
        expect(cells.map(c => c.order)).toEqual([2, 1, 0]);
      });

      it(`remaining orders keep their updated order if one or more columns get deleted`, function() {
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        expect(columns.map(c => c.order)).toEqual([2, 1, 0]);
        expect(cells.map(c => c.order)).toEqual([2, 1, 0]);
        toggleColumnWithMiddleDom();
        expect(columns.map(c => c.order)).toEqual([1, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 0]);
      });

      it(`remaining orders keep their updated order if one or more columns get deleted`, function() {
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

      it(`adds in new column at its original DOM position without breaking the existing orders`, function() {
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0);
        toggleColumnWithMiddleDom();
        expect(columns.map(c => c.order)).toEqual([1, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 0]);
        toggleColumnWithMiddleDom();
        expect(columns[1].order).toBe(1);
        expect(columns.map(c => c.order)).toEqual([2, 1, 0]);
        expect(cells.map(c => c.order)).toEqual([2, 1, 0]);
      });

      it(`adds in new column at its user defined position without breaking the existing orders`, function() {
        testComponent.column1Order = 1;
        testComponent.column2Order = 0;
        testComponent.column3Order = 2;
        this.context.detectChanges();
        columnReorderService.requestReorder(0, 1);
        columnReorderService.requestReorder(2, 0); // [1, 2, 0]
        toggleColumnWithMiddleDom();
        expect(columns.map(c => c.order)).toEqual([1, 0]);
        expect(cells.map(c => c.order)).toEqual([1, 0]);
        toggleColumnWithMiddleDom();
        expect(columns[1].order).toBe(0);
        expect(columns.map(c => c.order)).toEqual([2, 0, 1]);
        expect(cells.map(c => c.order)).toEqual([2, 0, 1]);
      });
    });
  });
}
