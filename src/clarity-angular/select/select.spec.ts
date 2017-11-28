/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {Select} from "./select";
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

describe("Select", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule(
            {imports: [ClrSelectModule, NoopAnimationsModule, FormsModule], declarations: [TestComponent]});

        return TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            compiled = fixture.nativeElement;
        });
    }));

    afterEach(() => {
        fixture.destroy();
    });

    function getSelectInstance(componentFixture: ComponentFixture<any>): Select {
        return componentFixture.componentInstance.selectInstance;
    }

    it("toggles the menu when clicked on the carret", () => {
        const menuToggl: HTMLElement = compiled.querySelector(".open-trigger");

        expect(compiled.querySelector(".clr-select-menu")).toBeNull();
        menuToggl.click();
        // detect the click
        fixture.detectChanges();
        expect(compiled.querySelector(".clr-select-menu")).not.toBeNull();

        // click the dropdown toggle again to close the menu
        menuToggl.click();
        // detect the click
        fixture.detectChanges();
        expect(compiled.querySelector(".clr-select-menu")).toBeNull();
    });
});