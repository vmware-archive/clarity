/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

import { ClrDatagridFilter } from './datagrid-filter';
import { TestContext } from './helpers.spec';
import { ClrDatagridFilterInterface } from './interfaces/filter.interface';
import { CustomFilter } from './providers/custom-filter';
import { FiltersProvider } from './providers/filters';
import { Page } from './providers/page';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { ClrSmartPopoverToggleService } from '../../utils/smart-popover/providers/smart-popover-toggle.service';
import { ClrSmartPopoverPositionService } from '../../utils/smart-popover/providers/smart-popover-position.service';
import { ClrSmartPopoverEventsService } from '../../utils/smart-popover/providers/smart-popover-events.service';

class MockRenderer {
  listen() {}
}

export default function(): void {
  describe('ClrDatagridFilter component', function() {
    describe('Typescript API', function() {
      let filterService: FiltersProvider<number>;
      let filter: TestFilter;
      let component: ClrDatagridFilter<number>;
      let toggleService: ClrSmartPopoverToggleService;

      beforeEach(function() {
        const stateDebouncer = new StateDebouncer();
        filterService = new FiltersProvider(new Page(stateDebouncer), stateDebouncer);
        toggleService = new ClrSmartPopoverToggleService();
        filter = new TestFilter();
        component = new ClrDatagridFilter(filterService, {}, toggleService, '');
      });

      afterEach(function() {
        component.ngOnDestroy();
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
      let toggleService: ClrSmartPopoverToggleService;

      beforeEach(function() {
        filter = new TestFilter();
        context = this.create(ClrDatagridFilter, FullTest, [
          FiltersProvider,
          Page,
          StateDebouncer,
          ClrSmartPopoverEventsService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverToggleService,
          Renderer2,
        ]);
        toggleService = context.getClarityProvider(ClrSmartPopoverToggleService);
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
        expect(toggleService.open).toBe(true);
        context.clarityDirective.open = false;
        context.detectChanges();
        expect(toggleService.open).toBe(false);
      });

      it('registers itself as a CustomFilter provider', function() {
        expect(context.testComponent.customFilter).toBe(context.clarityDirective);
      });
    });

    describe('View', function() {
      let context: TestContext<ClrDatagridFilter<number>, FullTest>;
      let filter: TestFilter;

      beforeEach(function() {
        filter = new TestFilter();
        context = this.create(ClrDatagridFilter, FullTest, [
          FiltersProvider,
          Page,
          StateDebouncer,
          ClrSmartPopoverEventsService,
          ClrSmartPopoverPositionService,
          ClrSmartPopoverToggleService,
          {
            provide: Renderer2,
            useClass: MockRenderer,
          },
        ]);
        context.testComponent.filter = filter;
      });

      it('projects content into the dropdown', function() {
        const openBtn: HTMLButtonElement = context.clarityElement.querySelector('.clr-smart-open-close');
        const prePopoverContent = document.querySelector('.clr-popover-content');
        expect(prePopoverContent).toBeNull();
        openBtn.click();
        context.detectChanges();
        const popoverContent = document.querySelector('.clr-popover-content');
        expect(popoverContent.textContent.trim()).toMatch('Hello world');
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

@Component({ template: `<clr-dg-filter [clrDgFilter]="filter" [clrDgFilterOpen]="open">Hello world</clr-dg-filter>` })
class FullTest {
  @ViewChild(CustomFilter) customFilter: CustomFilter;

  filter: ClrDatagridFilterInterface<number>;
  open: boolean = false;
}
