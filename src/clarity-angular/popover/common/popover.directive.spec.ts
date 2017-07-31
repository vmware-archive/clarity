/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {IfOpenService} from "../../utils/conditional/if-open.service";

import {PopoverDirective} from "./popover.directive";

describe("Popover directive", () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [TestComponent, PopoverDirective], providers: [IfOpenService]});

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("projects content", function() {
        expect(compiled.textContent).toMatch(/anchor1/);
    });

    it("positions popover only if the open property of ifOpenService is true", function() {
        let position: string;

        position = getComputedStyle(fixture.componentInstance.popover.nativeElement).position;
        expect(position).toEqual("static");

        fixture.componentInstance.popoverDirective.ifOpenService.open = true;
        fixture.detectChanges();
        position = getComputedStyle(fixture.componentInstance.popover.nativeElement).position;
        expect(position).toEqual("absolute");
    });
});

@Component({
    template: `
        <span #anchor1>anchor1</span>
        <div #popover [clrPopoverAnchor]="anchor1">
            <span>popover1</span>
        </div>
    `
})
class TestComponent {
    @ViewChild(PopoverDirective) popoverDirective: PopoverDirective;
    @ViewChild("popover", {read: ElementRef}) popover: ElementRef;
}
