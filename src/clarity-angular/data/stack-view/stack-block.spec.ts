/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {StackBlock} from "./stack-block";
import {StackView} from "./stack-view";
import {ClrStackViewModule} from "./stack-view.module";

@Component({
    template: `
        <clr-stack-block>
            <clr-stack-label>Label</clr-stack-label>
            <clr-stack-content>Content</clr-stack-content>
        </clr-stack-block>
   `
})
class BasicBlock {
    @ViewChild(StackBlock) blockInstance: StackBlock;
}

@Component({
    template: `
        <clr-stack-block #main>
            <clr-stack-label>Label</clr-stack-label>
            <clr-stack-content>Content</clr-stack-content>
            <clr-stack-block>
                <clr-stack-label>Sub-Label 1</clr-stack-label>
                <clr-stack-content>Sub-Content 1</clr-stack-content>
            </clr-stack-block>
            <clr-stack-block>
                <clr-stack-label>Sub-Label 2</clr-stack-label>
                <clr-stack-content>Sub-Content 2</clr-stack-content>
            </clr-stack-block>
        </clr-stack-block>
   `
})
class NestedBlocks {
    @ViewChild("main") blockInstance: StackBlock;
}

@Component({
    template: `
        <clr-stack-block [clrSbExpandable]="true" [(clrSbExpanded)]="expanded">
            <clr-stack-label>Label</clr-stack-label>
            <clr-stack-content>Content</clr-stack-content>
        </clr-stack-block>
   `
})
class DynamicBlock {
    @ViewChild(StackBlock) blockInstance: StackBlock;

    expanded: boolean = false;
}

export default function(): void {
    "use strict";
    describe("StackBlock", () => {
        let fixture: ComponentFixture<any>;
        let compiled: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ClrStackViewModule, NoopAnimationsModule, FormsModule],
                declarations: [BasicBlock, DynamicBlock, NestedBlocks],
                providers: [StackView]
            });
        });

        afterEach(() => {
            fixture.destroy();
        });

        function getBlockInstance(bFixture: ComponentFixture<any>): StackBlock {
            return bFixture.componentInstance.blockInstance;
        }

        it("projects content", () => {
            fixture = TestBed.createComponent(BasicBlock);
            fixture.detectChanges();
            compiled = fixture.nativeElement;

            expect(compiled.textContent).toMatch(/Label/);
            expect(compiled.textContent).toMatch(/Content/);
        });

        it("is not expandable by default", () => {
            fixture = TestBed.createComponent(BasicBlock);
            fixture.detectChanges();

            expect(getBlockInstance(fixture).expandable).toBeFalsy();
        });

        it("is automatically expandable if has block children", () => {
            fixture = TestBed.createComponent(NestedBlocks);
            fixture.detectChanges();

            expect(getBlockInstance(fixture).expandable).toBeTruthy();
        });

        it("can be made expandable without block children", () => {
            fixture = TestBed.createComponent(DynamicBlock);
            fixture.detectChanges();

            expect(getBlockInstance(fixture).expandable).toBeTruthy();
        });

        it("starts collapsed", () => {
            fixture = TestBed.createComponent(DynamicBlock);
            fixture.detectChanges();

            expect(getBlockInstance(fixture).expanded).toBeFalsy();
        });

        it("expands and collapses when clicking on the label", () => {
            fixture = TestBed.createComponent(DynamicBlock);
            fixture.detectChanges();
            expect(getBlockInstance(fixture).expanded).toBeFalsy();

            fixture.nativeElement.querySelector("clr-stack-label").click();
            fixture.detectChanges();
            expect(getBlockInstance(fixture).expanded).toBeTruthy();

            fixture.nativeElement.querySelector("clr-stack-label").click();
            fixture.detectChanges();
            expect(getBlockInstance(fixture).expanded).toBeFalsy();
        });

        it("offers two-way binding on clrSbExpanded", () => {
            fixture = TestBed.createComponent(DynamicBlock);
            fixture.componentInstance.expanded = true;
            fixture.detectChanges();
            expect(getBlockInstance(fixture).expanded).toBeTruthy();

            fixture.nativeElement.querySelector("clr-stack-label").click();
            fixture.detectChanges();
            expect(fixture.componentInstance.expanded).toBeFalsy();
        });
    });
}