/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef, Injector, Optional} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {IfOpenService} from "../../utils/conditional/if-open.service";
import {ESC} from "../../utils/key-codes/key-codes";

import {AbstractPopover} from "./abstract-popover";

describe("Abstract Popover", function() {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let ifOpenService: IfOpenService;

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [TestPopover], providers: [IfOpenService]});
        fixture = TestBed.createComponent(TestPopover);
        compiled = fixture.nativeElement;
        ifOpenService = fixture.debugElement.injector.get(IfOpenService);
        fixture.detectChanges();
    });

    it("adds a binding for keydown events", () => {
        spyOn(fixture.componentInstance, "onKeyDown").and.callThrough();

        fixture.debugElement.triggerEventHandler("keydown", {keyCode: ESC});

        expect(fixture.componentInstance.onKeyDown).toHaveBeenCalled();
    });

    it("closes the popover when ESC is pressed", () => {
        ifOpenService.open = true;

        fixture.debugElement.triggerEventHandler("keydown", {keyCode: ESC});

        expect(ifOpenService.open).toBe(false);
    });
});

@Component({
    template: `
        <div>Popover</div>
    `
})
class TestPopover extends AbstractPopover {
    constructor(injector: Injector, @Optional() parent: ElementRef) {
        super(injector, parent);
    }
}
