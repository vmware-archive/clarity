/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, EventEmitter } from "@angular/core";
import { TestContext } from "../datagrid/helpers.spec";
import { VTabs} from "./vtabs";
import { VTabsNavLink } from "./vtabs-nav-link";
import { VTabsContent } from "./vtabs-content";

export default function (): void {
    describe("VTabs", function () {

        describe("has default state", function () {
            let context: TestContext<VTabs, DefaultVTabs>;
            beforeEach(function () {
                context = this.create(VTabs, DefaultVTabs);
            });

            it("should have a list of vtabLinks", function () {
                let tabLinks = context.clarityDirective.vtabLinks;
                expect(tabLinks).toBeDefined();
                expect(tabLinks.length).toBe(2);
            });

            it("should have a list of vtabContents", function () {
                let vtabContentItems = context.clarityDirective.vtabContents;
                expect(vtabContentItems).toBeDefined();
                expect(vtabContentItems.length).toBe(2);
            });

            it("should default to false for the clrReversed input", function () {
                let reversed = context.clarityDirective.reversed;
                expect(reversed).toBeDefined();
                expect(reversed).toBe(false);
            });

            it("activate the first tabLink / content item by default", function () {
                // The first nav link should have an activated state
                let firstLink = context.clarityDirective.vtabLinks.first;
                let firstContent = context.clarityDirective.vtabContents.first;
                expect(firstLink.activated).toBe(true);
                expect(firstContent.activated).toBe(true);
            });

            it("should not activate more than one nav link child", function () {
                let activatedCount: number  = 0;
                context.clarityDirective.vtabLinks.forEach(function (item) {
                    if (item.activated) {
                        activatedCount++;
                    }
                });
                expect(activatedCount).toBe(1);
            });

            it("should not activate more than one content child", function () {
                let activatedCount: number = 0;
                context.clarityDirective.vtabContents.forEach(function (item) {
                    if (item.activated) {
                        activatedCount++;
                    }
                });
            });

            it("should emit an event when the active nav link changes", function () {
                let links = context.testElement.querySelectorAll("li");
                let activator: HTMLElement = links[1];
                spyOn(context.testComponent, "handleVTabsNavChange");
                activator.click();
                expect(context.testComponent.handleVTabsNavChange).toHaveBeenCalled();
            });

            it("should emit an event when the active content changes", function () {

                let links = context.testElement.querySelectorAll("li");
                let activator: HTMLElement = links[1];
                spyOn(context.testComponent, "handleVTabsContentChange");
                activator.click();
                expect(context.testComponent.handleVTabsContentChange).toHaveBeenCalled();
            });

            it("maps links to content by id", function () {
                let linkArray = context.clarityDirective.vtabLinks.toArray();
                let contentArray = context.clarityDirective.vtabContents.toArray();
                for (let i = 0; i < linkArray.length; i++) {
                    expect(linkArray[i].id).toEqual(contentArray[i].id);
                }
            });

            it("activates content when link is clicked", function () {
                let lastContent = context.clarityDirective.vtabContents.last;
                let links = context.testElement.querySelectorAll("li");
                let activator: HTMLElement = links[1];
                expect(lastContent.activated).toBe(false);
                activator.click();
                expect(lastContent.activated).toBe(true);
            });
        });

        describe("allows user to configure", function () {

            let context: TestContext<VTabs, PreselectedVTabs>;
            beforeEach(function () {
                context = this.create(VTabs, PreselectedVTabs);
            });

            it("a pre-selected tab", function () {
                let activeLink = context.testElement.querySelector(".nav-link.active");
                expect(activeLink.textContent.trim()).toBe("The Wastelands");
            });

            it("a reversed state", function () {
                let isReversed = context.testElement.querySelector(".vtabs.is-reversed");
                expect(isReversed).not.toBeNull();
            });
        });
    });
}

@Component({
    template: `
        <clr-vtabs (clrVTabsNavChange)="handleVTabsNavChange($event)"
                   (clrVTabsNavChange)="handleVTabsContentChange($event)">
            <clr-vtabs-nav-link>The Gunslinger</clr-vtabs-nav-link>
            <clr-vtabs-nav-link>The Wastelands</clr-vtabs-nav-link>
            <clr-vtabs-content>
                <p>The Gunslinger Content</p>
                <p>
                    The <a href="javascript://">man in black</a> fled across the desert, and the gunslinger followed.
                </p>
            </clr-vtabs-content>
            <clr-vtabs-content>
                <p>The Wastelands Content</p>
                <p>"All is silent in the halls of the dead." Eddie heard himself in a falling,  fainting voice. "All is
                    forgotten in the stone halls of the dead. Behold the stairways which stand in darkness; behold the 
                    spiders spin and the great <a href="javascript://">rooms of ruin</a>. These are the halls of the 
                    dead where circuits fall quiet, one by one.</p>
            </clr-vtabs-content>        
        </clr-vtabs>
    `
})

class DefaultVTabs {
    vtabLinks: QueryList<VTabsNavLink>;
    vtabsContent: QueryList<VTabsContent>;
    linkChange: EventEmitter<VTabsNavLink>;
    contentChange: EventEmitter<VTabsContent>;
    actvatedLink: number;

    // Spy on these and make sure they get fired for test.
    handleVTabsNavChange () {
        return true;
    }
    handleVTabsContentChange () { }
}

@Component({
    template: `
        <clr-vtabs [clrReversed]="true">
            <clr-vtabs-nav-link>The Gunslinger</clr-vtabs-nav-link>
            <clr-vtabs-nav-link [clrActivatedNavLink]="true">The Wastelands</clr-vtabs-nav-link>
            <clr-vtabs-content>
                <p>The Gunslinger Content</p>
                <p>
                    The <a href="javascript://">man in black</a> fled across the desert, and the gunslinger followed.
                </p>
            </clr-vtabs-content>
            <clr-vtabs-content>
                <p>The Wastelands Content</p>
                <p>"All is silent in the halls of the dead." Eddie heard himself in a falling,  fainting voice. "All is
                    forgotten in the stone halls of the dead. Behold the stairways which stand in darkness; behold the 
                    spiders spin and the great <a href="javascript://">rooms of ruin</a>. These are the halls of the 
                    dead where circuits fall quiet, one by one.</p>
            </clr-vtabs-content>        
        </clr-vtabs>
    `
})

class PreselectedVTabs extends DefaultVTabs {

}
