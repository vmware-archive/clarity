/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef} from "@angular/core";
import {TestBed} from "@angular/core/testing";

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

@Component({
    template: `
        <clr-option>
            Test
        </clr-option>
    `,
    providers: [IfOpenService]
})
class TestComponentWithError {
}

export default function(): void {
    describe("Select Option Component", function() {
        let context: TestContext<ClrOption, TestComponent>;
        let ifOpenService: IfOpenService;

        describe("View Basics", function() {
            beforeEach(function() {
                context = this.create(ClrOption, TestComponent, []);
                ifOpenService = context.getClarityProvider(IfOpenService);
            });

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
            beforeEach(function() {
                context = this.create(ClrOption, TestComponent, []);
                ifOpenService = context.getClarityProvider(IfOpenService);
            });

            it("closes the menu when an item is clicked", () => {
                ifOpenService.open = true;

                context.clarityDirective.closeMenuOnClick();

                expect(ifOpenService.open).toBe(false);
            });
        });

        describe("Error Condition", function() {
            it("throws an error when option is not used inside of clr-select", function() {
                TestBed.configureTestingModule({declarations: [ClrOption, TestComponentWithError]});
                expect(() => {
                    TestBed.createComponent(TestComponentWithError);
                }).toThrowError("clr-option should only be used inside of a clr-select");
            });
        });
    });
}
