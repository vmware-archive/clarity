/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {Employee} from "../model/employee.model";

import {EXAMPLES} from "./examples";

@Component({
    selector: "clr-template-driven-forms-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    templateUrl: "./template-driven-forms.html"
})
export class TemplateDrivenFormsDemo {
    examples = EXAMPLES;

    id: number = 1;
    employeeType: string[] = ["Full Time", "Part Time"];
    model: Employee = new Employee(this.id, "", "", "");

    submitted: boolean = false;

    onSubmit(): void {
        this.submitted = true;
    }

    addNewEmployee(): void {
        this.submitted = false;
        this.model = new Employee(++this.id, "", "", "");
    }
}
