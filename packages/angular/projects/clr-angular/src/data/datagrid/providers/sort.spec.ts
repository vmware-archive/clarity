/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrDatagridComparatorInterface } from '../interfaces/comparator.interface';

import { Sort } from './sort';
import { StateDebouncer } from './state-debouncer.provider';

export default function(): void {
  describe('Sort provider', function() {
    beforeEach(function() {
      this.sortInstance = new Sort(new StateDebouncer());
      this.comparator = new TestComparator();
    });

    it('compares according to the current comparator', function() {
      this.sortInstance.comparator = this.comparator;
      expect(this.sortInstance.compare(1, 10)).toBeLessThan(0);
      expect(this.sortInstance.compare(4, 4)).toBe(0);
      expect(this.sortInstance.compare(42, 3)).toBeGreaterThan(0);
    });

    it('can reverse the order of the current comparator', function() {
      this.sortInstance.comparator = this.comparator;
      this.sortInstance.reverse = true;
      expect(this.sortInstance.compare(1, 10)).toBeGreaterThan(0);
      expect(this.sortInstance.compare(4, 4)).toBe(0);
      expect(this.sortInstance.compare(42, 3)).toBeLessThan(0);
    });

    it('exposes a toggle method to set the comparator', function() {
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.comparator).toBe(this.comparator);
      this.sortInstance.toggle(this.comparator, true);
      expect(this.sortInstance.comparator).toBe(this.comparator);
    });

    it('reverses the order when toggle is called on the same comparator', function() {
      // Ascending
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.reverse).toBe(false);
      // Descending
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.reverse).toBe(true);
      // Ascending again
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.reverse).toBe(false);
    });

    it('always uses descending order if forceReverse is set', function() {
      // Force descending
      this.sortInstance.toggle(this.comparator, true);
      expect(this.sortInstance.reverse).toBe(true);
      // No forcing, so should toggle from previous state
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.reverse).toBe(false);
      // Toggling to descending
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.reverse).toBe(true);
      // Force descending again
      this.sortInstance.toggle(this.comparator, true);
      expect(this.sortInstance.reverse).toBe(true);
    });

    it('always uses ascending order when toggling a new comparator ', function() {
      this.sortInstance.comparator = this.comparator;
      expect(this.sortInstance.reverse).toBe(false);
      this.sortInstance.toggle(new TestComparator());
      expect(this.sortInstance.reverse).toBe(false);
      this.sortInstance.toggle(this.comparator);
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.reverse).toBe(true);
      this.sortInstance.toggle(new TestComparator());
      expect(this.sortInstance.reverse).toBe(false);
    });

    it('always uses descending order if forceReverse is set even when toggling a new comparator ', function() {
      this.sortInstance.comparator = this.comparator;
      expect(this.sortInstance.reverse).toBe(false);
      this.sortInstance.toggle(new TestComparator(), true);
      expect(this.sortInstance.reverse).toBe(true);
      this.sortInstance.toggle(this.comparator);
      this.sortInstance.toggle(this.comparator);
      expect(this.sortInstance.reverse).toBe(true);
      this.sortInstance.toggle(new TestComparator());
      expect(this.sortInstance.reverse).toBe(false);
    });

    it('exposes an Observable to follow sort changes', function() {
      let nbChanges = 0;
      let latestComparator: ClrDatagridComparatorInterface<number>;
      let latestReverse: boolean;
      this.sortInstance.change.subscribe((sort: Sort<number>) => {
        nbChanges++;
        latestComparator = sort.comparator;
        latestReverse = sort.reverse;
      });
      this.sortInstance.toggle(this.comparator);
      expect(latestComparator).toBe(this.comparator);
      expect(latestReverse).toBe(false);
      this.sortInstance.reverse = true;
      expect(latestComparator).toBe(this.comparator);
      expect(latestReverse).toBe(true);
      this.sortInstance.toggle(this.comparator);
      expect(latestComparator).toBe(this.comparator);
      expect(latestReverse).toBe(false);
      const secondComparator = new TestComparator();
      this.sortInstance.toggle(secondComparator);
      expect(latestComparator).toBe(secondComparator);
      expect(latestReverse).toBe(false);
      expect(nbChanges).toBe(4);
    });
  });
}

class TestComparator implements ClrDatagridComparatorInterface<number> {
  compare(a: number, b: number): number {
    return a - b;
  }
}
