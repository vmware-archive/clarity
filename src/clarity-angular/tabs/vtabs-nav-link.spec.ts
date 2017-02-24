/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { TestContext } from "../datagrid/helpers.spec";
import { VTabsNavLink } from "./vtabs-nav-link";

export default function (): void {
    describe("VTabsNavLink", function () {

        describe("default state", function () {
            let context: TestContext<VTabsNavLink, TestNavLink>;
            beforeEach(function() {
                context = this.create(VTabsNavLink, TestNavLink);
            });

            it("should not be activated", function () {
                expect(context.clarityDirective.activated).toBe(false);
                let activeState = context.clarityElement.querySelector(".nav-link.active");
                expect(activeState).toBeNull();
            });

            it("should project content", function() {
                let projectedContent = context.testElement.querySelector(".btn-link");
                expect(projectedContent.textContent.trim()).toEqual("VTabsNavLink Test Content");
            });

            it("should activate when clicked", function () {
                let activator = context.clarityElement.querySelector("li");
                expect(context.clarityDirective.activated).toBe(false);
                activator.click();
                expect(context.clarityDirective.activated).toBe(true);
                let activeState = context.clarityElement.querySelector(".nav-link.active");
                expect(activeState).toBeDefined();
            });
        });

        describe("activated state", function () {
            let context: TestContext<VTabsNavLink, TestActivatedNavLink>;
            beforeEach((function() {
                context = this.create(VTabsNavLink, TestActivatedNavLink);
            }));

            it("should expose the activated Input", function () {
                let activeState = context.clarityElement.querySelector(".nav-link.active");
                expect(activeState).toBeDefined();
                expect(context.clarityDirective.activated).toBe(true);
                context.testComponent.activeLink = false;
                context.detectChanges();
                expect(context.clarityDirective.activated).toBe(false);
            });
        });
    });
}

@Component({
    template: `
        <clr-vtabs-nav-link>VTabsNavLink Test Content</clr-vtabs-nav-link>
    `
})
class TestNavLink {

}

@Component({
    template: `
        <clr-vtabs-nav-link [clrActivatedNavLink]="activeLink">VTabsNavLink Test Content</clr-vtabs-nav-link>
    `
})
class TestActivatedNavLink {
    activeLink = true;
}
