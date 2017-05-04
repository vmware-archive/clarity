/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild, Inject} from "@angular/core";
import {DatagridIfExpanded} from "./datagrid-if-expanded";
import {RowExpand} from "./providers/row-expand";
import {TestBed} from "@angular/core/testing";

export default function(): void {
    describe("DatagridIfExpanded directive", function() {
        describe("View", function() {
            beforeEach(function () {
                /*
                 * Since DatagridIfExpanded is a structural directive that isn't rendered in the DOM immediately,
                 * we can't use our usual shortcut, we need to rely on @ViewChild.
                 * A quick investigation didn't reveal a better solution yet, we might want to look into it more.
                 */
                TestBed.configureTestingModule({
                    declarations: [DatagridIfExpanded, SimpleTest, TestCounter],
                    providers: [RowExpand]
                });
                this.fixture = TestBed.createComponent(SimpleTest);
                this.fixture.detectChanges();
                this.testComponent = this.fixture.componentInstance;
                this.testElement = this.fixture.nativeElement;
                this.clarityDirective = this.fixture.componentInstance.ifExpanded;
                this.rowExpand = TestBed.get(RowExpand);
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("doesn't display anything by default", function () {
                expect(this.testElement.textContent.trim()).toBe("");
            });

            it("displays the content when the row becomes expanded", function () {
                this.rowExpand.expanded = true;
                this.fixture.detectChanges();
                expect(this.testElement.textContent.trim()).toBe("1");
            });

            it("removes the content when the row becomes collapsed again", function () {
                this.rowExpand.expanded = true;
                this.fixture.detectChanges();
                this.rowExpand.expanded = false;
                this.fixture.detectChanges();
                expect(this.testElement.textContent.trim()).toBe("");
            });

            it("doesn't instantiate until the content is actually needed", function () {
                expect(this.testComponent.counter.total).toBe(0);
            });

            it("re-instantiates the content every time it is displayed", function () {
                this.rowExpand.expanded = true;
                this.fixture.detectChanges();
                expect(this.testElement.textContent.trim()).toBe("1");
                this.rowExpand.expanded = false;
                this.fixture.detectChanges();
                this.rowExpand.expanded = true;
                this.fixture.detectChanges();
                expect(this.testElement.textContent.trim()).toBe("2");
            });
        });

        describe("Row interaction", function() {
            beforeEach(function () {
                /*
                 * Since DatagridIfExpanded is a structural directive that isn't rendered in the DOM immediately,
                 * we can't use our usual shortcut, we need to rely on @ViewChild.
                 * A quick investigation didn't reveal a better solution yet, we might want to look into it more.
                 */
                TestBed.configureTestingModule({
                    declarations: [DatagridIfExpanded, NgIfTest],
                    providers: [RowExpand]
                });
                this.fixture = TestBed.createComponent(NgIfTest);
                this.fixture.detectChanges();
                this.testComponent = this.fixture.componentInstance;
                this.rowExpand = TestBed.get(RowExpand);
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("sets the row as expandable", function () {
                expect(this.rowExpand.expandable).toBe(true);
            });

            it("sets the row as not expandable when destroyed", function () {
                this.testComponent.expandable = false;
                this.fixture.detectChanges();
                expect(this.rowExpand.expandable).toBe(false);
            });
        });
    });
}


@Component({
    template: `<test-counter *clrIfExpanded></test-counter>`,
    providers: [{provide: "counter", useValue: {total: 0}}]
})
class SimpleTest {
    @ViewChild(DatagridIfExpanded) ifExpanded: DatagridIfExpanded;

    constructor(@Inject("counter") public counter: {total: number}) {}
}

@Component({
    selector: "test-counter",
    template: `{{count}}`
})
class TestCounter {
    public count: number;

    constructor(@Inject("counter") counter: {total: number}) {
        this.count = ++counter.total;
    }
}


@Component({
    template: `
        <ng-container *ngIf="expandable">
            <div *clrIfExpanded>Hello World</div>
        </ng-container>`
})
class NgIfTest {
    expandable = true;
}