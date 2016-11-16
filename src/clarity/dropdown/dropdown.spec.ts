import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {ClarityModule} from "../clarity.module";

@Component({
    template: `
        <button class="outside-click-test" (click)="outsideButtonClickHandler()">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-dropdown [clrMenuPosition]="menuPosition" [clrCloseMenuOnItemClick]="menuClosable">
            <button class="btn btn-primary" type="button" clrDropdownToggle>
                Dropdown
                <clr-icon shape="caret" class="icon-orient-down"></clr-icon>
            </button>
            <div class="dropdown-menu">
                <label class="dropdown-header">Header</label>
                <a href="javascript://" clrDropdownItem>Item</a>
                <a href="javascript://" class="disabled" clrDropdownItem>Disabled Item</a>
            </div>
        </clr-dropdown>
   `
})
class TestComponent {
    menuPosition: string = "";
    menuClosable: boolean = true;
    testCnt: number = 0;

    outsideButtonClickHandler(): void {
        this.testCnt++;
    }
}

describe("Dropdown", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule],
            declarations: [TestComponent]
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
        expect(compiled.textContent).toMatch(/Header/);
        expect(compiled.textContent).toMatch(/Item/);
    });

    it("adds the .dropdown class on clr-dropdown", () => {
        expect(compiled.querySelector(".dropdown")).not.toBeNull();
    });

    it("adds the .dropdown-toggle class on clrDropdownToggle", () => {
        let dropdownToggle: HTMLElement = compiled.querySelector("[clrDropdownToggle]");
        expect(dropdownToggle.classList.contains(".dropdown-toggle"));
    });

    it("adds the .dropdown-item class on clrDropdownItem", () => {
        let dropdownToggle: HTMLElement = compiled.querySelector("[clrDropdownItem]");
        expect(dropdownToggle.classList.contains(".dropdown-item"));
    });

    it("supports clrMenuDirection option", () => {
        //Default is bottom-left since menuPosition is set to ""
        expect(compiled.querySelector(".bottom-left")).not.toBeNull();
        expect(compiled.querySelector(".top-right")).toBeNull();
        expect(compiled.querySelector(".top-left")).toBeNull();
        expect(compiled.querySelector(".right-top")).toBeNull();
        expect(compiled.querySelector(".right-bottom")).toBeNull();
        expect(compiled.querySelector(".left-top")).toBeNull();
        expect(compiled.querySelector(".left-bottom")).toBeNull();

        fixture.componentInstance.menuPosition = "bottom-right";
        fixture.detectChanges();
        expect(compiled.querySelector(".bottom-right")).not.toBeNull();
        expect(compiled.querySelector(".bottom-left")).toBeNull();
        expect(compiled.querySelector(".top-right")).toBeNull();
        expect(compiled.querySelector(".top-left")).toBeNull();
        expect(compiled.querySelector(".right-top")).toBeNull();
        expect(compiled.querySelector(".right-bottom")).toBeNull();
        expect(compiled.querySelector(".left-top")).toBeNull();
        expect(compiled.querySelector(".left-bottom")).toBeNull();

        fixture.componentInstance.menuPosition = "top-right";
        fixture.detectChanges();
        expect(compiled.querySelector(".top-right")).not.toBeNull();
        expect(compiled.querySelector(".bottom-right")).toBeNull();
        expect(compiled.querySelector(".bottom-left")).toBeNull();
        expect(compiled.querySelector(".top-left")).toBeNull();
        expect(compiled.querySelector(".right-top")).toBeNull();
        expect(compiled.querySelector(".right-bottom")).toBeNull();
        expect(compiled.querySelector(".left-top")).toBeNull();
        expect(compiled.querySelector(".left-bottom")).toBeNull();
    });

    it("toggles the menu when clicked on the host", () => {
        let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");

        expect(compiled.querySelector(".open")).toBeNull();
        dropdownToggle.click();
        //detect the click
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).not.toBeNull();

        //click the dropdown toggle again to close the menu
        dropdownToggle.click();
        //detect the click
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).toBeNull();
    });

    it("closes the menu when clicked outside of the host", () => {
        let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
        let outsideButton: HTMLElement = compiled.querySelector(".outside-click-test");

        //check if the dropdown is closed
        expect(compiled.querySelector(".open")).toBeNull();

        //click outside the dropdown
        outsideButton.click();
        fixture.detectChanges();

        //check if the click handler is triggered
        expect(fixture.componentInstance.testCnt).toEqual(1);
        //check if the open class is added
        expect(compiled.querySelector(".open")).toBeNull();

        //click on the dropdown
        dropdownToggle.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).not.toBeNull();

        //click outside the dropdown
        outsideButton.click();
        fixture.detectChanges();

        //check if the click handler is triggered
        expect(fixture.componentInstance.testCnt).toEqual(2);
        //check if the open class is added
        expect(compiled.querySelector(".open")).toBeNull();
    });

    it("supports clrMenuClosable option. Closes the dropdown menu when clrMenuClosable is set to true", () => {
        let dropdownToggle: HTMLElement  = compiled.querySelector(".dropdown-toggle");
        let dropdownItem: HTMLElement  = compiled.querySelector(".dropdown-item");

        dropdownToggle.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).not.toBeNull();

        dropdownItem.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).toBeNull();

        fixture.componentInstance.menuClosable = false;
        dropdownToggle.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).not.toBeNull();

        dropdownItem.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).not.toBeNull();
    });


    it("does not close the menu when a disabled item is clicked", () => {
        let dropdownToggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
        let dropdownItem: HTMLElement  = compiled.querySelector(".dropdown-item");
        let disabledDropdownItem: HTMLElement  = compiled.querySelector(".dropdown-item.disabled");

        dropdownToggle.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).not.toBeNull();

        disabledDropdownItem.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).not.toBeNull();

        dropdownItem.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".open")).toBeNull();
    });
});
