/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    ComponentFixture,
    TestBed,
    async,
    fakeAsync,
    tick
} from "@angular/core/testing";
import { Component, ViewChild } from "@angular/core";
import { Modal } from "./modal";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ClrModalModule } from "./modal.module";

@Component({
    template: `
        <clr-modal [(clrModalOpen)]="opened"
            [clrModalClosable]="closable"
            [clrModalSize]="size"
            [clrModalStaticBackdrop]="staticBackdrop">
            <h4 class="modal-title">Title</h4>
            <div class="modal-body">
                <p>Body</p>
            </div>
            <div class="modal-footer">
                <button (click)="opened = false">Footer</button>
            </div>
        </clr-modal>
   `
})
class TestComponent {
    @ViewChild(Modal) modalInstance: Modal;

    opened: boolean = true;
    closable: boolean = true;
    size: string = "";
    staticBackdrop: boolean = false;
}

describe("Modal", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ClrModalModule,
                NoopAnimationsModule
            ],
            declarations: [TestComponent]
        });

        return TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            compiled = fixture.nativeElement;
        });
    }));

    function getModalInstance(componentFixture: ComponentFixture<any>): Modal {
        return componentFixture.componentInstance.modalInstance;
    }

    function flushAndExpectOpen(componentFixture: ComponentFixture<any>, open: boolean): void {
        componentFixture.detectChanges();
        tick();

        let text: string = componentFixture.nativeElement.textContent.trim();
        if (open) {
            expect(text).not.toBe("");
        } else {
            expect(text).toBe("");
        }
    }

    it("projects content", fakeAsync(() => {
        expect(compiled.textContent).toMatch(/Title/);
        expect(compiled.textContent).toMatch(/Body/);
        expect(compiled.textContent).toMatch(/Footer/);
    }));

    it("shows and hides the modal based on the clrModalOpen input", fakeAsync(() => {
        fixture.componentInstance.opened = false;
        flushAndExpectOpen(fixture, false);

        fixture.componentInstance.opened = true;
        flushAndExpectOpen(fixture, true);
    }));

    it("exposes open() and close() methods", fakeAsync(() => {
        getModalInstance(fixture).close();
        flushAndExpectOpen(fixture, false);

        getModalInstance(fixture).open();
        flushAndExpectOpen(fixture, true);
    }));

    it("should not open if already opened", fakeAsync(() => {
        spyOn(getModalInstance(fixture)._openChanged, "emit");
        getModalInstance(fixture).open();
        expect(getModalInstance(fixture)._openChanged.emit).not.toHaveBeenCalled();
    }));

    it("should not close when already closed", fakeAsync(() => {
        fixture.componentInstance.opened = false;
        spyOn(getModalInstance(fixture), "close");
        expect(getModalInstance(fixture).close).not.toHaveBeenCalled();
    }));

    it("offers two-way binding on clrModalOpen", fakeAsync(() => {
        expect(fixture.componentInstance.opened).toBe(true);
        getModalInstance(fixture).close();
        fixture.detectChanges();

        // We make sure to wait for the animation to be over before emitting the output

        // todo: uncomment this after animation bug is fixed https://github.com/angular/angular/issues/15798
        // expect(fixture.componentInstance.opened).toBe(true);
        tick();
        expect(fixture.componentInstance.opened).toBe(false);
    }));

    it("supports a clrModalSize option", fakeAsync(() => {
        expect(compiled.querySelector(".modal-sm")).toBeNull();
        expect(compiled.querySelector(".modal-lg")).toBeNull();

        fixture.componentInstance.size = "sm";
        fixture.detectChanges();

        expect(compiled.querySelector(".modal-sm")).not.toBeNull();
        expect(compiled.querySelector(".modal-lg")).toBeNull();

        fixture.componentInstance.size = "lg";
        fixture.detectChanges();

        expect(compiled.querySelector(".modal-sm")).toBeNull();
        expect(compiled.querySelector(".modal-lg")).not.toBeNull();
    }));

    it("supports a clrModalClosable option", fakeAsync(() => {
        fixture.componentInstance.closable = false;
        fixture.detectChanges();

        expect(compiled.querySelector(".close")).toBeNull();

        getModalInstance(fixture).close();
        flushAndExpectOpen(fixture, true);

        fixture.componentInstance.closable = true;
        fixture.detectChanges();

        expect(compiled.querySelector(".close")).not.toBeNull();
        getModalInstance(fixture).close();
        fixture.detectChanges();

        flushAndExpectOpen(fixture, false);
    }));

    it("supports a clrModalStaticBackdrop option", fakeAsync(() => {
        let backdrop: HTMLElement = compiled.querySelector(".modal-backdrop");

        fixture.componentInstance.staticBackdrop = true;
        fixture.detectChanges();

        // Just make sure we have the "x" to close the modal,
        // because this is different from the clrModalClosable option.
        expect(compiled.querySelector(".close")).not.toBeNull();

        backdrop.click();
        flushAndExpectOpen(fixture, true);

        fixture.componentInstance.staticBackdrop = false;
        fixture.detectChanges();

        backdrop.click();
        flushAndExpectOpen(fixture, false);
    }));
});
