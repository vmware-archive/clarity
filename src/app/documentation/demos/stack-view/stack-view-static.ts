/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<h4 class="stack-header">
    <span class="stack-title">Static stack view</span>
    <span class="stack-actions">
        <button class="stack-action btn btn-sm btn-link" type="button">Edit</button>
    </span>
</h4>
<dl class="stack-view">
    <div class="stack-block">
        <dt class="stack-block-label">Label 1</dt>
        <dd class="stack-block-content">Content 1</dd>
    </div>
    <div class="stack-block stack-block-expandable stack-block-expanded">
        <dt class="stack-block-label">Label 2</dt>
        <dd class="stack-block-content">Content 2</dd>
        <div class="stack-children">
            <div class="stack-block">
                <dt class="stack-block-label">Sub-label 1</dt>
                <dd class="stack-block-content">Sub-content 1</dd>
            </div>
            <div class="stack-block">
                <dt class="stack-block-label">Sub-label 2</dt>
                <dd class="stack-block-content">Sub-content 2</dd>
            </div>
            <div class="stack-block">
                <dt class="stack-block-label">Sub-label 3</dt>
                <dd class="stack-block-content">Sub-content 3</dd>
            </div>
        </div>
    </div>
    <div class="stack-block stack-block-expandable">
        <dt class="stack-block-label">Label 3</dt>
        <dd class="stack-block-content">Content 3</dd>
        <div class="stack-children"></div>
    </div>
</dl>
`;

@Component({
    selector: "clr-stack-view-static-demo",
    templateUrl: "./stack-view-static.html",
    styleUrls: ["./stack-view.demo.scss"]
})
export class StackViewStaticDemo {
    example = EXAMPLE;
}
