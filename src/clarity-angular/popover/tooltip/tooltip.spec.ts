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
