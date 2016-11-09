import {
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick
} from "@angular/core/testing";
import {Component, ViewChild, Type} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Checkbox} from "./checkbox";
import {ClarityModule} from "../clarity.module";

abstract class CheckboxTest {
    @ViewChild(Checkbox) checkboxInstance: Checkbox;

    checked = false;
}

@Component({
    template: `
        <clr-checkbox [(clrChecked)]="checked"></clr-checkbox>
    `
})
class BasicCheckbox extends CheckboxTest {
}

@Component({
    template: `
        <clr-checkbox [(ngModel)]="checked"></clr-checkbox>
    `
})
class CheckboxWithNgModel extends CheckboxTest {
}

@Component({
    template: `
        <clr-checkbox [(clrChecked)]="checked">Hello world</clr-checkbox>
    `
})
class CheckboxWithLabel extends CheckboxTest {
}

@Component({
    template: `
        <clr-checkbox [(clrChecked)]="checked" name="hello"></clr-checkbox>
    `
})
class CheckboxWithName extends CheckboxTest {
}

@Component({
    template: `
        <clr-checkbox [(clrChecked)]="checked" [clrInline]="true"></clr-checkbox>
    `
})
class InlineCheckbox extends CheckboxTest {
}

describe("Checkbox", () => {
    let fixture: ComponentFixture<CheckboxTest>;
    let testInstance: CheckboxTest;
    let checkboxInstance: Checkbox;
    let checkboxElement: HTMLInputElement;
    let labelElement: HTMLLabelElement;

    function createTestComponent(component: Type<CheckboxTest>) {
        fixture = TestBed.createComponent(component);
        fixture.detectChanges();
        testInstance = fixture.componentInstance;
        checkboxInstance = testInstance.checkboxInstance;
        checkboxElement = <HTMLInputElement>fixture.nativeElement.querySelector("input");
        labelElement = <HTMLLabelElement>fixture.nativeElement.querySelector("label");
    }

    function assertChecked(checked: boolean) {
        fixture.detectChanges();
        expect(testInstance.checked).toBe(checked);
        expect(checkboxInstance.checked).toBe(checked);
        expect(checkboxElement.checked).toBe(checked);
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule, FormsModule],
            declarations: [BasicCheckbox, CheckboxWithNgModel, CheckboxWithLabel, CheckboxWithName, InlineCheckbox]
        });
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("displays a native checkbox and label", () => {
        createTestComponent(BasicCheckbox);
        expect(checkboxElement).not.toBeNull();
        expect(labelElement).not.toBeNull();
        expect(labelElement.htmlFor).toBe(checkboxElement.id);
    });

    it("projects into the label", () => {
        createTestComponent(CheckboxWithLabel);
        expect(labelElement.textContent.trim()).toBe("Hello world");
    });

    it("toggles the checked state based on [clrChecked] input", () => {
        createTestComponent(BasicCheckbox);
        assertChecked(false);
        fixture.componentInstance.checked = true;
        assertChecked(true);
        fixture.componentInstance.checked = false;
        assertChecked(false);
    });

    it("toggles the checked state based on user actions", () => {
        createTestComponent(BasicCheckbox);
        assertChecked(false);
        labelElement.click();
        assertChecked(true);
        labelElement.click();
        assertChecked(false);
    });

    it("applies the given name attribute to the native input", () => {
        createTestComponent(CheckboxWithName);
        expect(checkboxElement.getAttribute("name")).toBe("hello");
    });

    it("supports inline checkboxes", () => {
        createTestComponent(InlineCheckbox);
        expect(fixture.nativeElement.querySelector(".checkbox-inline")).not.toBeNull();
    });

    describe("ngModel support", () => {
        function flushAndAssertChecked(checked: boolean) {
            fixture.detectChanges();
            tick();
            assertChecked(checked);
        }

        it("toggles the checked state based on [ngModel] input", fakeAsync(() => {
            createTestComponent(CheckboxWithNgModel);
            flushAndAssertChecked(false);
            fixture.componentInstance.checked = true;
            flushAndAssertChecked(true);
            fixture.componentInstance.checked = false;
            flushAndAssertChecked(false);
        }));

        it("emits changes to (NgModelChange) based on user actions", fakeAsync(() => {
            createTestComponent(CheckboxWithNgModel);
            flushAndAssertChecked(false);
            labelElement.click();
            flushAndAssertChecked(true);
            labelElement.click();
            flushAndAssertChecked(false);
        }));
    });
});
