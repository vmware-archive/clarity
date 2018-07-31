/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrDatagridStringFilterInterface } from '../../interfaces/string-filter.interface';

import { DatagridStringFilterImpl } from './datagrid-string-filter-impl';

export default function(): void {
  describe('DatagridStringFilterImpl', function() {
    let fullFilter: DatagridStringFilterImpl<string>;

    beforeEach(function() {
      const stringFilter = new TestFilter();
      fullFilter = new DatagridStringFilterImpl(stringFilter);
    });

    it('updates the lowercase value when the raw value changes', function() {
      expect(fullFilter.value).toBe('');
      expect(fullFilter.lowerCaseValue).toBe('');
      fullFilter.value = 'TEST';
      expect(fullFilter.value).toBe('TEST');
      expect(fullFilter.lowerCaseValue).toBe('test');
    });

    it("becomes active when the value isn't empty", function() {
      expect(fullFilter.isActive()).toBe(false);
      fullFilter.value = 'test';
      expect(fullFilter.isActive()).toBe(true);
      fullFilter.value = '';
      expect(fullFilter.isActive()).toBe(false);
    });

    it('filters according to the StringFilter provided', function() {
      expect(fullFilter.accepts('test')).toBe(false);
      fullFilter.value = 'tes';
      expect(fullFilter.accepts('test')).toBe(false);
      fullFilter.value = 'test';
      expect(fullFilter.accepts('test')).toBe(true);
      fullFilter.value = 'tests';
      expect(fullFilter.accepts('test')).toBe(false);
    });

    it('ignores case when filtering', function() {
      fullFilter.value = 'TEST';
      expect(fullFilter.accepts('test')).toBe(true);
      fullFilter.value = 'test';
      expect(fullFilter.accepts('TEST')).toBe(true);
    });
  });
}

class TestFilter implements ClrDatagridStringFilterInterface<string> {
  accepts(item: string, search: string) {
    return item.toLowerCase() === search;
  }
}
