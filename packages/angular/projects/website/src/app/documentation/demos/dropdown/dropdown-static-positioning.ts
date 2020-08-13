/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="dropdown bottom-right open">
    <button class="dropdown-toggle btn btn-primary">
        Dropdown
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <div class="dropdown-menu">
        <h4 class="dropdown-header">Dropdown header</h4>
        <div class="dropdown-item active">First Action</div>
        <div class="dropdown-item disabled">Disabled Action</div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item">Link 1</div>
        <div class="dropdown-item">Link 2</div>
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
