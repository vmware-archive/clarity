/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";

import {TestContext} from "../../data/datagrid/helpers.spec";

import {ClrSelect} from "./select";

@Component({
    template: `
        <clr-select>
            <clr-options class="test">
                Test
            </clr-options>
        </clr-select>
    `
})
class TestSelectWithMenu {
}

export default function(): void {
    describe("Select with Menu", () => {
        let context: TestContext<ClrSelect<string>, TestSelectWithMenu>;

        beforeEach(function() {
            context = this.create(ClrSelect, TestSelectWithMenu, []);
        });

        it("renders the menu projected by the consumer", () => {
            const menus = context.clarityElement.querySelectorAll("clr-options");
            expect(menus.length).toBe(1);
            expect(menus[0].classList.contains("test")).toBe(true);
        });
    });
}
