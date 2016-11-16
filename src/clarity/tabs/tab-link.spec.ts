/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, QueryList, ViewChildren} from "@angular/core";
import {TABS_DIRECTIVES} from "./index";
import {TabLink} from "./tab-link";
import {ClarityModule} from "../clarity.module";

@Component({
    template: `
        <clr-tab-link [clrTabLinkActive]="true">Tab1</clr-tab-link>
        <clr-tab-link>Tab2</clr-tab-link>
   `
})
class TestComponent {
    @ViewChildren(TabLink) tabLinkChildren: QueryList<TabLink>;
}

describe("TabLink", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule],
            declarations: [TestComponent],
            providers: [TABS_DIRECTIVES]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    it("has the correct css classes", () => {
        expect(compiled.querySelector(".nav-item")).not.toBeNull();
        expect(compiled.querySelector(".nav-link")).not.toBeNull();
    });

    it("initializes the correct property values", () => {
        let tabLinks: TabLink[] = fixture.componentInstance.tabLinkChildren.toArray();

        expect(tabLinks[0].active).toEqual(true);
        expect(tabLinks[1].active).toEqual(false);
    });
});
