/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

import {FormControlService} from "../common/form-control.service";

import {ClrRadioContainer} from "./radio-container";


@Component({
    template: `
        <clr-radio-container>
            <label>Hello World</label>
            <input type="radio" clrRadio />
        </clr-radio-container>
    `
})
class SimpleTest {
}

interface TestContext {
    fixture: ComponentFixture<SimpleTest>;
    formControlService: FormControlService;
    radioContainer: ClrRadioContainer;
    radioContainerEl: any;
}


export default function(): void {
    describe("ClrRadioContainer component", () => {
        beforeEach(function(this: TestContext) {
            TestBed.configureTestingModule({declarations: [ClrRadioContainer, SimpleTest]});
            this.fixture = TestBed.createComponent(SimpleTest);
            this.fixture.detectChanges();
            const radioContainerDE = this.fixture.debugElement.query(By.directive(ClrRadioContainer));
            this.formControlService = radioContainerDE.injector.get(FormControlService, null);
            this.radioContainer = radioContainerDE.componentInstance;
            this.radioContainerEl = radioContainerDE.nativeElement;
        });

        it("declares a FormControlService provider", function(this: TestContext) {
            expect(this.formControlService).toBeTruthy();
        });

        it("implements DynamicWrapper", function(this: TestContext) {
            // Typescript pretty much tests this for us, so this unit test is a bit nonsensical.
            expect(this.radioContainer._dynamic).toBeDefined();
        });

        it("projects the clrRadio input first", function(this: TestContext) {
            const input = this.radioContainerEl.querySelector("[clrRadio]");
            expect(input).toBeTruthy();
            expect(input.previousElementSibling).toBeFalsy();
        });

        it("projects the label", function(this: TestContext) {
            expect(this.radioContainerEl.textContent.trim()).toBe("Hello World");
        });

        it("adds an empty label when instantiated dynamically", function(this: TestContext) {
            this.radioContainer._dynamic = true;
            this.fixture.detectChanges();
            const labels = this.radioContainerEl.querySelectorAll("label");
            expect(Array.prototype.filter.call(labels, label => label.textContent === "").length).toBe(1);
        });

        it("adds the .radio class to the host", function(this: TestContext) {
            expect(this.radioContainerEl.classList).toContain("radio");
        });
    });
}
