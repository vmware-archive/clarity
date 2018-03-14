/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef, Injector, Optional, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ClrConditionalModule} from "../../utils/conditional/conditional.module";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {ESC} from "../../utils/key-codes/key-codes";

import {AbstractPopover} from "./abstract-popover";

describe("Abstract Popover", function() {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let ifOpenService: IfOpenService;

    describe("Keyboard Events", () => {
        beforeEach(() => {
            TestBed.configureTestingModule({declarations: [TestPopover], providers: [IfOpenService]});
            ifOpenService = TestBed.get(IfOpenService);
            ifOpenService.open = true;
            fixture = TestBed.createComponent(TestPopover);
            compiled = fixture.nativeElement;
            fixture.detectChanges();
        });

        it("closes the popover when ESC is pressed", () => {
            const event: KeyboardEvent = new KeyboardEvent("keydown");
            Object.defineProperties(event, {keyCode: {get: () => ESC}});

            document.dispatchEvent(event);

            expect(ifOpenService.open).toBe(false);
        });
    });

    describe("Popover with clrIfOpen Directive", () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestPopover, TestPopoverWithIfOpenDirective],
                imports: [ClrConditionalModule],
                providers: [IfOpenService]
            });
            ifOpenService = TestBed.get(IfOpenService);
            fixture = TestBed.createComponent(TestPopoverWithIfOpenDirective);
            compiled = fixture.nativeElement;
            fixture.detectChanges();
        });

        it("opens the abstract popover only after IfOpenService is in open state", () => {
            expect(ifOpenService.open).toBe(false);
            expect(fixture.componentInstance.testPopover).toBeUndefined();

            ifOpenService.open = true;
            fixture.detectChanges();

            expect(fixture.componentInstance.testPopover).not.toBeUndefined();
        });
    });
});

@Component({
    selector: "test-popover",
    template: `
        <div>Popover</div>
    `
})
class TestPopover extends AbstractPopover {
    constructor(injector: Injector, @Optional() parent: ElementRef) {
        super(injector, parent);
    }
}

@Component({
    template: `
        <test-popover *clrIfOpen></test-popover>
    `
})
class TestPopoverWithIfOpenDirective {
    @ViewChild(TestPopover) testPopover;
}
