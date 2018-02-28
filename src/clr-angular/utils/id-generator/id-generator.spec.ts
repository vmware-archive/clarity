/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, Inject, NgModule, Type} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

import {UNIQUE_ID, UNIQUE_ID_PROVIDER} from "./id-generator.service";

@Component({
    selector: "test-zero",
    template: `
        <div [id]="divId">My Div</div>`,
    providers: [UNIQUE_ID_PROVIDER]
})
class IdZero {
    constructor(@Inject(UNIQUE_ID) public divId: string) {}
}

@Component({
    selector: "test-one",
    template: `
        <div [id]="divId">My Div</div>`,
    providers: [UNIQUE_ID_PROVIDER]
})
class IdOne {
    constructor(@Inject(UNIQUE_ID) public divId: string) {}
}

@Component({
    selector: "test-two",
    template: `
        <div [id]="divId">My Div</div>`,
    providers: [UNIQUE_ID_PROVIDER]
})
class IdTwo {
    constructor(@Inject(UNIQUE_ID) public divId: string) {}
}

@NgModule({declarations: [IdZero, IdOne, IdTwo], exports: [IdZero, IdOne, IdTwo]})
class IdTestingModule {}

@Component({
    template: `
        <test-zero></test-zero>
        <test-one></test-one>
        <test-two></test-two>`
})
class UniqueIdTest {}

interface TestContext<T extends UniqueIdTest|IdZero|IdOne|IdTwo> {
    fixture: ComponentFixture<T>;
    idZero: IdZero;
    idOne: IdOne;
    idTwo: IdTwo;
}

describe("Unique ID Generator Service", function() {
    function setupTest<T>(testContext: TestContext<T>, testComponent: Type<T>) {
        TestBed.configureTestingModule(
            {imports: [IdTestingModule], providers: [UNIQUE_ID_PROVIDER], declarations: [testComponent]});
        testContext.fixture = TestBed.createComponent(testComponent);
        testContext.idZero = testContext.fixture.debugElement.query(By.directive(IdZero)).componentInstance;
        testContext.idOne = testContext.fixture.debugElement.query(By.directive(IdOne)).componentInstance;
        testContext.idTwo = testContext.fixture.debugElement.query(By.directive(IdTwo)).componentInstance;
    }

    it("generates uniq id's in the correct order", function() {
        setupTest(this, UniqueIdTest);
        expect(this.idZero !== this.idOne !== this.idTwo).toBe(true);
    });
});