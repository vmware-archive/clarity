/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Observable } from 'rxjs';
import { ClrDatagridStringFilterInterface } from '../../interfaces/string-filter.interface';
import { DatagridStringFilterImpl } from './datagrid-string-filter-impl';
import { DatagridPropertyStringFilter } from './datagrid-property-string-filter';
import { ClrDatagridFilterInterface } from '../../interfaces/filter.interface';

export default function (): void {
  describe('DatagridStringFilterImpl', function () {
    let fullFilter: DatagridStringFilterImpl<string>;

    beforeEach(function () {
      const stringFilter = new TestFilter();
      fullFilter = new DatagridStringFilterImpl(stringFilter);
    });

    it('updates the lowercase value when the raw value changes', function () {
      expect(fullFilter.value).toBe('');
      expect(fullFilter.lowerCaseValue).toBe('');
      fullFilter.value = 'TEST';
      expect(fullFilter.value).toBe('TEST');
      expect(fullFilter.lowerCaseValue).toBe('test');
    });

    it("becomes active when the value isn't empty", function () {
      expect(fullFilter.isActive()).toBe(false);
      fullFilter.value = 'test';
      expect(fullFilter.isActive()).toBe(true);
      fullFilter.value = '';
      expect(fullFilter.isActive()).toBe(false);
    });

    it('filters according to the StringFilter provided', function () {
      expect(fullFilter.accepts('test')).toBe(false);
      fullFilter.value = 'tes';
      expect(fullFilter.accepts('test')).toBe(false);
      fullFilter.value = 'test';
      expect(fullFilter.accepts('test')).toBe(true);
      fullFilter.value = 'tests';
      expect(fullFilter.accepts('test')).toBe(false);
    });

    it('ignores case when filtering', function () {
      fullFilter.value = 'TEST';
      expect(fullFilter.accepts('test')).toBe(true);
      fullFilter.value = 'test';
      expect(fullFilter.accepts('TEST')).toBe(true);
    });

    it('exposes state', function () {
      expect(fullFilter.state).toBe(fullFilter);
    });

    it('compares filters', function () {
      let otherFilter = fullFilter;
      expect(fullFilter.equals(otherFilter)).toBe(true);
      // Reference only comparison should be enough for the common case
      otherFilter = new DatagridStringFilterImpl(new TestFilter());
      expect(fullFilter.equals(otherFilter)).toBe(false);
    });

    describe('with DatagridPropertyStringFilter', function () {
      beforeEach(function () {
        const propFilter = new DatagridPropertyStringFilter('a.b.c');
        fullFilter = new DatagridStringFilterImpl(propFilter);
      });

      it('exposes state', function () {
        fullFilter.value = 'test';
        expect(fullFilter.state).toEqual({ property: 'a.b.c', value: 'test' });
      });

      it('compares filters', function () {
        let otherFilter: ClrDatagridFilterInterface<any> = fullFilter;
        expect(fullFilter.equals(otherFilter)).toBe(true);
        // In the specific case we can compare different filter instances
        otherFilter = new DatagridStringFilterImpl(new DatagridPropertyStringFilter('a.b.c'));
        expect(fullFilter.equals(otherFilter)).toBe(true);
        // Incompatible inner function type
        otherFilter = new DatagridStringFilterImpl(new TestFilter());
        expect(fullFilter.equals(otherFilter)).toBe(false);
        // Incompatible filter object
        otherFilter = new IncompatibleFilter();
        expect(fullFilter.equals(otherFilter)).toBe(false);
      });
    });
  });
}

class TestFilter implements ClrDatagridStringFilterInterface<string> {
  accepts(item: string, search: string) {
    return item.toLowerCase() === search;
  }
}

class IncompatibleFilter implements ClrDatagridFilterInterface<string> {
  accepts(_item: string): boolean {
    return true;
  }

  changes: Observable<any>;

  isActive(): boolean {
    return true;
  }
}
