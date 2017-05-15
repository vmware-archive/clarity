// /*
//  * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
//  * This software is released under MIT license.
//  * The full license information can be found in LICENSE in the root directory of this project.
//  */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { ClrSignpostModule } from "./signpost.module";
import { ClrIconModule } from "../../icon/icon.module";
import { IfOpenService } from "./if-open.service";

export default function(): void {


    describe("SignpostContent", function() {
        let fixture: ComponentFixture<any>;
        let clarityElement: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ ClrSignpostModule, ClrIconModule ],
                declarations: [ TestSignpost ],
                providers: [ IfOpenService ]
            });

            fixture = TestBed.createComponent(TestSignpost);
            fixture.detectChanges();
            clarityElement = fixture.nativeElement;
        });

        afterEach(() => {
            fixture.destroy();
        });

        it("projects content when open", function() {
            let content: HTMLElement = clarityElement.querySelector(
                ".signpost-content > .signpost-flex-wrap > .signpost-content-body"
            );
            expect(content.textContent.trim()).toBe("Signpost content");
        });

        it("has a close button that updates the IfOpenService.open value", function() {
            let closer: HTMLElement = clarityElement.querySelector(
                ".signpost-content > .signpost-flex-wrap > .signpost-content-header > .signpost-action"
            );
            expect(closer).toBeDefined();
            let service: IfOpenService = TestBed.get(IfOpenService);
            let testValue: boolean = service.open;
            closer.click();
            fixture.detectChanges();
            expect(testValue).not.toEqual(service.open);
        });
    });
}

@Component({
    template: `
        <button class="outside-click-test" (click)="bodyClickHandler()">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-signpost-content>
            Signpost content
        </clr-signpost-content>
    `
})

class TestSignpost {
}
