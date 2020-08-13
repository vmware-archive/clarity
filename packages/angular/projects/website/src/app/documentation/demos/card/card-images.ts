/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<div class="clr-row">
    <div class="clr-col-lg-4 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
        </a>
    </div>
    <div class="clr-col-lg-4 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
        </a>
    </div>
    <div class="clr-col-lg-4 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
        </a>
    </div>
</div>
<div class="clr-row">
    <div class="clr-col-lg-6 clr-col-12">
        <a href="..." class="card clickable card-img">
            <img src="..." alt="..." />
        </a>
    </div>
    <div class="clr-col-lg-6 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
        </a>
    </div>
</div>
`;

@Component({
  selector: 'clr-card-images-demo',
  styleUrls: ['./card.demo.scss'],
  templateUrl: './card-images.html',
})
export class CardImagesDemo {
  htmlExample = HTML_EXAMPLE;
}
