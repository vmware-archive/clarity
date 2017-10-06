/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {async, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";

import {AppComponent} from "./app.component";

describe("AppComponent", () => {
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [RouterTestingModule],
                declarations: [AppComponent],
            })
            .compileComponents();
    }));

    it("should create the app", async(() => {
           const fixture = TestBed.createComponent(AppComponent);
           const app = fixture.debugElement.componentInstance;
           expect(app).toBeTruthy();
       }));

    it(`should have as title 'KS'`, async(() => {
           const fixture = TestBed.createComponent(AppComponent);
           const app = fixture.debugElement.componentInstance;
           expect(app.title).toEqual("KS");
       }));

    it("should render title in a h1 tag", async(() => {
           const fixture = TestBed.createComponent(AppComponent);
           fixture.detectChanges();
           const compiled = fixture.debugElement.nativeElement;
           expect(compiled.querySelector("h1").textContent).toContain("Welcome to KS!");
       }));
});
