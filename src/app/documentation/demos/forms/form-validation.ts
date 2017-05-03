/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<form>
    <section class="form-block">
        <label>Memory</label>
        <div class="form-group">
            <label class="required">Space</label>
            <label for="validInput1" aria-haspopup="true" role="tooltip" class="tooltip tooltip-validation invalid tooltip-sm">
                <input type="text" id="validInput1">
                <span class="tooltip-content">
                    This field cannot be empty!
                </span>
            </label>
            <div class="select">
                <select id="exampleSelect1">
                    <option>MB</option>
                    <option>GB</option>
                    <option>TB</option>
                </select>
            </div>
        </div>
    </section>

    <section class="form-block">
        <label>Hard Disk</label>
        <div class="form-group">
            <label class="required">Space</label>
            <label for="validInput2" aria-haspopup="true" role="tooltip" class="tooltip tooltip-validation invalid tooltip-md">
                <input type="text" id="validInput2">
                <span class="tooltip-content">
                    This field cannot be empty!
                </span>
            </label>
            <div class="select">
                <select id="exampleSelect1">
                    <option>MB</option>
                    <option>GB</option>
                    <option>TB</option>
                </select>
            </div>
        </div>
    </section>
    <button type="submit" class="btn btn-primary">Ok</button>
    <button type="submit" class="btn btn-secondary">Cancel</button>
</form>
`;

@Component({
    selector: "clr-forms-demo-validation",
    styleUrls: ["./form-validation.demo.scss"],
    templateUrl: "./form-validation.demo.html"
})
export class FormValidationDemo {
    example = EXAMPLE;
}
