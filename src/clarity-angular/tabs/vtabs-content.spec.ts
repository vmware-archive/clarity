/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { TestContext } from "../datagrid/helpers.spec";
import { VTabsContent } from "./vtabs-content";

export default function (): void {
    describe("VTabsContent", function () {

        let context: TestContext<VTabsContent, TestContent>;

        beforeEach(function() {
            context = this.create(VTabsContent, TestContent);
        });

        it("should not be activated", function () {
            let nullHeader = context.clarityElement.querySelector(".vtabs-content");
            expect(context.clarityDirective.activated).toBe(false);
            expect(nullHeader).toBeNull();
        });

        it("should project content when activated", function() {
            let nullHeader = context.clarityElement.querySelector(".vtabs-content");
            expect(nullHeader).toBeNull();
            context.clarityDirective.activated = true;
            context.detectChanges();
            let textHeader = context.clarityElement.querySelector(".vtabs-content");
            expect(textHeader.textContent.trim()).toEqual("VTabs Test Content");
        });
    });
}

@Component({
    template: `
        <clr-vtabs-content>VTabs Test Content</clr-vtabs-content>
    `
})

class TestContent {
    activated: boolean;
}
