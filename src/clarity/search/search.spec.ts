/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    ComponentFixture,
    TestBed/*,
    tick,
    fakeAsync,
    */
} from "@angular/core/testing";
import {Component, ViewChild, Type} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Search} from "./search";
import {ClarityModule} from "../clarity.module";

abstract class SearchTest {
    @ViewChild(Search) searchInstance: Search;

    searchDataS: string= "";
    searchDataT: string= "";
    searchInit: string = "some data send";
}
@Component({
    template: `
        <clr-search></clr-search>
    `
})
class BasicSearch extends SearchTest {
}

@Component({
    template: `
        <clr-search [placeholder]="'Search placeholder'"></clr-search>
    `
})
class PlaceholderSearch extends SearchTest {
}

@Component({
    template: `
        <clr-search [placeholder]="'Search'" [search]="searchInit"></clr-search>
    `
})
class OneWaySearch extends SearchTest {
}

@Component({
    template: `
        <clr-search [placeholder]="'Search'" [(search)]="searchDataT"></clr-search>
    `
})
class TwoWaySearch extends SearchTest {
}

@Component({
    template: `
        <clr-search [placeholder]="'Search'"
                        [(search)]="searchDataS"
                        [autoCompleateData]="['This is just an array','abc','def','ght','aoit', 'asdddsaaasdasdasd']">
            </clr-search>
    `
})
class AutoCompleateSearch extends SearchTest {
}

describe("Search", () => {
    let fixture: ComponentFixture<SearchTest>;
    let testInstance: SearchTest;
    let searchInstance: Search;
    let searchElement: HTMLInputElement;
    let labelElement: HTMLLabelElement;

    function createTestComponent(component: Type<SearchTest>) {
        fixture = TestBed.createComponent(component);
        fixture.detectChanges();
        testInstance = fixture.componentInstance;
        searchInstance = testInstance.searchInstance;
        searchElement = <HTMLInputElement>fixture.nativeElement.querySelector("input");
        labelElement = <HTMLLabelElement>fixture.nativeElement.querySelector("label");
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule, FormsModule],
            declarations: [BasicSearch, PlaceholderSearch, OneWaySearch, TwoWaySearch, AutoCompleateSearch]
        });
    });

    afterEach(() => {
        fixture.destroy();
    });


    it("displays a native search input", () => {
        createTestComponent(BasicSearch);
        expect(searchElement).not.toBeNull();
        expect(labelElement).not.toBeNull();
    });

    it("projects into the label", () => {
        createTestComponent(PlaceholderSearch);
        expect(searchElement.placeholder.trim()).toBe("Search placeholder");
    });

    it("Test one way", () => {
        createTestComponent(OneWaySearch);
        testInstance.searchInstance.onSelectedChange("th");
        expect(testInstance.searchInstance.search).toBe("th");
        expect(testInstance.searchInit).toBe("some data send");
    });

    it("Test two way", () => {
        createTestComponent(TwoWaySearch);
        testInstance.searchInstance.onSelectedChange("th");
        expect(testInstance.searchInstance.search).toBe(testInstance.searchDataT);
    });

    it("Test AutoCompleate", () => {
        let arr = ["This is just an array", "abc", "def", "ght", "aoit", "asdddsaaasdasdasd"];
        createTestComponent(AutoCompleateSearch);
        expect(JSON.stringify(testInstance.searchInstance.autoCompleateData))
            .toBe(JSON.stringify(arr));
        testInstance.searchInstance.onSelectedChange("th");
        expect(testInstance.searchInstance.autoCompleateDataShow[0]).toBe(arr[0]);
    });
});