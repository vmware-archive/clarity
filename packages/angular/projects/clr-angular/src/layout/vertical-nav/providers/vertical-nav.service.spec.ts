/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Subscription } from 'rxjs';

import { VerticalNavService } from './vertical-nav.service';

export default function(): void {
  describe('Vertical Nav Service', function() {
    let vertNavService: VerticalNavService;

    beforeEach(() => {
      vertNavService = new VerticalNavService();
    });

    afterEach(() => {
      vertNavService = null;
    });

    it('exposes an observable to animate when the collapsed property of the vertical nav changes', () => {
      expect(vertNavService.animateOnCollapsed).not.toBeNull();
    });

    it('does not set collapsed when collapsible is false', () => {
      expect(vertNavService.collapsible).toBe(false);

      let testVal: boolean;
      const sub: Subscription = vertNavService.animateOnCollapsed.subscribe((val: boolean) => {
        testVal = val;
      });

      vertNavService.collapsed = true;

      expect(vertNavService.collapsed).toBe(false);
      expect(testVal).toBeUndefined();

      sub.unsubscribe();
    });

    it('emits an animate flag when the observable property is changed && nav is collapsible', () => {
      vertNavService.collapsible = true;

      let testVal: boolean;
      const sub: Subscription = vertNavService.animateOnCollapsed.subscribe((val: boolean) => {
        testVal = val;
      });

      expect(vertNavService.animateOnCollapsed).toBeDefined();
      vertNavService.collapsed = true;

      expect(testVal).not.toBeUndefined();
      expect(testVal).toBe(true);

      expect(vertNavService.animateOnCollapsed).toBeDefined();
      vertNavService.collapsed = false;

      expect(testVal).not.toBeUndefined();
      expect(testVal).toBe(false);

      sub.unsubscribe();
    });

    it('expands a collapsed nav when collapsible behavior is turned off', () => {
      expect(vertNavService.collapsible).toBe(false);

      let testVal: boolean;
      const sub: Subscription = vertNavService.animateOnCollapsed.subscribe((val: boolean) => {
        testVal = val;
      });

      vertNavService.collapsible = true;
      vertNavService.collapsed = true;

      expect(testVal).toBeTruthy();

      vertNavService.collapsible = false;

      expect(testVal).toBeFalsy();

      sub.unsubscribe();
    });
  });
}
