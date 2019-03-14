/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Expand } from '../../utils/expand/providers/expand';

import { ClrDatagridRowDetail } from './datagrid-row-detail';
import { DATAGRID_SPEC_PROVIDERS, TestContext } from './helpers.spec';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { RowActionService } from './providers/row-action-service';
import { Selection } from './providers/selection';
import { SelectionType } from './enums/selection-type';

export default function(): void {
  describe('ClrDatagridRowDetail component', function() {
    let context: TestContext<ClrDatagridRowDetail<void>, FullTest>;

    beforeEach(function() {
      context = this.create(ClrDatagridRowDetail, FullTest, DATAGRID_SPEC_PROVIDERS);
    });

    it('projects content', function() {
      expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
    });

    it('adds the .datagrid-row-flex class to the host', function() {
      expect(context.clarityElement.classList.contains('datagrid-row-flex')).toBe(true);
    });

    it('adds the .datagrid-row-detail class to the host', function() {
      expect(context.clarityElement.classList.contains('datagrid-row-detail')).toBe(true);
    });

    it("adds the .datagrid-container class to the host if it doesn't contain cells", function() {
      expect(context.clarityElement.classList.contains('datagrid-container')).toBe(true);
      context.testComponent.cell = true;
      context.detectChanges();
      expect(context.clarityElement.classList.contains('datagrid-container')).toBe(false);
    });

    it('updates the Expand provider with the [clrDgReplace] input', function() {
      const expand: Expand = context.getClarityProvider(Expand);
      let expandState = false;
      expand.replace.subscribe(state => {
        expandState = state;
      });
      expect(expandState).toBe(false);
      context.testComponent.replace = true;
      context.detectChanges();
      expect(expandState).toBe(true);
    });

    it('displays an empty cell in place of the caret', function() {
      context.getClarityProvider(ExpandableRowsCount).register();
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(1);
    });

    it('displays an extra empty cell when the datagrid is selectable', function() {
      const selection: Selection = context.getClarityProvider(Selection);
      selection.selectionType = SelectionType.Multi;
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(1);
      selection.selectionType = SelectionType.Single;
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(1);
    });

    it('displays an extra empty cell when the datagrid has an actionable row when replaced', function() {
      context.getClarityProvider(RowActionService).register();
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(1);
    });

    it('displays as many extra empty cells as needed', function() {
      const selection: Selection = context.getClarityProvider(Selection);
      selection.selectionType = SelectionType.Multi;
      context.getClarityProvider(RowActionService).register();
      context.detectChanges();
      expect(context.clarityElement.querySelectorAll('.datagrid-fixed-column').length).toBe(2);
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
