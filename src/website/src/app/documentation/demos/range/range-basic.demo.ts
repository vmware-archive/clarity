/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const basicExample = `
<form clrForm>
    <clr-range-container>
        <input type="range" clrRange name="two" [(ngModel)]="input.one" />
    </clr-range-container>
</form>
`;
const fullExample = `
<form clrForm>
    <clr-range-container [clrRangeHasProgress]="true">
        <label>Full example</label>
        <input type="range" clrRange [(ngModel)]="input.two" name="three" />
        <clr-control-helper>Helper text</clr-control-helper>
    </clr-range-container>
</form>
`;
const disabledExample = `
<form clrForm>
    <clr-range-container [clrRangeHasProgress]="true">
        <label>Disabled</label>
        <input type="range" clrRange [(ngModel)]="input.three" name="four" [disabled]="disabled" />
        <clr-control-helper>Helper text</clr-control-helper>
    </clr-range-container>
</form>
`;

const rangeChangeHTML = `
  <form clrForm>
    <clr-range-container [clrRangeHasProgress]="true">
        <label>Value change example</label>
        <input type="range" clrRange [(ngModel)]="input.two" name="three" (change)="rangeChange($event)"/>
        <clr-control-helper>Helper text</clr-control-helper>
    </clr-range-container>
</form>
`;

const rangeChangeTS = `
@Component({
  selector: 'range-change',
  templateUrl: './range-change.html',
})
export class RangeBasicDemo {
  rangeInput = 36;

  rangeChange(event) {
    console.log(event.target.value);
  }
}
`;

@Component({
  selector: 'clr-range-basic-demo',
  templateUrl: './range-basic.demo.html',
})
export class RangeBasicDemo {
  basicExample = basicExample;
  fullExample = fullExample;
  disabledExample = disabledExample;
  rangeChangeHTML = rangeChangeHTML;
  rangeChangeTS = rangeChangeTS;
  disabled = true;
  input = {
    one: 31,
    two: 36,
    three: 92,
  };

  rangeChange(event) {
    console.log(event.target.value);
  }
}
