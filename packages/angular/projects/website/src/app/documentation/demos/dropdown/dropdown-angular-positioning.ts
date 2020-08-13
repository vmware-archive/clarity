/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<clr-dropdown>
    <button class="btn btn-outline-primary" clrDropdownTrigger>
        Dropdown
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <clr-dropdown-menu clrPosition="top-left" *clrIfOpen>
        <label class="dropdown-header" aria-hidden="true">Dropdown header</label>
        <div aria-label="Dropdown header Action 1" clrDropdownItem>Action 1</div>
        <div aria-label="Dropdown header Disabled Action" [clrDisabled]="true" clrDropdownItem>Disabled Action</div>
        <div class="dropdown-divider" role="separator" aria-hidden="true"></div>
        <clr-dropdown>
            <button clrDropdownTrigger>Link 1</button>
            <clr-dropdown-menu>
                <button clrDropdownItem>Foo</button>
                <clr-dropdown>
                    <button clrDropdownTrigger>Bar</button>
                    <clr-dropdown-menu clrPosition="left-top">
                        <button clrDropdownItem>Baz</button>
                    </clr-dropdown-menu>
                </clr-dropdown>
            </clr-dropdown-menu>
        </clr-dropdown>
        <div clrDropdownItem>Link 2</div>
    </clr-dropdown-menu>
</clr-dropdown>
`;

@Component({
  selector: 'clr-dropdown-angular-positioning-demo',
  templateUrl: './dropdown-angular-positioning.demo.html',
  styleUrls: ['./dropdown.demo.scss'],
})
export class DropdownAngularPositioningDemo {
  example = EXAMPLE;
}
