/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Subject } from 'rxjs';

import { ClrDatagridFilterInterface } from '../interfaces/filter.interface';

import { FiltersProvider } from './filters';
import { Page } from './page';
import { StateDebouncer } from './state-debouncer.provider';

export default function(): void {
  describe('FiltersProvider provider', function() {
    beforeEach(function() {
      const stateDebouncer = new StateDebouncer();
      this.filtersInstance = new FiltersProvider(new Page(stateDebouncer), stateDebouncer);
      this.evenFilter = new EvenFilter();
      this.positiveFilter = new PositiveFilter();
      this.filtersInstance.add(this.evenFilter);
      this.filtersInstance.add(this.positiveFilter);
    });

    it('detects if it has active filters', function() {
      expect(this.filtersInstance.hasActiveFilters()).toBe(false);
      this.evenFilter.toggle();
      expect(this.filtersInstance.hasActiveFilters()).toBe(true);
      this.evenFilter.toggle();
      expect(this.filtersInstance.hasActiveFilters()).toBe(false);
    });

    it('can return a list of active filters', function() {
      expect(this.filtersInstance.getActiveFilters()).toEqual([]);
      this.evenFilter.toggle();
      expect(this.filtersInstance.getActiveFilters()).toEqual([this.evenFilter]);
      this.positiveFilter.toggle();
      expect(this.filtersInstance.getActiveFilters()).toEqual([this.evenFilter, this.positiveFilter]);
      this.evenFilter.toggle();
      expect(this.filtersInstance.getActiveFilters()).toEqual([this.positiveFilter]);
    });

    it('ignores inactive filters', function() {
      expect(this.filtersInstance.accepts(-1)).toBe(true);
      expect(this.filtersInstance.accepts(-2)).toBe(true);
      expect(this.filtersInstance.accepts(1)).toBe(true);
      expect(this.filtersInstance.accepts(2)).toBe(true);
    });

    it('uses all active filters', function() {
      this.positiveFilter.toggle();
      expect(this.filtersInstance.accepts(-1)).toBe(false);
      expect(this.filtersInstance.accepts(-2)).toBe(false);
      expect(this.filtersInstance.accepts(1)).toBe(true);
      expect(this.filtersInstance.accepts(2)).toBe(true);
      this.evenFilter.toggle();
      expect(this.filtersInstance.accepts(-1)).toBe(false);
      expect(this.filtersInstance.accepts(-2)).toBe(false);
      expect(this.filtersInstance.accepts(1)).toBe(false);
      expect(this.filtersInstance.accepts(2)).toBe(true);
    });

    it('exposes an Observable that proxies all filters changes', function() {
      let nbChanges = 0;
      let latestChanges: ClrDatagridFilterInterface<number>[];
      this.filtersInstance.change.subscribe((changes: ClrDatagridFilterInterface<number>[]) => {
        nbChanges++;
        latestChanges = changes;
      });
      expect(latestChanges).toBeUndefined();
      this.evenFilter.toggle();
      expect(latestChanges).toEqual([this.evenFilter]);
      this.positiveFilter.toggle();
      expect(latestChanges).toEqual([this.positiveFilter]);
      this.evenFilter.toggle();
      expect(latestChanges).toEqual([this.evenFilter]);
      expect(nbChanges).toBe(3);
    });

    it('un-registers an inactive filter', function() {
      const filter = new InactiveFilter();
      const registerInactiveFilter = this.filtersInstance.add(filter);
      let nbChanges = 0;
      this.filtersInstance.change.subscribe(() => nbChanges++);
      filter.toggle();
      expect(this.filtersInstance.getActiveFilters()).toEqual([]);
      expect(nbChanges).toBe(1);
      registerInactiveFilter.unregister();
      expect(this.filtersInstance.getActiveFilters()).toEqual([]);
      expect(nbChanges).toBe(1);
      filter.toggle();
      expect(nbChanges).toBe(1);
    });

    it('un-registers an active filter', function() {
      const filter = new EvenFilter();
      const registeredFilter = this.filtersInstance.add(filter);
      let nbChanges = 0;
      this.filtersInstance.change.subscribe(() => nbChanges++);
      filter.toggle();
      expect(this.filtersInstance.getActiveFilters()).toEqual([filter]);
      expect(nbChanges).toBe(1);
      registeredFilter.unregister();
      expect(this.filtersInstance.getActiveFilters()).toEqual([]);
      expect(nbChanges).toBe(2);
      filter.toggle();
      expect(nbChanges).toBe(2);
    });

    it('correctly updates hasUnregistered property', function() {
      const filter = new ActiveFilter();
      const filter2 = new ActiveFilter();
      const filter3 = new ActiveFilter();
      let nbChanges = 0;
      this.filtersInstance.change.subscribe(() => nbChanges++);

      this.filtersInstance.add(filter);
      const registeredFilterTest = this.filtersInstance.add(filter2);
      this.filtersInstance.add(filter3);
      expect(nbChanges).toBe(3);

      registeredFilterTest.unregister();
      registeredFilterTest.unregister();
      expect(nbChanges).toBe(4);

      const filters = this.filtersInstance.getActiveFilters();
      expect(filters.length).toBe(2);
    });
  });
}

abstract class TestFilter implements ClrDatagridFilterInterface<number> {
  private active = false;

  toggle() {
    this.active = !this.active;
    this.changes.next(this.active);
  }

  isActive(): boolean {
    return this.active;
  }

  changes = new Subject<boolean>();

  abstract accepts(n: number): boolean;
}

class EvenFilter extends TestFilter {
  accepts(n: number): boolean {
    return n % 2 === 0;
  }
}

class PositiveFilter extends TestFilter {
  accepts(n: number): boolean {
    return n > 0;
  }
}

class InactiveFilter extends TestFilter {
  isActive(): boolean {
    return false;
  }

  accepts(n: number): boolean {
    return n > 0;
  }
}

class ActiveFilter extends TestFilter {
  isActive(): boolean {
    return true;
  }

  accepts(n: number): boolean {
    return n > 0;
  }
}
