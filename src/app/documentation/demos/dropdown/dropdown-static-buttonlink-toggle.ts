/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="dropdown open">
    <button type="button" class="dropdown-toggle btn btn-link">
        Dropdown Toggle
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <div class="dropdown-menu">
        <h4 class="dropdown-header">Dropdown header</h4>
        <button type="button" class="dropdown-item">Lorem.</button>
        <button type="button" class="dropdown-item">Lorem ipsum.</button>
        <button type="button" class="dropdown-item">Lorem ipsum dolor.</button>
        <div class="dropdown-divider"></div>
        <button type="button" class="dropdown-item">Link</button>
    </div>
</div>
`;

@Component({
    selector: "clr-dropdown-static-buttonlink-toggle-demo",
    styleUrls: ["./dropdown.demo.scss"],
    templateUrl: "./dropdown-static-buttonlink-toggle.demo.html"
})
export class DropdownStaticButtonLinkToggleDemo {
    example = EXAMPLE;
}
