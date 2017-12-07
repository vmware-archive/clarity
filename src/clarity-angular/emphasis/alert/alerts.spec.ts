/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, QueryList, Type, ViewChild, ViewChildren} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ClrEmphasisModule} from "../emphasis.module";

import {Alert} from "./alert";
import {Alerts} from "./alerts";
import {MultiAlertService} from "./providers/multi-alert-service";

describe("Alerts component", function() {
    describe("Typescript API", function() {
        let component: Alerts;
        let service: MultiAlertService;
        let queryList: QueryList<Alert>;

        beforeEach(function() {
            service = new MultiAlertService();

            TestBed.configureTestingModule({imports: [ClrEmphasisModule]});

            const alertFixture = TestBed.createComponent(Alert);
            this.alert = alertFixture.componentInstance;

            const anotherAlertFixture = TestBed.createComponent(Alert);
            this.anotherAlert = anotherAlertFixture.componentInstance;

            queryList = new QueryList<Alert>();
            queryList.reset([this.alert, this.anotherAlert]);
            service.manage(queryList);
            component = new Alerts(service);
        });

        it("knows the current alert", function() {
            expect(component.currentAlert).toEqual(this.alert);
        });
    });

    describe("Template API", function() {
        let fixture: ComponentFixture<any>;

        beforeEach(function() {
            this.create = <T>(componentType: Type<T>) => {
                TestBed.configureTestingModule({imports: [ClrEmphasisModule], declarations: [componentType]});

                fixture = TestBed.createComponent(componentType);
                // fixture.detectChanges();
            };
        });

        afterEach(() => {
            fixture.destroy();
        });

        it("offers two way binding on the alert index", function() {
            this.create(TestComponent);
            const testComponent = fixture.componentInstance;
            fixture.detectChanges();
            testComponent.currentAlertIndex = 0;
            fixture.detectChanges();
            expect(testComponent.alertsInstance.currentAlertIndex).toEqual(0);
            testComponent.alertsInstance.currentAlertIndex = 1;
            fixture.detectChanges();
            expect(testComponent.currentAlertIndex).toEqual(1);
        });

        it("offers two way binding on the alert instance", function() {
            this.create(TestAlertInstance);
            fixture.detectChanges();

            const clarityComponent = fixture.componentInstance.alertsInstance;
            const testComponent = fixture.componentInstance;

            expect(testComponent.alertInstances.length).toBe(2);
            expect(testComponent.alertInstances.first).toBeTruthy();
            expect(testComponent.alertInstances.last).toBeTruthy();

            testComponent.currentAlert = testComponent.alertInstances.first;
            fixture.detectChanges();
            expect(clarityComponent.currentAlert).toEqual(testComponent.currentAlert);

            clarityComponent.currentAlert = testComponent.alertInstances.last;
            fixture.detectChanges();
            expect(testComponent.currentAlert).toEqual(clarityComponent.currentAlert);
        });
    });

    describe("View basics", function() {
        let fixture: ComponentFixture<TestComponent>;
        let compiled: any;
        let alertElements: Array<Element>;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [ClrEmphasisModule], declarations: [TestComponent]});

            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            compiled = fixture.nativeElement;
            alertElements = compiled.querySelectorAll(".alert");
            expect(alertElements.length).toEqual(2);
        });

        afterEach(() => {
            fixture.destroy();
        });

        it("projects content based on clrCurrentAlertIndex", function() {
            expect(alertElements[0].textContent).toMatch(/This is the first alert/);
            expect(alertElements[0].classList).not.toContain("alert-hidden");
            expect(alertElements[1].classList).toContain("alert-hidden");

            fixture.componentInstance.currentAlertIndex = 1;
            fixture.detectChanges();

            expect(alertElements[1].textContent).toMatch(/This is the second alert/);
            expect(alertElements[1].classList).not.toContain("alert-hidden");
            expect(alertElements[0].classList).toContain("alert-hidden");
        });

        it("makes the previous alert active when the current alert is closed", function() {
            fixture.componentInstance.currentAlertIndex = 1;
            fixture.detectChanges();
            expect(alertElements[0].classList).toContain("alert-hidden");

            fixture.componentInstance.alertInstances.toArray()[1].close();
            fixture.detectChanges();
            expect(alertElements[0].classList).not.toContain("alert-hidden");
        });

        it("shows the pager only when there is more than one alert", function() {
            expect(compiled.querySelectorAll("clr-alerts-pager").length).toBe(1);
            fixture.componentInstance.alertInstances.toArray()[0].close();
            fixture.detectChanges();
            expect(compiled.querySelectorAll("clr-alerts-pager").length).toBe(0);
        });
    });

    describe("Supports dynamic alerts", function() {
        beforeEach(function() {
            TestBed.configureTestingModule({imports: [ClrEmphasisModule], declarations: [DynamicAlerts]});

            this.fixture = TestBed.createComponent(DynamicAlerts);
            this.compiled = this.fixture.nativeElement;
            this.fixture.detectChanges();
        });

        it("contains dynamic alerts and set an initial index", function() {
            expect(this.fixture.componentInstance.alertsInstance.currentAlertIndex).toEqual(0);
            expect(this.fixture.componentInstance.alertInstances.length).toEqual(2);
        });
    });
});

@Component({
    template: `
        <clr-alerts [(clrCurrentAlertIndex)]="currentAlertIndex">
           <clr-alert
               [clrAlertType]="'alert-danger'"
               [clrAlertClosable]="true"
               [clrAlertClosed]="false"
               [clrAlertAppLevel]="true">
               <div class="alert-item">
                   <span class="alert-text">
                   This is the first alert!
                   </span>
               </div>
           </clr-alert>
           <clr-alert
               [clrAlertType]="'alert-danger'"
               [clrAlertClosable]="true"
               [clrAlertClosed]="false"
               [clrAlertAppLevel]="true">
               <div class="alert-item">
                   <span class="alert-text">
                   This is the second alert!
                   </span>
               </div>
           </clr-alert>
        </clr-alerts>
   `
})
class TestComponent {
    @ViewChild(Alerts) public alertsInstance: Alerts;
    @ViewChildren(Alert) public alertInstances: QueryList<Alert>;

    currentAlertIndex: number = 0;
}

@Component({
    template: `
        <clr-alerts [(clrCurrentAlert)]="currentAlert">
           <clr-alert
               [clrAlertType]="'alert-danger'"
               [clrAlertClosable]="true"
               [clrAlertClosed]="false"
               [clrAlertAppLevel]="true">
               <div clr-alert-item class="alert-item">
                   <span class="alert-text">
                   This is the first alert!
                   </span>
               </div>
           </clr-alert>
           <clr-alert
               [clrAlertType]="'alert-danger'"
               [clrAlertClosable]="true"
               [clrAlertClosed]="false"
               [clrAlertAppLevel]="true">
               <div clr-alert-item class="alert-item">
                   <span class="alert-text">
                   This is the second alert!
                   </span>
               </div>
           </clr-alert>
        </clr-alerts>
   `
})
class TestAlertInstance {
    @ViewChild(Alerts) public alertsInstance: Alerts;
    @ViewChildren(Alert) public alertInstances: QueryList<Alert>;

    public currentAlert: Alert;
}

@Component({
    template: `
      <clr-alerts>
        <clr-alert *ngFor="let alert of dynamicAlerts"
                   [clrAlertAppLevel]="true">
                   <div class="alert-item">
                      <span class="alert-text">
                        {{ alert.text }}
                      </span>
                   </div>
        </clr-alert>
      </clr-alerts>
   `
})
class DynamicAlerts {
    @ViewChild(Alerts) public alertsInstance: Alerts;
    @ViewChildren(Alert) public alertInstances: QueryList<Alert>;

    dynamicAlerts: Array<any>;

    ngOnInit() {
        this.dynamicAlerts =
            [{type: "alert-info", text: "I'm an informational"}, {type: "alert-danger", text: "Watch out!"}];
    }
}
