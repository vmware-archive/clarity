/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Option} from "./../option";
import {RootSelectService} from "./select.service";
describe(("Select Service"), function() {
    let selectService: RootSelectService;

    beforeEach(() => {
        selectService = new RootSelectService();
    });

    afterEach(() => {
        selectService = null;
    });

    it("supports selection of currently focused option", () => {
        const option = new Option(this, null);
        option.clrValue = "test";
        selectService.highlighted = option;

        selectService.selectCurrentFocused();

        expect(selectService.selected).toBe(option);
    });

    it("supports focus next functionality", () => {
        const option1 = new Option(this, null);
        option1.clrValue = "test";
        const option2 = new Option(this, null);
        option2.clrValue = "test2";
        const option3 = new Option(this, null);
        option3.clrValue = "test3";
        selectService.options = [option1, option2, option3];

        selectService.focusNext();

        expect(selectService.highlighted).toBe(option1);

        selectService.focusNext();

        expect(selectService.highlighted).toBe(option2);
    });
    it("supports focus previous functionality", () => {
        const option1 = new Option(this, null);
        option1.clrValue = "test";
        const option2 = new Option(this, null);
        option2.clrValue = "test2";
        const option3 = new Option(this, null);
        option3.clrValue = "test3";
        selectService.options = [option1, option2, option3];

        selectService.focusNext();
        selectService.focusNext();
        expect(selectService.highlighted).toBe(option2);
        selectService.focusPrevious();
        expect(selectService.highlighted).toBe(option1);
    });

    it("if none highlighted focusPrevious shouldn't do anything", () => {
        selectService.focusPrevious();
        expect(selectService).toBeTruthy();
    });
});