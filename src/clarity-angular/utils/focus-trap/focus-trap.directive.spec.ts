/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {FocusTrapDirective} from "./focus-trap.directive";
import {ClrFocusTrapModule} from "./focus-trap.module";
import {By} from "@angular/platform-browser/";

describe("FocusTrap", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let directive: FocusTrapDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrFocusTrapModule],
            declarations: [TestComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        compiled = fixture.nativeElement;

        directive = fixture.debugElement
                        .query(By.directive(FocusTrapDirective))
                        .injector.get(FocusTrapDirective);
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("should create directive", () => {
        expect(directive).toBeTruthy();
    });

    it("should add tabindex attribute with value zero", () => {
        directive.ngAfterViewInit();
        const element: HTMLElement = directive.elementRef.nativeElement;
        expect(element.getAttribute("tabindex")).toEqual("0");
    });

    it(`should focus on trappable element when tab key
        is pressed and last input is active`, () => {

        const element = directive.elementRef.nativeElement;

        const lastInput = compiled.querySelector("#last");
        lastInput.focus();

        let tabEvent = <KeyboardEvent>{
            shiftKey: false,
            keyCode: 9,
            preventDefault: () => {}
        };

        directive.onFocusIn(tabEvent);

        expect(document.activeElement).toEqual(element);
    });
});

@Component({
    template: `
        <a href="#">Not in form</a>
        <form clrFocusTrap>
            <button id="first">
                Button to test first input
            </button>
            <input type="text" />
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <button id="last">
              Last Input
            </button>
        </form>
   `
})
class TestComponent {

}
