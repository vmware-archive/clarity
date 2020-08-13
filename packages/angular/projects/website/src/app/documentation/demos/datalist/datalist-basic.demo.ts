/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

const basicHTML = `
<form clrForm>
    <clr-datalist-container>
        <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option"/>
        <datalist>
            <option *ngFor="let item of items" [value]="item"></option>
        </datalist>
    </clr-datalist-container>
</form>
`;

const basicTS = `
@Component({
  selector: 'basic-datalist',
  templateUrl: './basic.html',
})
export class DatalistBasicDemo {
  items: string[] = ['Item1', 'Item2', 'Item3'];
  vertical = '';
}
`;

@Component({
  selector: 'clr-datalist-basic-demo',
  templateUrl: './datalist-basic.demo.html',
})
export class DatalistBasicDemo {
  basicHTML = basicHTML;
  basicTS = basicTS;

  disabled = false;
  items: string[] = ['Item1', 'Item2', 'Item3'];
  vertical = '';
}
