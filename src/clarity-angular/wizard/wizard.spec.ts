/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { BasicWizardTestComponent } from "./test-components/basic-wizard.mock";
import { UnopenedWizardTestComponent } from "./test-components/unopened-wizard.mock";
import { TemplateApiWizardTestComponent } from "./test-components/api-wizard.mock";
import { DynamicWizardTestComponent } from "./test-components/dynamic-wizard.mock";

import { tick, fakeAsync } from "@angular/core/testing";
import { WizardNavigationService } from "./providers/wizard-navigation";
import { PageCollectionService } from "./providers/page-collection";
import { Wizard } from "./wizard";
import { TestContext } from "../utils/testing/helpers.spec";

export default function(): void {

    describe("Wizard", () => {
        describe("Typescript API", () => {
            describe("Ghost pages", () => {
                // TODO: Ghost pages are not widely available atm. When they are then we should complete
                // this test plan.
                xit("should start out as deactivated", () => {
                });

                xit("should opt out if showGhostPages is false", () => {
                });

                xit("should set proper state when sent deactivate", () => {
                });

                xit("should set proper state on last page", () => {
                });

                xit("should set proper state when on next to last page", () => {
                });

                xit("should fall through to proper state", () => {
                });

                xit("should set expected state when first page is last page", () => {
                });

                xit("should set expected state when first page is next to last page", () => {
                });
            });

            describe("Opening and closing", () => {
                let context: TestContext<Wizard, UnopenedWizardTestComponent>;
                let wizardNavigationService: WizardNavigationService;
                let pageCollectionService: PageCollectionService;
                let wizard: Wizard;

                beforeEach(function() {
                    context = this.create(Wizard, UnopenedWizardTestComponent);
                    wizardNavigationService = context.getClarityProvider(WizardNavigationService);
                    pageCollectionService = context.getClarityProvider(PageCollectionService);
                    wizard = context.clarityDirective;
                    context.detectChanges();
                });

                describe("open", () => {
                    it("should call setGhostPages", () => {
                        spyOn(wizard, "setGhostPages");
                        wizard.open();
                        expect(wizard.setGhostPages).toHaveBeenCalledTimes(1);
                    });

                    it("should set this._open", () => {
                        expect(wizard._open).toBe(false, "hidden wizard._open should be false");
                        wizard.open();
                        expect(wizard._open).toBe(true, "visible wizard._open should be true");
                    });
                });

                describe("close", () => {
                    it("should call deactivateGhostPages", () => {
                        spyOn(wizard, "deactivateGhostPages");
                        wizard.open();
                        wizard.close();
                        expect(wizard.deactivateGhostPages).toHaveBeenCalledTimes(1);
                    });

                    it("should set this._open", () => {
                        expect(wizard._open).toBe(false, "hidden wizard._open should be false");
                        wizard.open();
                        expect(wizard._open).toBe(true, "visible wizard._open should be true");
                        wizard.close();
                        expect(wizard._open).toBe(false, "closed wizard._open should be false");
                    });

                    it("should not do anything if stop navigation is set", () => {
                        spyOn(wizard, "deactivateGhostPages");

                        wizard.open();
                        expect(wizard._open).toBe(true, "visible wizard._open should be true");

                        wizard.stopNavigation = true;
                        wizard.close();

                        expect(wizard.deactivateGhostPages).not.toHaveBeenCalled();
                        expect(wizard._open).toBe(true, "wizard._open should not have changed");
                    });
                });

                describe("toggle", () => {
                    it("should call .open() if passed true", () => {
                        spyOn(wizard, "open");
                        wizard.toggle(false);
                        expect(wizard.open).not.toHaveBeenCalled();
                        wizard.toggle(true);
                        expect(wizard.open).toHaveBeenCalledTimes(1);
                    });

                    it("should call .close() if passed false", () => {
                        spyOn(wizard, "close");
                        wizard.toggle(true);
                        expect(wizard.close).not.toHaveBeenCalled();
                        wizard.toggle(false);
                        expect(wizard.close).toHaveBeenCalledTimes(1);
                    });
                });
            });

            describe("Convenience functions", () => {
                let context: TestContext<Wizard, BasicWizardTestComponent>;
                let wizardNavigationService: WizardNavigationService;
                let pageCollectionService: PageCollectionService;
                let wizard: Wizard;

                beforeEach(function() {
                    context = this.create(Wizard, BasicWizardTestComponent);
                    wizardNavigationService = context.getClarityProvider(WizardNavigationService);
                    pageCollectionService = context.getClarityProvider(PageCollectionService);
                    wizard = context.clarityDirective;
                    context.detectChanges();
                });

                describe("currentPage", () => {
                    it("should match the navService", () => {
                        let currentPagesMatch: boolean;
                        currentPagesMatch = (wizard.currentPage === wizardNavigationService.currentPage);
                        expect(currentPagesMatch).toBe(true, "current pages init as expected");
                        wizard.next();
                        context.detectChanges();
                        currentPagesMatch = (wizard.currentPage === wizardNavigationService.currentPage);
                        expect(currentPagesMatch).toBe(true, "current pages match after navigation");
                    });
                });

                describe("isLast", () => {
                    it("should return false if current page is not the last page", () => {
                        let lastPage = pageCollectionService.lastPage;
                        expect(wizard.currentPage).not.toBe(lastPage, "verify currentPage is not the last page");
                        expect(wizard.isLast).toBe(false, "isLast should return false");
                    });

                    it("should return true if current page is the last page", () => {
                        let lastPage = pageCollectionService.lastPage;

                        // set last page
                        wizardNavigationService.currentPage = lastPage;
                        context.detectChanges();
                        expect(wizard.currentPage).toBe(lastPage, "verify currentPage is the last page");
                        expect(wizard.isLast).toBe(true, "isLast should return true");
                    });
                });

                describe("isFirst", () => {
                    it("should return false if current page is not the first page", () => {
                        let firstPage = pageCollectionService.firstPage;
                        // move wizard off first page
                        wizard.next();
                        context.detectChanges();
                        expect(wizard.currentPage).not.toBe(firstPage, "verify currentPage is not the first page");
                        expect(wizard.isFirst).toBe(false, "isFirst should return false");
                    });

                    it("should return true if current page is the last page", () => {
                        let firstPage = pageCollectionService.firstPage;
                        expect(wizard.currentPage).toBe(firstPage, "verify currentPage is the first page");
                        expect(wizard.isFirst).toBe(true, "isFirst should return true");
                    });
                });

                describe("prev", () => {
                    it("should call the navService", () => {
                        spyOn(wizardNavigationService, "previous");
                        wizard.prev();
                        expect(wizardNavigationService.previous).toHaveBeenCalledTimes(1);
                    });
                });

                describe("previous", () => {
                    it("should call the navService", () => {
                        spyOn(wizardNavigationService, "previous");
                        wizard.previous();
                        expect(wizardNavigationService.previous).toHaveBeenCalledTimes(1);
                    });
                });

                describe("next", () => {
                    it("should call the navService to emit checks and events if told to", () => {
                        spyOn(wizardNavigationService, "next");
                        spyOn(wizard, "forceNext");
                        wizard.next(false);
                        expect(wizardNavigationService.next).toHaveBeenCalledTimes(1);
                        expect(wizard.forceNext).not.toHaveBeenCalled();
                    });

                    it("should call forceNext if told not to emit checks and events", () => {
                        spyOn(wizardNavigationService, "next");
                        spyOn(wizard, "forceNext");
                        wizard.next(true);
                        expect(wizardNavigationService.next).not.toHaveBeenCalled();
                        expect(wizard.forceNext).toHaveBeenCalledTimes(1);
                    });

                    it("should call forceNext by default", () => {
                        spyOn(wizardNavigationService, "next");
                        spyOn(wizard, "forceNext");
                        wizard.next();
                        expect(wizardNavigationService.next).not.toHaveBeenCalled();
                        expect(wizard.forceNext).toHaveBeenCalledTimes(1);
                    });
                });

                describe("goTo", () => {
                    it("should call the navService", () => {
                        let testId = pageCollectionService.lastPage.id;
                        spyOn(wizardNavigationService, "goTo");
                        wizard.goTo(testId);
                        expect(wizardNavigationService.goTo).toHaveBeenCalledWith(testId);
                    });

                    it("should early return if not given a page id", () => {
                        spyOn(wizardNavigationService, "goTo");
                        wizard.goTo(null);
                        wizard.goTo("");
                        expect(wizardNavigationService.goTo).not.toHaveBeenCalled();
                    });
                });

                describe("reset", () => {
                    it("should call the pageCollection and update the nav", () => {
                        let firstPage = pageCollectionService.firstPage;
                        spyOn(pageCollectionService, "reset").and.callThrough();
                        spyOn(wizard.onReset, "next");
                        expect(wizard.currentPage).toBe(firstPage, "inits as expected");
                        wizard.next();
                        context.detectChanges();
                        expect(wizard.currentPage).not.toBe(firstPage, "navigates as expected");
                        wizard.reset();
                        expect(pageCollectionService.reset).toHaveBeenCalledTimes(1);
                        expect(wizard.onReset.next).toHaveBeenCalledTimes(1);
                        context.detectChanges();
                        expect(wizard.currentPage).toBe(firstPage, "resets to first page");
                    });
                });

                describe("ghostPageState", () => {
                    // TODO: Ghost pages are not widely available atm. When they are then we should complete
                    // this test plan.
                    xit("should call the navService", () => {
                    });
                });

                describe("deactivateGhostPages", () => {
                    // TODO: Ghost pages are not widely available atm. When they are then we should complete
                    // this test plan.
                    xit("should should call the navService  with \"deactivate\" as the value", () => {
                    });
                });
            });
        });

        // Inputs, Outputs, and initialization of component based on content-children
        describe("Template API", () => {
            let context: TestContext<Wizard, TemplateApiWizardTestComponent>;
            let wizard: Wizard;

            beforeEach(function() {
                context = this.create(Wizard, TemplateApiWizardTestComponent);
                wizard = context.clarityDirective;
                context.detectChanges();
            });


            describe("Overriding modal animation with (clrWizardPreventModalAnimation)", () => {
                xit("should set stopModalAnimations to false when true", () => {
                });

                xit("should default to false", () => {
                });
            });

            describe("Current page onchange", () => {
                xit("should update ghost pages", () => {
                    // TODO: Ghost pages are not widely available atm. When they are then we should complete
                    // this test plan.
                });

                it("should emit pageOnLoad when wizard is created", () => {
                    context.detectChanges();
                    expect(context.testComponent._firstPageLoaded).toBe(1, "only once when created");
                });

                it("should emit page on load when navigating", () => {
                    wizard.next();
                    wizard.next();
                    expect(context.testComponent._pagesLoaded).toBe(1);
                });

                it("should notify clrWizardCurrentPageChanged output", () => {
                    expect(context.testComponent._currentPageChanged).toBe(1, "only initial load");
                    wizard.next();
                    expect(context.testComponent._currentPageChanged).toBe(2, "increases with move forward");
                    wizard.next();
                    expect(context.testComponent._currentPageChanged).toBe(3, "increases with move forward");
                    wizard.previous();
                    expect(context.testComponent._currentPageChanged).toBe(4, "increases with move backward");
                });

                it("should notify clrWizardOnNext output", () => {
                    expect(context.testComponent._movedForward).toBe(0, "initial load");
                    // need to do event emissions here, so passing false
                    wizard.next(false);
                    expect(context.testComponent._movedForward).toBe(1, "increases with move forward");
                    // need to do event emissions here, so passing false
                    wizard.next(false);
                    expect(context.testComponent._movedForward).toBe(2, "increases with move forward");
                    wizard.previous();
                    expect(context.testComponent._movedForward).toBe(2, "stays put with move backward");
                });

                it("should notify clrWizardOnPrevious output", () => {
                    expect(context.testComponent._movedBackward).toBe(0, "initial load");
                    wizard.next();
                    expect(context.testComponent._movedBackward).toBe(0, "stays put with move forward");
                    wizard.next();
                    expect(context.testComponent._movedBackward).toBe(0, "stays put with move forward");
                    wizard.previous();
                    expect(context.testComponent._movedBackward).toBe(1, "increases with move backward");
                    wizard.previous();
                    expect(context.testComponent._movedBackward).toBe(2, "increases with move backward");
                });
            });

            describe("Projection", () => {
                it("wizard title is projected", () => {
                    let val = context.testElement.querySelector(".clr-wizard-title").textContent.trim();
                    expect(val).toBe(context.testComponent.projectedTitle, "projects as expected");
                    context.testComponent.projectedTitle = "OHAI";
                    context.detectChanges();
                    val = context.testElement.querySelector(".clr-wizard-title").textContent.trim();
                    expect(val).toBe("OHAI", "updates as expected");
                });

                it("stepnav is present", () => {
                    let val = context.testElement.querySelector(".clr-wizard-stepnav");
                    expect(val).toBeTruthy();
                });

                it("content title should reflect current page and changes with it", () => {
                    let val = context.testElement.querySelector(".modal-title-text").textContent.trim();
                    expect(val).toBe("Longer Title for Page 1", "inits as expected");

                    wizard.next();
                    context.detectChanges();

                    val = context.testElement.querySelector(".modal-title-text").textContent.trim();
                    expect(val).toBe(context.testComponent.projectedPageTitle, "projects as expected");

                    context.testComponent.projectedPageTitle = "OHAI";
                    context.detectChanges();

                    val = context.testElement.querySelector(".modal-title-text").textContent.trim();
                    expect(val).toBe("OHAI", "updates as expected");
                });

                describe("Content", () => {
                    it("content shows up", () => {
                        let val = context.testElement.querySelector(".clr-wizard-page.active").textContent.trim();
                        expect(val).toBe("Content for step 1");
                    });

                    it("content changes", () => {
                        let val: string;

                        wizard.pageCollection.lastPage.makeCurrent();
                        context.detectChanges();

                        // page 3 has projected content
                        val = context.testElement.querySelector(".clr-wizard-page.active").textContent.trim();
                        expect(val).toBe(context.testComponent.projectedContent, "projects as expected");

                        context.testComponent.projectedContent = "OHAI";
                        context.detectChanges();

                        val = context.testElement.querySelector(".clr-wizard-page.active").textContent.trim();
                        expect(val).toBe("OHAI", "updates as expected");
                    });

                    it("content can lazy load if needed", fakeAsync(() => {
                        let val: string;

                        wizard.next();
                        context.detectChanges();

                        val = context.testElement.querySelector(".clr-wizard-page.active").textContent.trim();
                        expect(val).toBe(context.testComponent.lazyLoadContent, "projects as expected");

                        context.testComponent.doLazyLoad();
                        tick();
                        context.detectChanges();

                        val = context.testElement.querySelector(".clr-wizard-page.active").textContent.trim();
                        expect(val).toBe("Content loaded!", "updates as expected");
                    }));
                });

                describe("Buttons", () => {
                    it("buttons show up", () => {
                        let cancel = context.testElement.querySelector(".clr-wizard-btn--tertiary");
                        let previous = context.testElement.querySelector(".clr-wizard-btn--secondary");
                        let next = context.testElement.querySelector(".clr-wizard-btn--primary:not(.disabled)");
                        let finish = context.testElement.querySelector(".clr-wizard-btn--primary.disabled");

                        expect(cancel).toBeTruthy();
                        expect(previous).toBeTruthy();
                        expect(next).toBeTruthy();
                        expect(finish).toBeTruthy();
                    });

                    it("previous button is hidden on first page", () => {
                        let previous = context.testElement.querySelector(".clr-wizard-btn--secondary");
                        let val = previous.parentElement.attributes["aria-hidden"].value;
                        expect(val).toBe("true");
                    });

                    it("next button is visible on every page except the last page", () => {
                        let next = context.testElement.querySelector(".clr-wizard-btn--primary:not(.disabled)");
                        let val = next.parentElement.attributes["aria-hidden"].value;
                        expect(val).toBe("false");

                        wizard.pageCollection.lastPage.makeCurrent();
                        context.detectChanges();

                        val = next.parentElement.attributes["aria-hidden"].value;
                        expect(val).toBe("true");
                    });

                    it("finish button is hidden on every page except the last one", () => {
                        let finish = context.testElement.querySelector(".clr-wizard-btn--primary.disabled");
                        let val = finish.parentElement.attributes["aria-hidden"].value;
                        expect(val).toBe("true");

                        wizard.pageCollection.lastPage.makeCurrent();
                        context.detectChanges();

                        val = finish.parentElement.attributes["aria-hidden"].value;
                        expect(val).toBe("false");
                    });

                    it("button text is projected as expected", () => {
                        let previous = context.testElement.querySelector(".clr-wizard-btn--secondary");
                        let val = previous.textContent.trim();
                        expect(val).toBe(context.testComponent.projectedButton, "projects as expected");

                        context.testComponent.projectedButton = "OHAI";
                        context.detectChanges();

                        val = previous.textContent.trim();
                        expect(val).toBe("OHAI", "updates as expected");
                    });

                    it("page buttons override default wizard buttons", () => {
                        let cancel: any;
                        let previous: any;
                        let next: any;
                        let finish: any;

                        wizard.pageCollection.lastPage.makeCurrent();
                        context.detectChanges();

                        cancel = context.testElement.querySelector(".clr-wizard-btn--tertiary");
                        previous = context.testElement.querySelector(".clr-wizard-btn--secondary");
                        next = context.testElement.querySelector(".clr-wizard-btn--primary.disabled");
                        finish = context.testElement.querySelector(".clr-wizard-btn--primary:not(.disabled)");

                        // custom buttons can omit expected buttons if they want
                        expect(cancel).toBeNull();
                        expect(previous).toBeNull();
                        expect(next).toBeNull();
                        expect(finish).toBeTruthy();
                        expect(finish.textContent.trim()).toBe(context.testComponent.projectedCustomButton);

                        context.testComponent.projectedCustomButton = "Ohai";
                        context.detectChanges();
                        expect(finish.textContent.trim()).toBe("Ohai");
                    });
                });

                describe("Wizard Header Actions", () => {
                    // TODO: Header actions are not widely available atm. When they are then we should complete
                    // this test plan.

                    xit("header actions show up", () => {
                    });

                    xit("headerActionService.wizardHeaderActions is set to wizard.headerActions", () => {
                    });

                    xit("headerActionService.wizardHeaderActions updates with wizard", () => {
                    });

                    xit("header actions don't show up when they aren't there", () => {
                    });

                    xit("page header actions take precedence", () => {
                    });

                    xit("clicking on a header action does something", () => {
                    });

                    xit("wizard falls through to wizard header actions", () => {
                    });

                    xit("wizard doesn't show header action when page with header actions " +
                        "changes to a page w/o header actions and the wizard doesn't have them", () => {
                    });
                });
            });

            describe("Misc Observables", () => {
                it("clrWizardOnCancel output is fired when cancel button is clicked", () => {
                    let cancel = context.testElement.querySelector(".clr-wizard-btn--tertiary");

                    expect(context.testComponent._cancelled).toBe(0, "verify initial state");
                    cancel.click();
                    context.detectChanges();
                    expect(context.testComponent._cancelled).toBe(1, "cancel button worked");
                });

                it("clrWizardOnCancel output is fired when close X is clicked", () => {
                    let closeBtn = context.testElement.querySelector("button.close");
                    expect(context.testComponent._cancelled).toBe(0, "verify initial state");

                    closeBtn.click();
                    context.detectChanges();
                    expect(context.testComponent._cancelled).toBe(1, "close X worked");
                });

                it("clrWizardOnCancel output is not fired when wizard is closed by finish button", () => {
                    let finish: any;
                    expect(context.testComponent._cancelled).toBe(0, "verify initial state");

                    wizard.pageCollection.lastPage.makeCurrent();
                    context.detectChanges();
                    finish = context.testElement.querySelector(".clr-wizard-btn--primary:not(.disabled)");
                    finish.click();
                    context.detectChanges();

                    // also validates that custom button worked...
                    expect(context.testComponent._cancelled).toBe(0, "finish button did not fire cancel");
                    expect(wizard._open).toBe(false, "custom finish closed the wizard");
                });

                it("clrWizardOnFinish output is fired", () => {
                    let finish: any;
                    expect(context.testComponent._finished).toBe(0, "verify initial state");

                    wizard.pageCollection.lastPage.makeCurrent();
                    context.detectChanges();
                    finish = context.testElement.querySelector(".clr-wizard-btn--primary:not(.disabled)");
                    finish.click();
                    context.detectChanges();

                    // also validates that custom button worked...
                    expect(context.testComponent._finished).toBe(1, "finish button fired event");
                });
            });

            describe("Pages", () => {
                it("sets pageCollection.pages", () => {
                    const wizpages = wizard.pages;
                    const pagecollection = wizard.pageCollection.pages;
                    const expected = (wizpages === pagecollection);
                    expect(expected).toBe(true);
                });

                it("pageCollection.pages updates when Wizard.pages does", () => {
                    let wizpages = wizard.pages;
                    let pagecollection = wizard.pageCollection.pages;
                    let expected = (wizpages === pagecollection);
                    const origPageCount = wizard.pageCollection.pagesCount + 0;

                    expect(expected).toBe(true, "inits as the same");
                    context.testComponent.showExtraPage = true;
                    context.detectChanges();

                    expected = (wizpages === pagecollection);
                    expect(wizard.pageCollection.pagesCount).not.toEqual(origPageCount);
                    expect(expected).toBe(true, "updates as expected");
                });
            });

            describe("Alt-Cancel", () => {
                it("navService.wizardHasAltCancel is set to wizard.stopCancel and updates dynamically", () => {
                    let val = wizard.navService.wizardHasAltCancel;
                    let expected = wizard.stopCancel;
                    expect(val).toBe(expected, "inits as expected");

                    wizard.stopCancel = true;
                    context.detectChanges();

                    val = wizard.navService.wizardHasAltCancel;
                    expected = true;
                    expect(val).toBe(expected, "updates as expected");
                });
            });

            describe("Alt-Next", () => {
                it("navService.wizardHasAltNext is set to wizard.stopNext and updates dynamically", () => {
                    let val = wizard.navService.wizardHasAltNext;
                    let expected = wizard.stopNext;
                    expect(val).toBe(expected, "inits as expected");

                    wizard.stopNext = true;
                    context.detectChanges();

                    val = wizard.navService.wizardHasAltNext;
                    expected = true;
                    expect(val).toBe(expected, "updates as expected");
                });
            });

            describe("Stop Navigation", () => {
                it("navService.wizardStopNavigation is set to wizard.stopNavigation and updates dynamically", () => {
                    let val = wizard.navService.wizardStopNavigation;
                    let expected = wizard.stopNavigation;
                    expect(val).toBe(expected, "inits as expected");

                    wizard.stopNavigation = true;
                    context.detectChanges();

                    val = wizard.navService.wizardStopNavigation;
                    expected = true;
                    expect(val).toBe(expected, "updates as expected");
                });
            });

            describe("Force-Forward", () => {
                it("navService.forceForwardNavigation is set to wizard.forceForward and updates dynamically", () => {
                    let val = wizard.navService.forceForwardNavigation;
                    let expected = wizard.forceForward;
                    expect(val).toBe(expected, "inits as expected");

                    wizard.forceForward = true;
                    context.detectChanges();

                    val = wizard.navService.forceForwardNavigation;
                    expected = true;
                    expect(val).toBe(expected, "updates as expected");
                });
            });

            describe("Ghost Pages", () => {
                xit("can be set via the ??? input", () => {
                });

                xit("navService.hideWizardGhostPages gets set as expected", () => {
                });
            });

            describe("Sizing", () => {
                it("can be set and updates via the clrWizardSize input", () => {
                    const wizardModal = context.testElement.querySelector(".modal-dialog");
                    let hasExpectedClass: boolean;
                    expect(context.testComponent.mySize).toBeUndefined();
                    context.testComponent.mySize = "lg";
                    context.detectChanges();
                    expect(wizard.size).toBe("lg");
                    hasExpectedClass = wizardModal.classList.contains("modal-lg");
                });

                it("defaults to \"xl\"", () => {
                    const wizardModal = context.testElement.querySelector(".modal-dialog");
                    let hasExpectedClass: boolean;
                    expect(context.testComponent.mySize).toBeUndefined();
                    hasExpectedClass = wizardModal.classList.contains("modal-xl");
                });
            });

            describe("Opening", () => {
                it("emits clrWizardOpenChange output", () => {
                    wizard.close();
                    context.detectChanges();
                    context.testComponent._openChange = 0;
                    expect(context.testComponent._openChange).toBe(0, "make sure we have reset");
                    wizard.open();
                    context.detectChanges();
                    expect(context.testComponent._openChange).toBe(1, "make sure we have reset");
                });
            });

            describe("Closing", () => {
                it("emits clrWizardOpenChange output", () => {
                    context.testComponent._openChange = 0;
                    expect(context.testComponent._openChange).toBe(0, "make sure we have reset");
                    wizard.close();
                    context.detectChanges();
                    expect(context.testComponent._openChange).toBe(1, "make sure we have reset");
                });
            });

            describe("Alt Cancel Override", () => {
                it("clrWizardPreventDefaultCancel input sets and updates stopCancel", () => {
                    expect(wizard.stopCancel).toBe(context.testComponent.stopCancel);
                    context.testComponent.stopCancel = true;
                    context.detectChanges();
                    expect(wizard.stopCancel).toBe(true);
                });
            });
        });

        describe("Dynamic Content", () => {
            let context: TestContext<Wizard, DynamicWizardTestComponent>;
            let wizardNavigationService: WizardNavigationService;
            let pageCollectionService: PageCollectionService;
            let wizard: Wizard;

            beforeEach(function() {
                context = this.create(Wizard, DynamicWizardTestComponent);
                wizardNavigationService = context.getClarityProvider(WizardNavigationService);
                pageCollectionService = context.getClarityProvider(PageCollectionService);
                wizard = context.clarityDirective;
                context.detectChanges();
            });

            it("pages can be added via an ngFor", () => {
                let checkme: HTMLElement;

                expect(wizard.pageCollection.pagesCount).toBe(3);

                checkme = context.testElement.querySelector("#clr-wizard-page-1");
                expect(checkme.textContent.trim()).toBe("Content for page 1", "page 1 content ok");

                checkme = context.testElement.querySelector("#clr-wizard-page-2");
                expect(checkme.textContent.trim()).toBe("Content for page 2", "page 2 content ok");

                checkme = context.testElement.querySelector("#clr-wizard-page-4");
                expect(checkme.textContent.trim()).toBe("Content for page 4", "page 4 content ok");

                // NOW THE STEPNAV
                checkme = context.testElement.querySelector("#clr-wizard-step-1");
                expect(checkme.textContent.trim()).toBe("Page 1", "step 1 ok");

                checkme = context.testElement.querySelector("#clr-wizard-step-2");
                expect(checkme.textContent.trim()).toBe("Page 2", "step 2 ok");

                checkme = context.testElement.querySelector("#clr-wizard-step-4");
                expect(checkme.textContent.trim()).toBe("Page 4", "step 4 ok");
            });

            it("content can be changed dynamically", () => {
                let checkme: HTMLElement;
                expect(wizard.pageCollection.pagesCount).toBe(3);

                // adding an element to my array
                context.testComponent.pages.splice(2, 0, 3);
                context.detectChanges();

                expect(wizard.pageCollection.pagesCount).toBe(4);
                checkme = context.testElement.querySelector("#clr-wizard-page-1");
                expect(checkme.textContent.trim()).toBe("Content for page 1", "page 1 content ok");

                checkme = context.testElement.querySelector("#clr-wizard-page-2");
                expect(checkme.textContent.trim()).toBe("Content for page 2", "page 2 content ok");

                checkme = context.testElement.querySelector("#clr-wizard-page-3");
                expect(checkme.textContent.trim()).toBe("Content for page 3", "page 3 content ok");

                checkme = context.testElement.querySelector("#clr-wizard-page-4");
                expect(checkme.textContent.trim()).toBe("Content for page 4", "page 4 content ok");

                // NOW THE STEPNAV
                checkme = context.testElement.querySelector("#clr-wizard-step-1");
                expect(checkme.textContent.trim()).toBe("Page 1", "step 1 ok");

                checkme = context.testElement.querySelector("#clr-wizard-step-2");
                expect(checkme.textContent.trim()).toBe("Page 2", "step 2 ok");

                checkme = context.testElement.querySelector("#clr-wizard-step-3");
                expect(checkme.textContent.trim()).toBe("Page 3", "step 3 ok");

                checkme = context.testElement.querySelector("#clr-wizard-step-4");
                expect(checkme.textContent.trim()).toBe("Page 4", "step 4 ok");

                // dynamically hiding a page
                context.testComponent.showSecondPage = false;
                context.detectChanges();

                expect(wizard.pageCollection.pagesCount).toBe(3);
                checkme = context.testElement.querySelector("#clr-wizard-page-1");
                expect(checkme.textContent.trim()).toBe("Content for page 1", "page 1 content ok");

                checkme = context.testElement.querySelector("#clr-wizard-page-2");
                expect(checkme).toBeNull();

                checkme = context.testElement.querySelector("#clr-wizard-page-3");
                expect(checkme.textContent.trim()).toBe("Content for page 3", "page 3 content ok");

                checkme = context.testElement.querySelector("#clr-wizard-page-4");
                expect(checkme.textContent.trim()).toBe("Content for page 4", "page 4 content ok");

                // NOW THE STEPNAV
                checkme = context.testElement.querySelector("#clr-wizard-step-1");
                expect(checkme.textContent.trim()).toBe("Page 1", "step 1 ok");

                checkme = context.testElement.querySelector("#clr-wizard-step-2");
                expect(checkme).toBeNull();

                checkme = context.testElement.querySelector("#clr-wizard-step-3");
                expect(checkme.textContent.trim()).toBe("Page 3", "step 3 ok");

                checkme = context.testElement.querySelector("#clr-wizard-step-4");
                expect(checkme.textContent.trim()).toBe("Page 4", "step 4 ok");
            });

            it("should survive if there are no pages", () => {
                expect(wizard.pageCollection.pagesCount).toBe(3);
                expect(function() {
                    context.testComponent.pages = [];
                    context.detectChanges();
                }).not.toThrowError();
                expect(wizard.pageCollection.pagesCount).toBe(0);
            });
        });

        describe("View and Behavior", () => {
            describe("Ghost Pages", () => {
                xit("do not appear by default", () => {
                });

                xit("can be shown by setting the ??? input", () => {
                });
            });

            describe("Close X", () => {
                xit("shows up by default", () => {
                });

                xit("can be hidden with the clrWizardClosable input", () => {
                });
            });

            describe("Backdrop is static", () => {
                xit("clrModalStaticBackdrop is set to true", () => {
                });
            });

            describe("Navigation", () => {
                xit("happy path through to finish", () => {
                });

                xit("close and open on last open page", () => {
                });

                xit("close and open on last navigable page", () => {
                });

                xit("sets last navigable page current when current page is removed", () => {
                });
            });

            describe("Custom Navigation", () => {
                describe("Alt Cancel Override", () => {
                    xit("clrWizardPreventDefaultCancel input keeps wizard from getting cancelled", () => {
                    });
                });
            });

            describe("Delegates to modal", () => {
                // validate that clrModalSize is set as expected
                xit("clrModalSize is set as expected", () => {
                });

                // validate that clrModalClosable is set as expected
                xit("clrModalClosable is set as expected", () => {
                });

                // validate that clrModalOpenChange event calls wizard.cancel
                // both dynamically and through clicking
                xit("clrModalOpenChange event calls wizard.cancel", () => {
                });

                // validate that clrModalSkipAnimation is set as expected
                xit("clrModalSkipAnimation is set as expected", () => {
                });

                // validate that clrModalGhostPageState is set as expected
                // and is updated as expected
                xit("clrModalGhostPageState is set and updated as expected", () => {
                });
            });
        });
    });
}
