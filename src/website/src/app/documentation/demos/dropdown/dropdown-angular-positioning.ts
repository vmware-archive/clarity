/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<clr-dropdown>
    <button type="button" class="btn btn-outline-primary" clrDropdownTrigger>
        Dropdown
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <clr-dropdown-menu clrPosition="top-left" *clrIfOpen>
        <label class="dropdown-header">Dropdown header</label>
        <button type="button" clrDropdownItem>Action 1</button>
        <button type="button" disabled clrDropdownItem>Disabled Action</button>
        <div class="dropdown-divider" role="separator"></div>
        <clr-dropdown>
            <button type="button" clrDropdownTrigger>Link 1</button>
            <clr-dropdown-menu>
                <button type="button" clrDropdownItem>Foo</button>
                <clr-dropdown>
                    <button type="button" clrDropdownTrigger>Bar</button>
                    <clr-dropdown-menu clrPosition="left-top">
                        <button type="button" clrDropdownItem>Baz</button>
                    </clr-dropdown-menu>
                </clr-dropdown>
            </clr-dropdown-menu>
        </clr-dropdown>
        <button type="button" clrDropdownItem>Link 2</button>
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
