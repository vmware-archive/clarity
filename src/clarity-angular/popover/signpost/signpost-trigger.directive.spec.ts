/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ClrIconModule} from "../../icon/icon.module";
import {IfOpenService} from "../../utils/conditional/if-open.service";

import {SignpostTriggerDirective} from "./signpost-trigger.directive";
import {ClrSignpostModule} from "./signpost.module";

import Spy = jasmine.Spy;

export default function(): void {
    describe("SignpostToggle component", function() {
        let fixture: ComponentFixture<any>;
        let clarityElement: any;
        let ifOpenService: IfOpenService;
        let trigger: HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule(
                {imports: [ClrSignpostModule, ClrIconModule], declarations: [TestTrigger], providers: [IfOpenService]});

            fixture = TestBed.createComponent(TestTrigger);
            fixture.detectChanges();
            clarityElement = fixture.nativeElement;
            ifOpenService = TestBed.get(IfOpenService);
            trigger = clarityElement.querySelector(".signpost-trigger");
        });

        it("should toggle the IfOpenService.open property on click", function() {
            expect(ifOpenService.open).toBeUndefined();
            trigger.click();
            expect(ifOpenService.open).toEqual(true);
            trigger.click();
            expect(ifOpenService.open).toEqual(false);
        });

        it("should have active class when open", function() {
            expect(trigger.classList.contains("active")).toBeFalsy();
            trigger.click();
            expect(trigger.classList.contains("active")).toBeTruthy();
            trigger.click();
            expect(trigger.classList.contains("active")).toBeFalsy();
            ifOpenService.open = true;
            expect(trigger.classList.contains("active")).toBeTruthy();
            ifOpenService.open = false;
            expect(trigger.classList.contains("active")).toBeFalsy();
        });

        it("should have the 'signpost-trigger' class", () => {
            const triggerClass: HTMLElement = clarityElement.querySelector(".signpost-trigger");
            expect(triggerClass).toBeDefined();
        });

        it("should have a tabindex of 0", () => {
            const triggerClass: HTMLElement = clarityElement.querySelector(".signpost-trigger");
            const tabIdx: number = triggerClass.tabIndex;
            expect(tabIdx).toBe(0);
        });

        it("should be accessible with the enter key", () => {
            const signpostTriggerSpy: Spy = spyOn(fixture.componentInstance.triggerDirective, "onSignpostTriggerClick");
            const enterEvent: KeyboardEvent = new KeyboardEvent("keydown", {"key": "Enter"});
            trigger.dispatchEvent(enterEvent);
            expect(signpostTriggerSpy).toHaveBeenCalled();
        });

        it("should be accessible with the space key", () => {
            const signpostTriggerSpy: Spy = spyOn(fixture.componentInstance.triggerDirective, "onSignpostTriggerClick");
            const enterEvent: KeyboardEvent = new KeyboardEvent("keydown", {"key": "Space"});
            trigger.dispatchEvent(enterEvent);
            expect(signpostTriggerSpy).toHaveBeenCalled();
        });
    });
}

@Component({
    template: `
        <button
            #anchor
            type="button"
            class="signpost-action btn btn-small btn-link"
            [ngClass]="{active: open}"
            clrSignpostTrigger>
            <clr-icon shape="info"></clr-icon>
        </button>
    `
})
class TestTrigger {
    @ViewChild(SignpostTriggerDirective) triggerDirective: SignpostTriggerDirective;
}
