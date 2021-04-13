/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { TestContext } from './helpers.spec';
import { ColumnsService } from './providers/columns.service';
import { MOCK_COLUMN_SERVICE_PROVIDER, MockColumnsService } from './providers/columns.service.mock';
import { ColumnState } from './interfaces/column-state.interface';
import { BehaviorSubject } from 'rxjs';

export default function (): void {
  describe('Datagrid Column Toggle Button component', function () {
    let context: TestContext<ClrDatagridColumnToggleButton, ButtonTest>;
    let columnsService: MockColumnsService;
    let toggleButton: ClrDatagridColumnToggleButton;

    const hideableColumns = function (): BehaviorSubject<ColumnState>[] {
      return columnsService.columns.filter(column => column.value.titleTemplateRef);
    };

    beforeEach(function () {
      context = this.create(ClrDatagridColumnToggleButton, ButtonTest, [MOCK_COLUMN_SERVICE_PROVIDER]);
      columnsService = context.getClarityProvider(ColumnsService) as MockColumnsService;
      toggleButton = context.clarityDirective;
      columnsService.mockColumns(3);
    });
    describe('Typescript API', function () {
      it('checks hideable columns are all hidden', function () {
        columnsService.mockPartialHideable(0, 1);
        expect(toggleButton.allHideablesVisible).toBeTruthy();
        columnsService.mockHideableAt(1, true);
        expect(toggleButton.allHideablesVisible).toBeFalsy();
        columnsService.mockHideableAt(1, false);
        expect(toggleButton.allHideablesVisible).toBeTruthy();
      });

      it('makes all hideable columns visible when selectAll is clicked', function () {
        columnsService.mockPartialHideable(0, 1, true);
        expect(hideableColumns()).toEqual([columnsService.columns[0], columnsService.columns[1]]);
        expect(toggleButton.allHideablesVisible).toBeFalsy();
        toggleButton.selectAll();
        expect(hideableColumns()).toEqual([columnsService.columns[0], columnsService.columns[1]]);
        expect(toggleButton.allHideablesVisible).toBeTruthy();
      });
    });
    describe('View', function () {
      it('makes button disabled when all hideable columns are visible', function () {
        columnsService.mockPartialHideable(0, 1);
        expect(toggleButton.allHideablesVisible).toBeTruthy();
        expect(context.clarityElement.querySelector('button.btn-link').disabled).toBeTruthy();
      });
    });
  });
}

@Component({
  template: ` <clr-dg-column-toggle-button>Testing 1 2 3</clr-dg-column-toggle-button>`,
})
class ButtonTest {}
