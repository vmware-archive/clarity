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
                <div class="card-media-block">
                    <img src="..." class="card-media-image" />
                    <div class="card-media-description">
                        <span class="card-media-title"> Project A </span>
                        <span class="card-media-text"> Owner: John Doe </span>
                    </div>
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Action</button>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-6 clr-col-12">
        <div class="card">
            <h3 class="card-header">Header</h3>
            <div class="card-block">
                <div class="card-media-block wrap">
                    <img src="..." class="card-media-image" />
                    <div class="card-media-description">
                        <span class="card-media-title"> Project B </span>
                        <span class="card-media-text"> Owner: Jane Doe </span>
                    </div>
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Action</button>
            </div>
        </div>
    </div>
</div>
`;

@Component({
  selector: 'clr-card-media-block-demo',
  styleUrls: ['./card.demo.scss'],
  templateUrl: './card-media-block.html',
})
export class CardMediaBlockDemo {
  htmlExample = HTML_EXAMPLE;
}
