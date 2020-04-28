/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DatagridPropertyComparator } from './datagrid-property-comparator';

export default function(): void {
  describe('DatagridPropertyComparator', function() {
    it('compares strings', function() {
      this.comparator = new DatagridPropertyComparator('a');
      expect(this.comparator.compare({ a: 'aaa' }, { a: 'abc' })).toBeLessThan(0);
      expect(this.comparator.compare({ a: 'aaa' }, { a: 'aaa' })).toBe(0);
      expect(this.comparator.compare({ a: 'bbb' }, { a: 'abc' })).toBeGreaterThan(0);
      expect(this.comparator.compare({ a: 'AAA' }, { a: 'aaa' })).toBe(0);
      expect(this.comparator.compare({ a: 'aBc' }, { a: 'abc' })).toBe(0);
    });

    it('compares integers', function() {
      this.comparator = new DatagridPropertyComparator('a');
      expect(this.comparator.compare({ a: 1 }, { a: 10 })).toBeLessThan(0);
      expect(this.comparator.compare({ a: 4 }, { a: 4 })).toBe(0);
      expect(this.comparator.compare({ a: 42 }, { a: 3 })).toBeGreaterThan(0);
    });

    it('considers undefined greater than everything', function() {
      this.comparator = new DatagridPropertyComparator('a');
      expect(this.comparator.compare({ a: 42 }, {})).toBeLessThan(0);
      expect(this.comparator.compare({}, { a: 42 })).toBeGreaterThan(0);
      expect(this.comparator.compare({}, {})).toBe(0);
    });

    it('considers null greater than everything', function() {
      this.comparator = new DatagridPropertyComparator('a');
      expect(this.comparator.compare({ a: 42 }, { a: null })).toBeLessThan(0);
      expect(this.comparator.compare({ a: null }, { a: 42 })).toBeGreaterThan(0);
      expect(this.comparator.compare({ a: null }, { a: null })).toBe(0);
      expect(this.comparator.compare({ a: null }, { a: 'aaa' })).toBeGreaterThan(0);
      expect(this.comparator.compare({ a: null }, { a: 'AAA' })).toBeGreaterThan(0);
    });

    it('supports nested properties', function() {
      this.comparator = new DatagridPropertyComparator('a.b');
      expect(this.comparator.compare({ a: { b: 1 } }, { a: { b: 10 } })).toBeLessThan(0);
      expect(this.comparator.compare({ a: { b: 4 } }, { a: { b: 4 } })).toBe(0);
      expect(this.comparator.compare({ a: { b: 42 } }, { a: { b: 3 } })).toBeGreaterThan(0);
    });
  });
}
