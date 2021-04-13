/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { DatagridColumnChanges } from '../enums/column-changes.enum';
import { DatagridDisplayMode } from '../enums/display-mode.enum';
import { DATAGRID_SPEC_PROVIDERS, TestContext } from '../helpers.spec';
import { ColumnState } from '../interfaces/column-state.interface';
import { ColumnsService } from '../providers/columns.service';
import { MockDisplayModeService } from '../providers/display-mode.mock';
import { DisplayModeService } from '../providers/display-mode.service';
import { DatagridCellRenderer } from './cell-renderer';
import { STRICT_WIDTH_CLASS } from './constants';
import { DatagridRowRenderer } from './row-renderer';

export default function (): void {
  let columnsService: ColumnsService;

  describe('DatagridRowRenderer directive', function () {
    let context: TestContext<DatagridRowRenderer, SimpleTest>;
    let cells: DebugElement[];
    let columnStateSpy: jasmine.Spy;
    let displayModeService: MockDisplayModeService;

    beforeEach(function () {
      context = this.create(DatagridRowRenderer, SimpleTest, DATAGRID_SPEC_PROVIDERS);
      columnsService = context.getClarityProvider(ColumnsService);
      displayModeService = context.getClarityProvider(DisplayModeService) as MockDisplayModeService;

      // Need to manually trigger default display mode processes
      // In actual datagrid, these processes triggered from root Datagrid component
      displayModeService.updateView(DatagridDisplayMode.CALCULATE);
      displayModeService.updateView(DatagridDisplayMode.DISPLAY);

      columnsService.columns[0] = new BehaviorSubject<ColumnState>({ width: 41 });
      columnsService.columns[1] = new BehaviorSubject<ColumnState>({ width: 23 });

      columnStateSpy = spyOnProperty(DatagridCellRenderer.prototype, 'columnState', 'set').and.callThrough();
      context.clarityDirective.setColumnState();
      context.detectChanges();
    });

    afterEach(function () {
      context.fixture.destroy();
    });

    it('sets the columnState', function () {
      cells = context.fixture.debugElement.queryAll(By.directive(DatagridCellRenderer));
      expect(cells.length).toEqual(2);
      expect(columnStateSpy.calls.count()).toEqual(2);
      expect(cells[0].nativeElement.style.width).toEqual('41px');
      expect(cells[1].nativeElement.style.width).toEqual('23px');
    });

    it('sets the widths of the cells when created after the widths have been computed', function () {
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
