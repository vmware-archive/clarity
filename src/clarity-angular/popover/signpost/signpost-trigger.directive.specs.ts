// /*
//  * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
//  * This software is released under MIT license.
//  * The full license information can be found in LICENSE in the root directory of this project.
//  */

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClrSignpostModule } from "./signpost.module";
import { ClrIconModule } from "../../icon/icon.module";
import { IfOpenService } from "./if-open.service";
import { Component } from "@angular/core";
export default function(): void {
    describe("SignpostToggle component", function() {
        let fixture: ComponentFixture<any>;
        let clarityElement: any;
        let ifOpenService: IfOpenService;

        beforeEach(() => {
           TestBed.configureTestingModule({
               imports: [ ClrSignpostModule, ClrIconModule ],
               declarations: [ TestTrigger ],
               providers: [ IfOpenService ]
           });

           fixture = TestBed.createComponent(TestTrigger);
           fixture.detectChanges();
           clarityElement = fixture.nativeElement;
           ifOpenService = TestBed.get(IfOpenService);
        });

        it("should toggle the IfOpenService.open property on click", function() {
            console.log(clarityElement);
            let trigger: HTMLElement = clarityElement.querySelector(".signpost-action");
            console.log(ifOpenService, trigger);
            expect(ifOpenService.open).toBeUndefined();
            trigger.click();
            expect(ifOpenService.open).toEqual(true);
            trigger.click();
            expect(ifOpenService.open).toEqual(false);
        });
    });
}

@Component({
    template: `
        <button
            #anchor
            type="button"
            class="signpost-action btn btn-small btn-link"
            [ngClass]="{active: open}"
            clrSignpostTrigger>
            <clr-icon shape="info"></clr-icon>
        </button>
    `
})

class TestTrigger {

}



