/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<div class="clr-row">
    <div class="clr-col-lg-5 clr-col-md-8 clr-col-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-title">
                    Block
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Footer Action 1</button>
                <button class="btn btn-sm btn-link">Footer Action 2</button>
            </div>
        </div>
    </div>
</div>
`;

@Component({
  selector: 'clr-card-layout-demo',
  styleUrls: ['./card.demo.scss'],
  templateUrl: './card-layout.html',
})
export class CardLayoutDemo {
  htmlExample = HTML_EXAMPLE;
}
