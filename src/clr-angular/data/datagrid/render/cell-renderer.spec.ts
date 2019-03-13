/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { DatagridRenderStep } from '../enums/render-step.enum';
import { TestContext } from '../helpers.spec';
import { HideableColumnService } from '../providers/hideable-column.service';

import { DatagridCellRenderer } from './cell-renderer';
import { STRICT_WIDTH_CLASS } from './constants';
import { DatagridRenderOrganizer } from './render-organizer';
import { MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer } from './render-organizer.mock';
import { BehaviorSubject } from 'rxjs';
import { DatagridColumnState } from '../interfaces/column-state.interface';
import { DatagridColumnChanges } from '../enums/column-changes.enum';

@Component({ template: `<clr-dg-cell>Hello world</clr-dg-cell>` })
class SimpleTest {}

export default function(): void {
  describe('DatagridCellRenderer directive', function() {
    let context: TestContext<DatagridCellRenderer, SimpleTest>;
    let organizer: MockDatagridRenderOrganizer;
    let stateSub: BehaviorSubject<DatagridColumnState>;

    beforeEach(function() {
      context = this.create(DatagridCellRenderer, SimpleTest, [MOCK_ORGANIZER_PROVIDER, HideableColumnService]);
      organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
      stateSub = new BehaviorSubject<DatagridColumnState>({});
      context.clarityDirective.columnState = stateSub;
    });

    it('sets proper width and class for strict width cells', function() {
      stateSub.next({ changes: [DatagridColumnChanges.WIDTH], width: 42, strictWidth: 42 });
      expect(context.clarityElement.style.width).toBe('42px');
      expect(context.clarityElement.classList).toContain(STRICT_WIDTH_CLASS);
    });

    it('makes the cell non-flexible if and only if the width is strict', function() {
      stateSub.next({ changes: [DatagridColumnChanges.WIDTH], width: 42, strictWidth: 42 });
      expect(context.clarityElement.style.width).toBe('42px');
      expect(context.clarityElement.classList).toContain(STRICT_WIDTH_CLASS);
      stateSub.next({ changes: [DatagridColumnChanges.WIDTH], width: 42, strictWidth: 0 });
      expect(context.clarityElement.classList).not.toContain(STRICT_WIDTH_CLASS);
    });

    it('resets the cell to default width when notified', function() {
      stateSub.next({ changes: [DatagridColumnChanges.WIDTH], width: 42, strictWidth: 42 });
      expect(context.clarityElement.style.width).toBe('42px');
      expect(context.clarityElement.classList).toContain(STRICT_WIDTH_CLASS);
      organizer.updateRenderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
      expect(context.clarityElement.style.width).toBeFalsy();
      expect(context.clarityElement.classList).not.toContain(STRICT_WIDTH_CLASS);
    });
  });
}
