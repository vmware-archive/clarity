/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<div class="clr-row">
    <div class="clr-col-lg-6 clr-col-12">
        <div class="card">
            <h3 class="card-header">Header</h3>
            <div class="card-block">
                <h4 class="card-title">Block</h4>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Action 1</button>
                <button class="btn btn-sm btn-link">Action 2</button>
                <div class="dropdown top-left open">
                    <button class="dropdown-toggle btn btn-sm btn-link">
                        Dropdown 1
                        <clr-icon shape="caret down"></clr-icon>
                    </button>
                    <div class="dropdown-menu">
                        <a href="..." class="dropdown-item">Item 1</a>
                        <a href="..." class="dropdown-item">Item 2</a>
                        <a href="..." class="dropdown-item">Item 3</a>
                        <a href="..." class="dropdown-item">Item 4</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

@Component({
  selector: 'clr-card-dropdown-demo',
  styleUrls: ['./card.demo.scss'],
  templateUrl: './card-dropdown.html',
})
export class CardDropdownDemo {
  htmlExample = HTML_EXAMPLE;
}
