/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, ViewChildren, QueryList} from "@angular/core";
import {ClrTabsModule} from "./tabs.module";
import {IfActiveService} from "../../utils/conditional/if-active.service";
import {TabLinkDirective} from "./tab-link.directive";
import {TabsService} from "./tabs-service";

@Component({
    template: `
        <clr-tab>
            <button clrTabLink>Tab1</button>
        </clr-tab>
        <clr-tab>
            <button clrTabLink>Tab2</button>
        </clr-tab>
    `
})
class TestComponent {
    @ViewChildren(TabLinkDirective) tabLinkChildren: QueryList<TabLinkDirective>;
}

describe("TabLink Directive", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let instance: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrTabsModule],
            declarations: [TestComponent],
            providers: [IfActiveService, TabsService]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        instance = fixture.componentInstance;
    });

    it("has the correct css classes", () => {
        expect(compiled.querySelector(".nav-item")).not.toBeNull();
        expect(compiled.querySelector(".nav-link")).not.toBeNull();
    });

    it("sets itself as active when clicked", () => {
        let links: TabLinkDirective[] = instance.tabLinkChildren.toArray();
        expect(links[0].active).toEqual(true);
        expect(links[1].active).toEqual(false);

        let tabLinks: HTMLElement[] = compiled.querySelectorAll("button");
        tabLinks[1].click();
        fixture.detectChanges();
        expect(links[0].active).toEqual(false);
        expect(links[1].active).toEqual(true);

    });
});
