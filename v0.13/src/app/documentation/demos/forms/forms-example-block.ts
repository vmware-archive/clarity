/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input} from "@angular/core";

let id = -2;

@Component({
    selector: "clr-forms-example-block",
    styles: [
        `
.clr-form-horizontal .clr-control-label, .clr-form-compact .clr-control-label {
    width: 2rem;
    min-width: 2rem;
}
.clr-form-horizontal .clr-textarea, .clr-form-compact .clr-textarea {
    max-width: 170px;
}
.clr-form-compact .clr-input {
    max-width: 100px;
}
h5 {
    margin-top: 0;
}
`
    ],
    template: `
    <form class="clr-form clr-form-{{layout.toLowerCase()}}">
    <div class="clr-form-control">
        <label for="example{{id}}" class="clr-control-label">Label</label>
        <div class="clr-control-container">
            <div class="clr-input-wrapper">
                <input type="text" id="example{{id}}" placeholder="Placeholder" class="clr-input">
            </div>
        </div>
    </div>
    <div class="clr-form-control">
        <label for="example{{id + 1}}" class="clr-control-label">Label</label>
        <div class="clr-control-container">
            <div class="clr-select-wrapper">
                <select placeholder="Select Option" id="example{{id + 1}}">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        </div>
    </div>
    <div class="clr-form-control">
        <label for="example{{id + 2}}" class="clr-control-label">Label</label>
        <div class="clr-control-container">
            <div class="clr-textarea-wrapper">
                <textarea id="example{{id + 2}}" placeholder="Placeholder" class="clr-textarea"></textarea>
            </div>
        </div>
    </div>
    <div class="clr-form-control">
        <label for="example4" class="clr-control-label">Label</label>
        <div class="clr-control-container">
            <div class="clr-input-wrapper">
                <input type="text" id="example{{id + 3}}" placeholder="Placeholder" class="clr-input">
            </div>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>
</form>
    `
})
export class FormsExampleBlockComponent {
    id = id + 4;
    @Input() layout;

    constructor() {
        id = id + 4;
    }
}
