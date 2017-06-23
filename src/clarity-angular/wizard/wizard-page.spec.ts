/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component, QueryList, ViewChildren, ViewChild, DebugElement } from "@angular/core";
import { Wizard } from "./wizard";
import { WizardPage } from "./wizard-page";
import { WizardNavigationService } from "./providers/wizard-navigation";
import { PageCollectionService } from "./providers/page-collection";
import { ButtonHubService } from "./providers/button-hub";
import { PageCollectionMock } from "./providers/page-collection.mock";
import { MockPage } from "./wizard-page.mock";
import { Alert } from "../emphasis/alert/alert";
import { WizardButton } from "./wizard-button";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ClrWizardModule } from "./wizard.module";
import { ClrAlertModule } from "../emphasis/alert/alert.module";
import { ClrIconModule } from "../icon/icon.module";

class MyPageCollectionMock extends PageCollectionMock {
    public previousPage: MockPage;

    public getPreviousPage() {
        if (this.previousPage) {
            return this.previousPage;
        }
        return null;
    }
}

@Component({
    template: `
        <clr-wizard-page>
            <ng-template clrPageTitle>Mandatory Title</ng-template>
            Hello moto
        </clr-wizard-page>
        <clr-wizard-page>
            <ng-template clrPageTitle>Mandatory Title</ng-template>
            <ng-template clrPageNavTitle>Optional nav title</ng-template>
            <ng-template clrPageHeaderActions>
                <clr-wizard-header-action id="fhtagn">hi</clr-wizard-header-action>
            </ng-template>
            Other wizard page needed as competition in tests
            <ng-template clrPageButtons>
                <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
            </ng-template>
        </clr-wizard-page>
    `
})
class TypescriptTestComponent {
    @ViewChildren(WizardPage) wizardPageChildren: QueryList<WizardPage>;
}

@Component({
    template: `
        <clr-wizard-page #nav
            [(clrWizardPageNextDisabled)]="navTestNextDisabled"
            [(clrWizardPagePreviousDisabled)]="navTestPreviousDisabled"
            [(clrWizardPagePreventDefaultCancel)]="navStopCancel"
        >
            <ng-template clrPageTitle>Tests of page nav inputs and outputs</ng-template>
        </clr-wizard-page>
        <clr-wizard-page #lifecycle>
            <ng-template clrPageTitle>Tests for lifecycle outputs and event handlers</ng-template>
        </clr-wizard-page>
        <clr-wizard-page #other
            [id]="testId"
            (clrWizardPageOnLoad)="onLoadCheck($event)"
        >
            <ng-template clrPageTitle>Other template API tests</ng-template>
        </clr-wizard-page>
    `
})
class TemplateTestComponent {
    @ViewChild("nav") navigationTemplateTester: WizardPage;
    @ViewChild("lifecycle") lifecycleTemplateTester: WizardPage;
    @ViewChild("other") otherTemplateTester: WizardPage;

    public navTwoWayBindingPassed: boolean = false;
    public testId = "ohai";

    private _navTestNextDisabled: boolean = false;
    public get navTestNextDisabled(): boolean {
        return this._navTestNextDisabled;
    }
    public set navTestNextDisabled(val: boolean) {
        if (val !== this._navTestNextDisabled) {
            this.navTwoWayBindingPassed = true;
            this._navTestNextDisabled = val;
        }
    }

    private _navTestPreviousDisabled: boolean = true;
    public get navTestPreviousDisabled(): boolean {
        return this._navTestPreviousDisabled;
    }
    public set navTestPreviousDisabled(val: boolean) {
        if (val !== this._navTestPreviousDisabled) {
            this.navTwoWayBindingPassed = true;
            this._navTestPreviousDisabled = val;
        }
    }

    private _navStopCancel: boolean = false;
    public get navStopCancel(): boolean {
        return this._navStopCancel;
    }
    public set navStopCancel(val: boolean) {
        this.navTwoWayBindingPassed = true;
        this._navStopCancel = val;
    }

    public loadedPageId = "";
    public onLoadCheck(pageId: string): void {
        this.loadedPageId = pageId;
    }
}

@Component({
    template: `
    <clr-wizard #viewTestWizard [(clrWizardOpen)]="open">
        <clr-wizard-title>Wizard for Wizard Page View Tests</clr-wizard-title>

        <clr-wizard-button [type]="'cancel'" #wizardCancelBtn
            class="clr-test-wizard-cancel">Cancel</clr-wizard-button>
        <clr-wizard-button [type]="'previous'" class="clrtest-wizard-previous"
            #wizardPreviousBtn>Back</clr-wizard-button>
        <clr-wizard-button [type]="'custom-custom'"
            class="clrtest-wizard-custom">Custom</clr-wizard-button>
        <clr-wizard-button [type]="'next'"
            class="clrtest-wizard-next">Next</clr-wizard-button>
        <clr-wizard-button [type]="'danger'"
            class="clrtest-wizard-danger">Danger</clr-wizard-button>
        <clr-wizard-button [type]="'finish'"
            class="clrtest-wizard-finish">Finish</clr-wizard-button>

        <clr-wizard-header-action (actionClicked)="headerActionClicked($event)">
            <clr-icon shape="cloud" class="is-solid"></clr-icon>
        </clr-wizard-header-action>

        <clr-wizard-page #viewTestWizardPageOne [id]="testId"
            [clrWizardPagePreventDefaultCancel]="preventCancel"
        >
            <ng-template clrPageTitle>View Page 1</ng-template>

            <ng-template clrPageHeaderActions>
                <clr-wizard-header-action (actionClicked)="headerActionClicked($event)" id="bell">
                    <clr-icon shape="bell" class="has-badge"></clr-icon>
                </clr-wizard-header-action>
                <clr-wizard-header-action (actionClicked)="headerActionClicked($event)" id="warning">
                    <clr-icon shape="warning"></clr-icon>
                </clr-wizard-header-action>
            </ng-template>

            <ng-template clrPageButtons>
                <clr-wizard-button [type]="'cancel'" class="clrtest-page-cancel"
                    #pageCancelBtn>Cancel</clr-wizard-button>
                <clr-wizard-button [type]="'previous'"
                    class="clrtest-page-previous-1">Previous</clr-wizard-button>
                <clr-wizard-button [type]="'danger'">Caution</clr-wizard-button>
            </ng-template>
        </clr-wizard-page>

        <clr-wizard-page #viewTestWizardPageTwo
            [(clrWizardPagePreviousDisabled)]="disablePrevious">
            <ng-template clrPageTitle>View Page 2</ng-template>
            <p>{{projector}}</p>
        </clr-wizard-page>

        <clr-wizard-page #viewTestWizardPageThree
            [(clrWizardPagePreviousDisabled)]="disablePrevious">
            <ng-template clrPageTitle>View Page 3</ng-template>
            <ng-template clrPageNavTitle>short title</ng-template>
            <p *ngIf="!asyncLoaded">Loading...</p>
            <p *ngIf="asyncLoaded">{{asyncContent}}</p>

            <ng-template clrPageButtons>
                <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
                <clr-wizard-button [type]="'previous'" #pagePreviousBtn
                    class="clrtest-page-previous-2">Previous</clr-wizard-button>
                <clr-wizard-button [type]="'danger'">Danger</clr-wizard-button>
            </ng-template>
        </clr-wizard-page>

        <clr-wizard-page #viewTestWizardPageFour
            [clrWizardPagePreventDefaultCancel]="preventCancel"
            (clrWizardPageOnCancel)="altCancel()"
        >
            <ng-template clrPageTitle>View Page 4</ng-template>
            <clr-alert [clrAlertClosable]="false">
                <div class="alert-item">
                    <span class="alert-text">
                        i believe the answer is {{innerProjector/2}}
                    </span>
                </div>
            </clr-alert>
        </clr-wizard-page>
    </clr-wizard>
    `
})
class ViewTestComponent {
    @ViewChild("viewTestWizard") testWizard: Wizard;
    @ViewChild("viewTestWizardPageOne") pageOne: WizardPage;
    @ViewChild("viewTestWizardPageTwo") pageTwo: WizardPage;
    @ViewChild("viewTestWizardPageThree") pageThree: WizardPage;
    @ViewChild("viewTestWizardPageFour") pageFour: WizardPage;
    @ViewChild("wizardPreviousBtn") wizardPreviousBtn: WizardButton;
    @ViewChild("pagePreviousBtn") pagePreviousBtn: WizardButton;
    @ViewChild("wizardCancelBtn") wizardCancelBtn: WizardButton;
    @ViewChild("pageCancelBtn") pageCancelBtn: WizardButton;

    public projector = "my projected content";
    public innerProjector = 12;
    public asyncLoaded = false;
    public asyncContent = "";
    // wizard has to init to open or all the pages are hidden inside modal
    public open = true;
    public loadAsync(): void {
        setTimeout(() => {
            this.asyncLoaded = true;
            this.asyncContent = "better late than never";
        }, 100);
    }
    public testId = "ohai";
    public disablePrevious = false;
    public preventCancel = false;
    public altCancelRan = false;
    public altCancel() {
        this.altCancelRan = true;
    }
}

@Component({
    template: `
        <clr-wizard-page
            (clrWizardPageOnLoad)="myOnLoad()"
            [clrWizardPageNextDisabled]="nextDisabled">
            {{content1}}
        </clr-wizard-page>
        <clr-wizard-page
            (clrWizardPageOnCommit)="myOnCommit($event)">
            Content2
         </clr-wizard-page>
         <clr-wizard-page>
            Content3
         </clr-wizard-page>
    `
})
class TestComponent {
    @ViewChildren(WizardPage) wizardPageChildren: QueryList<WizardPage>;
    open: boolean = true;
    nextDisabled: boolean = false;
    content1: String = "Content1";

    myOnLoad(): void {
        this.content1 = "This Works Better";
    }

    myOnCommit(event: any): void {
        event.preventDefault();
    }
}

@Component({
    template: `
        <ng-container *ngFor="let page of [0, 1, 2, 3]">
            <clr-wizard-page [id]="3 === page ? 'lastpage' : page">
                Content for page {{ page }}
            </clr-wizard-page>
        </ng-container>
    `
})
class IdTestComponent {
    @ViewChildren(WizardPage) pages: QueryList<WizardPage>;
}

export default function(): void {
    describe("WizardPage", () => {
        let fixture: ComponentFixture<any>;
        let testComponent: TypescriptTestComponent;
        let debugEl: DebugElement;
        let testWizardPage: WizardPage;
        let otherWizardPage: WizardPage;
        let pageCollection = new MyPageCollectionMock();
        let navService: WizardNavigationService;

        describe("Numeric id bug", () => {
            let firstPage: WizardPage;
            let secondPage: WizardPage;
            let thirdPage: WizardPage;
            let fourthPage: WizardPage;
            let myTestComponent: IdTestComponent;

            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ ClrWizardModule, ClrAlertModule, NoopAnimationsModule ],
                    declarations: [ IdTestComponent ],
                    providers: [
                        WizardNavigationService,
                        { provide: PageCollectionService, useValue: pageCollection },
                        ButtonHubService
                    ]
                });
                fixture = TestBed.createComponent(IdTestComponent);
                fixture.detectChanges();
                debugEl = fixture.debugElement;
                myTestComponent = fixture.componentInstance;
                firstPage = myTestComponent.pages.toArray()[0];
                secondPage = myTestComponent.pages.toArray()[1];
                thirdPage = myTestComponent.pages.toArray()[2];
                fourthPage = myTestComponent.pages.toArray()[3];
            });

            afterEach(() => {
                fixture.destroy();
            });

            it("should not auto-assign an id of zero", () => {
                let myId = firstPage.id;
                let myMungedId: string[];
                let generatedId: string;

                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).toBe("0", "should pass 0 as id if specified");
            });

            it("should not pass an id of false", () => {
                let myId: string;
                let myMungedId: string[];
                let generatedId: string;

                firstPage._id = false;
                myId = firstPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).not.toBe("false", "should not pass false as an id");
            });

            it("should not pass an id of null", () => {
                let myId: string;
                let myMungedId: string[];
                let generatedId: string;

                firstPage._id = null;
                myId = firstPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).not.toBe("null", "should not pass null as an id");
            });

            it("should not pass an id of empty string", () => {
                let myId: string;
                let myMungedId: string[];
                let generatedId: string;

                firstPage._id = "";
                myId = firstPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).not.toBe("null", "should not pass null as an id");
            });

            it("should not pass an undefined id", () => {
                let myId: string;
                let myMungedId: string[];
                let generatedId: string;
                let undefinedVal: any;

                firstPage._id = undefinedVal;
                myId = firstPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).not.toBe("undefined", "should not pass undefined as an id");
            });

            it("should not pass a negative number as an id", () => {
                let myId: string;
                let myMungedId: string[];
                let generatedId: string;

                firstPage._id = -1;
                myId = firstPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(myId).not.toBe("clr-wizard-page--1", "should not pass a negative number as an id");
            });

            it("should match numeric ids if passed", () => {
                // had an issue here because ppl were using indexes as ids and our logic
                // was not awesome for that
                let myId = firstPage.id;
                let myMungedId: string[];
                let generatedId: string;

                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).toBe("0", "first page id should be 0");

                myId = secondPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];

                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).toBe("1", "should pass 1 as id if specified");

                myId = thirdPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];

                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).toBe("2", "should pass 2 as id if specified");

                myId = fourthPage.id;
                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];

                myMungedId = myId.split("-").reverse();
                generatedId = myMungedId[0];
                expect(generatedId).toBe("lastpage", "should pass string label as id");
            });
        });

        describe("Typescript API", () => {
            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ClrWizardModule, NoopAnimationsModule ],
                    declarations: [ TypescriptTestComponent ],
                    providers: [
                        WizardNavigationService,
                        { provide: PageCollectionService, useValue: pageCollection },
                        ButtonHubService
                    ]
                });
                fixture = TestBed.createComponent(TypescriptTestComponent);
                fixture.detectChanges();
                debugEl = fixture.debugElement;
                testComponent = fixture.componentInstance;
                navService = fixture.debugElement.injector.get(WizardNavigationService);
                testWizardPage = testComponent.wizardPageChildren.toArray()[0];
                otherWizardPage = testComponent.wizardPageChildren.toArray()[1];
            });

            afterEach(() => {
                fixture.destroy();
            });

            describe("id", () => {
                it("should return an indexed id if none is specified", () => {
                    let myId = testWizardPage.id;
                    let myMungedId: string[];
                    let mungedIdNaN: boolean;
                    expect(myId).toContain("clr-wizard-page-", "id should contain prefix");
                    myMungedId = myId.split("-").reverse();
                    mungedIdNaN = isNaN(Number(myMungedId[0]));
                    expect(mungedIdNaN).toBe(false, "index should be a number");
                });

                it("should return expected id", () => {
                    expect(testWizardPage.id).toContain("clr-wizard-page-", "verify default");
                    testWizardPage._id = "ohai";
                    fixture.detectChanges();
                    expect(testWizardPage.id).toBe("clr-wizard-page-ohai", "verify custom id");
                });
            });

            describe("readyToComplete", () => {
                it("should reflect nextStepDisabled state", () => {
                    // testcomponent's wizard page isn't a part of a wizard so it doesn't preset
                    // nextStepDisabled's value
                    expect(testWizardPage.nextStepDisabled).toBe(false, "nextStepDisabled initialized to false");
                    expect(testWizardPage.readyToComplete).toBe(true, "readyToComplete " +
                        "initialized to true");
                    testWizardPage.nextStepDisabled = true;
                    fixture.detectChanges();
                    expect(testWizardPage.readyToComplete).toBe(false, "readyToComplete " +
                        "reflect update to nextStepDisabled, part 2");
                });
            });

            describe("completed", () => {
                it("should be true if complete and readyToComplete are true", () => {
                    testWizardPage.nextStepDisabled = false;
                    testWizardPage.completed = true;
                    fixture.detectChanges();
                    expect(testWizardPage.completed).toBe(true);
                });

                it("should return false if not complete", () => {
                    testWizardPage.nextStepDisabled = false;
                    testWizardPage.completed = false;
                    fixture.detectChanges();
                    expect(testWizardPage.completed).toBe(false);
                });

                it("should return false if not readyToComplete", () => {
                    testWizardPage.nextStepDisabled = true;
                    testWizardPage.completed = true;
                    fixture.detectChanges();
                    expect(testWizardPage.completed).toBe(false);
                });
            });

            describe("current", () => {
                it("should return false if not current", () => {
                    // make sure another page is current
                    navService.currentPage = otherWizardPage;
                    fixture.detectChanges();
                    expect(testWizardPage.current).toBe(false);
                });

                it("should be true if page is current", () => {
                    navService.currentPage = testWizardPage;
                    fixture.detectChanges();
                    expect(testWizardPage.current).toBe(true);
                });

            });

            describe("disabled", () => {
                it("should be reflect enabled status", () => {
                    // enabled full coverage below
                    let dummyPreviousPage = new MockPage(99);
                    pageCollection.previousPage = dummyPreviousPage;
                    dummyPreviousPage.completed = false;
                    navService.currentPage = otherWizardPage;
                    testWizardPage.completed = false;
                    fixture.detectChanges();
                    expect(testWizardPage.enabled).toBe(false, "enabled is set to false");
                    expect(testWizardPage.disabled).toBe(true, "disabled is true when enabled is false");

                    navService.currentPage = testWizardPage;
                    expect(testWizardPage.enabled).toBe(true, "enabled is set to true");
                    expect(testWizardPage.disabled).toBe(false, "disabled is false when enabled is true");
                });
            });

            describe("enabled", () => {
                it("should return true if page is current", () => {
                    navService.currentPage = testWizardPage;
                    fixture.detectChanges();
                    expect(testWizardPage.enabled).toBe(true);
                });

                it("should return true if page is completed", () => {
                    testWizardPage.completed = true;
                    fixture.detectChanges();
                    expect(testWizardPage.enabled).toBe(true);
                });

                it("should return true if previous page is completed", () => {
                    let dummyPreviousPage = new MockPage(99);
                    pageCollection.previousPage = dummyPreviousPage;
                    dummyPreviousPage.completed = true;
                    navService.currentPage = otherWizardPage;
                    testWizardPage.completed = false;
                    fixture.detectChanges();
                    expect(testWizardPage.enabled).toBe(true);
                });

                it("should return false if page is not current or completed or if " +
                    "previous page is not completed", () => {
                    let dummyPreviousPage = new MockPage(99);
                    pageCollection.previousPage = dummyPreviousPage;
                    dummyPreviousPage.completed = false;
                    navService.currentPage = otherWizardPage;
                    testWizardPage.completed = false;
                    fixture.detectChanges();
                    expect(testWizardPage.enabled).toBe(false);
                });
            });

            describe("previousCompleted", () => {
                it("should return true if there is no previous page", () => {
                    pageCollection.previousPage = null; // explicitly remove previous page
                    fixture.detectChanges();
                    expect(testWizardPage.previousCompleted).toBe(true);
                });

                it("should return true if previous page is completed", () => {
                    let dummyPreviousPage = new MockPage(99);
                    pageCollection.previousPage = dummyPreviousPage;
                    dummyPreviousPage.completed = true;
                    fixture.detectChanges();
                    expect(testWizardPage.previousCompleted).toBe(true);
                });

                it("should return false if previous page is NOT completed", () => {
                    let dummyPreviousPage = new MockPage(99);
                    pageCollection.previousPage = dummyPreviousPage;
                    dummyPreviousPage.completed = false; // set explicitly
                    fixture.detectChanges();
                    expect(testWizardPage.previousCompleted).toBe(false);
                });
            });

            describe("title", () => {
                it("should return page title template ref", () => {
                    const testMe = testWizardPage.title;
                    expect(testMe).toBeDefined("title template ref should be a thing");
                    // expect(testMe).toEqual(jasmine.any(TemplateRef), "page title should be a template ref");
                });
            });

            describe("navTitle", () => {
                it("should return page nav title template ref instead of page title, if it exists", () => {
                    const testMe = otherWizardPage.navTitle;
                    const notToBe = otherWizardPage.title;

                    // otherpage has a nav title
                    expect(testMe).toBeDefined("nav title template ref should be a thing");
                    // view piece is covered below; for now, we want to test just the API
                    expect(testMe).not.toBe(notToBe, "expect titles to be different");
                });

                it("should return page title if no page nav title is specified", () => {
                    const testMe = testWizardPage.navTitle;
                    const expected = testWizardPage.title;
                    // testpage has no nav title
                    expect(testMe).toBeDefined("nav title template ref should be a thing");
                    // view piece is covered below; for now, we want to test just the API
                    expect(testMe).toBe(expected, "expect titles to be the same");
                });
            });

            describe("headerActions", () => {
                it("should return page header actions if they are present", () => {
                    // other wizard page has header actions
                    const testMe = otherWizardPage.headerActions;
                    expect(testMe).toBeDefined("header actions exist");
                });

                it("should return undefined if page header actions are not present", () => {
                    // test wizard page has no header actions
                    const testMe = testWizardPage.headerActions;
                    expect(testMe).not.toBeDefined();
                });
            });

            describe("hasHeaderActions", () => {
                it("should return true if page header actions exist", () => {
                    // other wizard page has header actions
                    const test = otherWizardPage.hasHeaderActions;
                    expect(test).toBe(true);
                });

                it("should return false if no page header actions are present", () => {
                    // test wizard page has no header actions
                    const test = testWizardPage.hasHeaderActions;
                    expect(test).toBe(false);
                });
            });

            describe("buttons", () => {
                it("should return buttons template ref if page has buttons in it", () => {
                    // other wizard page has custom buttons
                    const test = otherWizardPage.buttons;
                    expect(test).toBeDefined("custom buttons exist");
                });

                it("should return undefined if the page does not have buttons", () => {
                    // test wizard page has no custom buttons
                    const test = testWizardPage.buttons;
                    expect(test).not.toBeDefined();
                });
            });

            describe("hasButtons", () => {
                it("should return true if page has buttons in it", () => {
                    // other wizard page has custom buttons
                    const test = otherWizardPage.hasButtons;
                    expect(test).toBe(true);
                });

                it("should return false if the page does not have buttons", () => {
                    // test wizard page has no custom buttons
                    const test = testWizardPage.hasButtons;
                    expect(test).toBe(false);
                });
            });

            describe("makeCurrent", () => {
                it("should call the navService to make the page current", () => {
                    testWizardPage.makeCurrent();
                    expect(navService.currentPage).toBe(testWizardPage);
                });

                it("should emit onLoad event", () => {
                    let eventSpy = spyOn(otherWizardPage.onLoad, "emit");
                    otherWizardPage.makeCurrent();
                    fixture.detectChanges();
                    expect(eventSpy).toHaveBeenCalled();
                });
            });

            describe("stepItemId", () => {
                it("calls to page collection service to retrieve related stepnav item id", () => {
                    const testId = testWizardPage.stepItemId;
                    const wasCalled = pageCollection.stepItemIdWasCalled;
                    expect(testId).toBe("mock-id", "make sure it grabbed id as expected");
                    expect(wasCalled).toBe(true,
                        "page routine went through the page collection");
                });
            });
        });

        let templateTestComponent: TemplateTestComponent;
        let lifecycleWizardPage: WizardPage;
        let navWizardPage: WizardPage;

        describe("Template API", () => {
            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ClrWizardModule, NoopAnimationsModule ],
                    declarations: [ TemplateTestComponent ],
                    providers: [
                        WizardNavigationService,
                        { provide: PageCollectionService, useValue: pageCollection },
                        ButtonHubService
                    ]
                });
                fixture = TestBed.createComponent(TemplateTestComponent);
                fixture.detectChanges();
                debugEl = fixture.debugElement;
                templateTestComponent = fixture.componentInstance;
                navService = fixture.debugElement.injector.get(WizardNavigationService);
                navWizardPage = templateTestComponent.navigationTemplateTester;
                lifecycleWizardPage = templateTestComponent.lifecycleTemplateTester;
                otherWizardPage = templateTestComponent.otherTemplateTester;
            });

            afterEach(() => {
                fixture.destroy();
            });

            describe("nextStepDisabled input/output/binding", () => {
                it("should allow for setting input through component", () => {
                    let nextDisabledVal = templateTestComponent.navTestNextDisabled;
                    let wizardPageNextDisabled = navWizardPage.nextStepDisabled;
                    expect(nextDisabledVal).toBe(false, "expect init value to be false");
                    expect(wizardPageNextDisabled).toBe(nextDisabledVal,
                        "expect component value and wizard page value to be the same");
                    templateTestComponent.navTestNextDisabled = true;
                    fixture.detectChanges();

                    // get new values
                    nextDisabledVal = templateTestComponent.navTestNextDisabled;
                    wizardPageNextDisabled = navWizardPage.nextStepDisabled;

                    expect(nextDisabledVal).toBe(true, "expect updated value to be true");
                    expect(wizardPageNextDisabled).toBe(nextDisabledVal,
                        "expect component value and wizard page value to be the same after update");
                });

                it("should notify host component when set from somewhere else", () => {
                    let newValue = !templateTestComponent.navTestNextDisabled;
                    let emitSpy = spyOn(navWizardPage.nextStepDisabledChange, "emit").and.callThrough();
                    let twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(false, "do not expect binding to have passed up from page");
                    expect(emitSpy).not.toHaveBeenCalled();
                    navWizardPage.nextStepDisabled = newValue;

                    fixture.detectChanges();

                    // get new value
                    twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(true, "two-way binding should have notified host");
                    expect(emitSpy).toHaveBeenCalledWith(newValue);
                });

                it("should emit when set through host component", () => {
                    let newValue = !templateTestComponent.navTestNextDisabled;
                    let emitSpy = spyOn(navWizardPage.nextStepDisabledChange, "emit").and.callThrough();
                    let twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(false, "do not expect binding to have executed");
                    expect(emitSpy).not.toHaveBeenCalled();

                    templateTestComponent.navTestNextDisabled = newValue;
                    fixture.detectChanges();

                    // get new value
                    twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(true, "two-way binding should have notified host");
                    expect(emitSpy).toHaveBeenCalledWith(newValue);
                });
            });

            describe("previousStepDisabled", () => {
                it("should allow for setting input through component", () => {
                    let hostVal = templateTestComponent.navTestPreviousDisabled;
                    let testVal = navWizardPage.previousStepDisabled;

                    expect(hostVal).toBe(true, "expect init value to be true");
                    expect(navWizardPage.previousStepDisabled).toBe(hostVal,
                        "expect component value and wizard page value to be the same");

                    templateTestComponent.navTestPreviousDisabled = false;
                    fixture.detectChanges();

                    // get new values
                    hostVal = templateTestComponent.navTestPreviousDisabled;
                    testVal = navWizardPage.previousStepDisabled;

                    expect(hostVal).toBe(false, "expect updated value to be false");
                    expect(testVal).toBe(hostVal,
                        "expect component value and wizard page value to be the same after update");
                });

                it("should notify host component when set from somewhere else", () => {
                    let newValue = !templateTestComponent.navTestPreviousDisabled;
                    let emitSpy = spyOn(navWizardPage.previousStepDisabledChange, "emit").and.callThrough();
                    let twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(false, "do not expect binding to have passed up from page");
                    expect(emitSpy).not.toHaveBeenCalled();

                    navWizardPage.previousStepDisabled = newValue;
                    fixture.detectChanges();

                    // get new vals
                    twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(true, "two-way binding should have notified host");
                    expect(emitSpy).toHaveBeenCalledWith(newValue);
                });

                it("should emit when set through host component", () => {
                    let newValue = !templateTestComponent.navTestPreviousDisabled;
                    let emitSpy = spyOn(navWizardPage.previousStepDisabledChange, "emit").and.callThrough();
                    let twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(false, "do not expect binding to have executed");
                    expect(emitSpy).not.toHaveBeenCalled();

                    templateTestComponent.navTestPreviousDisabled = newValue;
                    fixture.detectChanges();

                    // new vals
                    twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(true, "two-way binding should have notified host");
                    expect(emitSpy).toHaveBeenCalledWith(newValue);
                });
            });

            describe("stopCancel", () => {
                it("should initialize as false", () => {
                    // not set on other page
                    const test = otherWizardPage.stopCancel;
                    expect(test).toBe(false);
                });

                it("should allow for setting input through component", () => {
                    let hostVal = templateTestComponent.navStopCancel;
                    let testVal = navWizardPage.stopCancel;

                    expect(hostVal).toBe(false, "expect init value to be false");
                    expect(testVal).toBe(hostVal,
                        "expect component value and wizard page value to be the same");

                    templateTestComponent.navStopCancel = false;
                    fixture.detectChanges();

                    hostVal = templateTestComponent.navStopCancel;
                    testVal = navWizardPage.stopCancel;

                    expect(hostVal).toBe(false, "expect updated value to be false");
                    expect(testVal).toBe(hostVal,
                        "expect component value and wizard page value to be the same after update");
                });

                it("should notify host component when set from somewhere else", () => {
                    let newValue = !templateTestComponent.navStopCancel;
                    let emitSpy = spyOn(navWizardPage.stopCancelChange, "emit").and.callThrough();
                    let twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(false, "do not expect binding to have passed up from page");
                    expect(emitSpy).not.toHaveBeenCalled();

                    navWizardPage.stopCancel = newValue;
                    fixture.detectChanges();

                    twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(true, "two-way binding should have notified host");
                    expect(emitSpy).toHaveBeenCalledWith(newValue);
                });

                it("should emit when set through host component", () => {
                    let newValue = !templateTestComponent.navStopCancel;
                    let emitSpy = spyOn(navWizardPage.stopCancelChange, "emit").and.callThrough();
                    let twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(false, "do not expect binding to have executed");
                    expect(emitSpy).not.toHaveBeenCalled();

                    templateTestComponent.navStopCancel = newValue;
                    fixture.detectChanges();

                    twoWayBindingTest = templateTestComponent.navTwoWayBindingPassed;

                    expect(twoWayBindingTest).toBe(true, "two-way binding should have notified host");
                    expect(emitSpy).toHaveBeenCalledWith(newValue);
                });
            });

            // TODO: HAVE TO TEST ONCOMMIT AS PART OF PAGE-COLLECTION B/C IT IS ONLY USED THERE
            // JUST MAKE SURE IT PASSES THE PAGE.ID...

            describe("onLoad", () => {
                it("should emit when page is made current and pass page id when emitted", () => {
                    let emitSpy = spyOn(otherWizardPage.onLoad, "emit").and.callThrough();
                    expect(templateTestComponent.loadedPageId).not.toBe(otherWizardPage.id,
                        "other wizard page should not be the current page starting out");
                    emitSpy.calls.reset();
                    otherWizardPage.makeCurrent();
                    fixture.detectChanges();
                    expect(emitSpy).toHaveBeenCalledWith(otherWizardPage.id);
                    expect(templateTestComponent.loadedPageId).toBe(otherWizardPage.id);
                });

                it("should not emit when another page is made current", () => {
                    let emitSpy = spyOn(otherWizardPage.onLoad, "emit").and.callThrough();
                    lifecycleWizardPage.makeCurrent();
                    fixture.detectChanges();
                    expect(emitSpy).not.toHaveBeenCalled();
                    expect(templateTestComponent.loadedPageId).not.toBe(otherWizardPage.id);
                });
            });

            // TODO: BUILD THESE TESTS OUT AT THE WIZARD LEVEL. ONLY WIZARD HANDLES CANCEL/CLOSE
            // BECAUSE IT NEEDS TO COMMUNICATE WITH MODAL PROPERTIES
            xdescribe("pageOnCancel", () => {
                it("should pass page id when emitted", () => {
                });

                it("should only emit once by default", () => {
                });

                it("should only emit once if overridden at page level", () => {
                });

                it("should only emit once if overridden at wizard level", () => {
                });
            });

            describe("id", () => {
                it("should use custom id when defined in input", () => {
                    expect(otherWizardPage.id).toBe("clr-wizard-page-ohai");
                });

                it("should update id when input is updated", () => {
                    templateTestComponent.testId = "onoez";
                    fixture.detectChanges();
                    expect(otherWizardPage.id).toBe("clr-wizard-page-onoez");
                });

                it("should use numeric index when input is not defined", () => {
                    let idToTest = navWizardPage.id;
                    let idSplitAndFlipped = idToTest.split("-").reverse();
                    let idIndex = Number(idSplitAndFlipped[0]);
                    expect(idToTest).toContain("clr-wizard-page-", "default id should include expected prefix");
                    expect(isNaN(idIndex)).toBe(false, "default id should have numeric index");
                });
            });

            describe("onInit", () => {
                it("should make page current if no current page is defined in navService", () => {
                    //first page in list should be made current when wizard starts up
                    const currentPage = navService.currentPage;
                    expect(currentPage).toBe(navWizardPage);
                });

                it("should not make page current if current page is defined in navService", () => {
                    const currentPage = navService.currentPage;
                    expect(currentPage).not.toBe(otherWizardPage);
                });
            });
        });

        let viewTestComponent: ViewTestComponent;
        let allTestPages: DebugElement[];
        let pageOne: DebugElement;
        let pageTwo: DebugElement;
        let pageThree: DebugElement;
        let pageFour: DebugElement;

        describe("View and Behavior", () => {
            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ClrWizardModule, ClrIconModule, ClrAlertModule, NoopAnimationsModule ],
                    declarations: [ ViewTestComponent ],
                    providers: [ WizardNavigationService, PageCollectionService, ButtonHubService ]
                });
                fixture = TestBed.createComponent(ViewTestComponent);
                fixture.detectChanges();
                debugEl = fixture.debugElement;
                viewTestComponent = fixture.componentInstance;
                navService = fixture.debugElement.injector.get(WizardNavigationService);
                allTestPages = fixture.debugElement.queryAll(By.directive(WizardPage));
                allTestPages.forEach((thisPage) => {
                    switch (thisPage.componentInstance) {
                        case viewTestComponent.pageOne:
                            pageOne = thisPage;
                            break;
                        case viewTestComponent.pageTwo:
                            pageTwo = thisPage;
                            break;
                        case viewTestComponent.pageThree:
                            pageThree = thisPage;
                            break;
                        case viewTestComponent.pageFour:
                            pageFour = thisPage;
                            break;
                        default:
                            break;
                    }
                });
            });

            afterEach(() => {
                fixture.destroy();
            });

            describe("content", () => {
                it("should display projected content", () => {
                    expect(pageTwo).toBeTruthy("test page should be in wizard");
                    expect(pageTwo.nativeElement.textContent.trim()).toBe(viewTestComponent.projector,
                        "projected content should match content in host component");
                });

                it("should update projected content", () => {
                    let oldContent = viewTestComponent.projector;
                    let newContent = "my updated content";

                    viewTestComponent.projector = newContent;
                    fixture.detectChanges();

                    let updatedContent = pageTwo.nativeElement.textContent.trim();

                    expect(updatedContent).not.toBe(oldContent,
                        "old content should not be there");
                    expect(updatedContent).toBe(newContent, "projected content should be updated");
                });

                it("should be able to project other components", () => {
                    let myInnerComponent: DebugElement;
                    myInnerComponent = pageFour.query(By.directive(Alert));

                    expect(myInnerComponent).toBeDefined("inner alert component should exist");
                    expect(myInnerComponent.nativeElement.textContent.trim()).toContain(
                        "i believe the answer is 6", "content should project through to inner components");
                });

                it("should allow for asynchronous content", fakeAsync(() => {
                    expect(pageThree.nativeElement.textContent.trim()).toBe("Loading...");
                    viewTestComponent.loadAsync();

                    tick(120);

                    fixture.detectChanges();
                    expect(viewTestComponent.asyncLoaded).toBe(true, "make sure async routine ran");
                    expect(pageThree.nativeElement.textContent.trim()).toBe("better late than never");
                }));
            });

            describe("id", () => {
                let idToTest: string;
                let idSplitAndFlipped: string[];
                let idIndex: number;

                it("should have its id in the id attribute", () => {
                    expect(pageOne.nativeElement.id).toBe("clr-wizard-page-ohai");
                });

                it("updating id input should update id attribute", () => {
                    viewTestComponent.testId = "onoez";
                    fixture.detectChanges();
                    expect(pageOne.nativeElement.id).toBe("clr-wizard-page-onoez");
                });

                it("should have an id even if the id input is not defined", () => {
                    idToTest = pageTwo.nativeElement.id;
                    expect(idToTest).toBeDefined("page id is defined by default");
                    idSplitAndFlipped = idToTest.split("-").reverse();
                    idIndex = Number(idSplitAndFlipped[0]);
                    expect(idToTest).toContain("clr-wizard-page-", "default id should include expected prefix");
                    expect(isNaN(idIndex)).toBe(false, "default id should have numeric index");
                });

                it("should have an id even if id input is changed to falsy", () => {
                    viewTestComponent.testId = null;
                    fixture.detectChanges();
                    idToTest = pageOne.nativeElement.id;
                    idSplitAndFlipped = idToTest.split("-").reverse();
                    idIndex = Number(idSplitAndFlipped[0]);
                    expect(idToTest).toBeDefined("id should still exist");
                    expect(idToTest).not.toBe("clr-wizard-page-null", "id should not use string value of falsy input");
                    expect(idToTest).toContain("clr-wizard-page-", "default id should include expected prefix");
                    expect(isNaN(idIndex)).toBe(false, "default id should have numeric index");
                });
            });

            describe("view", () => {
                it("should have a role of tabpanel", () => {
                    const testMe = pageOne.nativeElement.getAttribute("role");
                    expect(testMe).toBe("tabpanel");
                });

                it("aria-hidden should reflect if page is not current", () => {
                    // explicitly set a page to current
                    const expectedPage = pageTwo.componentInstance;
                    let currentPage: WizardPage;
                    let pageOneTest: string;
                    let pageTwoTest: string;
                    let currentPageIdTest: boolean;

                    viewTestComponent.testWizard.next();
                    fixture.detectChanges();

                    currentPage = viewTestComponent.testWizard.navService.currentPage;
                    pageOneTest = pageOne.nativeElement.getAttribute("aria-hidden");
                    pageTwoTest = pageTwo.nativeElement.getAttribute("aria-hidden");
                    currentPageIdTest = (currentPage.id === expectedPage.id);

                    expect(currentPageIdTest).toBe(true, "make sure current page got set as expected");

                    // check aria-hidden on non-current page
                    expect(pageOneTest).toBe("true", "non-current page has aria-hidden true");
                    expect(pageTwoTest).toBe("false", "current page has aria-hidden false");
                });

                it("aria-labelledby should reflect page's stepItemId", () => {
                    const pageColl = viewTestComponent.testWizard.pageCollection;
                    const test = pageOne.nativeElement.getAttribute("aria-labelledby");
                    const expected = pageColl.getStepItemIdForPage(pageOne.componentInstance);
                    expect(test).toBe(expected);
                });

                it("aria-labelledby should update if page's id is changed", () => {
                    const pageColl = viewTestComponent.testWizard.pageCollection;
                    let labelToTest: string;
                    let expected: string;

                    viewTestComponent.testId = "onoez";
                    fixture.detectChanges();

                    labelToTest = pageOne.nativeElement.getAttribute("aria-labelledby");
                    expected = pageColl.getStepItemIdForPage(pageOne.componentInstance);

                    expect(labelToTest).toBe(expected, "updated label should be reflected in component view");
                    expect(labelToTest).toContain("onoez", "aria-labelledBy should update");
                });

                it("should have .clr-wizard-page class", () => {
                    const test = pageThree.nativeElement.classList.contains("clr-wizard-page");
                    expect(test).toBe(true);
                });
            });

            describe("previousStepDisabled", () => {
                it("should disable previous button at wizard level when set " +
                    "and page is the current page", () => {
                    // verify button is not disabled at this point
                    let pageToTest = pageTwo.componentInstance;
                    let wizard = viewTestComponent.testWizard;
                    let debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    let previousBtn: Node;
                    let testIfCurrent: boolean;
                    let wizardBtnDisabled: boolean;

                    // setup
                    wizard.navService.next();
                    fixture.detectChanges();

                    testIfCurrent = (wizard.navService.currentPage === pageToTest);

                    expect(testIfCurrent).toBe(true, "expect page to have been made current");

                    previousBtn = debugWiz.nativeElement.querySelector(".clrtest-wizard-previous > button");
                    expect(previousBtn).not.toBe(null, "expect wizard buttons to be present");

                    wizardBtnDisabled = viewTestComponent.wizardPreviousBtn.isDisabled;
                    expect(wizardBtnDisabled).toBe(false, "expect wizard level button not to be disabled");

                    previousBtn = debugWiz.nativeElement.querySelector(".clrtest-wizard-previous > button.disabled");
                    expect(previousBtn).toBe(null, "expect wizard level button to not have disabled class");

                    viewTestComponent.disablePrevious = true;
                    fixture.detectChanges();

                    wizardBtnDisabled = viewTestComponent.wizardPreviousBtn.isDisabled;
                    expect(wizardBtnDisabled).toBe(true, "expect wizard level button to be disabled");

                    previousBtn = debugWiz.nativeElement.querySelector(".clrtest-wizard-previous > button.disabled");
                    expect(previousBtn).not.toBe(null, "expect wizard level button to have disabled class");
                });

                it("should disable previous button at page level when set " +
                    "and page is the current page", () => {
                    // verify button is not disabled at this point
                    let pageToTest = pageThree.componentInstance;
                    let wizard = viewTestComponent.testWizard;
                    let debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    let previousBtn: DebugElement;
                    let testIfCurrent: boolean;
                    let wizardBtnDisabled: boolean;

                    // setup -- going to page three
                    wizard.next();
                    wizard.next();

                    fixture.detectChanges();

                    testIfCurrent = (wizard.navService.currentPage === pageToTest);
                    expect(testIfCurrent).toBe(true, "expect page to have been made current");

                    previousBtn = debugWiz.nativeElement.querySelector(".clrtest-page-previous-2");
                    expect(previousBtn).not.toBe(null, "expect page buttons to be present");

                    wizardBtnDisabled = viewTestComponent.pagePreviousBtn.isDisabled;
                    expect(wizardBtnDisabled).toBe(false, "expect page level button not to be disabled");

                    previousBtn = debugWiz.nativeElement.querySelector(".clrtest-page-previous-2 > button.disabled");
                    expect(previousBtn).toBe(null, "expect page level button to not have disabled class");

                    viewTestComponent.disablePrevious = true;
                    fixture.detectChanges();

                    wizardBtnDisabled = viewTestComponent.pagePreviousBtn.isDisabled;
                    expect(wizardBtnDisabled).toBe(true, "expect page level button to be disabled");

                    previousBtn = debugWiz.nativeElement.querySelector(".clrtest-page-previous-2 > button.disabled");
                    expect(previousBtn).not.toBe(null, "expect page level button to have disabled class");
                });
            });

            describe("buttons", () => {
                it("should not show page-level buttons when page is not current", () => {
                    let pageToTest = pageThree.componentInstance;
                    let wizard = viewTestComponent.testWizard;
                    let debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    let previousBtn: HTMLElement;
                    let testIfCurrent: boolean;

                    // setup
                    wizard.next();
                    viewTestComponent.disablePrevious = true;
                    fixture.detectChanges();

                    testIfCurrent = (wizard.navService.currentPage === pageToTest);
                    expect(testIfCurrent).not.toBe(true, "expect page not to be current");
                    previousBtn = debugWiz.nativeElement.querySelector(".clrtest-page-previous-2 > button");

                    // absent query result is null
                    expect(previousBtn).toBeNull("page-level buttons should not be here");
                });
            });

            describe("stopCancel", () => {
                it("should subvert cancel routine if true", () => {
                    let pageToTest = pageOne;
                    let wizard = viewTestComponent.testWizard;
                    let debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    let cancelBtn: HTMLElement;
                    let serviceSpy = spyOn(wizard.navService, "cancel").and.callThrough();
                    let pageSpy = spyOn(pageToTest.componentInstance.pageOnCancel, "emit").and.callThrough();
                    let wizardCancelSpy = spyOn(wizard.onCancel, "emit").and.callThrough();
                    let wizardCloseSpy = spyOn(wizard, "close").and.callThrough();
                    let currentPage: WizardPage;
                    let expectedCurrent: boolean;

                    // setup
                    viewTestComponent.preventCancel = true;
                    fixture.detectChanges();

                    currentPage = wizard.navService.currentPage;
                    expectedCurrent = (currentPage === pageToTest.componentInstance);
                    expect(expectedCurrent).toBe(true, "expect page to be current");

                    cancelBtn = debugWiz.nativeElement.querySelector(".clrtest-page-cancel > button");
                    cancelBtn.click();

                    // navservice should fire cancel event
                    expect(serviceSpy).toHaveBeenCalled();

                    // page should fire cancel event
                    expect(pageSpy).toHaveBeenCalled();

                    // wizard should not fire cancel event if cancel is overridden at page level
                    expect(wizardCancelSpy).not.toHaveBeenCalled();

                    // close should not happen
                    expect(wizardCloseSpy).not.toHaveBeenCalled();
                });

                it("should allow cancel routine if false", () => {
                    let pageToTest = pageOne;
                    let wizard = viewTestComponent.testWizard;
                    let debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    let cancelBtn: HTMLElement;
                    let serviceSpy = spyOn(wizard.navService, "cancel").and.callThrough();
                    let pageSpy = spyOn(pageToTest.componentInstance.pageOnCancel, "emit").and.callThrough();
                    let wizardCancelSpy = spyOn(wizard.onCancel, "emit").and.callThrough();
                    let wizardCloseSpy = spyOn(wizard, "close").and.callThrough();
                    let currentPage: WizardPage;
                    let expectedCurrent: boolean;

                    // setup
                    viewTestComponent.preventCancel = false; // set explicitly
                    fixture.detectChanges();

                    currentPage = wizard.navService.currentPage;
                    expectedCurrent = (currentPage === pageToTest.componentInstance);
                    expect(expectedCurrent).toBe(true, "expect page to be current");

                    cancelBtn = debugWiz.nativeElement.querySelector(".clrtest-page-cancel > button");
                    cancelBtn.click();

                    // navservice should fire cancel event
                    expect(serviceSpy).toHaveBeenCalled();
                    // page should fire cancel event
                    expect(pageSpy).toHaveBeenCalled();
                    // wizard should fire cancel event
                    expect(wizardCancelSpy).toHaveBeenCalled();
                    // close should happen
                    expect(wizardCloseSpy).toHaveBeenCalled();
                });

                it("should allow cancel routine by default", () => {
                    let pageToTest = pageTwo;
                    let wizard = viewTestComponent.testWizard;
                    let debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    let cancelBtn: HTMLElement;
                    let serviceSpy = spyOn(wizard.navService, "cancel").and.callThrough();
                    let pageSpy = spyOn(pageToTest.componentInstance.pageOnCancel, "emit").and.callThrough();
                    let wizardCancelSpy = spyOn(wizard.onCancel, "emit").and.callThrough();
                    let wizardCloseSpy = spyOn(wizard, "close").and.callThrough();
                    let currentPage: WizardPage;
                    let expectedCurrent: boolean;

                    wizard.next();
                    fixture.detectChanges();

                    // setup
                    currentPage = wizard.navService.currentPage;
                    expectedCurrent = (currentPage === pageToTest.componentInstance);
                    expect(expectedCurrent).toBe(true, "expect page to be current");

                    cancelBtn = debugWiz.nativeElement.querySelector(".clr-test-wizard-cancel > button");
                    cancelBtn.click();

                    // navservice should fire cancel event
                    expect(serviceSpy).toHaveBeenCalled();

                    // page should fire cancel event
                    expect(pageSpy).toHaveBeenCalled();

                    // wizard should fire cancel event
                    expect(wizardCancelSpy).toHaveBeenCalled();

                    // close should happen
                    expect(wizardCloseSpy).toHaveBeenCalled();
                });

                it("should run alt cancel routine if true and pageOnCancel is provided", () => {
                    let pageToTest = pageFour;
                    let wizard = viewTestComponent.testWizard;
                    let debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    let cancelBtn: HTMLElement;
                    let serviceSpy = spyOn(wizard.navService, "cancel").and.callThrough();
                    let pageSpy = spyOn(pageToTest.componentInstance.pageOnCancel, "emit").and.callThrough();
                    let wizardCancelSpy = spyOn(wizard.onCancel, "emit").and.callThrough();
                    let wizardCloseSpy = spyOn(wizard, "close").and.callThrough();
                    let componentSpy = spyOn(viewTestComponent, "altCancel").and.callThrough();
                    let currentPage: WizardPage;
                    let expectedCurrent: boolean;

                    // setup
                    wizard.next(); // => page 2
                    wizard.next(); // => page 3
                    wizard.next(); // => page 4

                    viewTestComponent.preventCancel = true;

                    fixture.detectChanges();

                    currentPage = wizard.navService.currentPage;
                    expectedCurrent = (currentPage === pageToTest.componentInstance);
                    expect(expectedCurrent).toBe(true, "expect page to be current");

                    expect(viewTestComponent.altCancelRan).toBe(false, "verify alt cancel is false");

                    cancelBtn = debugWiz.nativeElement.querySelector(".clr-test-wizard-cancel > button");

                    cancelBtn.click();

                    // navservice should fire cancel event
                    expect(serviceSpy).toHaveBeenCalled();

                    // page should fire cancel event
                    expect(pageSpy).toHaveBeenCalled();

                    // wizard should not fire cancel event if page has override
                    expect(wizardCancelSpy).not.toHaveBeenCalled();

                    // close should not happen
                    expect(wizardCloseSpy).not.toHaveBeenCalled();

                    // we did alt-cancel
                    expect(componentSpy).toHaveBeenCalled();

                    // alt-cancel did work
                    expect(viewTestComponent.altCancelRan).toBe(true, "alt cancel ran");
                });
            });

            describe("onCommit", () => {
                let innerPage: DebugElement;
                let endPage: DebugElement;
                let wizard: Wizard;
                let debugWiz: DebugElement;
                let debugElem: HTMLElement;
                let cancelBtn: any;
                let previousBtn: any;
                let customBtn: any;
                let nextBtn: any;
                let dangerBtn: any;
                let finishBtn: any;

                beforeEach(() => {
                    innerPage = pageTwo;
                    endPage = pageFour;
                    wizard = viewTestComponent.testWizard;
                    debugWiz = fixture.debugElement.query(By.directive(Wizard));
                    debugElem = debugWiz.nativeElement;

                    wizard.next(); // => page 2

                    // make sure primary buttons aren't disabled...
                    innerPage.componentInstance.nextStepDisabled = false;
                    fixture.detectChanges();

                    cancelBtn = debugElem.querySelector(".clr-test-wizard-cancel > button");
                    previousBtn = debugElem.querySelector(".clrtest-wizard-previous > button");
                    customBtn = debugElem.querySelector(".clrtest-wizard-custom > button");
                    nextBtn = debugElem.querySelector(".clrtest-wizard-next > button");
                    dangerBtn = debugElem.querySelector(".clrtest-wizard-danger > button");
                    finishBtn = debugElem.querySelector(".clrtest-wizard-finish > button");
                });

                it("should emit when next button is clicked", () => {
                    // need to use innerPage because next doesn't work on last page
                    let clickSpy = spyOn(innerPage.componentInstance.nextButtonClicked, "emit").and.callThrough();
                    let otherClickSpy = spyOn(endPage.componentInstance.nextButtonClicked, "emit").and.callThrough();
                    let primaryBtnSpy = spyOn(innerPage.componentInstance.primaryButtonClicked,
                        "emit").and.callThrough();
                    let commitSpy = spyOn(innerPage.componentInstance.onCommit, "emit").and.callThrough();

                    nextBtn.click();

                    expect(clickSpy).toHaveBeenCalled();
                    expect(primaryBtnSpy).toHaveBeenCalled();
                    expect(commitSpy).toHaveBeenCalled();

                    // make sure other page click events weren't emitted
                    expect(otherClickSpy).not.toHaveBeenCalled();
                });

                it("should emit when finish button is clicked", () => {
                    let clickSpy = spyOn(endPage.componentInstance.finishButtonClicked, "emit").and.callThrough();
                    let otherClickSpy = spyOn(innerPage.componentInstance.nextButtonClicked, "emit").and.callThrough();
                    let primaryBtnSpy = spyOn(endPage.componentInstance.primaryButtonClicked, "emit").and.callThrough();
                    let commitSpy = spyOn(endPage.componentInstance.onCommit, "emit").and.callThrough();

                    // need end page for finish button to work
                    // have to set up for navigation to end page
                    endPage.componentInstance.nextStepDisabled = false;

                    wizard.next(); // page 3
                    wizard.next(); // page 4

                    // this gets called with .next() to page 3; reset for testing below;
                    otherClickSpy.calls.reset();

                    fixture.detectChanges();

                    finishBtn.click();

                    expect(clickSpy).toHaveBeenCalled();
                    expect(primaryBtnSpy).toHaveBeenCalled();
                    expect(commitSpy).toHaveBeenCalled();

                    // make sure other page click events weren't emitted
                    expect(otherClickSpy).not.toHaveBeenCalled();
                });

                it("should emit when danger button is clicked", () => {
                    // need to use innerPage because next doesn't work on last page
                    let clickSpy = spyOn(innerPage.componentInstance.dangerButtonClicked, "emit").and.callThrough();
                    let primaryBtnSpy = spyOn(innerPage.componentInstance.primaryButtonClicked,
                        "emit").and.callThrough();
                    let commitSpy = spyOn(innerPage.componentInstance.onCommit, "emit").and.callThrough();

                    dangerBtn.click();

                    expect(clickSpy).toHaveBeenCalled();
                    expect(primaryBtnSpy).toHaveBeenCalled();
                    expect(commitSpy).toHaveBeenCalled();
                });

                it("should not emit when cancel button is clicked", () => {
                    // need to use innerPage because next doesn't work on last page
                    let clickSpy = spyOn(innerPage.componentInstance.pageOnCancel, "emit").and.callThrough();
                    let primaryBtnSpy = spyOn(innerPage.componentInstance.primaryButtonClicked,
                        "emit").and.callThrough();
                    let commitSpy = spyOn(innerPage.componentInstance.onCommit, "emit").and.callThrough();

                    cancelBtn.click();

                    expect(clickSpy).toHaveBeenCalled();
                    expect(primaryBtnSpy).not.toHaveBeenCalled();
                    expect(commitSpy).not.toHaveBeenCalled();
                });

                it("should not emit when previous button is clicked", () => {
                    // need to use innerPage because next doesn't work on last page
                    let clickSpy = spyOn(innerPage.componentInstance.previousButtonClicked, "emit").and.callThrough();
                    let primaryBtnSpy = spyOn(innerPage.componentInstance.primaryButtonClicked,
                        "emit").and.callThrough();
                    let commitSpy = spyOn(innerPage.componentInstance.onCommit, "emit").and.callThrough();

                    previousBtn.click();

                    expect(clickSpy).toHaveBeenCalled();
                    expect(primaryBtnSpy).not.toHaveBeenCalled();
                    expect(commitSpy).not.toHaveBeenCalled();
                });

                it("should not emit when a custom button is clicked", () => {
                    // need to use innerPage because next doesn't work on last page
                    let primaryBtnSpy = spyOn(innerPage.componentInstance.primaryButtonClicked,
                        "emit").and.callThrough();
                    let clickSpy = spyOn(innerPage.componentInstance.customButtonClicked, "emit").and.callThrough();
                    let commitSpy = spyOn(innerPage.componentInstance.onCommit, "emit").and.callThrough();

                    customBtn.click();

                    expect(clickSpy).toHaveBeenCalledWith("custom-custom");
                    expect(primaryBtnSpy).not.toHaveBeenCalled();
                    expect(commitSpy).not.toHaveBeenCalled();
                });
            });
        });
    });
}
