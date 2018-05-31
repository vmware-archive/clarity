/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DatagridPropertyStringFilter } from './datagrid-property-string-filter';

export default function(): void {
  describe('DatagridPropertyStringFilter', function() {
    it('checks if a string contains the search text', function() {
      this.filter = new DatagridPropertyStringFilter('a');
      expect(this.filter.accepts({ a: 'abc' }, '')).toBe(true);
      expect(this.filter.accepts({ a: 'abc' }, 'a')).toBe(true);
      expect(this.filter.accepts({ a: 'abc' }, 'b')).toBe(true);
      expect(this.filter.accepts({ a: 'abc' }, 'c')).toBe(true);
      expect(this.filter.accepts({ a: 'abc' }, 'ab')).toBe(true);
      expect(this.filter.accepts({ a: 'abc' }, 'bc')).toBe(true);
      expect(this.filter.accepts({ a: 'abc' }, 'abc')).toBe(true);
      expect(this.filter.accepts({ a: 'abc' }, 'x')).toBe(false);
      expect(this.filter.accepts({ a: 'abc' }, 'ac')).toBe(false);
      expect(this.filter.accepts({ a: 'abc' }, 'cba')).toBe(false);
    });

    it('is case insensitive', function() {
      this.filter = new DatagridPropertyStringFilter('a');
      expect(this.filter.accepts({ a: 'ABC' }, 'a')).toBe(true);
    });

    it('works on integers', function() {
      this.filter = new DatagridPropertyStringFilter('a');
      expect(this.filter.accepts({ a: 123 }, '23')).toBe(true);
      expect(this.filter.accepts({ a: 123 }, '13')).toBe(false);
    });

    it('always rejects undefined', function() {
      this.filter = new DatagridPropertyStringFilter('a');
      expect(this.filter.accepts({}, 'a')).toBe(false);
    });

    it('supports nested properties', function() {
      this.filter = new DatagridPropertyStringFilter('a.b');
      expect(this.filter.accepts({ a: { b: 'abc' } }, 'a')).toBe(true);
    });
  });
}
