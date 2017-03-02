/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    templateHTML: `
<form #employeeForm="ngForm" (ngSubmit)="onSubmit()" [hidden]="submitted">
    <section class="form-block">
        <label>Add Employee Information</label>
        <div class="form-group">
            <label for="empFirstName">First name</label>
            <label for="empFirstName"
                aria-haspopup="true"
                role="tooltip"
                class="tooltip tooltip-validation tooltip-md"
                [class.invalid]="firstNameInput.invalid && (firstNameInput.dirty || firstNameInput.touched)">
                <input type="text" id="empFirstName" placeholder="Enter first name"
                    required
                    name="firstName"
                    [(ngModel)]="model.firstName"
                    #firstNameInput="ngModel">
                <span class="tooltip-content">
                    First Name is Required.
                </span>
            </label>
        </div>
        <div class="form-group">
            <label for="empLastName">Last name</label>
            <label for="empLastName"
                aria-haspopup="true"
                role="tooltip"
                class="tooltip tooltip-validation tooltip-md"
                [class.invalid]="lastNameInput.invalid && (lastNameInput.dirty || lastNameInput.touched)">
                <input type="text" id="empLastName" placeholder="Enter last name"
                    required
                    name="lastName"
                    [(ngModel)]="model.lastName"
                    #lastNameInput="ngModel">
                <span class="tooltip-content">
                    Last Name is Required.
                </span>
            </label>
        </div>
        <div class="form-group">
            <label for="empType">Employee type</label>
            <div class="select">
                <select id="empType"
                    name="employeeType"
                    [(ngModel)]="model.employeeType">
                    <option value="Default">Select Employee Type...</option>
                    <option *ngFor="let type of employeeType" [value]="type">{{type}}</option>
                </select>
            </div>
        </div>
        <button class="btn btn-primary" type="submit"
            [disabled]="employeeForm.form.invalid">Add</button>
    </section>
</form>
`
};
