/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {PopoverDirective} from "./popover.directive";

describe("Popover directive", () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, PopoverDirective]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    afterEach(() => {
        fixture.destroy();
    });


    it("projects content", function () {
        expect(compiled.textContent).toMatch(/anchor1/);
        expect(compiled.textContent).toMatch(/anchor2/);
    });

    it("shows popover content if open", function () {
        fixture.componentInstance.open1 = true;
        fixture.detectChanges();
        expect(compiled.textContent).toMatch(/popover1/);
        expect(compiled.textContent).not.toMatch(/popover2/);
    });

    it("queues up opening of subsequent popovers if one is already open", function () {
        fixture.componentInstance.open1 = true;
        fixture.componentInstance.open2 = true;
        fixture.componentInstance.open3 = true;
        fixture.detectChanges();

        // should only display the first popover
        expect(compiled.textContent).toMatch(/popover1/);
        expect(compiled.textContent).not.toMatch(/popover2/);
        expect(compiled.textContent).not.toMatch(/popover3/);

        fixture.componentInstance.open1 = false;
        fixture.detectChanges();

        // should display the second popover, now that first one is closed
        expect(compiled.textContent).not.toMatch(/popover1/);
        expect(compiled.textContent).toMatch(/popover2/);
        expect(compiled.textContent).not.toMatch(/popover3/);

        fixture.componentInstance.open2 = false;
        fixture.detectChanges();

        // should display the third popover, now that second one is closed
        expect(compiled.textContent).not.toMatch(/popover1/);
        expect(compiled.textContent).not.toMatch(/popover2/);
        expect(compiled.textContent).toMatch(/popover3/);
    });
});

@Component({
    template: `
        <span #anchor1>anchor1</span>
        <div *clrPopover="open1; anchor: anchor1">
            <span>popover1</span>
        </div>
        <span #anchor2>anchor2</span>
        <div *clrPopover="open2; anchor: anchor2">
            <span>popover2</span>
        </div>
        <span #anchor3>anchor3</span>
        <div *clrPopover="open3; anchor: anchor3">
            <span>popover3</span>
        </div>
    `
})
class TestComponent {
    open1: boolean = false;
    open2: boolean = false;
    open3: boolean = false;
}