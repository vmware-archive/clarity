/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { ClrDatagridFilter } from './datagrid-filter';
import { TestContext } from './helpers.spec';
import { ClrDatagridFilterInterface } from './interfaces/filter.interface';
import { CustomFilter } from './providers/custom-filter';
import { FiltersProvider } from './providers/filters';
import { Page } from './providers/page';
import { StateDebouncer } from './providers/state-debouncer.provider';

export default function(): void {
  describe('ClrDatagridFilter component', function() {
    describe('Typescript API', function() {
      let filterService: FiltersProvider<number>;
      let filter: TestFilter;
      let component: ClrDatagridFilter<number>;

      beforeEach(function() {
        const stateDebouncer = new StateDebouncer();
        filterService = new FiltersProvider(new Page(stateDebouncer), stateDebouncer);
        filter = new TestFilter();
        component = new ClrDatagridFilter(filterService, {});
      });

      afterEach(function() {
        component.ngOnDestroy();
      });

      it('can open and close the dropdown toggle', function() {
        expect(component.open).toBe(false);
        component.toggle();
        expect(component.open).toBe(true);
      });

      it('registers to the FiltersProvider provider', function() {
        expect(filterService.getActiveFilters()).toEqual([]);
        component.customFilter = filter;
        expect(filterService.getActiveFilters()).toEqual([filter]);
      });

      it('unregisters when destroyed', function() {
        component.customFilter = filter;
        expect(filterService.getActiveFilters()).toEqual([filter]);
        component.ngOnDestroy();
        expect(filterService.getActiveFilters()).toEqual([]);
      });

      it('detects if the filter is active', function() {
        expect(component.active).toEqual(false);
        component.customFilter = filter;
        expect(component.active).toEqual(true);
        filter.active = false;
        expect(component.active).toEqual(false);
      });
    });

    describe('Template API', function() {
      // Until we can properly type "this"
      let context: TestContext<ClrDatagridFilter<number>, FullTest>;
      let filter: TestFilter;

      beforeEach(function() {
        filter = new TestFilter();
        context = this.create(ClrDatagridFilter, FullTest, [FiltersProvider, Page, StateDebouncer]);
      });

      it('receives an input for the filter logic', function() {
        context.testComponent.filter = filter;
        context.detectChanges();
        expect(context.clarityDirective.filter).toBe(filter);
      });

      it('offers two-way binding on he open state of the filter dropdown', function() {
        context.testComponent.filter = filter;
        context.testComponent.open = true;
        context.detectChanges();
        expect(context.clarityDirective.open).toBe(true);
        context.clarityDirective.open = false;
        context.detectChanges();
        expect(context.testComponent.open).toBe(false);
      });

      it('registers itself as a CustomFilter provider', function() {
        expect(context.testComponent.customFilter).toBe(context.clarityDirective);
      });
    });

    describe('View', function() {
      let context: TestContext<ClrDatagridFilter<number>, FullTest>;

      beforeEach(function() {
        context = this.create(ClrDatagridFilter, FullTest, [FiltersProvider, Page, StateDebouncer]);
      });

      it('projects content into the dropdown', function() {
        expect(context.clarityElement.textContent.trim()).toBe('');
        context.clarityDirective.open = true;
        context.detectChanges();
        expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
      });

      it('opens and closes the dropdown when the toggle is clicked', function() {
        const toggle = context.clarityElement.querySelector('.datagrid-filter-toggle');
        expect(context.clarityDirective.open).toBe(false);
        toggle.click();
        context.detectChanges();
        expect(context.clarityDirective.open).toBe(true);
        toggle.click();
        context.detectChanges();
        expect(context.clarityDirective.open).toBe(false);
      });
    });
  });
}

class TestFilter implements ClrDatagridFilterInterface<number> {
  public active = true;

  isActive(): boolean {
    return this.active;
  }

  accepts(n: number): boolean {
    return true;
  }

  changes = new Subject<boolean>();
}

@Component({ template: `<clr-dg-filter [clrDgFilter]="filter" [(clrDgFilterOpen)]="open">Hello world</clr-dg-filter>` })
class FullTest {
  @ViewChild(CustomFilter) customFilter: CustomFilter;

  filter: ClrDatagridFilterInterface<number>;
  open: boolean;
}
