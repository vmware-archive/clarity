/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="dropdown open">
    <button class="dropdown-toggle btn btn-primary" type="button">
        Dropdown
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <div class="dropdown-menu">
        <h4 class="dropdown-header">Dropdown header</h4>
        <button type="button" class="dropdown-item active">Action</button>
        <button type="button" class="dropdown-item disabled">Disabled Link</button>
        <div class="dropdown-divider"></div>
        <button type="button" class="dropdown-item">Lorem.</button>
        <div class="dropdown open right-bottom">
            <button class="dropdown-item active expandable">Lorem ipsum.</button>
            <div class="dropdown-menu">
                <button type="button" class="dropdown-item">Foo.</button>
                <div class="dropdown open right-top">
                    <button class="dropdown-item active expandable">Bar.</button>
                    <div class="dropdown-menu">
                        <button type="button" class="dropdown-item">Baz.</button>
                    </div>
                </div>
                <button type="button" class="dropdown-item">Foo 2.</button>
            </div>
        </div>
        <button type="button" class="dropdown-item">Ipsum.</button>
    </div>
</div>
`;

@Component({
    selector: "clr-dropdown-static-default-demo",
    styleUrls: ["./dropdown.demo.scss"],
    templateUrl: "./dropdown-static-default.demo.html"
})
export class DropdownStaticDefaultDemo {
    example = HTML_EXAMPLE;
}
