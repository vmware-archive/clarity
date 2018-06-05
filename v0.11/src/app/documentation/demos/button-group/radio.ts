/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="btn-group">
    <div class="radio btn">
        <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-1">
        <label for="btn-demo-radio-1">Apples</label>
    </div>
    <div class="radio btn">
        <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-2">
        <label for="btn-demo-radio-2">Oranges</label>
    </div>
    <div class="radio btn">
        <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-3">
        <label for="btn-demo-radio-3">Kiwis</label>
    </div>
    <div class="radio btn">
        <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked>
        <label for="btn-demo-radio-4">Pears</label>
    </div>
</div>
`;

@Component({
    selector: "clr-button-group-radio-demo",
    templateUrl: "./radio.html"
})
export class ButtonGroupRadioDemo {
    htmlExample = HTML_EXAMPLE;
}
