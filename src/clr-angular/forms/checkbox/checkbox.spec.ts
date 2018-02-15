/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {FormControlService} from "../common/form-control.service";
import {WrappedFormControl} from "../common/wrapped-form-control";
import {ClrCheckboxNext} from "./checkbox";
import {ClrCheckboxContainer} from "./checkbox-container";


@Component({
    template: `
       <input type="checkbox" clrCheckbox />
    `
})
class SimpleTest {}

export default function(): void {
    describe("Checkbox directive", () => {
        it("correctly extends WrappedFormControl<ClrCheckboxContainer>", function() {
            spyOn(WrappedFormControl.prototype, "ngOnInit");
            TestBed.configureTestingModule(
                {declarations: [ClrCheckboxNext, SimpleTest], providers: [FormControlService]});
            this.fixture = TestBed.createComponent(SimpleTest);
            this.fixture.detectChanges();
            expect(this.fixture.debugElement.query(By.directive(ClrCheckboxNext))
                       .injector.get(ClrCheckboxNext)
                       .wrapperType)
                .toBe(ClrCheckboxContainer);
            expect(WrappedFormControl.prototype.ngOnInit).toHaveBeenCalledTimes(1);
        });
    });
}
