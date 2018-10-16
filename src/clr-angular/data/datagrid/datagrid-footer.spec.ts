/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagridFooter } from './datagrid-footer';
import { TestContext } from './helpers.spec';
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
import { FiltersProvider } from './providers/filters';
import { HideableColumnService } from './providers/hideable-column.service';
import { Items } from './providers/items';
import { Page } from './providers/page';
import { Selection, SelectionType } from './providers/selection';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { TableSizeService } from './providers/table-size.service';

const PROVIDERS_NEEDED = [
  Selection,
  Items,
  FiltersProvider,
  Sort,
  Page,
  HideableColumnService,
  StateDebouncer,
  ColumnToggleButtonsService,
  TableSizeService,
];

export default function(): void {
  describe('ClrDatagridFooter component', function() {
    describe('View', function() {
      let context: TestContext<ClrDatagridFooter<number>, SimpleTest>;

      beforeEach(function() {
        context = this.create(ClrDatagridFooter, SimpleTest, PROVIDERS_NEEDED);
      });

      it('projects content', function() {
        expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
      });

      it('adds the .datagrid-cell class to the host', function() {
        expect(context.clarityElement.classList.contains('datagrid-footer')).toBeTruthy();
      });

      it('does not show the selection details when selection type is None', function() {
        const clarityDirectiveSelection = context.clarityDirective.selection;
        clarityDirectiveSelection.selectionType = SelectionType.None;

        context.detectChanges();

        expect(context.clarityElement.querySelector('.datagrid-footer-select')).toBeNull();
      });

      it('does not show the selection details when selection type is single', function() {
        const clarityDirectiveSelection = context.clarityDirective.selection;
        clarityDirectiveSelection.selectionType = SelectionType.Single;
        clarityDirectiveSelection.current.push(1);

        context.detectChanges();

        expect(context.clarityElement.querySelector('.datagrid-footer-select')).toBeNull();
      });

      it('shows the selection details when more than one item is selected', function() {
        const clarityDirectiveSelection = context.clarityDirective.selection;
        clarityDirectiveSelection.selectionType = SelectionType.Multi;
        clarityDirectiveSelection.current.push(1);

        context.clarityDirective.cdr.markForCheck();
        context.detectChanges();

        expect(context.clarityElement.querySelector('.datagrid-footer-select')).not.toBeNull();
        expect(context.clarityElement.querySelector('.datagrid-footer-select').textContent).toMatch('1');

        clarityDirectiveSelection.current.push(1);
        context.clarityDirective.cdr.markForCheck();
        context.detectChanges();

        expect(context.clarityElement.querySelector('.datagrid-footer-select')).not.toBeNull();
        expect(context.clarityElement.querySelector('.datagrid-footer-select').textContent).toMatch('2');

        clarityDirectiveSelection.current = [];

        context.clarityDirective.cdr.markForCheck();
        context.detectChanges();

        expect(context.clarityElement.querySelector('.datagrid-footer-select')).toBeNull();
      });
    });

    describe('View with Custom Toggle Buttons', function() {
      let context: TestContext<ClrDatagridFooter<void>, ColumnTogglerTest>;

      beforeEach(function() {
        context = this.create(ClrDatagridFooter, ColumnTogglerTest, PROVIDERS_NEEDED);
      });

      it('projects custom column toggler', function() {
        context.clarityElement.querySelector('.column-toggle--action').click();
        context.detectChanges();
        expect(context.clarityElement.querySelector('clr-dg-column-toggle-title').innerText).toMatch('Custom Title');
        expect(context.clarityElement.querySelector('.switch-footer clr-dg-column-toggle-button').innerText).toMatch(
          'OK!!!'
        );
      });
    });
  });
}

@Component({ template: `<clr-dg-footer>Hello world</clr-dg-footer>` })
class SimpleTest {}

@Component({
  template: `        
    <clr-dg-footer>
        <clr-dg-column-toggle>
            <clr-dg-column-toggle-title>Custom Title</clr-dg-column-toggle-title>
            <clr-dg-column-toggle-button type="ok">OK!!!</clr-dg-column-toggle-button>
            <clr-dg-column-toggle-button type="selectAll">Select All!!!</clr-dg-column-toggle-button>
        </clr-dg-column-toggle>
        Hello world
    </clr-dg-footer>`,
})
class ColumnTogglerTest {}
