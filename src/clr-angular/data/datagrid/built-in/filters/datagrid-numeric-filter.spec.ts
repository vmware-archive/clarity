/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TestContext } from '../../helpers.spec';
import { ClrDatagridNumericFilterInterface } from '../../interfaces/numeric-filter.interface';
import { CustomFilter } from '../../providers/custom-filter';
import { FiltersProvider } from '../../providers/filters';
import { Page } from '../../providers/page';
import { StateDebouncer } from '../../providers/state-debouncer.provider';
import { DomAdapter } from '../../../../utils/dom-adapter/dom-adapter';

import { DatagridNumericFilter } from './datagrid-numeric-filter';
import { DatagridNumericFilterImpl } from './datagrid-numeric-filter-impl';

const PROVIDERS = [FiltersProvider, DomAdapter, Page, StateDebouncer];

export default function(): void {
  describe('DatagridNumericFilter component', function() {
    // Until we can properly type "this"
    let context: TestContext<DatagridNumericFilter<number>, FullTest>;
    let filter: TestFilter;
    let filtersInstance: FiltersProvider<number>;

    function openFilter() {
      context.clarityElement.querySelector('.datagrid-filter-toggle').click();
      context.detectChanges();
    }

    beforeEach(function() {
      filter = new TestFilter();
      context = this.create(DatagridNumericFilter, FullTest, PROVIDERS);
      filtersInstance = TestBed.get(FiltersProvider);
    });

    afterEach(function() {
      const popoverContent = document.querySelectorAll('.clr-popover-content');
      popoverContent.forEach(content => document.body.removeChild(content));
      context.fixture.destroy();
    });

    it('receives an input for the filter value', function() {
      context.testComponent.filterValue = [null, 10];
      context.detectChanges();
      expect(context.clarityDirective.filter.value).toBe([null, 10]);
    });

    it('wires the RegisteredFilter correctly', function() {
      const test = new DatagridNumericFilterImpl(new TestFilter());
      context.testComponent.filter = filter;
      context.detectChanges();
      expect(context.clarityDirective.filter.filterFn).toEqual(test.filterFn);
    });

    it('receives an input for the filter logic', function() {
      context.testComponent.filter = filter;
      context.detectChanges();
      expect(context.clarityDirective.filter.filterFn).toBe(filter);
    });

    it('registers a filter', function() {
      context.clarityDirective.value = [null, 10];
      expect(filtersInstance.getActiveFilters().length).toBe(1);
      expect(filtersInstance.getActiveFilters()[0]).toBe(context.clarityDirective.filter);
    });

    it('registers itself as a CustomFilter provider', function() {
      expect(context.testComponent.customFilter).toBe(context.clarityDirective);
    });

    it('displays numeric inputs when open', function() {
      expect(context.clarityElement.querySelectorAll("input[type='number']")).toBeNull();
      openFilter();
      expect(context.clarityElement.querySelectorAll("input[type='number']")).not.toBeNull();
    });

    it(
      'focuses on the input when the filter opens',
      fakeAsync(function() {
        openFilter();
        const input = context.clarityElement.querySelector("input[type='number']");
        spyOn(input, 'focus');
        expect(input.focus).not.toHaveBeenCalled();
        tick();
        expect(input.focus).toHaveBeenCalled();
      })
    );

    it('offers two way binding on the filtered state', function() {
      context.testComponent.filterValue = [1, 10];
      context.detectChanges();
      expect(context.clarityDirective.value).toBe([1, 10]);
      context.clarityDirective.value = [null, 10];
      context.detectChanges();
      expect(context.testComponent.filterValue).toBe([null, 10]);
    });

    xit('closes when the user presses Enter in the input', function() {
      // TODO
      openFilter();
    });

    xit('closes when the user presses Escape in the input', function() {
      // TODO
      openFilter();
    });
  });
}

class TestFilter implements ClrDatagridNumericFilterInterface<number> {
  accepts(item: number, low: number, high: number) {
    return (
      // Make sure the limits are set and not null before checking them
      low === null || item >= low || (high === null || item <= high)
    );
  }
}

@Component({
  template: `<clr-dg-numeric-filter [clrDgNumericFilter]="filter"
                                     [(clrFilterValue)]="filterValue"></clr-dg-numeric-filter>`,
})
class FullTest {
  @ViewChild(CustomFilter, { static: false })
  customFilter: CustomFilter;

  filter: ClrDatagridNumericFilterInterface<number>;
  filterValue: [number, number];
}
