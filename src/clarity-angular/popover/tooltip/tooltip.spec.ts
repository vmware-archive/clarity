/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from "@angular/core";
import { addHelpers, TestContext } from "../../data/datagrid/helpers.spec";
import { Tooltip } from "./tooltip";

describe("Tooltip component", function() {

    addHelpers();

    describe("Simple", function() {
        let context: TestContext<Tooltip, SimpleTest>;

        beforeEach(function() {
            context = this.create(Tooltip, SimpleTest);
        });

        it("projects anchor content", function() {
            expect(context.clarityElement.textContent).toMatch(/Hello/);
        });

        it("projects tooltip content on hover", function() {
            let tooltipContent: any;

            context.clarityDirective.onMouseEnter();
            context.detectChanges();

            tooltipContent = context.clarityElement.querySelector(".tooltip-content");
            expect(tooltipContent.textContent).toMatch(/World/);

            context.clarityDirective.onMouseLeave();
            context.detectChanges();
            tooltipContent = context.clarityElement.querySelector(".tooltip-content");
            expect(tooltipContent).toBeNull();
        });

        it("assigns default value for direction when unspecified", function() {
            expect(context.clarityDirective.direction).toEqual("right");
        });

        it("assigns default value for size when unspecified", function() {
            expect(context.clarityDirective.size).toEqual("sm");
        });

    });

    describe("Inputs", function() {
        let context: TestContext<Tooltip, InputTest>;

        beforeEach(function() {
            context = this.create(Tooltip, InputTest);
        });

        it("sets the tooltip direction property to input value provided", function() {
            expect(context.clarityDirective.direction).toEqual("top-right");
        });

        it("sets the css class for direction with the input value provided", function() {
            let anchor = context.clarityElement.querySelector(".tooltip-top-right");
            expect(anchor).not.toBeNull();
        });

        it("sets the tooltip size property to input value provided", function() {
            expect(context.clarityDirective.size).toEqual("xs");
        });

        it("sets the css class for size with the input value provided", function() {
            let anchor = context.clarityElement.querySelector(".tooltip-xs");
            expect(anchor).not.toBeNull();
        });

    });

});

@Component({
    template: `
        <clr-tooltip>
            <span class="tooltip-anchor">Hello</span>
            <clr-tooltip-content>
                <span>World</span>
            </clr-tooltip-content>
        </clr-tooltip>
    `
})
class SimpleTest {
}

@Component({
    template: `
        <clr-tooltip [clrTooltipDirection]="'top-right'" [clrTooltipSize]="'xs'">
            <clr-icon shape="info-circle" class="tooltip-anchor"></clr-icon>
            <clr-tooltip-content>
                <span>Lorem ipsum sit</span>
            </clr-tooltip-content>
        </clr-tooltip>
    `
})
class InputTest {
}
