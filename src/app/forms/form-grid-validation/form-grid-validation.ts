/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-forms-demo-grid-validation",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./form-grid-validation.demo.css"],
    templateUrl: "./form-grid-validation.demo.html"
})
export class FormGridValidationDemo {
    // Booleans to open each example modal
    public basic: boolean = false;
}
