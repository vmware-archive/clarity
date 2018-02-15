/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

import {FormControlService} from "../common/form-control.service";

import {ClrCheckboxContainer} from "./checkbox-container";


@Component({
    template: `
        <clr-checkbox-container>
            <label>Hello World</label>
            <input type="checkbox" clrCheckbox />
        </clr-checkbox-container>
    `
})
class SimpleTest {}

interface TestContext {
    fixture: ComponentFixture<SimpleTest>;
    formControlService: FormControlService;
    checkboxContainer: ClrCheckboxContainer;
    checkboxContainerEl: any;
}


export default function(): void {
    describe("ClrCheckboxContainer component", () => {
        beforeEach(function(this: TestContext) {
            TestBed.configureTestingModule({declarations: [ClrCheckboxContainer, SimpleTest]});
            this.fixture = TestBed.createComponent(SimpleTest);
            this.fixture.detectChanges();
            const checkboxContainerDE = this.fixture.debugElement.query(By.directive(ClrCheckboxContainer));
            this.formControlService = checkboxContainerDE.injector.get(FormControlService, null);
            this.checkboxContainer = checkboxContainerDE.componentInstance;
            this.checkboxContainerEl = checkboxContainerDE.nativeElement;
        });

        it("declares a FormControlService provider", function(this: TestContext) {
            expect(this.formControlService).toBeTruthy();
        });

        it("implements DynamicWrapper", function(this: TestContext) {
            // Typescript pretty much tests this for us, so this unit test is a bit nonsensical.
            expect(this.checkboxContainer._dynamic).toBeDefined();
        });

        it("projects the clrCheckbox input first", function(this: TestContext) {
            const input = this.checkboxContainerEl.querySelector("[clrCheckbox]");
            expect(input).toBeTruthy();
            expect(input.previousElementSibling).toBeFalsy();
        });

        it("projects the label", function(this: TestContext) {
            expect(this.checkboxContainerEl.textContent.trim()).toBe("Hello World");
        });

        it("adds an empty label when instantiated dynamically", function(this: TestContext) {
            this.checkboxContainer._dynamic = true;
            this.fixture.detectChanges();
            const labels = this.checkboxContainerEl.querySelectorAll("label");
            expect(Array.prototype.filter.call(labels, label => label.textContent === "").length).toBe(1);
        });

        it("adds the .checkbox class to the host", function(this: TestContext) {
            expect(this.checkboxContainerEl.classList).toContain("checkbox");
        });
    });
}
