/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, ViewChild } from "@angular/core";
import { Point } from "../common/popover";
import { Dropdown } from "./dropdown";
import { ClrDropdownModule } from "./dropdown.module";
import { IfOpenService } from "../../utils/conditional/if-open.service";


export default function(): void {

    describe("Dropdown", () => {
        let fixture: ComponentFixture<any>;
        let compiled: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ClrDropdownModule],
                declarations: [TestComponent],
                providers: [IfOpenService]
            });

            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            compiled = fixture.nativeElement;
        });

        afterEach(() => {
            fixture.destroy();
        });

        it("projects content", () => {
            expect(compiled.textContent).toMatch(/Dropdown/);
        });

        it("adds the .dropdown class on clr-dropdown", () => {
            expect(compiled.querySelector(".dropdown")).not.toBeNull();
        });

        it("adds the .open class on clr-dropdown when ifOpenService's open property is true", () => {
            fixture.componentInstance.dropdownInstance.ifOpenService.open = true;
            fixture.detectChanges();
            expect(compiled.querySelector(".open")).not.toBeNull();
        });

        it("adds the .dropdown-toggle class on clrDropdownToggle", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector("[clrDropdownToggle]");
            expect(dropdownToggle.classList.contains(".dropdown-toggle"));
        });

        it("adds the .dropdown-item class on clrDropdownItem", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
            dropdownToggle.click();
            //detect the click
            fixture.detectChanges();

            let dropdownItem: HTMLElement = compiled.querySelector("[clrDropdownItem]");
            expect(dropdownItem.classList.contains(".dropdown-item"));
        });

        it("supports clrMenuDirection option", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
            dropdownToggle.click();
            //detect the click
            fixture.detectChanges();

            //Default is bottom-left since menuPosition is set to ""
            expect(fixture.componentInstance.dropdownInstance.anchorPoint).toEqual(Point.BOTTOM_LEFT);
            expect(fixture.componentInstance.dropdownInstance.popoverPoint).toEqual(Point.LEFT_TOP);

            fixture.componentInstance.menuPosition = "bottom-right";
            fixture.detectChanges();
            expect(fixture.componentInstance.dropdownInstance.anchorPoint).toEqual(Point.BOTTOM_RIGHT);
            expect(fixture.componentInstance.dropdownInstance.popoverPoint).toEqual(Point.RIGHT_TOP);

            fixture.componentInstance.menuPosition = "top-right";
            fixture.detectChanges();
            expect(fixture.componentInstance.dropdownInstance.anchorPoint).toEqual(Point.TOP_RIGHT);
            expect(fixture.componentInstance.dropdownInstance.popoverPoint).toEqual(Point.RIGHT_BOTTOM);
        });

        it("toggles the menu when clicked on the host", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");

            expect(compiled.querySelector(".dropdown-item")).toBeNull();
            dropdownToggle.click();
            //detect the click
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).not.toBeNull();

            //click the dropdown toggle again to close the menu
            dropdownToggle.click();
            //detect the click
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).toBeNull();
        });

        it("toggles the nested menu when clicked on the toggle", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
            dropdownToggle.click();
            //detect the click
            fixture.detectChanges();

            let nestedToggle: HTMLElement = compiled.querySelector(".nested");
            expect(compiled.textContent.trim()).not.toMatch("Foo");
            nestedToggle.click();
            //detect the click
            fixture.detectChanges();
            expect(compiled.textContent.trim()).toMatch("Foo");

            //click the nested toggle again to close the menu
            nestedToggle.click();
            //detect the click
            fixture.detectChanges();
            expect(compiled.textContent.trim()).not.toMatch("Foo");
        });

        it("closes the menu when clicked outside of the host", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
            let outsideButton: HTMLElement = compiled.querySelector(".outside-click-test");

            //check if the dropdown is closed
            expect(compiled.querySelector(".dropdown-item")).toBeNull();

            //click outside the dropdown
            outsideButton.click();
            fixture.detectChanges();

            //check if the click handler is triggered
            expect(fixture.componentInstance.testCnt).toEqual(1);
            //check if the open class is added
            expect(compiled.querySelector(".dropdown-item")).toBeNull();

            //click on the dropdown
            dropdownToggle.click();
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).not.toBeNull();

            //click outside the dropdown
            outsideButton.click();
            fixture.detectChanges();

            //check if the click handler is triggered
            expect(fixture.componentInstance.testCnt).toEqual(2);
            //check if the open class is added
            expect(compiled.querySelector(".dropdown-item")).toBeNull();
        });

        it("supports clrMenuClosable option. Closes the dropdown menu when clrMenuClosable is set to true", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
            dropdownToggle.click();
            fixture.detectChanges();

            let dropdownItem: HTMLElement = compiled.querySelector(".dropdown-item");

            dropdownItem.click();
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).toBeNull();

            fixture.componentInstance.menuClosable = false;
            dropdownToggle.click();
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).not.toBeNull();

            dropdownItem.click();
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).not.toBeNull();
        });

        it("does not close the menu when a disabled item is clicked", () => {
            let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
            dropdownToggle.click();
            fixture.detectChanges();

            let disabledDropdownItem: HTMLElement = compiled.querySelector(".dropdown-item.disabled");
            let dropdownItem: HTMLElement = compiled.querySelector(".dropdown-item");

            disabledDropdownItem.click();
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).not.toBeNull();

            dropdownItem.click();
            fixture.detectChanges();
            expect(compiled.querySelector(".dropdown-item")).toBeNull();
        });
    });
}

@Component({
    template: `
        <button class="outside-click-test" (click)="outsideButtonClickHandler()">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-dropdown [clrMenuPosition]="menuPosition" [clrCloseMenuOnItemClick]="menuClosable">
            <button class="btn btn-primary" type="button" clrDropdownToggle>
                Dropdown
                <clr-icon shape="caret down"></clr-icon>
            </button>
            <clr-dropdown-menu *clrIfOpen>
                <label class="dropdown-header">Header</label>
                <a href="javascript://" clrDropdownItem>Item</a>
                <a href="javascript://" class="disabled" clrDropdownItem>Disabled Item</a>
                <clr-dropdown [clrMenuPosition]="'right-top'">
                    <button clrDropdownToggle class="nested">Nested</button>
                    <clr-dropdown-menu *clrIfOpen>
                        <a href="javascript://" clrDropdownItem>Foo</a>
                    </clr-dropdown-menu>
                </clr-dropdown>
            </clr-dropdown-menu>
        </clr-dropdown>
   `
})
class TestComponent {
    @ViewChild(Dropdown) dropdownInstance: Dropdown;

    menuPosition: string = "";
    menuClosable: boolean = true;
    testCnt: number = 0;

    outsideButtonClickHandler(): void {
        this.testCnt++;
    }
}
