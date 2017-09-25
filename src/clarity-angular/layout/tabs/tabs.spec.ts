/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {IfActiveService} from "../../utils/conditional/if-active.service";

import {TabLinkDirective} from "./tab-link.directive";
import {Tabs} from "./tabs";
import {TabsService} from "./tabs-service";
import {ClrTabsModule} from "./tabs.module";

@Component({
    template: `
    <clr-tabs>
        <clr-tab *ngIf="true">
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive>
                <p>Content1</p>
            </clr-tab-content>
        </clr-tab>

        <clr-tab>
            <button clrTabLink>Tab2</button>
            <clr-tab-content *clrIfActive="isSecondTabActive">
                <p>Content2</p>
            </clr-tab-content>
        </clr-tab>

        <clr-tab>
            <button clrTabLink>Tab3</button>
            <clr-tab-content *clrIfActive>
                <p>Content3</p>
            </clr-tab-content>
        </clr-tab>

        <clr-tab>
            <button clrTabLink [clrTabLinkInOverflow]="inOverflow" class="tab4">Tab4</button>
            <clr-tab-content *clrIfActive="isFourthTabActive">
                <p class="content-overflow">Content4</p>
            </clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `
})
class TestComponent {
    @ViewChild(Tabs) tabsInstance: Tabs;
    inOverflow: boolean = false;
    isSecondTabActive: boolean = false;
    isFourthTabActive: boolean = false;
}

describe("Tabs", () => {
    let fixture: ComponentFixture<any>;
    let instance: any;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule(
            {imports: [ClrTabsModule], declarations: [TestComponent], providers: [Tabs, IfActiveService, TabsService]});

        fixture = TestBed.createComponent(TestComponent);

        instance = fixture.componentInstance.tabsInstance;
        compiled = fixture.nativeElement;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("projects all the links and just the active content", () => {
        expect(compiled.querySelectorAll("button.nav-link.nav-item.btn-link").length).toEqual(4);
        expect(compiled.querySelectorAll("p").length).toEqual(1);
        expect(compiled.querySelectorAll("button.active").length).toEqual(1);
        const activeTabNativeEl: HTMLElement = instance.tabLinkDirectives.first.el.nativeElement;
        expect(compiled.querySelector("button.active")).toEqual(activeTabNativeEl);

        expect(instance.tabsService.activeTab.tabLink).toEqual(instance.tabLinkDirectives.first);
        const content: HTMLElement = compiled.querySelector("p");
        expect(content.textContent.trim()).toMatch("Content1");
    });


    it("sets the second tab as active at the beginning", () => {
        fixture.componentInstance.isSecondTabActive = true;
        fixture.detectChanges();
        const activeTablinkDirective = instance.tabLinkDirectives.find((tabLink: TabLinkDirective) => {
            if (tabLink.active) {
                return tabLink;
            }
        });
        expect(compiled.querySelectorAll("button.nav-link.nav-item.btn-link").length).toEqual(4);
        expect(compiled.querySelectorAll("button.active").length).toEqual(1);
        const activeTabNativeEl: HTMLElement = activeTablinkDirective.el.nativeElement;
        expect(compiled.querySelector("button.active")).toEqual(activeTabNativeEl);
        expect(compiled.querySelectorAll("p").length).toEqual(1);

        expect(instance.tabsService.activeTab.tabLink).toEqual(activeTablinkDirective);
        const content: HTMLElement = compiled.querySelector("p");
        expect(content.textContent.trim()).toMatch("Content2");
    });

    it("sets the overflow tab as active at the beginning", () => {
        fixture.componentInstance.isFourthTabActive = true;
        fixture.componentInstance.inOverflow = true;
        fixture.detectChanges();
        const activeTablinkDirective = instance.tabLinkDirectives.find((tabLink: TabLinkDirective) => {
            if (tabLink.active) {
                return tabLink;
            }
        });
        expect(compiled.querySelector(".tabs-overflow")).toBeDefined();
        expect(compiled.querySelectorAll("button.nav-link.nav-item.btn-link").length).toEqual(3);
        expect(compiled.querySelectorAll("button.active").length)
            .toEqual(2, `both .dropdown-toggle and the active overflow tab should have 'active' class.`);
        expect(compiled.querySelectorAll("p").length).toEqual(1);

        expect(instance.tabsService.activeTab.tabLink).toEqual(activeTablinkDirective);
        const content: HTMLElement = compiled.querySelector("p");
        expect(content.textContent.trim()).toMatch("Content4");
    });

    it("projects correctly when there's one or more overflow tabs", () => {
        expect(compiled.querySelector(".tabs-overflow")).toBeNull();
        expect(compiled.querySelector(".tab4")).toBeDefined();
        expect(compiled.querySelector(".tabs-overflow .tab4")).toBeNull();

        fixture.componentInstance.inOverflow = true;
        fixture.detectChanges();
        expect(compiled.querySelector(".tabs-overflow")).toBeDefined();

        const toggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
        toggle.click();
        fixture.detectChanges();
        expect(compiled.querySelector(".tabs-overflow .tab4")).toBeDefined();

    });
});
