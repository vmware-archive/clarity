/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IfActiveService } from './if-active.service';

export default function(): void {
  describe('IfActiveService provider', function() {
    let ifActiveService: IfActiveService;

    beforeEach(function() {
      ifActiveService = new IfActiveService();
    });

    describe('Typescript API', function() {
      it('provides an observable for changes', function() {
        let nbChanges: number = 0;
        let currentChange: number;

        // Subscribe first
        ifActiveService.currentChange.subscribe((change: number) => {
          nbChanges++;
          currentChange = change;
        });

        // Initial state expectations
        expect(ifActiveService).toBeDefined();
        expect(nbChanges).toEqual(0);
        expect(currentChange).not.toBeDefined();

        // First change
        ifActiveService.current = 10;
        expect(nbChanges).toEqual(1);
        expect(currentChange).toEqual(10);

        // Second change
        ifActiveService.current = 11;
        expect(nbChanges).toEqual(2);
        expect(currentChange).toEqual(11);
      });

      it('sets the current active value in the service', function() {
        expect(ifActiveService.current).not.toBeDefined();
        ifActiveService.current = 5;
        expect(ifActiveService.current).toEqual(5);
      });

      it('gets the current active value of the service', function() {
        const init = 1;
        let test: any;
        ifActiveService.current = init;
        expect(test).toBeUndefined();
        test = ifActiveService.current;
        expect(test).toEqual(init);
      });
    });
  });
}
