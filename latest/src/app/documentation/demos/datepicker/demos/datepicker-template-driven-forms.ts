/*
* Copyright (c) 2016 - 2018 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<form class="form" #simpleForm="ngForm">
    <div class="form-block">
        <label>Template Driven Form Demo</label>
        <div class="form-group">
            <label for="date">Enter Date</label>
            <input type="date" id="date" name="date" [(ngModel)]="date" clrDate>
        </div>
    </div>
</form>
<pre>
{{simpleForm.value | json}}
</pre>
`;

const TS_EXAMPLE = `
@Component({
    selector: "clr-form-demo",
    templateUrl: "./form-demo.html"
})
export class DatepickerTemplateDrivenFormsDemo {
    date: string = "01/02/2015";
}
`;

@Component({
    selector: "clr-datepicker-template-driven-forms-demo",
    templateUrl: "./datepicker-template-driven-forms.html",
    styleUrls: ["../datepicker.demo.scss"]
})
export class DatepickerTemplateDrivenFormsDemo {
    date: string = "01/02/2015";

    htmlExample = HTML_EXAMPLE;
    tsExample = TS_EXAMPLE;
}
