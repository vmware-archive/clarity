/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";

import {IfOpenService} from "../../utils/conditional/if-open.service";
import {addHelpers, TestContext} from "../../utils/testing/helpers.spec";

import {Signpost} from "./signpost";
import {ClrSignpostModule} from "./signpost.module";

export default function(): void {
    describe("Signpost", function() {
        addHelpers([ClrSignpostModule]);

        describe("default trigger", function() {
            let context: TestContext<Signpost, TestDefaultSignpost>;
            let ifOpenService: IfOpenService;

            beforeEach(function() {
                context = this.create(Signpost, TestDefaultSignpost);
                ifOpenService = context.getClarityProvider(IfOpenService);
            });

            it("adds the .signpost class to clr-signpost", function() {
                expect(context.clarityElement.classList).toContain("signpost");
            });

            it("has a default trigger that can hide/show content", function() {
                const signpostToggle: HTMLElement = context.testElement.querySelector(".signpost-action");
                let signpostContent: HTMLElement;

                // Test we have a trigger
                expect(signpostToggle).not.toBeNull();

                // // Test that content shows
                signpostToggle.click();
                context.detectChanges();
                signpostContent = context.testElement.querySelector(".signpost-content");
                expect(signpostContent).not.toBeNull();
                expect(ifOpenService.open).toBe(true);

                // Test that content hides again
                signpostToggle.click();
                context.detectChanges();
                signpostContent = context.testElement.querySelector(".signpost-content");
                expect(signpostContent).toBeNull();
                expect(ifOpenService.open).toBe(false);
            });
        });

        describe("custom trigger", function() {
            let context: TestContext<Signpost, TestCustomTriggerSignpost>;
            let ifOpenService: IfOpenService;

            beforeEach(function() {
                context = this.create(Signpost, TestCustomTriggerSignpost);
                ifOpenService = context.getClarityProvider(IfOpenService);
            });

            /********
             * This test assumes that if
             */
            it("does not display the default trigger", function() {
                const triggerIcon: HTMLElement = context.testElement.querySelector("clr-icon");

                /**********
                 * If there is a clr-icon we are testing that it is not the same shape
                 * used for the default trigger.
                 */
                if (triggerIcon) {
                    expect(triggerIcon.getAttribute("shape")).not.toBe("info");
                }
            });

            it("projects a custom trigger element to hide/show content", function() {
                const signpostTrigger: HTMLElement = context.testElement.querySelector(".signpost-action");
                let signpostContent: HTMLElement;

                expect(signpostTrigger.textContent.trim()).toBe("Custom trigger");

                // Test we have a trigger
                expect(signpostTrigger).not.toBeNull();

                // Test it shows after changes
                signpostTrigger.click();
                context.detectChanges();
                signpostContent = context.testElement.querySelector(".signpost-content");
                expect(signpostContent).not.toBeNull();
                expect(ifOpenService.open).toBe(true);

                // Test it hide when clicked again
                signpostTrigger.click();
                context.detectChanges();
                signpostContent = context.testElement.querySelector(".signpost-content");
                expect(signpostContent).toBeNull();
                expect(ifOpenService.open).toBe(false);
            });
        });
    });
}

@Component({
    template: `
        <button class="outside-click-test">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-signpost>
            <button
                type="button"
                class="signpost-action btn btn-small btn-link"
                clrSignpostTrigger>
                Custom trigger
            </button>
            <clr-signpost-content *clrIfOpen="openState">
                Signpost content
            </clr-signpost-content>
        </clr-signpost>
    `
})

class TestCustomTriggerSignpost {
    @ViewChild(Signpost) signpost: Signpost;

    position: string = "right-middle";
}

@Component({
    template: `
        <button class="outside-click-test">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-signpost>
            <clr-signpost-content *clrIfOpen="openState">
                Signpost content
            </clr-signpost-content>
        </clr-signpost>
    `
})

class TestDefaultSignpost {
    @ViewChild(Signpost) signpost: Signpost;

    openState: boolean = false;
}
