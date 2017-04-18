/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestContext} from "../helpers.spec";
import {DatagridMainRenderer} from "./main-renderer";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DatagridHeaderRenderer} from "./header-renderer";

export default function(): void {
    describe("DatagridMainRenderer directive", function() {
        describe("static loading", function() {
            let context: TestContext<DatagridMainRenderer, StaticTest>;
            let organizer: DatagridRenderOrganizer;
            let resizeSpy: jasmine.Spy;
            let computeWidthSpy: jasmine.Spy;

            beforeEach(function() {
                resizeSpy = spyOn(DatagridRenderOrganizer.prototype, "resize");
                context = this.create(DatagridMainRenderer, StaticTest);
                organizer = context.getClarityProvider(DatagridRenderOrganizer);
                computeWidthSpy = spyOn(DatagridHeaderRenderer.prototype, "computeWidth");
            });

            it("triggers the render process on initialization", function() {
                expect(resizeSpy.calls.count()).toBe(1);
            });

            it("re-triggers the render process whenever the columns change", function() {
                resizeSpy.calls.reset();
                expect(resizeSpy.calls.count()).toBe(0);
                context.testComponent.secondColumn = false;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(1);
                context.testComponent.secondColumn = true;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(2);
            });

            it("does not re-triggers the render process when the rows change", function() {
                resizeSpy.calls.reset();
                expect(resizeSpy.calls.count()).toBe(0);
                context.testComponent.firstRow = false;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(0);
                context.testComponent.firstRow = true;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(0);
            });

            it("computes the widths of the columns when notified", function() {
                expect(computeWidthSpy.calls.count()).toBe(0);
                // Too lazy to do something other than casting right now.
                (<any>organizer)._computeWidths.next();
                expect(computeWidthSpy.calls.count()).toBe(context.clarityDirective.headers.length);
            });

            it("sets the widths of the columns for the other components", function() {
                expect(organizer.widths.length).toBe(0);
                // Too lazy to do something other than casting right now.
                (<any>organizer)._computeWidths.next();
                expect(organizer.widths.length).toBe(context.clarityDirective.headers.length);
            });
        });

        describe("dynamic loading", function() {
            let context: TestContext<DatagridMainRenderer, DynamicTest>;
            let resizeSpy: jasmine.Spy;

            beforeEach(function() {
                resizeSpy = spyOn(DatagridRenderOrganizer.prototype, "resize");
                context = this.create(DatagridMainRenderer, DynamicTest);
            });

            it("does not trigger the render process until the rows are loaded", function() {
                expect(resizeSpy.calls.count()).toBe(0);
                context.testComponent.projected = true;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(1);
            });

            it("ignores columns changes until the rows are loaded", function() {
                context.testComponent.secondColumn = false;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(0);
                context.testComponent.projected = true;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(1);
                context.testComponent.secondColumn = true;
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(2);
            });

            it("triggers the render process if the rows are given through *clrDgItems", function() {
                expect(resizeSpy.calls.count()).toBe(0);
                context.testComponent.clrDgItems = [1];
                context.detectChanges();
                expect(resizeSpy.calls.count()).toBe(1);
            });
        });

        describe("smart columns width", function() {
            let context: TestContext<DatagridMainRenderer, ColumnsWidthTest>;
            let organizer: DatagridRenderOrganizer;

            beforeEach(function() {
                context = this.create(DatagridMainRenderer, ColumnsWidthTest);
                organizer = context.getClarityProvider(DatagridRenderOrganizer);
            });

            it("gives identical columns the same width", function() {
                expect(organizer.widths[0].px).toBe(organizer.widths[1].px);
            });

            it("uses headers content to compute columns width", function() {
                context.testComponent.firstHeader = "ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ";
                context.detectChanges();
                organizer.resize();
                expect(organizer.widths[0].px).toBeGreaterThan(organizer.widths[1].px);
                context.testComponent.firstHeader = "AAA";
                context.testComponent.secondHeader = "ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ";
                context.detectChanges();
                organizer.resize();
                expect(organizer.widths[0].px).toBeLessThan(organizer.widths[1].px);
            });

            it("uses cells content to compute columns width", function() {
                context.testComponent.firstCell = "ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ";
                context.detectChanges();
                organizer.resize();
                expect(organizer.widths[0].px).toBeGreaterThan(organizer.widths[1].px);
                context.testComponent.firstCell = "AAA";
                context.testComponent.secondCell = "ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ";
                context.detectChanges();
                organizer.resize();
                expect(organizer.widths[0].px).toBeLessThan(organizer.widths[1].px);
            });


            it("correctly sets strict widths", function() {
                context.testComponent.fixedWidth = true;
                context.detectChanges();
                expect(organizer.widths[0].strict).toBe(true);
                expect(organizer.widths[1].strict).toBe(false);
            });
        });
    });
}

@Component({
    template: `
        <clr-datagrid>
            <clr-dg-column>AAA</clr-dg-column>
            <clr-dg-column *ngIf="secondColumn">AAA</clr-dg-column>
            <clr-dg-row *ngIf="firstRow">
                <clr-dg-cell>BBB</clr-dg-cell>
                <clr-dg-cell>BBB</clr-dg-cell>
            </clr-dg-row>
            <clr-dg-row *ngIf="!firstRow">
                <clr-dg-cell>CCC</clr-dg-cell>
                <clr-dg-cell>CCC</clr-dg-cell>
            </clr-dg-row>
        </clr-datagrid>
    `
})
class StaticTest {
    secondColumn = true;
    firstRow = true;
}

@Component({
    template: `
        <clr-datagrid>
            <clr-dg-column>AAA</clr-dg-column>
            <clr-dg-column *ngIf="secondColumn">AAA</clr-dg-column>
            <clr-dg-row *ngIf="projected">
                <clr-dg-cell>BBB</clr-dg-cell>
                <clr-dg-cell>BBB</clr-dg-cell>
            </clr-dg-row>
            <ng-template [ngIf]="clrDgItems.length > 0">
                <clr-dg-row *clrDgItems="let n of clrDgItems">
                    <clr-dg-cell>BBB</clr-dg-cell>
                    <clr-dg-cell>BBB</clr-dg-cell>
                </clr-dg-row>
            </ng-template>
        </clr-datagrid>
    `
})
class DynamicTest {
    secondColumn = true;
    projected = false;
    clrDgItems: number[] = [];
}

@Component({
    template: `
        <clr-datagrid>
            <clr-dg-column *ngIf="fixedWidth" [style.width.px]="42">Fixed width</clr-dg-column>
            <clr-dg-column>{{firstHeader}}</clr-dg-column>
            <clr-dg-column>{{secondHeader}}</clr-dg-column>
            <clr-dg-row>
                <clr-dg-cell *ngIf="fixedWidth">Fixed width</clr-dg-cell>
                <clr-dg-cell>{{firstCell}}</clr-dg-cell>
                <clr-dg-cell>{{secondCell}}</clr-dg-cell>
            </clr-dg-row>
        </clr-datagrid>
    `
})
class ColumnsWidthTest {
    firstHeader = "AAA";
    secondHeader = "AAA";
    firstCell = "BBB";
    secondCell = "BBB";

    fixedWidth = false;
}