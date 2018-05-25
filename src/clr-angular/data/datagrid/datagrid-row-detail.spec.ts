/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Expand } from '../../utils/expand/providers/expand';

import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { ClrDatagridRowDetail } from './datagrid-row-detail';
import { TestContext } from './helpers.spec';
import { FiltersProvider } from './providers/filters';
import { HideableColumnService } from './providers/hideable-column.service';
import { Items } from './providers/items';
import { Page } from './providers/page';
import { RowActionService } from './providers/row-action-service';
import { Selection, SelectionType } from './providers/selection';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { DatagridRenderOrganizer } from './render/render-organizer';

export default function(): void {
  describe('ClrDatagridRowDetail component', function() {
    let context: TestContext<ClrDatagridRowDetail, FullTest>;

    beforeEach(function() {
      context = this.create(ClrDatagridRowDetail, FullTest, [
        Selection,
        Items,
        FiltersProvider,
        Sort,
        Page,
        RowActionService,
        Expand,
        DatagridRenderOrganizer,
        HideableColumnService,
        StateDebouncer,
      ]);
    });

    it('projects content', function() {
      expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
    });

    it('adds the .datagrid-row-flex class to the host', function() {
      expect(context.clarityElement.classList.contains('datagrid-row-flex')).toBe(true);
    });

    it('adds the .datagrid-row-detail class to the host if not replacing the row itself', function() {
      expect(context.clarityElement.classList.contains('datagrid-row-detail')).toBe(true);
      context.testComponent.replace = true;
      context.detectChanges();
      expect(context.clarityElement.classList.contains('datagrid-row-detail')).toBe(false);
    });

    it("adds the .datagrid-container class to the host if it doesn't contain cells", function() {
      expect(context.clarityElement.classList.contains('datagrid-container')).toBe(true);
      context.testComponent.cell = true;
      context.detectChanges();
      expect(context.clarityElement.classList.contains('datagrid-container')).toBe(false);
    });

    it('updates the Expand provider with the [clrDgReplace] input', function() {
      const expand: Expand = context.getClarityProvider(Expand);
      expect(expand.replace).toBe(false);
      context.testComponent.replace = true;
      context.detectChanges();
      expect(expand.replace).toBe(true);
    });

    it('displays an empty cell in place of the caret', function() {
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(1);
    });

    it('displays an extra empty cell when the datagrid is selectable', function() {
      const selection: Selection = context.getClarityProvider(Selection);
      selection.selectionType = SelectionType.Multi;
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(2);
      selection.selectionType = SelectionType.Single;
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(2);
    });

    it('displays an extra empty cell when the datagrid has an actionable row', function() {
      context.getClarityProvider(RowActionService).register();
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(2);
    });

    it('displays as many extra empty cells as needed', function() {
      const selection: Selection = context.getClarityProvider(Selection);
      selection.selectionType = SelectionType.Multi;
      context.getClarityProvider(RowActionService).register();
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(3);
    });

    it("doesn't display any empty cell when replacing", function() {
      context.testComponent.replace = true;
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(0);
      const selection: Selection = context.getClarityProvider(Selection);
      selection.selectionType = SelectionType.Multi;
      context.getClarityProvider(RowActionService).register();
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(0);
    });
  });

  describe('ClrDatagridRowDetail hide/show cell behavior', function() {
    let context: TestContext<ClrDatagridRowDetail, HiddenTest>;
    let hideableColumnService: HideableColumnService;

    beforeEach(function() {
      context = this.create(ClrDatagridRowDetail, HiddenTest, [
        Selection,
        Items,
        FiltersProvider,
        Sort,
        Page,
        RowActionService,
        Expand,
        DatagridRenderOrganizer,
        HideableColumnService,
        StateDebouncer,
      ]);
      hideableColumnService = context.getClarityProvider(HideableColumnService);
    });

    it('should update cells for columns', function() {
      spyOn(context.clarityDirective, 'updateCellsForColumns');

      const hiddenColumns: DatagridHideableColumnModel[] = [
        new DatagridHideableColumnModel(undefined, 'dg-col-0', false),
        new DatagridHideableColumnModel(undefined, 'dg-col-1', true),
      ];

      hideableColumnService.updateColumnList(hiddenColumns);
      expect(context.clarityDirective.updateCellsForColumns).toHaveBeenCalled();
    });
  });
}

@Component({
  template: `
        <clr-dg-row-detail [clrDgReplace]="replace">
            <ng-container *ngIf="!cell">Hello world</ng-container>
            <clr-dg-cell *ngIf="cell">This is a cell</clr-dg-cell>
        </clr-dg-row-detail>
    `,
})
class FullTest {
  public replace = false;
  public cell = false;
}

@Component({
  template: `
        <clr-dg-row-detail [clrDgReplace]="replace">
            <clr-dg-cell>This is a cell</clr-dg-cell>
            <clr-dg-cell>This is a cell</clr-dg-cell>
        </clr-dg-row-detail>
    `,
})
class HiddenTest {}
