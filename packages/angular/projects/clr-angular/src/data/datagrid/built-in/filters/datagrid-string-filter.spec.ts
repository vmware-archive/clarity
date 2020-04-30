/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, Renderer2 } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TestContext } from '../../helpers.spec';
import { ClrDatagridStringFilterInterface } from '../../interfaces/string-filter.interface';
import { CustomFilter } from '../../providers/custom-filter';
import { FiltersProvider } from '../../providers/filters';
import { Page } from '../../providers/page';
import { StateDebouncer } from '../../providers/state-debouncer.provider';
import { DomAdapter } from '../../../../utils/dom-adapter/dom-adapter';

import { DatagridStringFilter } from './datagrid-string-filter';
import { DatagridStringFilterImpl } from './datagrid-string-filter-impl';
import { ClrPopoverToggleService } from '../../../../utils/popover/providers/popover-toggle.service';
import { ClrPopoverPositionService } from '../../../../utils/popover/providers/popover-position.service';
import { ClrPopoverEventsService } from '../../../../utils/popover/providers/popover-events.service';

class MockRenderer {
  listen() {
    // Do nothing
  }
}

const PROVIDERS = [
  FiltersProvider,
  DomAdapter,
  Page,
  StateDebouncer,
  ClrPopoverEventsService,
  ClrPopoverPositionService,
  ClrPopoverToggleService,
  {
    provide: Renderer2,
    useClass: MockRenderer,
  },
];

export default function (): void {
  describe('DatagridStringFilter component', function () {
    let context: TestContext<DatagridStringFilter<string>, FullTest>;
    let filter: TestFilter;
    let filtersInstance: FiltersProvider<string>;

    function openFilter() {
      context.clarityElement.querySelector('.datagrid-filter-toggle').click();
      context.detectChanges();
    }

    beforeEach(function () {
      filter = new TestFilter();
      context = this.create(DatagridStringFilter, FullTest, PROVIDERS);
      filtersInstance = TestBed.get(FiltersProvider);
    });

    afterEach(function () {
      const popoverContent = document.querySelectorAll('.clr-popover-content');
      popoverContent.forEach(content => document.body.removeChild(content));
      context.fixture.destroy();
    });

    it('receives an input for the filter value', function () {
      context.testComponent.filterValue = 'M';
      context.detectChanges();
      expect(context.clarityDirective.filter.value).toBe('M');
    });

    it('wires the RegisteredFilter correctly', function () {
      const test = new DatagridStringFilterImpl(new TestFilter());
      context.testComponent.filter = filter;
      context.detectChanges();
      expect(context.clarityDirective.filter.filterFn).toEqual(test.filterFn);
    });

    it('receives an input for the filter logic', function () {
      context.testComponent.filter = filter;
      context.detectChanges();
      expect(context.clarityDirective.filter.filterFn).toBe(filter);
    });

    it('registers a filter', function () {
      context.clarityDirective.value = 'test';
      expect(filtersInstance.getActiveFilters().length).toBe(1);
      expect(filtersInstance.getActiveFilters()[0]).toBe(context.clarityDirective.filter);
    });

    it('registers itself as a CustomFilter provider', function () {
      expect(context.testComponent.customFilter).toBe(context.clarityDirective);
    });

    it('displays a text input when open', function () {
      expect(document.querySelector("input[type='text']")).toBeNull();
      openFilter();
      expect(document.querySelector("input[type='text']")).not.toBeNull();
    });

    it('focuses on the input when the filter opens', fakeAsync(function () {
      openFilter();
      const input: HTMLInputElement = document.querySelector("input[type='text']");
      spyOn(input, 'focus');
      expect(input.focus).not.toHaveBeenCalled();
      tick();
      expect(input.focus).toHaveBeenCalled();
    }));

    it('offers two way binding on the filtered state', function () {
      context.testComponent.filterValue = 'M';
      context.detectChanges();
      expect(context.clarityDirective.value).toBe('M');
      context.clarityDirective.value = 't';
      context.detectChanges();
      expect(context.testComponent.filterValue).toBe('t');
    });

    xit('closes when the user presses Enter in the input', function () {
      // TODO
      openFilter();
    });

    xit('closes when the user presses Escape in the input', function () {
      // TODO
      openFilter();
    });
  });
}

class TestFilter implements ClrDatagridStringFilterInterface<string> {
  accepts(item: string, search: string) {
    return item.toLowerCase() === search;
  }
}

@Component({
  template: `<clr-dg-string-filter
    [clrDgStringFilter]="filter"
    [(clrFilterValue)]="filterValue"
  ></clr-dg-string-filter>`,
})
class FullTest {
  @ViewChild(CustomFilter) customFilter: CustomFilter;

  filter: ClrDatagridStringFilterInterface<string>;
  filterValue: string;
}
