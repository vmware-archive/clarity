/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Page } from './page';
import { StateDebouncer } from './state-debouncer.provider';

export default function(): void {
  describe('Page provider', function() {
    beforeEach(function() {
      this.pageInstance = new Page(new StateDebouncer());
    });

    it('has page size 0 by default', function() {
      expect(this.pageInstance.size).toBe(0);
    });

    it('starts at page 1', function() {
      expect(this.pageInstance.current).toBe(1);
    });

    it('computes the last page', function() {
      this.pageInstance.size = 10;
      this.pageInstance.totalItems = 42;
      expect(this.pageInstance.last).toBe(5);
    });

    it('computes the indexes of the first and last displayed items', function() {
      this.pageInstance.size = 10;
      this.pageInstance.totalItems = 42;
      this.pageInstance.current = 3;
      expect(this.pageInstance.firstItem).toBe(20);
      expect(this.pageInstance.lastItem).toBe(29);
    });

    it("doesn't paginate when size is 0", function() {
      this.pageInstance.next();
      expect(this.pageInstance.current).toBe(1);
    });

    it('moves to the new last page when the number of items becomes too small', function() {
      this.pageInstance.size = 10;
      this.pageInstance.totalItems = 42;
      this.pageInstance.current = 4;
      expect(this.pageInstance.current).toBe(4);
      this.pageInstance.totalItems = 20;
      expect(this.pageInstance.current).toBe(2);
    });

    it('updates the current page when page size changes', function() {
      this.pageInstance.size = 20;
      this.pageInstance.totalItems = 42;
      this.pageInstance.current = 2;
      expect(this.pageInstance.current).toBe(2);
      this.pageInstance.size = 10;
      expect(this.pageInstance.current).toBe(3);
      this.pageInstance.size = 0;
      expect(this.pageInstance.current).toBe(1);
    });

    it("correctly uses the last item's index if the last page is not full", function() {
      this.pageInstance.size = 10;
      this.pageInstance.totalItems = 42;
      this.pageInstance.current = 5;
      expect(this.pageInstance.lastItem).toBe(41);
    });

    it('offers a method to safely move to the next page', function() {
      this.pageInstance.size = 10;
      this.pageInstance.totalItems = 15;
      expect(this.pageInstance.current).toBe(1);
      this.pageInstance.next();
      expect(this.pageInstance.current).toBe(2);
      this.pageInstance.next();
      expect(this.pageInstance.current).toBe(2);
    });

    it('offers a method to safely move to the previous page', function() {
      this.pageInstance.size = 10;
      this.pageInstance.totalItems = 15;
      this.pageInstance.current = 2;
      expect(this.pageInstance.current).toBe(2);
      this.pageInstance.previous();
      expect(this.pageInstance.current).toBe(1);
      this.pageInstance.previous();
      expect(this.pageInstance.current).toBe(1);
    });

    it('exposes an Observable to follow page changes', function() {
      let nbChanges = 0;
      let currentPage: number;
      this.pageInstance.change.subscribe((page: number) => {
        nbChanges++;
        currentPage = page;
      });
      expect(currentPage).toBeUndefined();
      this.pageInstance.current = 2;
      expect(currentPage).toBe(2);
      this.pageInstance.current = 5;
      expect(currentPage).toBe(5);
      this.pageInstance.current = 1;
      expect(currentPage).toBe(1);
      expect(nbChanges).toBe(3);
    });
  });
}
