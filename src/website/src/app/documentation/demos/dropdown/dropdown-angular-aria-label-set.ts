/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
        <clr-dropdown>
            <button class="btn btn-outline-primary" 
                    clrDropdownTrigger
                    clrAriaLabelDropdownOpen="Open links and actions dropdown"
                    clrAriaLabelDropdownClose="Close links and actions dropdown">
                Dropdown
                <clr-icon shape="caret down"></clr-icon>
            </button>
            <clr-dropdown-menu *clrIfOpen>
                <label class="dropdown-header" aria-hidden="true">Dropdown header</label>
                <div aria-label="Dropdown header Action 1" clrDropdownItem>Action 1</div>
                <div aria-label="Dropdown header Action 2" clrDropdownItem>Action 2</div>
                <div class="dropdown-divider" role="separator" aria-hidden="true"></div>
                <div clrDropdownItem>Link 1</div>
                <div clrDropdownItem>Link 2</div>
            </clr-dropdown-menu>
        </clr-dropdown>
`;

@Component({
  selector: 'clr-dropdown-angular-aria-label-set-demo',
  templateUrl: './dropdown-angular-aria-label-set.demo.html',
  styleUrls: ['./dropdown.demo.scss'],
})
export class DropdownAngularAriaLabelSetDemo {
  htmlExample = HTML_EXAMPLE;
}
