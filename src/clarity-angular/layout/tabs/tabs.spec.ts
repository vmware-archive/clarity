/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Type, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {addHelpers, TestContext} from "../../data/datagrid/helpers.spec";

import {Tab} from "./tab";
import {Tabs} from "./tabs";
import {TabsService} from "./tabs-service";
import {ClrTabsModule} from "./tabs.module";

@Component({
    template: `
    <clr-tabs>
        <clr-tab #first>
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive>
                <p>Content1</p>
            </clr-tab-content>
        </clr-tab>

        <clr-tab>
            <button clrTabLink>Tab2</button>
            <clr-tab-content *clrIfActive>
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
            <clr-tab-content *clrIfActive>
                <p class="content-overflow">Content4</p>
            </clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `
})
class TestComponent {
    @ViewChild(Tabs) tabsInstance: Tabs;
    @ViewChild("first") firstTab: Tab;
    inOverflow: boolean = false;
}

@Component({
    template: `
    <clr-tabs>
        <clr-tab *ngIf="true" #first>
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive>Content1</clr-tab-content>
        </clr-tab>
        <clr-tab>
            <button clrTabLink>Tab2</button>
            <clr-tab-content *clrIfActive>Content2</clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `
})
class NgIfFirstTest {
    @ViewChild("first") firstTab: Tab;
}

@Component({
    template: `
    <clr-tabs>
        <clr-tab #first>
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive>Content1</clr-tab-content>
        </clr-tab>
        <clr-tab *ngIf="true">
            <button clrTabLink>Tab2</button>
            <clr-tab-content *clrIfActive>Content2</clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `
})
class NgIfSecondTest {
    @ViewChild("first") firstTab: Tab;
}

describe("Tabs", () => {
    describe("Projection", () => {
        let fixture: ComponentFixture<any>;
        let instance: any;
        let compiled: any;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [ClrTabsModule], declarations: [TestComponent]});

            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            instance = fixture.componentInstance.tabsInstance;
            compiled = fixture.nativeElement;
        });

        afterEach(() => {
            fixture.destroy();
        });

        it("projects all the links and just the active content", () => {
            expect(compiled.querySelectorAll("button.nav-link").length).toEqual(4);
            expect(compiled.querySelectorAll("p").length).toEqual(1);

            const content: HTMLElement = compiled.querySelector("p");
            expect(content.textContent.trim()).toMatch("Content1");
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

    describe("Default tab", function() {
        addHelpers();

        function expectFirstTabActive<T extends TestComponent|NgIfFirstTest|NgIfSecondTest>(testType: Type<T>) {
            const context: TestContext<Tabs, T> = this.create(Tabs, testType);
            const tabsService = context.getClarityProvider(TabsService);
            expect(tabsService.activeTab).toEqual(context.testComponent.firstTab);
        }

        it("sets the first tab as active by default", function() {
            expectFirstTabActive.call(this, TestComponent);
        });

        it("doesn't ignore tabs with *ngIf", function() {
            expectFirstTabActive.call(this, NgIfFirstTest);
        });

        it("doesn't prioritize tabs with *ngIf", function() {
            expectFirstTabActive.call(this, NgIfSecondTest);
        });
    });
});
