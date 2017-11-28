/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {DebugElement} from "@angular/core";
import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {Select} from "./select";
import {SelectInput} from "./select-input";
import {ClrSelectModule} from "./select.module";

@Component({
    template: `
        <clr-select [(ngModel)]="selected" name="selectTest">
            <input type="text" clrSelectInput/>

            <clr-option [clrValue]="'first'">First</clr-option>
            <clr-option [clrValue]="'second'">Second</clr-option>
        </clr-select>
   `
})
class TestComponent {
    @ViewChild(Select) selectInstance: Select;


    selected: any;
}

describe("SelectInput", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let input: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule(
            {imports: [ClrSelectModule, NoopAnimationsModule, FormsModule], declarations: [TestComponent]});

        return TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            compiled = fixture.nativeElement;
            input = fixture.debugElement.query(By.css("input"));
        });
    }));

    afterEach(() => {
        fixture.destroy();
    });

    function getSelectInstance(componentFixture: ComponentFixture<any>): Select {
        return componentFixture.componentInstance.selectInstance;
    }

    it("pushes input to selectsService on input", () => {
        compiled.querySelector("input").value = "test";
        input.nativeElement.dispatchEvent(new Event("input"));
        fixture.detectChanges();
        expect(getSelectInstance(fixture).selectService.input).toBe("test");
    });

    it("opens menu on typing", () => {
        compiled.querySelector("input").value = "Fir";
        input.nativeElement.dispatchEvent(new Event("input"));
        fixture.detectChanges();
        expect(compiled.querySelector(".clr-select-menu")).not.toBeNull();
    });

    it("input gets focused on if open status of select-menu changes", () => {
        const menuToggl: HTMLElement = compiled.querySelector(".open-trigger");
        spyOn(input.nativeElement, "focus");
        menuToggl.click();
        fixture.detectChanges();
        expect(input.nativeElement.focus).toHaveBeenCalled();
    });
});