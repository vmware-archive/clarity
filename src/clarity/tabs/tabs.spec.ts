/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, ViewChild} from "@angular/core";
import {ClarityModule} from "../clarity.module";
import {TabLink} from "./tab-link";
import {TabContent} from "./tab-content";
import {Tabs} from "./tabs";

@Component({
    template: `
    <clr-tabs (clrTabsCurrentTabLinkChanged)="onTabLinkClicked($event)" 
              (clrTabsCurrentTabContentChanged)="onTabContentActivated($event)">
        <clr-tab-link>Tab1</clr-tab-link>
        <clr-tab-link [clrTabLinkActive]="true">Tab2</clr-tab-link>
        <clr-tab-link>Tab3</clr-tab-link>
        <clr-tab-link>Tab4</clr-tab-link>
        <clr-tab-content>
            <p>Content1</p>
        </clr-tab-content>
        <clr-tab-content [clrTabContentActive]="true">
            <p>Content2</p>
        </clr-tab-content>
        <clr-tab-content>
            <p>Content3</p>
        </clr-tab-content>
    </clr-tabs>
   `
})
class TestComponent {
    @ViewChild(Tabs) tabsInstance: Tabs;

    selectedTab: TabLink;
    activatedContent: TabContent;

    onTabLinkClicked(tabLink: TabLink): void {
        this.selectedTab = tabLink;
    }

    onTabContentActivated(tabContent: TabContent): void {
        this.activatedContent = tabContent;
    }
}

describe("Tabs", () => {
    let fixture: ComponentFixture<any>;
    let instance: any;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule.forRoot()],
            declarations: [TestComponent],
            providers: [TabLink, TabContent]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        instance = fixture.componentInstance.tabsInstance;
        compiled = fixture.nativeElement;
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("projects subcomponents", () => {
        expect(compiled.querySelectorAll("button.nav-link").length).toEqual(4);
        expect(compiled.querySelectorAll("section").length).toEqual(3);
    });

    it("sets the designated tab and content as active", () => {
        expect(instance.tabLinks[0].active).toBe(false);
        expect(instance.tabLinks[1].active).toBe(true);
        expect(instance.tabLinks[2].active).toBe(false);
        expect(instance.tabContents[0].active).toBe(false);
        expect(instance.tabContents[1].active).toBe(true);
        expect(instance.tabContents[2].active).toBe(false);
    });

    it("initializes the correct property values", () => {
        let linkElements: HTMLElement[] = compiled.querySelectorAll("clr-tab-link");
        let contentElements: HTMLElement[] = fixture.nativeElement.querySelectorAll("clr-tab-content");

        expect(instance.tabLinks[0].id).toMatch(/clr-tabs-[0-9]+-tab-0/);
        expect(instance.tabContents[0].id).toMatch(/clr-tabs-[0-9]+-content-0/);
        expect(linkElements[0].textContent).toMatch(/Tab1/);
        expect(contentElements[0].textContent).toMatch(/Content1/);

        expect(instance.tabLinks[1].id).toMatch(/clr-tabs-[0-9]+-tab-1/);
        expect(instance.tabContents[1].id).toMatch(/clr-tabs-[0-9]+-content-1/);
        expect(linkElements[1].textContent).toMatch(/Tab2/);
        expect(contentElements[1].textContent).toMatch(/Content2/);

        expect(instance.tabLinks[2].id).toMatch(/clr-tabs-[0-9]+-tab-2/);
        expect(instance.tabContents[2].id).toMatch(/clr-tabs-[0-9]+-content-2/);
        expect(linkElements[2].textContent).toMatch(/Tab3/);
        expect(contentElements[2].textContent).toMatch(/Content3/);

        expect(instance.tabLinks[3].id).toMatch(/clr-tabs-[0-9]+-tab-3/);
        expect(linkElements[3].textContent).toMatch(/Tab4/);
    });

    it("activates the matching tab content when a tab is selected", () => {
        instance.selectTab(instance.tabLinks[2]);
        expect(instance.tabLinks[0].active).toBe(false);
        expect(instance.tabLinks[1].active).toBe(false);
        expect(instance.tabLinks[2].active).toBe(true);
        expect(instance.tabContents[0].active).toBe(false);
        expect(instance.tabContents[1].active).toBe(false);
        expect(instance.tabContents[2].active).toBe(true);
    });

    it("does't activate any content when an orphan tab is selected", () => {
        instance.selectTab(instance.tabLinks[3]);
        expect(instance.tabLinks[0].active).toBe(false);
        expect(instance.tabLinks[1].active).toBe(false);
        expect(instance.tabLinks[2].active).toBe(false);
        expect(instance.tabLinks[3].active).toBe(true);
        expect(instance.tabContents[0].active).toBe(false);
        expect(instance.tabContents[1].active).toBe(false);
        expect(instance.tabContents[2].active).toBe(false);
    });

    it("emits a clrTabSelected event when a tab is clicked", (done: any) => {
        instance.currentTabLinkChanged.subscribe((selectedTab: TabLink) => {
            expect(selectedTab).toEqual(instance.tabLinks[0]);
            done();
        });

        instance.selectTab(instance.tabLinks[0]);
    });

    it("emits a clrTabContentActivated event when a tab is clicked", (done: any) => {
        instance.currentTabContentChanged.subscribe((activatedContent: TabContent) => {
            expect(activatedContent).toEqual(instance.tabContents[0]);
            done();
        });

        instance.selectTab(instance.tabLinks[0]);
    });

    it("emits a clrTabsCurrentTabIndexChanged event when a tab is clicked", (done: any) => {
        instance.currentTabIndexChanged.subscribe((index: number) => {
            expect(index).toEqual(0);
            done();
        });

        instance.selectTab(instance.tabLinks[0]);
    });
});
