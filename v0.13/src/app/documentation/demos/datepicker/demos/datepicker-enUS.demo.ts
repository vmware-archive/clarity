/*
* Copyright (c) 2016 - 2018 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

@Component({
    selector: "clr-datepicker-en-us-demo",
    template: `
        <h6 style="margin-top: 24px">Locale Identifier: en-US</h6>
        <input type="date" clrDate>
        <table class="table">
            <thead>
                <tr>
                    <th class="left">Key</th>
                    <th class="left">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="left">Language</td>
                    <td class="left">English</td>
                </tr>
                <tr>
                    <td class="left">Territory</td>
                    <td class="left">US</td>
                </tr>
                <tr>
                    <td class="left">First Day of the Week (Retrieved from Angular)</td>
                    <td class="left">Sunday (S)</td>
                </tr>
                <tr>
                    <td class="left">Date Format (Retrieved from Angular)</td>
                    <td class="left">M/d/yy</td>
                </tr>
                <tr>
                    <td class="left">Placeholder Generated</td>
                    <td class="left">MM/DD/YYYY</td>
                </tr>
            </tbody>
        </table>
    `
})
export class DatepickerENUSDemo {
}
