/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-dropdown [clrCloseMenuOnItemClick]="false">
    <button type="button" clrDropdownTrigger>
        <clr-icon shape="error" class="is-error" size="24"></clr-icon>
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <clr-dropdown-menu *clrIfOpen>
        <label class="dropdown-header">Dropdown header</label>
        <button type="button" clrDropdownItem>Action 1</button>
        <button type="button" clrDropdownItem>Action 2</button>
        <div class="dropdown-divider"></div>
        <button type="button" clrDropdownItem>Link 1</button>
        <button type="button" clrDropdownItem>Link 2</button>
    </clr-dropdown-menu>
</clr-dropdown>
`;

@Component({
    selector: "clr-dropdown-angular-close-item-false-demo",
    templateUrl: "./dropdown-angular-close-item-false.demo.html",
    styleUrls: ["./dropdown.demo.scss"]
})
export class DropdownAngularCloseItemFalseDemo {
    htmlExample = HTML_EXAMPLE;
}
