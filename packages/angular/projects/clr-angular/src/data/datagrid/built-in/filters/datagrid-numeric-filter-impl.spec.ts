/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Observable } from 'rxjs';
import { ClrDatagridNumericFilterInterface } from '../../interfaces/numeric-filter.interface';
import { DatagridNumericFilterImpl } from './datagrid-numeric-filter-impl';
import { DatagridPropertyNumericFilter } from './datagrid-property-numeric-filter';
import { ClrDatagridFilterInterface } from '../../interfaces/filter.interface';

export default function (): void {
  describe('DatagridNumericFilterImpl', function () {
    let fullFilter: DatagridNumericFilterImpl<number>;

    beforeEach(function () {
      const numericFilter = new TestFilter();
      fullFilter = new DatagridNumericFilterImpl(numericFilter);
    });

    it('becomes active when either high or low limits are set', function () {
      expect(fullFilter.isActive()).toBe(false);
      fullFilter.high = 10;
      expect(fullFilter.isActive()).toBe(true);
      fullFilter.high = null;
      expect(fullFilter.isActive()).toBe(false);
      fullFilter.low = 1;
      expect(fullFilter.isActive()).toBe(true);
      fullFilter.low = null;
      expect(fullFilter.isActive()).toBe(false);
    });

    it('filters numbers that are above the high limit', function () {
      expect(fullFilter.accepts(11)).toBe(true);
      fullFilter.high = 10;
      expect(fullFilter.accepts(11)).toBe(false);
      expect(fullFilter.accepts(9)).toBe(true);
      fullFilter.high = null;
      expect(fullFilter.accepts(11)).toBe(true);
    });

    it('filters numbers that are below the low limit', function () {
      expect(fullFilter.accepts(0)).toBe(true);
      fullFilter.low = 1;
      expect(fullFilter.accepts(0)).toBe(false);
      expect(fullFilter.accepts(2)).toBe(true);
      fullFilter.low = null;
      expect(fullFilter.accepts(0)).toBe(true);
    });

    it('only allows values within the range when both filters are set', function () {
      fullFilter.low = 1;
      fullFilter.high = 10;
      expect(fullFilter.accepts(0)).toBe(false);
      expect(fullFilter.accepts(5)).toBe(true);
      expect(fullFilter.accepts(12)).toBe(false);
    });

    it('exposes state', function () {
      expect(fullFilter.state).toBe(fullFilter);
    });

    it('compares filters', function () {
      let otherFilter: ClrDatagridFilterInterface<any> = fullFilter;
      expect(fullFilter.equals(otherFilter)).toBe(true);
      // Reference only comparison should be enough for the common case
      otherFilter = new DatagridNumericFilterImpl(new TestFilter());
      expect(fullFilter.equals(otherFilter)).toBe(false);
    });

    describe('with DatagridPropertyNumericFilter', function () {
      beforeEach(function () {
        const propFilter = new DatagridPropertyNumericFilter('a.b.c');
        fullFilter = new DatagridNumericFilterImpl(propFilter);
      });

      it('exposes state', function () {
        fullFilter.high = 10;
        fullFilter.low = null;
        expect(fullFilter.state).toEqual({ property: 'a.b.c', high: 10, low: null });
      });

      it('compares filters', function () {
        let otherFilter: ClrDatagridFilterInterface<any> = fullFilter;
        expect(fullFilter.equals(otherFilter)).toBe(true);
        // In the specific case we can compare different filter instances
        otherFilter = new DatagridNumericFilterImpl(new DatagridPropertyNumericFilter('a.b.c'));
        expect(fullFilter.equals(otherFilter)).toBe(true);
        // Incompatible inner function type
        otherFilter = new DatagridNumericFilterImpl(new TestFilter());
        expect(fullFilter.equals(otherFilter)).toBe(false);
        // Incompatible filter object
        otherFilter = new IncompatibleFilter();
        expect(fullFilter.equals(otherFilter)).toBe(false);
      });
    });
  });
}

class TestFilter implements ClrDatagridNumericFilterInterface<number> {
  accepts(item: number, low: number, high: number) {
    if (low !== null && item < low) {
      return false;
    }

    if (high !== null && item > high) {
      return false;
    }
    return true;
  }
}

class IncompatibleFilter implements ClrDatagridFilterInterface<number> {
  accepts(_item: number): boolean {
    return true;
  }

  changes: Observable<any>;

  isActive(): boolean {
    return true;
  }
}
