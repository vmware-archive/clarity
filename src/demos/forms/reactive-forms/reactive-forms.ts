/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {FormGroup, FormControl, Validators} from "@angular/forms";

import {EXAMPLES} from "./examples";

@Component({
    selector: "clr-reactive-forms-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    templateUrl: "./reactive-forms.html"
})
export class ReactiveFormsDemo {
    examples = EXAMPLES;

    employeeAddressForm = new FormGroup({
        fullName: new FormControl("", Validators.required),
        address: new FormGroup({
            postalCode: new FormControl("", Validators.required),
            country: new FormControl("", Validators.required)
        })
    });

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    addNewEmployeeAddress() {
        this.employeeAddressForm.reset();
        this.submitted = false;
    }
}
