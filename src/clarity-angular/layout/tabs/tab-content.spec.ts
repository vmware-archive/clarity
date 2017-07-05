/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, ViewChild} from "@angular/core";
import { ClrTabsModule } from "./tabs.module";
import {IF_ACTIVE_ID_PROVIDER, IfActiveService} from "../../utils/conditional/if-active.service";
import {TabContent} from "./tab-content";

@Component({
    template: `
        <clr-tab-content>Content1</clr-tab-content>
   `
})
class TestComponent {
    @ViewChild(TabContent) tabContent: TabContent;
}

describe("TabContent", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrTabsModule],
            declarations: [TestComponent],
            providers: [IfActiveService, IF_ACTIVE_ID_PROVIDER]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    it("creates ng-templates that can be rendered through templateOutlet", () => {
        expect(fixture.componentInstance.tabContent.templateRef).toBeDefined();
    });

});
