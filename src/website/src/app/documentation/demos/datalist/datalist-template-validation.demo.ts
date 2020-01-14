/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

const templateHTML = `
<form clrForm>
    <clr-datalist-container>
        <label>Template Datalist</label>
        <input minlength="4" name="Option" required 
               clrDatalistInput [disabled]="disabled" [(ngModel)]="vertical"/>
        <datalist>
            <option *ngFor="let item of items" [value]="item"></option>
        </datalist>
        <clr-control-helper>Helper text</clr-control-helper>
        <clr-control-error>There was an error</clr-control-error>
    </clr-datalist-container>
</form>
`;
const templateTS = `
@Component({
  selector: 'template-form',
  templateUrl: './template.html',
})
export class TemplateForm {
  disabled = false;
  items: string[] = ['Item1', 'Item2', 'Item3'];
  vertical = '';
}
`;

@Component({
  selector: 'clr-datalist-template-validation-demo',
  templateUrl: './datalist-template-validation.demo.html',
})
export class DatalistTemplateValidationDemo {
  templateHTML = templateHTML;
  templateTS = templateTS;

  disabled = false;
  items: string[] = ['Item1', 'Item2', 'Item3'];
  vertical = '';
}
