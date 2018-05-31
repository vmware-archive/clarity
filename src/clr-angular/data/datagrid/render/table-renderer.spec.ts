/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { TestContext } from '../helpers.spec';

import { MOCK_DOM_ADAPTER_PROVIDER } from './dom-adapter.mock';
import { DatagridRenderOrganizer } from './render-organizer';
import { MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer } from './render-organizer.mock';
import { DatagridTableRenderer } from './table-renderer';

export default function(): void {
  describe('DatagridTableRenderer component', function() {
    let context: TestContext<DatagridTableRenderer, SimpleTest>;
    let organizer: MockDatagridRenderOrganizer;

    beforeEach(function() {
      context = this.create(DatagridTableRenderer, SimpleTest, [MOCK_ORGANIZER_PROVIDER, MOCK_DOM_ADAPTER_PROVIDER]);
      organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
    });

    it('toggles in and out of no layout mode when notified', function() {
      expect(context.clarityElement.classList).not.toContain('datagrid-no-layout');
      organizer.noLayout.next(true);
      expect(context.clarityElement.classList).toContain('datagrid-no-layout');
      organizer.noLayout.next(false);
      expect(context.clarityElement.classList).not.toContain('datagrid-no-layout');
    });

    it('toggles in and out of table mode when notified', function() {
      expect(context.clarityElement.classList).not.toContain('datagrid-computing-columns-width');
      organizer.tableMode.next(true);
      expect(context.clarityElement.classList).toContain('datagrid-computing-columns-width');
      organizer.tableMode.next(false);
      expect(context.clarityElement.classList).not.toContain('datagrid-computing-columns-width');
    });

    it('moves the header in and out of the body when notified', function() {
      const body = context.clarityElement.querySelector('.datagrid-body');
      expect(context.clarityElement.textContent).toMatch('Hello');
      expect(body.textContent).not.toMatch('Hello');
      expect(body.textContent).toMatch('World');
      organizer.tableMode.next(true);
      expect(body.textContent).toMatch('Hello');
      expect(body.textContent).toMatch('World');
      organizer.tableMode.next(false);
      expect(context.clarityElement.textContent).toMatch('Hello');
      expect(body.textContent).not.toMatch('Hello');
      expect(body.textContent).toMatch('World');
    });
  });
}

@Component({
  template: `
        <clr-dg-table-wrapper>
            <div ngProjectAs="[clrDgHead]">Hello</div>
            World
        </clr-dg-table-wrapper>
    `,
})
class SimpleTest {}
