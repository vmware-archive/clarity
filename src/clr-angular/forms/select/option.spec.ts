/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef} from "@angular/core";

import {TestContext} from "../../data/datagrid/helpers.spec";
import {POPOVER_HOST_ANCHOR} from "../../popover/common/popover-host-anchor.token";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {ClrOption} from "./option";

@Component({
    template: `
        <clr-option>
            Test
        </clr-option>
    `,
    providers: [IfOpenService, {provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef}]
})
class TestComponent {
}

export default function(): void {
    describe("Select Option Component", function() {
        let context: TestContext<ClrOption, TestComponent>;
        let ifOpenService: IfOpenService;

        beforeEach(function() {
            context = this.create(ClrOption, TestComponent, [IfOpenService]);
            ifOpenService = context.getClarityProvider(IfOpenService);
        });

        describe("View Basics", function() {
            it("projects content", () => {
                expect(context.clarityElement.textContent.trim()).toMatch("Test");
            });

            it("closes the menu when an item is clicked", () => {
                const option = context.clarityElement;
                spyOn(context.clarityDirective, "closeMenuOnClick");

                option.click();

                expect(context.clarityDirective.closeMenuOnClick).toHaveBeenCalled();
            });
        });

        describe("Typescript API", function() {
            it("closes the menu when an item is clicked", () => {
                ifOpenService.open = true;

                context.clarityDirective.closeMenuOnClick();

                expect(ifOpenService.open).toBe(false);
            });
        });
    });
}
