/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, QueryList, ViewChildren} from "@angular/core";
import {TabContent} from "./tab-content";
import { ClrTabsModule } from "./tabs.module";

@Component({
    template: `
        <clr-tab-content [clrTabContentActive]="true">Content1</clr-tab-content>
        <clr-tab-content>Content2</clr-tab-content>
   `
})
class TestComponent {
    @ViewChildren(TabContent) tabContentChildren: QueryList<TabContent>;
}

describe("TabContent", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrTabsModule],
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    it("initializes the correct property values", () => {
        let tabContents: TabContent[] = fixture.componentInstance.tabContentChildren.toArray();

        expect(tabContents[0].active).toEqual(true);
        expect(tabContents[1].active).toEqual(false);
    });

});
