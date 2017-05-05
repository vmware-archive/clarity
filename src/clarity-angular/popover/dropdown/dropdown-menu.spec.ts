/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from "@angular/core";
import { DropdownMenu } from "./dropdown-menu";
import { TestContext } from "../../data/datagrid/helpers.spec";

export default function(): void {

    describe("DropdownMenu component", function() {
        let context: TestContext<DropdownMenu, SimpleTest>;
        let toggle: HTMLElement;
        let compiled: any;

        beforeEach(function() {
            context = this.create(DropdownMenu, SimpleTest);
            toggle = context.clarityElement.querySelector("clr-icon");
            compiled = context.fixture.nativeElement;
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("has the correct css classes", () => {
            expect(compiled.querySelector(".dropdown-menu")).not.toBeNull();
        });

    });
}

@Component({
    template: `
        <clr-dropdown-menu>
            Hello world
        </clr-dropdown-menu>
    `
})
class SimpleTest {
}
