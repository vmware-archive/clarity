/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { TestContext } from '../helpers.spec';

import { DatagridBodyRenderer } from './body-renderer';
import { DomAdapter } from './dom-adapter';
import { MOCK_DOM_ADAPTER_PROVIDER, MockDomAdapter } from './dom-adapter.mock';
import { DatagridRenderOrganizer } from './render-organizer';

export default function(): void {
  describe('DatagridBodyRenderer directive', function() {
    let context: TestContext<DatagridBodyRenderer, SimpleTest>;

    beforeEach(function() {
      context = this.create(DatagridBodyRenderer, SimpleTest, [DatagridRenderOrganizer, MOCK_DOM_ADAPTER_PROVIDER]);
    });

    it('emits its scrollbar width when notified of a change', function() {
      const mockDomAdapter = <MockDomAdapter>context.getClarityProvider(DomAdapter);
      const organizer: DatagridRenderOrganizer = context.getClarityProvider(DatagridRenderOrganizer);
      let scrollbarWidth: number;
      organizer.scrollbarWidth.subscribe(width => (scrollbarWidth = width));
      expect(scrollbarWidth).toBeUndefined();
      organizer.scrollbar.next();
      expect(scrollbarWidth).toBe(0);
      mockDomAdapter._scrollBarWidth = 42;
      organizer.scrollbar.next();
      expect(scrollbarWidth).toBe(42);
    });
  });
}

@Component({ template: `<div clrDgBody>Hello world</div>` })
class SimpleTest {}
