/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {IfOpenService} from "../../utils/conditional/if-open.service";

import {TabOverflowContent} from "./tab-overflow-content";

@Component({
    template: `
        <clr-tab-overflow-content>
            Hello world
        </clr-tab-overflow-content>
    `
})
class TestComponent {}

describe("TabOverflowContent", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let instance: any;

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [TabOverflowContent, TestComponent], providers: [IfOpenService]});

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        instance = fixture.componentInstance;
    });

    it("has the correct css classes", () => {
        expect(compiled.querySelector(".dropdown-menu")).not.toBeNull();
    });

    it("projects content", () => {
        expect(compiled.textContent.trim()).toMatch("Hello world");
    });
});
