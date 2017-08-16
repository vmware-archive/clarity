/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {ClrIconModule} from "../../icon/icon.module";

import {VerticalNavGroupService} from "./providers/vertical-nav-group.service";
import {VerticalNavIconService} from "./providers/vertical-nav-icon.service";
import {VerticalNavService} from "./providers/vertical-nav.service";
import {VerticalNavGroup} from "./vertical-nav-group";
import {VerticalNavLink} from "./vertical-nav-link";
import {ClrVerticalNavModule} from "./vertical-nav.module";

export default function(): void {
    describe("Vertical Nav Links", () => {
        let fixture: ComponentFixture<any>;
        let compiled: HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ClrVerticalNavModule, ClrIconModule, NoopAnimationsModule],
                declarations: [TestComponent, TestComponentWithGroup]
            });
        });

        describe("View Basics", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
            });

            afterEach(() => {
                fixture.destroy();
            });

            it("adds the .nav-link class on the links", () => {
                const navLinks = compiled.querySelectorAll("a");

                expect(navLinks[0].classList.contains("nav-link")).toBeTruthy();
                expect(navLinks[1].classList.contains("nav-link")).toBeTruthy();
            });

            it("projects the text in .nav-text", () => {
                const navText = compiled.querySelectorAll(".nav-text");

                expect(navText[0].textContent).toMatch(/Text/);
            });

            it("projects the icon directly under it and the text in .nav-text", () => {
                const navText = compiled.querySelectorAll(".nav-text");

                expect(navText[1].textContent).toMatch(/Icon Text/);

                const icon = compiled.querySelector("clr-icon");

                expect(icon).not.toBeNull();

                expect(icon.parentElement).toBe(compiled.querySelector("#link2"));
            });
        });
    });
}


@Component({
    template: `
        <a href="#" clrVerticalNavLink id="link1">
            Text
        </a>
        <a href="#" clrVerticalNavLink id="link2">
            <clr-icon shape="home" clrVerticalNavIcon></clr-icon>
            Icon Text
        </a>
    `,
    providers: [VerticalNavService, VerticalNavIconService, VerticalNavGroupService]
})
class TestComponent {
}

@Component({
    template: `
        <clr-vertical-nav-group #group>
            Group
            <a href="#" clrVerticalNavLink id="link1" #link>
                Link 1
            </a>
            <a href="#" clrVerticalNavLink id="link2">
                Link 2
            </a>
        </clr-vertical-nav-group>
        <a href="#" clrVerticalNavLink id="link3">
            Link 3
        </a>
    `,
    providers: [VerticalNavService, VerticalNavIconService, VerticalNavGroupService]
})
class TestComponentWithGroup {
    @ViewChild("group") navGroup: VerticalNavGroup;
    @ViewChild("link") navLink: VerticalNavLink;
}
