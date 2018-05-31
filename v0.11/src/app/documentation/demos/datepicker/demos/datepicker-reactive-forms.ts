/*
* Copyright (c) 2016 - 2018 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

const HTML_EXAMPLE = `
<form class="form" [formGroup]="dateForm" novalidate>
    <section class="form-block">
        <label>Reactive Form Demo</label>
        <div class="form-group">
            <label for="dateControl">Date</label>
            <input id="dateControl" type="date" clrDate formControlName="date"/>
        </div>
    </section>
</form>
<pre>
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
    selector: "clr-datepicker-reactive-forms-demo",
    templateUrl: "./datepicker-reactive-forms.html",
    styleUrls: ["../datepicker.demo.scss"]
})
export class DatepickerReactiveFormsDemo {
    dateForm = new FormGroup({date: new FormControl()});

    htmlExample = HTML_EXAMPLE;
    tsExample = TS_EXAMPLE;
}
