/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { TestContext } from '../helpers.spec';
import { HideableColumnService } from '../providers/hideable-column.service';

import { DatagridCellRenderer } from './cell-renderer';
import { DatagridRenderOrganizer } from './render-organizer';
import { MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer } from './render-organizer.mock';

export default function(): void {
  describe('DatagridCellRenderer directive', function() {
    let context: TestContext<DatagridCellRenderer, SimpleTest>;
    let organizer: MockDatagridRenderOrganizer;

    beforeEach(function() {
      context = this.create(DatagridCellRenderer, SimpleTest, [MOCK_ORGANIZER_PROVIDER, HideableColumnService]);
      organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
    });

    it('allows to set the width of the cell in pixels', function() {
      expect(context.clarityElement.style.width).toBeFalsy();
      context.clarityDirective.setWidth(false, 42);
      expect(context.clarityElement.style.width).toBe('42px');
    });

    it('makes the cell non-flexible if and only if the width is strict', function() {
      context.clarityDirective.setWidth(true, 42);
      expect(context.clarityElement.style.width).toBe('42px');
      expect(context.clarityElement.classList).toContain('datagrid-fixed-width');
      context.clarityDirective.setWidth(false, 42);
      expect(context.clarityElement.classList).not.toContain('datagrid-fixed-width');
    });

    it('resets the cell to default width when notified', function() {
      context.clarityDirective.setWidth(true, 42);
      expect(context.clarityElement.style.width).toBe('42px');
      expect(context.clarityElement.classList).toContain('datagrid-fixed-width');
      organizer.clearWidths.next();
      expect(context.clarityElement.style.width).toBeFalsy();
      expect(context.clarityElement.classList).not.toContain('datagrid-fixed-width');
    });
  });
}

@Component({ template: `<clr-dg-cell>Hello world</clr-dg-cell>` })
class SimpleTest {}
