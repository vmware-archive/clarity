/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, QueryList, ViewChild, ViewChildren, } from "@angular/core";
import { ClrSignpostModule } from "./signpost.module";
import { Signpost } from "./signpost";
import { SignpostContent } from "./signpost-content";
import { SIGNPOST_POSITIONS, Position } from "./signpost-positions";
import { ClrIconModule } from "../../icon/icon.module";

export default function(): void {

    describe("Signpost", function() {

        describe("default trigger", function() {
            let fixture: ComponentFixture<any>;
            let clarityElement: any;
            let signpost: Signpost;

            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ ClrSignpostModule ],
                    declarations: [ TestDefaultSignpost ]
                });

                fixture = TestBed.createComponent(TestDefaultSignpost);
                fixture.detectChanges();
                clarityElement = fixture.nativeElement;
                signpost = fixture.componentInstance.signpost;

            });

            afterEach(() => {
                fixture.destroy();
            });

            function testPosition( sp: Signpost, test: Position ): void {
                /*********
                 *
                 * There are four things to test here
                 * 1. correct anchor point
                 * 2. correct popover point
                 * 3. Correct Y offset
                 * 4. Correct X offset
                 *
                 */

                expect(sp.anchorPoint).toBe(test.anchorPoint);
                expect(sp.popoverPoint).toBe(test.popoverPoint);
                expect(sp.signpostOptions.offsetY).toBe(test.offsetY);
                expect(sp.signpostOptions.offsetX).toBe(test.offsetX);
            }

            it("adds the .signpost class to clr-signpost", function() {
                expect(clarityElement.querySelector(".signpost")).not.toBeNull();
            });

            it("has a default trigger that can hide/show content", function() {
                let signpostToggle: HTMLElement =
                    clarityElement.querySelector(".signpost > .signpost-trigger > .signpost-action");
                let signpostContent: HTMLElement;

                // Test we have a trigger
                expect(signpostToggle).not.toBeNull();

                // // Test that content shows
                signpostToggle.click();
                signpostContent = clarityElement.querySelector(".signpost-content");
                expect(signpostContent).not.toBeNull();
                expect(signpost.ifOpenService.open).toBe(true);

                // Test that content hides again
                signpostToggle.click();
                signpostContent = clarityElement.querySelector(".signpost-content");
                expect(signpostContent).toBeNull();
                expect(signpost.ifOpenService.open).toBe(false);
            });

            it("takes an input for position", function() {
                fixture.componentInstance.position = "top-middle";
                fixture.detectChanges();
                expect(signpost.signpostPosition).toBe("top-middle");
            });

            it("does not allow multiple open poovers", function() {
                expect(signpost.signpostOptions.allowMultipleOpen).toBe(false);
            });

            it("has a default signpost content position", function() {
                let testClass = clarityElement.querySelector(".right-middle");
                let position = SIGNPOST_POSITIONS["default"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a top-left signpost content position", function() {
                signpost.signpostPosition = "top-left";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".top-left");
                let position = SIGNPOST_POSITIONS["top-left"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a top-middle signpost content position", function() {
                signpost.signpostPosition = "top-middle";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".top-middle");
                let position = SIGNPOST_POSITIONS["top-middle"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a top-right signpost content position", function() {
                signpost.signpostPosition = "top-right";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".top-right");
                let position = SIGNPOST_POSITIONS["top-right"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a right-top signpost content position", function() {
                signpost.signpostPosition = "right-top";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".right-top");
                let position = SIGNPOST_POSITIONS["right-top"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a right-middle signpost content position", function() {
                signpost.signpostPosition = "right-middle";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".right-middle");
                let position = SIGNPOST_POSITIONS["right-middle"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a right-bottom signpost content position", function() {
                signpost.signpostPosition = "right-bottom";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".right-bottom");
                let position = SIGNPOST_POSITIONS["right-bottom"];
                expect(testClass).toBeDefined();

                testPosition(signpost, position);
            });

            it("has a bottom-right signpost content position", function() {
                signpost.signpostPosition = "bottom-right";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".bottom-right");
                let position = SIGNPOST_POSITIONS["bottom-right"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a bottom-middle signpost content position", function() {
                signpost.signpostPosition = "bottom-middle";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".bottom-middle");
                let position = SIGNPOST_POSITIONS["bottom-middle"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a bottom-left signpost content position", function() {
                signpost.signpostPosition = "bottom-left";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".bottom-left");
                let position = SIGNPOST_POSITIONS["bottom-left"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a left-bottom signpost content position", function() {
                signpost.signpostPosition = "left-bottom";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".left-bottom");
                let position = SIGNPOST_POSITIONS["left-bottom"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a left-middle signpost content position", function() {
                signpost.signpostPosition = "left-middle";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".left-middle");
                let position = SIGNPOST_POSITIONS["left-middle"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });

            it("has a left-top signpost content position", function() {
                signpost.signpostPosition = "left-top";
                fixture.detectChanges();

                let testClass = clarityElement.querySelector(".left-top");
                let position = SIGNPOST_POSITIONS["left-top"];
                expect(testClass).toBeDefined();
                testPosition(signpost, position);
            });
        });

        describe("custom trigger", function() {
            let fixture: ComponentFixture<any>;
            let clarityElement: any;
            let signpost: Signpost;

            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ ClrSignpostModule, ClrIconModule ],
                    declarations: [ TestCustomTriggerSignpost ]
                });

                fixture = TestBed.createComponent(TestCustomTriggerSignpost);
                fixture.detectChanges();
                clarityElement = fixture.nativeElement;
                signpost = fixture.componentInstance.signpost;

            });

            afterEach(() => {
                fixture.destroy();
            });

            /********
             * This test assumes that if
             */
            it("does not display the default trigger", function() {
                let triggerIcon: HTMLElement =
                    clarityElement.querySelector("clr-icon");

                /**********
                 * If there is a clr-icon we are testing that it is not the same shape
                 * used for the default trigger.
                 */
                if ( triggerIcon ) {
                    expect(triggerIcon.getAttribute("shape")).not.toBe("info");
                }
            });

            it("projects a custom trigger element to hide/show content", function() {
                let signpostTrigger: HTMLElement =
                    clarityElement.querySelector(".signpost-trigger > .signpost-action");
                let signpostContent: HTMLElement;

                expect(signpostTrigger.textContent.trim()).toBe("Custom trigger");

                // Test we have a trigger
                expect(signpostTrigger).not.toBeNull();

                // Test it shows after changes
                signpostTrigger.click();
                signpostContent = clarityElement.querySelector(".signpost-content");
                expect(signpostContent).not.toBeNull();
                expect(signpost.ifOpenService.open).toBe(true);

                // Test it hide when clicked again
                signpostTrigger.click();
                signpostContent = clarityElement.querySelector(".signpost-content");
                expect(signpostContent).toBeNull();
                expect(signpost.ifOpenService.open).toBe(false);
            });
        });
    });
}

@Component({
    template: `
        <button class="outside-click-test" (click)="bodyClickHandler()">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-signpost [clrSignpostPosition]="position">
            <button
                type="button"
                class="signpost-action btn btn-small btn-link"
                [ngClass]="{active: open}"
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
    @ViewChildren(SignpostContent) content: QueryList<SignpostContent>;

    position: string = "right-middle";
    openState: boolean = false;
    testCnt: number = 0;

    bodyClickHandler(): void {
        this.testCnt++;
    }
}

@Component({
    template: `
        <button class="outside-click-test" (click)="bodyClickHandler()">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-signpost [clrSignpostPosition]="position">
            <clr-signpost-content *clrIfOpen="openState">
                Signpost content
            </clr-signpost-content>
        </clr-signpost>
    `
})

class TestDefaultSignpost {
    @ViewChild(Signpost) signpost: Signpost;
    @ViewChildren(SignpostContent) content: QueryList<SignpostContent>;

    position: string = "right-middle";
    openState: boolean = false;
    testCnt: number = 0;

    bodyClickHandler(): void {
        this.testCnt++;
    }
}
