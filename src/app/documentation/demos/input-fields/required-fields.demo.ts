/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<form>
    <section class="form-block">
        <label>Required Input Label</label>
        <div class="form-group">
            <label class="required">Space</label>
            <input type="text" id="requiredInput">
        </div>
    </section>
</form>
`;

@Component({
    selector: "clr-input-required-demo",
    templateUrl: "./required-fields.demo.html"
})
export class RequiredFieldsDemo {
    htmlExample = HTML_EXAMPLE;
}
