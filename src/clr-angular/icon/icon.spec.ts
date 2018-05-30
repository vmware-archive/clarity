/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {ClrIconModule, DEPRECATED_SHAPE_WARNING} from "./index";

describe("ClrIconCustomTag", function() {
    beforeEach(function() {
        spyOn(console, "warn");
    });
    it("should log a warning message on deprecated icons.", function() {
        TestBed.configureTestingModule({imports: [ClrIconModule], declarations: [TestComponent]});
        const fixture = TestBed.createComponent(TestComponent);
        expect(console.warn).toHaveBeenCalledWith(DEPRECATED_SHAPE_WARNING);
    });
});

@Component({template: `<clr-icon shape="home"></clr-icon>`})
class TestComponent {
}
