/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {ClarityModule} from "../clarity.module";
import {InputTrapDirective} from "./input-trap.directive";
import {By} from "@angular/platform-browser/";


describe("InputTrap", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let directive: InputTrapDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule.forRoot()],
            declarations: [TestComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        compiled = fixture.nativeElement;

        directive = fixture.debugElement
                        .query(By.directive(InputTrapDirective))
                        .injector.get(InputTrapDirective);
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("should create directive", () => {
        expect(directive).toBeTruthy();
    });

    describe("on directive init", () => {
        it("should contain the first input", () => {
            expect(directive.firstInput).toBeTruthy();
            expect(directive.firstInput.id).toEqual("first");
        });

        it("should contain the last input", () => {
            expect(directive.lastInput).toBeTruthy();
            expect(directive.lastInput.id).toEqual("last");
        });
    });

    describe("on keydown", () => {
        it(`should focus last input when shift+tab key
            is pressed and first input is active`, () => {

            directive.firstInput.focus();

            let keydownEvent = <KeyboardEvent>{
                shiftKey: true,
                keyCode: InputTrapDirective.TAB_KEY,
                preventDefault: () => {}
            };

            directive.onkeydown(keydownEvent);

            expect(document.activeElement).toEqual(directive.lastInput);
        });

        it(`should focus first input when tab key
            is pressed and last input is active`, () => {
            directive.lastInput.focus();

            let keydownEvent = <KeyboardEvent>{
                shiftKey: false,
                keyCode: InputTrapDirective.TAB_KEY,
                preventDefault: () => {}
            };

            directive.onkeydown(keydownEvent);

            expect(document.activeElement).toEqual(directive.firstInput);
        });
    });
});

@Component({
    template: `
        <form clrInputTrap>
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
