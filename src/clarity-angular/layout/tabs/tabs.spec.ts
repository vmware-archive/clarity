/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Type, ViewChild} from "@angular/core";

import {addHelpers, TestContext} from "../../data/datagrid/helpers.spec";

import {Tab} from "./tab";
import {Tabs} from "./tabs";
import {TabsService} from "./tabs-service";

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

@Component({
    template: `
    <clr-tabs>
        <clr-tab>
            <button clrTabLink>ParentTab 1</button>
            <clr-tab-content *clrIfActive>Parent Content 1</clr-tab-content>
        </clr-tab>
        <clr-tab>
            <button clrTabLink>Parent Tab 2</button>
                <clr-tab-content *clrIfActive="true">
                    <clr-tabs>
                        <clr-tab>
                            <button clrTabLink>Child Tab1</button>
                            <clr-tab-content *clrIfActive>Child Content1</clr-tab-content>
                        </clr-tab>
                        <clr-tab *ngIf="true">
                            <button clrTabLink>Child Tab2</button>
                            <clr-tab-content *clrIfActive>Child Content2</clr-tab-content>
                        </clr-tab>
                    </clr-tabs>
                </clr-tab-content>
        </clr-tab>
    </clr-tabs>
    `
})
class NestedTabsTest {
    @ViewChild(Tabs) tabsInstance: Tabs;
}

describe("Tabs", () => {

    addHelpers();

    describe("Projection", () => {

        let context: TestContext<Tabs, TestComponent>;
        let compiled: any;

        beforeEach(function() {
            context = this.create(Tabs, TestComponent);
            context.fixture.detectChanges();
            compiled = context.fixture.nativeElement;
        });

        afterEach(() => {
            context.fixture.destroy();
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

            context.fixture.componentInstance.inOverflow = true;
            context.fixture.detectChanges();
            expect(compiled.querySelector(".tabs-overflow")).toBeDefined();

            const toggle: HTMLElement = compiled.querySelector(".dropdown-toggle");
            toggle.click();
            context.fixture.detectChanges();
            expect(compiled.querySelector(".tabs-overflow .tab4")).toBeDefined();

        });
    });

    describe("Nested Projection", () => {

        let context: TestContext<Tabs, NestedTabsTest>;
        let compiled: any;

        beforeEach(function() {
            context = this.create(Tabs, NestedTabsTest);
            context.fixture.detectChanges();
            compiled = context.fixture.nativeElement;
        });

        afterEach(() => {
            context.fixture.destroy();
        });

        it("shouldn't project nested tab links in parent tabs", () => {
            expect(compiled.querySelectorAll("button.nav-link").length).toEqual(4);
            const parentLevelNav = compiled.querySelectorAll("ul.nav")[0];
            const childLevelNav = compiled.querySelectorAll("ul.nav")[1];
            expect(parentLevelNav.querySelectorAll("button.nav-link").length).toEqual(2);
            expect(childLevelNav.querySelectorAll("button.nav-link").length).toEqual(2);
        });
    });

    describe("Default tab", function() {

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
