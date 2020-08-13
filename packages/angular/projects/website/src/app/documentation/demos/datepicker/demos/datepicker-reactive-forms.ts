/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const HTML_EXAMPLE = `
<form clrForm [formGroup]="dateForm" novalidate>
    <h4>Reactive Form Demo</h4>
    <clr-date-container>
        <label>Date</label>
        <input type="date" clrDate formControlName="date"/>
    </clr-date-container>
</form>
<pre class="datepicker-output">
    {{dateForm.value | json}}
</pre>
`;

const TS_EXAMPLE = `
@Component({
    selector: "clr-form-demo",
    templateUrl: "./form-demo.html"
})
export class DatepickerReactiveFormsDemo {
    dateForm = new FormGroup({date: new FormControl()});
}
`;

@Component({
  selector: 'clr-datepicker-reactive-forms-demo',
  templateUrl: './datepicker-reactive-forms.html',
  styleUrls: ['../datepicker.demo.scss'],
})
export class DatepickerReactiveFormsDemo {
  dateForm = new FormGroup({ date: new FormControl() });

  htmlExample = HTML_EXAMPLE;
  tsExample = TS_EXAMPLE;
}
