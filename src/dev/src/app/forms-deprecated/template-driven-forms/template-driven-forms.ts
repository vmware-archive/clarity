/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Employee } from '../model/employee.model';

@Component({
  selector: 'clr-template-driven-forms-demo',
  templateUrl: './template-driven-forms.html',
})
export class TemplateDrivenFormsDemo {
  id: number = 1;
  employeeType: string[] = ['Full Time', 'Part Time'];
  model: Employee = new Employee(this.id, '', '', '');

  submitted: boolean = false;

  onSubmit(): void {
    this.submitted = true;
  }

  addNewEmployee(): void {
    this.submitted = false;
    this.model = new Employee(++this.id, '', '', '');
  }
}
