/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Renderer2 } from '@angular/core';

import { DatagridRenderStep } from '../enums/render-step.enum';
import { TestContext } from '../helpers.spec';
import { FiltersProvider } from '../providers/filters';
import { Page } from '../providers/page';
import { Sort } from '../providers/sort';
import { StateDebouncer } from '../providers/state-debouncer.provider';
import { TableSizeService } from '../providers/table-size.service';

import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { MOCK_DOM_ADAPTER_PROVIDER, MockDomAdapter } from '../../../utils/dom-adapter/dom-adapter.mock';
import { DatagridHeaderRenderer } from './header-renderer';
import { DatagridRenderOrganizer } from './render-organizer';
import { MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer } from './render-organizer.mock';

export default function(): void {
  describe('DatagridHeaderRenderer directive', function() {
    let context: TestContext<DatagridHeaderRenderer, SimpleTest>;
    let domAdapter: MockDomAdapter;
    let organizer: MockDatagridRenderOrganizer;

    beforeEach(function() {
      context = this.create(DatagridHeaderRenderer, SimpleTest, [
        MOCK_ORGANIZER_PROVIDER,
        MOCK_DOM_ADAPTER_PROVIDER,
        Sort,
        FiltersProvider,
        Page,
        StateDebouncer,
        TableSizeService,
        Renderer2,
      ]);
      domAdapter = <MockDomAdapter>context.getClarityProvider(DomAdapter);
      organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
    });

    it('computes the width of a column based on its scrollWidth', function() {
      domAdapter._scrollWidth = 123;
      expect(context.clarityDirective.computeWidth()).toBe(123);
    });

    it('can set the width of a column', function() {
      context.clarityDirective.setWidth(123);
      expect(context.clarityElement.style.width).toBe('123px');
    });

    it('resets the column to default width when notified', function() {
      context.clarityDirective.setWidth(123);
      expect(context.clarityElement.style.width).toBe('123px');
      organizer.updateRenderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
      expect(context.clarityElement.style.width).toBeFalsy();
    });

    it('uses the width declared by the user if there is one', function() {
      domAdapter._userDefinedWidth = 123;
      organizer.updateRenderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
      expect(context.clarityDirective.strictWidth).toBe(123);
      domAdapter._userDefinedWidth = 0;
      organizer.updateRenderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
      expect(context.clarityDirective.strictWidth).toBeFalsy();
    });

    it('does not remove the width defined by the user', function() {
      context.clarityElement.style.width = '123px';
      domAdapter._userDefinedWidth = 123;
      organizer.updateRenderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
      organizer.updateRenderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
      expect(context.clarityElement.style.width).toBe('123px');
      // One extra cycle to be sure, because clearing widths before computing them
      // might have a special case handling
      context.clarityDirective.computeWidth();
      organizer.updateRenderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
      expect(context.clarityElement.style.width).toBe('123px');
    });

    it('does not set the width when the user declared a strict one', function() {
      domAdapter._scrollWidth = 123;
      context.clarityDirective.strictWidth = 24;
      expect(context.clarityDirective.computeWidth()).toBe(24);
      context.clarityDirective.setWidth(24);
      expect(context.clarityElement.style.width).toBeFalsy();
      expect(context.clarityElement.classList).toContain('datagrid-fixed-width');
      delete context.clarityDirective.strictWidth;
      expect(context.clarityDirective.computeWidth()).toBe(123);
      context.clarityDirective.setWidth(123);
      expect(context.clarityElement.style.width).toBe('123px');
      expect(context.clarityElement.classList).not.toContain('datagrid-fixed-width');
    });
  });
}

@Component({ template: `<clr-dg-column>Hello world</clr-dg-column>` })
class SimpleTest {}
