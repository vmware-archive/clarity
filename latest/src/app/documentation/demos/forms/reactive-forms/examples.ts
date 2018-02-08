/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    reactiveTS: `
import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
    ...
})
export class ReactiveFormsDemo {
    employeeAddressForm = new FormGroup({
        fullName: new FormControl('', Validators.required),
        address: new FormGroup({
            postalCode: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required)
        })
    });
    submitted = false;
    onSubmit() {
        ...
    }
    addNewEmployeeAddress() {
        this.employeeAddressForm.reset();
        this.submitted = false;
    }
}
`,

    reactiveHTML: `
<form class="form" [formGroup]="employeeAddressForm" (ngSubmit)="onSubmit()" [hidden]="submitted">
    <section class="form-block">
        <label>Add Employee Address</label>
        <div class="form-group">
            <label for="empFullName">Full name</label>
            <label for="empFullName"
                aria-haspopup="true"
                role="tooltip"
                class="tooltip tooltip-validation tooltip-sm"
                [class.invalid]="employeeAddressForm.get('fullName').invalid
                    && (employeeAddressForm.get('fullName').dirty || employeeAddressForm.get('fullName').touched)">
                <input id="empFullName" type="text"
                    formControlName="fullName">
                <span class="tooltip-content">
                    Name is required.
                </span>
            </label>
        </div>
        <div formGroupName="address">
            <div class="form-group">
                <label for="empPostalCode">Postal code</label>
                <label for="empPostalCode"
                    aria-haspopup="true"
                    role="tooltip"
                    class="tooltip tooltip-validation tooltip-sm"
                    [class.invalid]="employeeAddressForm.get('address').get('postalCode').invalid
                        && (employeeAddressForm.get('address').get('postalCode').dirty ||
                        employeeAddressForm.get('address').get('postalCode').touched)">
                    <input id="empPostalCode" type="text"
                        formControlName="postalCode">
                    <span class="tooltip-content">
                        Postal code is required.
                    </span>
                </label>
            </div>
            <div class="form-group">
                <label for="empCountry">Country</label>
                <label for="empCountry"
                    aria-haspopup="true"
                    role="tooltip"
                    class="tooltip tooltip-validation tooltip-sm"
                    [class.invalid]="employeeAddressForm.get('address').get('country').invalid
                        && (employeeAddressForm.get('address').get('country').dirty ||
                        employeeAddressForm.get('address').get('country').touched)">
                    <input id="empCountry" type="text"
                        formControlName="country">
                    <span class="tooltip-content">
                        Country is required.
                    </span>
                </label>
            </div>
        </div>
        <button class="btn btn-primary"
            type="submit"
            [disabled]="employeeAddressForm.invalid">Add</button>
    </section>
</form>
`
};
