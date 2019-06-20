/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="dropdown bottom-right open">
    <button type="button" class="dropdown-toggle btn btn-primary">
        Dropdown
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <div class="dropdown-menu">
        <h4 class="dropdown-header">Dropdown header</h4>
        <button type="button" class="dropdown-item active">First Action</button>
        <button type="button" class="dropdown-item disabled">Disabled Action</button>
        <div class="dropdown-divider" role="separator"></div>
        <button type="button" class="dropdown-item">Link 1</button>
        <button type="button" class="dropdown-item">Link 2</button>
    </div>
</div>
`;

@Component({
  selector: 'clr-dropdown-static-positioning-demo',
  styleUrls: ['./dropdown.demo.scss'],
  templateUrl: './dropdown-static-positioning.demo.html',
})
export class DropdownStaticPositioningDemo {
  example = EXAMPLE;
}
