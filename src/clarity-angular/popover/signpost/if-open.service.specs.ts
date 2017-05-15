// /*
//  * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
//  * This software is released under MIT license.
//  * The full license information can be found in LICENSE in the root directory of this project.
//  */

import {IfOpenService} from "./if-open.service";

export default function(): void {
    describe("IfOpenService provider", function () {

        let ifOpenService: IfOpenService;

        beforeEach(function() {
            ifOpenService = new IfOpenService();
        });

        describe("Typescript API", function () {
            it("provides an observable for changes", function() {
                let nbChanges: number = 0;
                let currentChange: boolean;

                // Subscribe first
                ifOpenService.openedChange.subscribe(change => {
                    nbChanges++;
                    currentChange = change;
                });

                // Initial state expectations
                expect(ifOpenService).toBeDefined();
                expect(nbChanges).toEqual(0);
                expect(currentChange).not.toBeDefined();

                // First change
                ifOpenService.open = true;
                expect(nbChanges).toEqual(1);
                expect(currentChange).toEqual(true);

                // Second change
                ifOpenService.open = false;
                expect(nbChanges).toEqual(2);
                expect(currentChange).toEqual(false);
            });

            it("sets the current open value in the service", function() {
                expect(ifOpenService.open).not.toBeDefined();
                let test: boolean = false;
                ifOpenService.open = test;
                expect(ifOpenService.open).toEqual(test);
            });

            it("gets the current open value of the service", function() {
                let init: boolean = false;
                let test: boolean;
                ifOpenService.open = init;
                expect(test).toBeUndefined();
                test = ifOpenService.open;
                expect(test).toEqual(init);
            });
        });
    });
}
