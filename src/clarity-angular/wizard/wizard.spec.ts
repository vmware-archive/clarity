/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// import {ComponentFixture, TestBed} from "@angular/core/testing";
// import {Component, ViewChild} from "@angular/core";
// import {ScrollingService} from "../main/scrolling-service";
// import {ClarityModule} from "../clarity.module";
// import { Wizard } from "./wizard";

describe("Wizard", () => {
    describe("Typescript API", () => {
        describe("Ghost pages", () => {
        // Make sure that ghost pages start out as deactivated
            it("true is true", () => {
                expect(true).toBe(true);
            });
        // Make sure we opt out if showGhostPages is false
            it("true is true", () => {
                expect(true).toBe(true);
            });
        // Make sure we set proper state when sent deactivate
            it("true is true", () => {
                expect(true).toBe(true);
            });
        // Make sure we set proper state when on last page
            it("true is true", () => {
                expect(true).toBe(true);
            });
        // Make sure we set proper state when on next to last page
            it("true is true", () => {
                expect(true).toBe(true);
            });
        // Make sure we fall through to proper state
            it("true is true", () => {
                expect(true).toBe(true);
            });
        // Make sure we set expected state when first page is last page
            it("true is true", () => {
                expect(true).toBe(true);
            });
        // Make sure we set expected state when first page is next to last page
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });
        describe("Opening and closing", () => {
            describe("open", () => {
                // Make sure it calls the navService of currentPage is falsy or not set
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // Make sure it calls setGhostPages
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // Make sure it properly sets this._open
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("close", () => {
                // Make sure it calls deactivateGhostPages
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // Make sure it properly sets this._open
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("toggle", () => {
                // Make sure that passing it true calls open
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // Make sure that passing it false calls close
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
        });
        describe("Convenience functions", () => {
            describe("currentPage", () => {
                // Make sure that currentPage calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("isLast", () => {
                // Make sure that isLast calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("isFirst", () => {
                // Make sure that isFirst calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("prev", () => {
                // Make sure that it calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("previous", () => {
                // Make sure that it calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("next", () => {
                // Make sure that it calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("goTo", () => {
                // Make sure that it calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // Make sure that it early returns if not given a page id
                // WTF??? DO WE HAVE PAGE IDS? VERIFY...
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("reset", () => {
                // Make sure that it calls the pageCollection
                // Make sure that it calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("ghostPageState", () => {
                // Make sure that it calls the navService
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
            describe("deactivateGhostPages", () => {
                // Make sure that it calls the navService with "deactivate" as the value
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
        });
    });

    // Inputs, Outputs, and initialization of component based on content-children
    describe("Template API", () => {
        describe("Overriding modal animation", () => {
        // Make sure that stopModalAnimations returns false when
        // clrWizardPreventModalAnimation input is set
        // validate default is false as well
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });
        describe("Current page onchange", () => {
        // Make sure that ghost pages get set
        // Make sure current page observable is emitted
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

        // validate that the clrWizardCurrentPageChanged output is fired
        // validate that the clrWizardOnNext output is fired
        // validate that the clrWizardOnPrevious output is fired


        describe("Projection", () => {
            // validate wizard title is projected
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // validate that the stepnav is present
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // validate that the content title reflects current page and changes with it
            it("true is true", () => {
                expect(true).toBe(true);
            });

            describe("Content", () => {
                // validate that the content shows up
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that the content changes
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that the content can lazy load if needed
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that pages can be added via an ngFor
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that the content can be changed dynamically
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // what should it do if no pages are in the template?
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // what should it do if all pages are hidden in the ngIf?
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });

            describe("Buttons", () => {
                // validate that the buttons show up
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that the previous button is hidden on first page
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that the previous button is visible on every page except the last page
                // validate that the finish button is hidden on every page except the last one
                // validate that the next button is hidden on last page
                // validate that the finish button is visible on last page
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that the button text is projected as expected
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that the page buttons superceded default wizard buttons
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that it falls back to wizard buttons
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // what should it do if no buttons are in the template?
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });

            describe("Wizard Header Actions", () => {
                // validate that header actions show up
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that header actions don't show up when they aren't there
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that page header actions take precedence
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that clicking on a header action does something
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that wizard falls through to wizard header actions
                it("true is true", () => {
                    expect(true).toBe(true);
                });
                // validate that wizard doesn't show header action when page with header actions
                // changes to a page w/o header actions and the wizard doesn't have them
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });
        });

        describe("Misc Observables", () => {
            // validate that the clrWizardOnCancel output is fired
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // validate that the clrWizardOnFinish output is fired
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });
    });

// TODO: ADD TO WIZARD TESTS... PART OF TEMPLATE API^^^
// On setup make sure pageCollection.pages is set, make sure it gets updated when wizard.pages is
// On setup make sure navService.wizardHasAltCancel is set to wizard.stopCancel -- test dynamically too
// On setup make sure navService.wizardHasAltNext is set to wizard.stopNext -- test dynamically too
// On setup make sure headerActionService.wizardHeaderActions is set to wizard.headerActions --
// test it also gets updated
// On setup test that navService.hideWizardGhostPages gets set as expected

    describe("View and Behavior", () => {
// TODO: SPLIT THESE TESTS.
// IF USER GIVES ME AN INPUT, DOES MY CONTROLLER HAVE THE RIGHT VALUE? <= TEMPLATE API
// THEN SEPARATE TEST TO MAKE SURE THAT THE RESULT IN VIEW IS AS EXPECTED <= VIEW TESTS
        describe("Sizing", () => {
            // test that passing a size into the input updates the size
            // doesn't matter if sizing updates dynamically
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

        describe("Ghost Pages", () => {
            // test that passing a boolean to the input hides/shows ghosts
            // doesn't matter if it updates dynamically
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

        describe("Close X", () => {
            // test that passing a boolean to the input hides/shows close X
            // TODO: JUST TEST THAT MODAL HAS CORRECT VALUE; DON'T TEST STYLES IN MODAL
            // doesn't matter if it updates dynamically
            // TODO: MORE CASES WILL PROBABLY SHOW UP HERE
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

        describe("Opening", () => {
// TODO: SPLIT INTO TWO SECTIONS (TEMPLATE API & VIEW TESTS)
// MAY BE ABLE TO SKIP THE "DOES IT SHOW UP?" TEST
            // test that passing a boolean to the clrWizardOpen input hides/shows wizard dynamically
            // validate that the clrWizardOpenChange output is fired <= TEMPLATE API
            // make sure first page is set to current if currentPage is set to falsy/null
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

        describe("Closing", () => {
// TODO: SPLIT INTO TWO SECTIONS (TEMPLATE API & VIEW TESTS)
// MAY BE ABLE TO SKIP THE "DOES IT GO AWAY?" TEST
            // test across Cancel button and Close X
            // validate that the clrWizardOpenChange output is fired
            // make sure that ghost pages are deactivated
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

        describe("Backdrop is static", () => {
            // validate that clrModalStaticBackdrop is set to true
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

        describe("Navigation", () => {
            // happy path through to finish
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // closes and opens on last open page
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // closes and opens on last possible page
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // what happens when current page is removed from the list of pages?
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // todo: MAY NOT NEED THESE IF WE TEST STEPNAV AND NAVIGATION SERVICE...
        });

        // MIGHT BE TWO TESTS... DO I HAVE THE INPUT? DOES OUTPUT WORK? <= IN TEMPLATE API
        // THEN TEST IF IT CLICKS THROUGH HERE
        describe("Custom Navigation", () => {
            describe("Alt Cancel Override", () => {
                // validate that the clrWizardPreventDefaultCancel input keeps wizard from getting cancelled
                it("true is true", () => {
                    expect(true).toBe(true);
                });
            });

            // TODO: CUSTOM BUTTONS???
        });

        describe("Delegates to modal", () => {
            // validate that clrModalSize is set as expected
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // validate that clrModalClosable is set as expected
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // validate that clrModalOpenChange event calls wizard.cancel
            // both dynamically and through clicking
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // validate that clrModalSkipAnimation is set as expected
            it("true is true", () => {
                expect(true).toBe(true);
            });
            // validate that clrModalGhostPageState is set as expected
            // and is updated as expected
            it("true is true", () => {
                expect(true).toBe(true);
            });
        });

    });
});

// @Component({
//     template: `
//     <clr-wizard [(clrWizardOpen)]="open" [clrWizardClosable]="false">
//         <div class="wizard-title">Title</div>
//         <clr-wizard-step>Tab1</clr-wizard-step>
//         <clr-wizard-step>Tab2</clr-wizard-step>
//         <clr-wizard-step>Tab3</clr-wizard-step>
//         <clr-wizard-step>Tab4</clr-wizard-step>
//         <clr-wizard-page>Page1</clr-wizard-page>
//         <clr-wizard-page>Page2</clr-wizard-page>
//         <clr-wizard-page>Page3</clr-wizard-page>
//         <clr-wizard-page>Page4</clr-wizard-page>
//     </clr-wizard>
//    `,
//     template: `
//     <clr-wizard [(clrWizardOpen)]="open" [clrWizardClosable]="false">
//         <div class="wizard-title">Title</div>
//         <clr-wizard-step>Tab1</clr-wizard-step>
//         <clr-wizard-step>Tab2</clr-wizard-step>
//         <clr-wizard-step>Tab3</clr-wizard-step>
//         <clr-wizard-step>Tab4</clr-wizard-step>
//         <clr-wizard-page>Page1</clr-wizard-page>
//         <clr-wizard-page>Page2</clr-wizard-page>
//         <clr-wizard-page>Page3</clr-wizard-page>
//         <clr-wizard-page>Page4</clr-wizard-page>
//     </clr-wizard>
//    `,
//     viewProviders: [ScrollingService]
// })
// class BasicWizard {
//     @ViewChild(Wizard) wizard: Wizard;

//     open: boolean = true;
// }

// @Component({
//     template: `
//     <clr-wizard
//         [(clrWizardOpen)]="open"
//         (clrWizardOnCancel)="myOnCancel($event)">
//          <div class="wizard-title">
//             New Virtual Machine
//          </div>

//          <clr-wizard-step
//             [clrWizardStepId]="'tab1'">
//             Tab1
//          </clr-wizard-step>
//          <clr-wizard-step
//             [clrWizardStepId]="'tab2'">
//             Tab2
//          </clr-wizard-step>
//          <clr-wizard-step
//             [clrWizardStepId]="'tab3'">
//             Tab3
//          </clr-wizard-step>
//          <clr-wizard-step
//             [clrWizardStepId]="'tab4'">
//             Tab4
//          </clr-wizard-step>

//         <clr-wizard-page
//             (clrWizardPageOnLoad)="myOnLoad()"
//             [clrWizardPageNextDisabled]="nextDisabled">
//             <div class="tab1">{{content1}}</div>
//         </clr-wizard-page>

//         <clr-wizard-page
//                (clrWizardPageOnCommit)="myOnCommit0($event)">
//             <div class="tab2"><p>Content2</p></div>
//          </clr-wizard-page>

//          <clr-wizard-page
//                (clrWizardPageOnCommit)="myOnCommit($event)"
//                [clrWizardPageNextDisabled]="dummyErrorFlag"
//                [clrWizardPageErrorFlag]="dummyErrorFlag">
//             <div class="errorMessage">Error Message</div>
//             <div class="tab3"><p>{{content3}}</p></div>
//          </clr-wizard-page>

//          <clr-wizard-page>
//             <div class="wizard-page-title">Custom Title</div>
//             <p>Content4</p>
//          </clr-wizard-page>
//       </clr-wizard>
//     `
// })
// class AdvancedWizard {
//     @ViewChild(Wizard) wizard: Wizard;

//     open: boolean = true;
//     dummyErrorFlag: boolean = true;
//     nextDisabled: boolean = false;
//     content1: String = "Content1";
//     content3: String = "Content3";
//     hasBeenCanceled = false;

//     myOnLoad(): void {
//         this.content1 = "This Works Better";
//     }

//     myOnCommit0(event: any): void {
//         this.content3 = "NewContent3";
//     }

//     myOnCommit(event: any): void {
//         event.preventDefault();
//     }

//     myOnCancel(event: any): void {
//         this.hasBeenCanceled = true;
//     }
// };

// describe("Wizard", () => {
//     let fixture: ComponentFixture<any>;
//     let instance: Wizard;
//     let compiled: any;

//     let moveToNext: Function = function (el: any): void {
//         let next: HTMLElement = el.querySelector(".btn-primary");
//         next.click();
//         fixture.detectChanges();
//     };

//     let moveToPrevious: Function = function (el: any): void {
//         let back: HTMLElement = el.querySelector(".btn-outline");
//         back.click();
//         fixture.detectChanges();
//     };

//     let doCancel: Function = function(el: any): void {
//         let cancel: HTMLElement = el.querySelector(".close");
//         cancel.click();
//         fixture.detectChanges();
//     };

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [ClarityModule.forRoot()],
//             declarations: [AdvancedWizard, BasicWizard]
//         });
//     });

//     afterEach(() => {
//         fixture.destroy();
//     });


//     describe("Basic", () => {

//         beforeEach(() => {
//             fixture = TestBed.createComponent(BasicWizard);
//             fixture.detectChanges();
//             instance = fixture.componentInstance.wizard;
//             compiled = fixture.nativeElement;
//         });

//         it("projects subcomponents", () => {
//             expect(compiled.querySelectorAll("button.nav-link").length).toEqual(4);
//             expect(compiled.querySelectorAll("section").length).toEqual(4);
//         });

//         it("sets the first tab and content as active", () => {
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);
//             expect(instance.tabLinks[2].active).toBe(false);
//             expect(instance.tabLinks[3].active).toBe(false);
//             expect(instance.tabContents[0].active).toBe(true);
//             expect(instance.tabContents[1].active).toBe(false);
//             expect(instance.tabContents[2].active).toBe(false);
//             expect(instance.tabContents[3].active).toBe(false);
//         });

//         it("initializes the correct property values", () => {
//             let linkElements: HTMLElement[] =  compiled.querySelectorAll("clr-wizard-step");
//             let pageElements: HTMLElement[] =  compiled.querySelectorAll("clr-wizard-page");

//             expect(instance.tabLinks[0].id).toMatch(/clr-wizard-[0-9]+-tab-0/);
//             expect(instance.tabLinks[0].ariaControls).toMatch(/clr-wizard-[0-9]+-content-0/);
//             expect(linkElements[0].textContent).toMatch(/Tab1/);

//             expect(instance.tabLinks[1].id).toMatch(/clr-wizard-[0-9]+-tab-1/);
//             expect(instance.tabLinks[1].ariaControls).toMatch(/clr-wizard-[0-9]+-content-1/);
//             expect(linkElements[1].textContent).toMatch(/Tab2/);

//             expect(instance.tabLinks[2].id).toMatch(/clr-wizard-[0-9]+-tab-2/);
//             expect(instance.tabLinks[2].ariaControls).toMatch(/clr-wizard-[0-9]+-content-2/);
//             expect(linkElements[2].textContent).toMatch(/Tab3/);

//             expect(instance.tabLinks[3].id).toMatch(/clr-wizard-[0-9]+-tab-3/);
//             expect(instance.tabLinks[3].ariaControls).toMatch(/clr-wizard-[0-9]+-content-3/);
//             expect(linkElements[3].textContent).toMatch(/Tab4/);

//             expect(instance.tabContents[0].id).toMatch(/clr-wizard-[0-9]+-content-0/);
//             expect(instance.tabContents[0].ariaLabelledBy).toMatch(/clr-wizard-[0-9]+-tab-0/);
//             expect(pageElements[0].textContent).toMatch(/Page1/);

//             expect(instance.tabContents[1].id).toMatch(/clr-wizard-[0-9]+-content-1/);
//             expect(instance.tabContents[1].ariaLabelledBy).toMatch(/clr-wizard-[0-9]+-tab-1/);
//             expect(pageElements[1].textContent).toMatch(/Page2/);

//             expect(instance.tabContents[2].id).toMatch(/clr-wizard-[0-9]+-content-2/);
//             expect(instance.tabContents[2].ariaLabelledBy).toMatch(/clr-wizard-[0-9]+-tab-2/);
//             expect(pageElements[2].textContent).toMatch(/Page3/);

//             expect(instance.tabContents[3].id).toMatch(/clr-wizard-[0-9]+-content-3/);
//             expect(instance.tabContents[3].ariaLabelledBy).toMatch(/clr-wizard-[0-9]+-tab-3/);
//             expect(pageElements[3].textContent).toMatch(/Page4/);
//         });

//         it("activates the matching tab content when a tab is selected", () => {
//             instance.selectTab(instance.tabLinks[2]);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(false);
//             expect(instance.tabLinks[2].active).toBe(true);
//             expect(instance.tabLinks[3].active).toBe(false);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(false);
//             expect(instance.tabContents[2].active).toBe(true);
//             expect(instance.tabContents[3].active).toBe(false);
//         });

//         it("moves to the next Tab on click of Next button", () => {
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);
//             moveToNext(compiled);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(true);
//         });

//         it("moves to the next Tab on programmatically calling the next() function", () => {
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);
//             instance.next();
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(true);
//         });

//         it("moves to the previous Tab on click of Back button", () => {
//             moveToNext(compiled);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(true);
//             moveToPrevious(compiled);
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);
//         });

//         it("moves to the previous Tab on programmatically calling the prev() function", () => {
//             instance.next();
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(true);
//             instance.prev();
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);
//         });

//         it("hides the Back button in the first tab", () => {
//             let back: HTMLElement = compiled.querySelector(".btn-outline");
//             expect(back).toBeNull();
//         });

//         it("hides the Next button in the last tab", () => {
//             moveToNext(compiled);
//             moveToNext(compiled);
//             moveToNext(compiled);
//             let primaryButtonText: string = compiled.querySelector(".btn-primary").textContent;
//             expect(primaryButtonText).not.toMatch(/NEXT/);
//         });

//         it("passes clrWizardClosable false to the modal", () => {
//             let closeButton = compiled.querySelector("button.close");
//             expect(instance.closable).toBe(false);
//             expect(closeButton).toBeNull();
//         });
//     });

//     describe("Advanced", () => {

//         beforeEach(() => {
//             fixture = TestBed.createComponent(AdvancedWizard);
//             fixture.detectChanges();
//             instance = fixture.componentInstance.wizard;
//             compiled = fixture.nativeElement;
//         });

//         // this test belongs here because even though we are checking for WizardPage's title,
//         // it is the wizard's job to get the value from matching WizardStep's title.
//         it("correctly assigns the tab content title", () => {
//             let wizardPages: HTMLElement[] = compiled.querySelectorAll("section > label.text-light");

//             expect(wizardPages[0].innerHTML).toMatch(/Tab1/);
//             expect(wizardPages[1].innerHTML).toMatch(/Tab2/);
//             expect(wizardPages[2].innerHTML).toMatch(/Tab3/);
//             expect(wizardPages[3].innerHTML).toMatch(/Custom Title/);
//         });

//         it("doesn't switch the active tab if user clicks on a disabled tab", () => {
//             let linkElements: HTMLElement[] = compiled.querySelectorAll("clr-wizard-step");

//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);

//             linkElements[1].click();
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);
//         });

//         it("should disable the next button if clrWizardPageNextDisabled flag is set to true", () => {
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);

//             fixture.componentInstance.nextDisabled = true;
//             fixture.detectChanges();
//             moveToNext(compiled);
//             expect(instance.tabLinks[0].active).toBe(true);
//             expect(instance.tabLinks[1].active).toBe(false);

//             fixture.componentInstance.nextDisabled = false;
//             fixture.detectChanges();
//             moveToNext(compiled);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(true);
//         });


//         it("sets the isComplete to true when each step successfully validates " +
//             "and context moves to next tab", () => {
//             fixture.componentInstance.nextDisabled = false;
//             fixture.detectChanges();
//             moveToNext(compiled);
//             expect(instance.tabLinks[0].isCompleted).toBe(true);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(true);
//             expect(instance.tabLinks[2].active).toBe(false);
//             expect(instance.tabLinks[3].active).toBe(false);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(true);
//             expect(instance.tabContents[2].active).toBe(false);
//             expect(instance.tabContents[3].active).toBe(false);
//         });

//         it("fires the onLoad for the first tab when the wizard opens", () => {
//             let tab1: HTMLElement = compiled.querySelector(".tab1");
//             expect(tab1.textContent).toMatch(/This Works Better/);
//         });

//         it("fires the onLoad every time a new tab is opened", () => {
//             let tab1: HTMLElement = compiled.querySelector(".tab1");

//             moveToNext(fixture.nativeElement);
//             moveToPrevious(fixture.nativeElement);

//             expect(tab1.textContent).toMatch(/This Works Better/);
//         });

//         it("allows canceling event through a user-defined onCommit handler", () => {
//             moveToNext(compiled);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(true);
//             expect(instance.tabContents[2].active).toBe(false);
//             expect(instance.tabContents[3].active).toBe(false);

//             moveToNext(compiled);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(false);
//             expect(instance.tabContents[2].active).toBe(true);
//             expect(instance.tabContents[3].active).toBe(false);

//             moveToNext(compiled);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(false);
//             expect(instance.tabContents[2].active).toBe(true);
//             expect(instance.tabContents[3].active).toBe(false);
//         });

//         it("proceeds to the next tab when no user-defined onCommit is registered", () => {
//             fixture.componentInstance.nextDisabled = false;
//             fixture.detectChanges();
//             moveToNext(compiled);
//             let tab2: HTMLElement = compiled.querySelector(".tab2");
//             expect(tab2.textContent).toMatch(/Content2/);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(true);
//             expect(instance.tabLinks[2].active).toBe(false);
//             expect(instance.tabLinks[3].active).toBe(false);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(true);
//             expect(instance.tabContents[2].active).toBe(false);
//             expect(instance.tabContents[3].active).toBe(false);
//         });

//         it("calls the user-defined onCommit handler when the Next button is clicked, and moves to next tab", () => {
//             fixture.componentInstance.nextDisabled = false;
//             fixture.detectChanges();
//             moveToNext(compiled);
//             moveToNext(compiled);
//             let tab3: HTMLElement = compiled.querySelector(".tab3");
//             expect(tab3.textContent).toMatch(/NewContent3/);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(false);
//             expect(instance.tabLinks[2].active).toBe(true);
//             expect(instance.tabLinks[3].active).toBe(false);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(false);
//             expect(instance.tabContents[2].active).toBe(true);
//             expect(instance.tabContents[3].active).toBe(false);
//         });

//         it("displays error message if clrWizardPageErrorFlag is set to true", () => {
//             moveToNext(compiled);
//             moveToNext(compiled);
//             moveToNext(compiled);

//             let contentWrapper: HTMLElement = compiled.querySelector(".errorMessage");
//             expect(contentWrapper.textContent).toMatch(/Error Message/);
//             expect(instance.tabLinks[0].active).toBe(false);
//             expect(instance.tabLinks[1].active).toBe(false);
//             expect(instance.tabLinks[2].active).toBe(true);
//             expect(instance.tabLinks[3].active).toBe(false);
//             expect(instance.tabContents[0].active).toBe(false);
//             expect(instance.tabContents[1].active).toBe(false);
//             expect(instance.tabContents[2].active).toBe(true);
//             expect(instance.tabContents[3].active).toBe(false);
//         });

//         it("allows skipping of a tab given its id", () => {
//             instance.skipTab("tab2");
//             expect(instance.tabLinks.length).toEqual(3);
//             expect(instance.tabContents.length).toEqual(3);

//             expect(instance.tabLinks[0].id).toEqual("tab1");
//             expect(instance.tabLinks[1].id).toEqual("tab3");
//             expect(instance.tabLinks[2].id).toEqual("tab4");

//             moveToNext(compiled);

//             let tab1: HTMLElement = compiled.querySelector(".tab1, .complete");
//             let tab2: HTMLElement = compiled.querySelector(".tab2, .skipped");
//             let tab3: HTMLElement = compiled.querySelector(".tab3, .active");
//             expect(tab1).toBeDefined();
//             expect(tab2).toBeDefined();
//             expect(tab3).toBeDefined();
//         });

//         it("allows un-skipping of a tab given its id", () => {
//             instance.skipTab("tab2");
//             expect(instance.tabLinks.length).toEqual(3);
//             expect(instance.tabContents.length).toEqual(3);

//             expect(instance.tabLinks[0].id).toEqual("tab1");
//             expect(instance.tabLinks[1].id).toEqual("tab3");
//             expect(instance.tabLinks[2].id).toEqual("tab4");

//             moveToNext(compiled);

//             let tab1: HTMLElement = compiled.querySelector(".tab1, .complete");
//             let tab2: HTMLElement = compiled.querySelector(".tab2, .skipped");
//             let tab3: HTMLElement = compiled.querySelector(".tab3, .active");
//             let tab4: HTMLElement = compiled.querySelector(".tab4");

//             expect(tab1).toBeDefined();
//             expect(tab2).toBeDefined();
//             expect(tab3).toBeDefined();
//             expect(tab4).toBeDefined();

//             moveToPrevious(compiled);
//             instance.unSkipTab("tab2");

//             expect(instance.tabLinks.length).toEqual(4);
//             expect(instance.tabContents.length).toEqual(4);

//             expect(instance.tabLinks[0].id).toEqual("tab1");
//             expect(instance.tabLinks[1].id).toEqual("tab2");
//             expect(instance.tabLinks[2].id).toEqual("tab3");
//             expect(instance.tabLinks[3].id).toEqual("tab4");

//             moveToNext(compiled);

//             tab1 = compiled.querySelector(".tab1, .complete");
//             tab2 = compiled.querySelector(".tab2, .active");
//             tab3 = compiled.querySelector(".tab3");
//             tab4 = compiled.querySelector(".tab4");

//             expect(tab1).toBeDefined();
//             expect(tab2).toBeDefined();
//             expect(tab3).toBeDefined();
//             expect(tab4).toBeDefined();
//         });

//         it("calls the user-defined onCancel handler when the Cancel button is clicked", () => {
//             doCancel(compiled);
//             expect(fixture.componentInstance.hasBeenCanceled).toBe(true);
//         });

//         it("defaults clrWizardClosable to true", () => {
//             let closeButton = compiled.querySelector("button.close");
//             expect(instance.closable).toBe(true);
//             expect(closeButton).not.toBeNull();
//         });
//     });
// });
