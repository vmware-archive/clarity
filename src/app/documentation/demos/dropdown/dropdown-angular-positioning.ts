/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-dropdown clrMenuPosition="top-left">
    <button class="btn btn-outline-primary" clrDropdownToggle>
        Dropdown
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <clr-dropdown-menu>
        <label class="dropdown-header">Dropdown header</label>
        <a href="..." clrDropdownItem>Action 1</a>
        <a href="..." clrDropdownItem>Action 2</a>
        <a href="..." class="disabled" clrDropdownItem>Disabled Action</a>
        <div class="dropdown-divider"></div>
        <a href="..." clrDropdownItem>Link 1</a>
        <a href="..." clrDropdownItem>Link 2</a>
    </clr-dropdown-menu>
</clr-dropdown>
`

@Component({
    selector: "clr-dropdown-angular-positioning-demo",
    templateUrl: "./dropdown-angular-positioning.demo.html",
    styleUrls: ["./dropdown.demo.scss"]
})
export class DropdownAngularPositioningDemo {
    example = EXAMPLE;
}
