/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Directive, Inject} from "@angular/core";
import {TestContext} from "../helpers.spec";
import {DatagridRowMasterRenderer} from "./row-master-renderer";
import {DatagridRenderOrganizer} from "./render-organizer";
import {MockDatagridRenderOrganizer, MOCK_ORGANIZER_PROVIDER} from "./render-organizer.mock";

export default function(): void {
    describe("DatagridRowMasterRenderer directive", function() {
        let context: TestContext<DatagridRowMasterRenderer, FullTest>;
        let organizer: MockDatagridRenderOrganizer;

        beforeEach(function() {
            context = this.createOnly(DatagridRowMasterRenderer, FullTest, [MOCK_ORGANIZER_PROVIDER], [TestCounter]);
            organizer = context.getClarityProvider(DatagridRenderOrganizer);
        });

        it("adds the .datagrid-row-master class to the host", function() {
            expect(context.clarityElement.classList.contains("datagrid-row-master")).toBeTruthy();
        });

        it("projects content by default", function() {
            expect(context.clarityElement.textContent.trim()).toBe("Hello World");
        });

        it("projects outside of the host when in table mode", function() {
            organizer.tableMode.next(true);
            expect(context.clarityElement.textContent.trim()).toBe("");
            expect(context.testElement.textContent.trim()).toBe("Hello World");
            organizer.tableMode.next(false);
            expect(context.clarityElement.textContent.trim()).toBe("Hello World");
            expect(context.testElement.textContent.trim()).toBe("Hello World");
        });

        it("instantiates the content a single time, on initialization", function() {
            expect(context.testComponent.counter.total).toBe(1);
            organizer.tableMode.next(true);
            expect(context.testComponent.counter.total).toBe(1);
            organizer.tableMode.next(false);
            expect(context.testComponent.counter.total).toBe(1);
        });
    });
}

@Component({
    template: `
        <clr-dg-row-master>
            <span testCounter>Hello World</span>
        </clr-dg-row-master>`,
    providers: [{provide: "counter", useValue: {total: 0}}]
})
class FullTest {
    constructor(@Inject("counter") public counter: {total: number}) {}
}

@Directive({
    selector: "[testCounter]"
})
class TestCounter {
    constructor(@Inject("counter") counter: {total: number}) {
        counter.total++;
    }
}