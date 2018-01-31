/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {DatagridColumnToggleTitle} from "./datagrid-column-toggle-title";
import {TestContext} from "./helpers.spec";

const textValue = "Custom Title";

export default function(): void {
    describe("DatagridColumnToggleTitle component", function() {
        let context: TestContext<DatagridColumnToggleTitle, SimpleTest>;

        beforeEach(function() {
            context = this.create(DatagridColumnToggleTitle, SimpleTest);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch(textValue);
        });
    });
}

@Component({template: `<clr-dg-column-toggle-title>${textValue}</clr-dg-column-toggle-title>`})
class SimpleTest {}
