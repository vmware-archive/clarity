/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="dropdown open">
    <button class="dropdown-toggle btn btn-link">
        Dropdown Toggle
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <div class="dropdown-menu">
        <h4 class="dropdown-header">Dropdown header</h4>
        <div aria-label="Dropdown header Lorem" class="dropdown-item">Lorem.</div>
        <div aria-label="Dropdown header Lorem ipsum" class="dropdown-item">Lorem ipsum.</div>
        <div aria-label="Dropdown header Lorem ipsum dolor" class="dropdown-item">Lorem ipsum dolor.</div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item">Link</div>
    </div>
</div>
`;

@Component({
  selector: 'clr-dropdown-static-buttonlink-toggle-demo',
  styleUrls: ['./dropdown.demo.scss'],
  templateUrl: './dropdown-static-buttonlink-toggle.demo.html',
})
export class DropdownStaticButtonLinkToggleDemo {
  example = EXAMPLE;
}
