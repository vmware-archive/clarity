// /*
//  * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
//  * This software is released under MIT license.
//  * The full license information can be found in LICENSE in the root directory of this project.
//  */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, QueryList, ViewChild, ViewChildren, } from "@angular/core";
import { ClrSignpostModule } from "./signpost.module";
import { ClrIconModule } from "../../icon/icon.module";
import { Signpost } from "./signpost";
import { SignpostContent } from "./signpost-content";
import { Point } from "../common/popover";

export default function(): void {

    describe("Signpost", function() {

        let fixture: ComponentFixture<any>;
        let clarityElement: any;
        let signpost: Signpost;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ ClrSignpostModule, ClrIconModule ],
                declarations: [ TestSignpost ]
            });

            fixture = TestBed.createComponent(TestSignpost);
            fixture.detectChanges();
            clarityElement = fixture.nativeElement;
            signpost = fixture.componentInstance.signpost;

        });

        afterEach(() => {
            fixture.destroy();
        });

        it("adds the .signpost class to clr-signpost", function() {
            expect(clarityElement.querySelector(".signpost")).not.toBeNull();
        });

        it("can hide/show content", function() {
            let signpostToggle: HTMLElement = clarityElement.querySelector(".btn");
            let signpostContent: HTMLElement;

            // Test we have a trigger
            expect(signpostToggle).not.toBeNull();

            signpostToggle.click();
            // Test that it doesn't show until changes detected
            signpostContent = clarityElement.querySelector(".signpost-content");
            expect(signpostContent).toBeNull();

            fixture.detectChanges();
            // Test it shows after changes
            signpostContent = clarityElement.querySelector(".signpost-content");
            expect(signpostContent).not.toBeNull();
            expect(signpost.ifOpenService.open).toBe(true);

            // Hide it
            signpostToggle.click();
            fixture.detectChanges();
            signpostContent = clarityElement.querySelector(".signpost-content");
            // Test that its hidden
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
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            let testClass = clarityElement.querySelector(".right-middle");
            expect(testClass).toBeDefined();

            // anchor point == Point.RIGHT_CENTER
            expect(signpost.anchorPoint).toBe(Point.RIGHT_CENTER);
            // PopoverPoint = Point.LEFT_CENTER
            expect(signpost.popoverPoint).toBe(Point.LEFT_CENTER);
            // offsetY = 6
            expect(signpost.signpostOptions.offsetY).toBe(6);
            // offsetX = 14
            expect(signpost.signpostOptions.offsetX).toBe(14);
        });

        it("has a top-left signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "top-left";
            fixture.detectChanges();

            let testClass = clarityElement.querySelector(".top-left");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.TOP_LEFT);
            expect(signpost.popoverPoint).toBe(Point.BOTTOM_RIGHT);
            expect(signpost.signpostOptions.offsetY).toBe(-8);
            expect(signpost.signpostOptions.offsetX).toBe(10);
        });

        it("has a top-middle signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "top-middle";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".top-middle");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.TOP_CENTER);
            expect(signpost.popoverPoint).toBe(Point.BOTTOM_CENTER);
            expect(signpost.signpostOptions.offsetY).toBe(-8);
            expect(signpost.signpostOptions.offsetX).toBe(0);
        });

        it("has a top-right signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "top-right";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".top-right");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.TOP_RIGHT);
            expect(signpost.popoverPoint).toBe(Point.BOTTOM_LEFT);
            expect(signpost.signpostOptions.offsetY).toBe(-8);
            expect(signpost.signpostOptions.offsetX).toBe(-10);
        });

        it("has a right-top signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "right-top";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".right-top");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.RIGHT_TOP);
            expect(signpost.popoverPoint).toBe(Point.LEFT_BOTTOM);
            expect(signpost.signpostOptions.offsetY).toBe(18);
            expect(signpost.signpostOptions.offsetX).toBe(14);
        });

        it("has a right-middle signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "right-middle";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".right-middle");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.RIGHT_CENTER);
            expect(signpost.popoverPoint).toBe(Point.LEFT_CENTER);
            expect(signpost.signpostOptions.offsetY).toBe(6);
            expect(signpost.signpostOptions.offsetX).toBe(14);
        });

        it("has a right-bottom signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "right-bottom";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".right-bottom");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.RIGHT_BOTTOM);
            expect(signpost.popoverPoint).toBe(Point.LEFT_TOP);
            expect(signpost.signpostOptions.offsetY).toBe(-18);
            expect(signpost.signpostOptions.offsetX).toBe(14);
        });

        it("has a bottom-right signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "bottom-right";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".bottom-right");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.BOTTOM_RIGHT);
            expect(signpost.popoverPoint).toBe(Point.TOP_LEFT);
            expect(signpost.signpostOptions.offsetY).toBe(6);
            expect(signpost.signpostOptions.offsetX).toBe(-10);
        });

        it("has a bottom-middle signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "bottom-middle";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".bottom-middle");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.BOTTOM_CENTER);
            expect(signpost.popoverPoint).toBe(Point.TOP_CENTER);
            expect(signpost.signpostOptions.offsetY).toBe(6);
            expect(signpost.signpostOptions.offsetX).toBe(12);
        });

        it("has a bottom-left signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "bottom-left";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".bottom-left");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.BOTTOM_LEFT);
            expect(signpost.popoverPoint).toBe(Point.TOP_RIGHT);
            expect(signpost.signpostOptions.offsetY).toBe(6);
            expect(signpost.signpostOptions.offsetX).toBe(10);
        });

        it("has a left-bottom signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "left-bottom";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".left-bottom");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.LEFT_BOTTOM);
            expect(signpost.popoverPoint).toBe(Point.RIGHT_TOP);
            expect(signpost.signpostOptions.offsetY).toBe(-18);
            expect(signpost.signpostOptions.offsetX).toBe(-14);
        });

        it("has a left-middle signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "left-middle";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".left-middle");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.LEFT_CENTER);
            expect(signpost.popoverPoint).toBe(Point.RIGHT_CENTER);
            expect(signpost.signpostOptions.offsetY).toBe(6);
            expect(signpost.signpostOptions.offsetX).toBe(-14);
        });

        it("has a left-top signpost content position", function() {
            /*********
             *
             * @description
             * There are five things to test here
             * 1. Correct class name
             * 2. correct anchor point
             * 3. correct popover point
             * 4. Correct Y offset
             * 5. Correct X offset
             *
             */

            signpost.signpostPosition = "left-top";
            fixture.detectChanges();
            let testClass = clarityElement.querySelector(".left-top");
            expect(testClass).toBeDefined();

            expect(signpost.anchorPoint).toBe(Point.LEFT_TOP);
            expect(signpost.popoverPoint).toBe(Point.RIGHT_BOTTOM);
            expect(signpost.signpostOptions.offsetY).toBe(18);
            expect(signpost.signpostOptions.offsetX).toBe(-14);
        });
    });
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

class TestSignpost {
    @ViewChild(Signpost) signpost: Signpost;
    @ViewChildren(SignpostContent) content: QueryList<SignpostContent>;

    position: string = "right-middle";
    openState: boolean = false;
    testCnt: number = 0;

    bodyClickHandler(): void {
        this.testCnt++;
    }
}
