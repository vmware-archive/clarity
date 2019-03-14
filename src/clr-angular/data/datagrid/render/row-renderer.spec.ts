/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement } from '@angular/core';
import { DATAGRID_SPEC_PROVIDERS, TestContext } from '../helpers.spec';
import { DatagridRowRenderer } from './row-renderer';
import { ColumnsService } from '../providers/columns.service';
import { DatagridColumnState } from '../interfaces/column-state.interface';
import { By } from '@angular/platform-browser';
import { DatagridCellRenderer } from './cell-renderer';
import { BehaviorSubject } from 'rxjs';
import { DatagridColumnChanges } from '../enums/column-changes.enum';
import { STRICT_WIDTH_CLASS } from './constants';

export default function(): void {
  let columnsService: ColumnsService;

  function initService(cols = 2) {
    for (let i = 0; i < cols; i++) {
      columnsService.columns[i] = new BehaviorSubject<DatagridColumnState>({ width: i });
    }
  }

  describe('DatagridRowRenderer directive', function() {
    let context: TestContext<DatagridRowRenderer, SimpleTest>;
    let cells: DebugElement[];
    let columnStateSpy: jasmine.Spy;

    beforeEach(function() {
      context = this.create(DatagridRowRenderer, SimpleTest, DATAGRID_SPEC_PROVIDERS);
      columnsService = context.getClarityProvider(ColumnsService);
      initService();
      columnStateSpy = spyOnProperty(DatagridCellRenderer.prototype, 'columnState', 'set').and.callThrough();
      context.clarityDirective.setupColumns();
    });

    it('sets the columnState', function() {
      cells = context.fixture.debugElement.queryAll(By.directive(DatagridCellRenderer));
      expect(cells.length).toEqual(2);
      expect(columnStateSpy.calls.count()).toEqual(2);
    });

    it('sets the widths of the cells when created after the widths have been computed', function() {
      columnsService.columns[0].next({ width: 42, strictWidth: 0, changes: [DatagridColumnChanges.WIDTH] });
      columnsService.columns[1].next({ width: 24, strictWidth: 24, changes: [DatagridColumnChanges.WIDTH] });
      context.detectChanges();
      cells = context.fixture.debugElement.queryAll(By.directive(DatagridCellRenderer));
      expect(cells.length).toBe(2);
      expect(cells[0].nativeElement.style.width).toEqual('42px');
      expect(cells[0].nativeElement.classList.contains(STRICT_WIDTH_CLASS)).toBeFalse();
      expect(cells[1].nativeElement.style.width).toEqual('24px');
      expect(cells[1].nativeElement.classList.contains(STRICT_WIDTH_CLASS)).toBeTrue();
    });

    it('sets the widths of cells after they have been reattached to the view', function() {
      context.testComponent.showCell = false;
      columnsService.columns[0].next({ width: 42, strictWidth: 0, changes: [DatagridColumnChanges.WIDTH] });
      columnsService.columns[1].next({ width: 24, strictWidth: 24, changes: [DatagridColumnChanges.WIDTH] });
      context.detectChanges();
      context.testComponent.showCell = true;
      context.detectChanges();
      cells = context.fixture.debugElement.queryAll(By.directive(DatagridCellRenderer));
      expect(context.testElement.querySelectorAll('clr-dg-cell')[0].style.width).toBe('42px');
      expect(context.testElement.querySelectorAll('clr-dg-cell')[0].classList.contains(STRICT_WIDTH_CLASS)).toBe(false);
      expect(context.testElement.querySelectorAll('clr-dg-cell')[1].style.width).toBe('24px');
      expect(context.testElement.querySelectorAll('clr-dg-cell')[1].classList.contains(STRICT_WIDTH_CLASS)).toBe(true);
    });
  });
}

@Component({
  template: `
        <clr-dg-row>
            <clr-dg-cell>Hello</clr-dg-cell>
            <clr-dg-cell *ngIf="showCell">World</clr-dg-cell>
        </clr-dg-row>
    `,
})
class SimpleTest {
  showCell = true;
}
