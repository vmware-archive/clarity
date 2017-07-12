/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, ViewChild} from "@angular/core";
import {ClrTabsModule} from "./tabs.module";
import {Tabs} from "./tabs";
import {IfActiveService} from "../../utils/conditional/if-active.service";
import {TabsService} from "./tabs-service";

@Component({
    template: `
    <clr-tabs>
        <clr-tab>
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive="true">
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
            <button clrTabLink>Tab4</button>
            <clr-tab-content *clrIfActive>
                <p>Content4</p>
            </clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `
})
class TestComponent {
    @ViewChild(Tabs) tabsInstance: Tabs;
}

describe("Tabs", () => {
    let fixture: ComponentFixture<any>;
    let instance: any;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrTabsModule],
            declarations: [TestComponent],
            providers: [Tabs, IfActiveService, TabsService]
        });

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
        expect(compiled.querySelectorAll("section").length).toEqual(1);

        let section: HTMLElement = compiled.querySelector("section");
        expect(section.textContent.trim()).toMatch("Content1");
    });

    it("sets the first tab as active by default", () => {
        expect(instance.activeTab).toEqual(instance.tabsService.children[0]);
    });
});
