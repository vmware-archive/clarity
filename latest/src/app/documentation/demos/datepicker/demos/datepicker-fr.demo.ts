/*
* Copyright (c) 2016 - 2018 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component, LOCALE_ID} from "@angular/core";

@Component({
    selector: "clr-datepicker-fr-demo",
    template: `
        <h6 style="margin-top: 24px">Locale Idenitifer: fr</h6>
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
                <td class="left">French</td>
            </tr>
            <tr>
                <td class="left">Territory</td>
                <td class="left">-</td>
            </tr>
            <tr>
                <td class="left">First Day of the Week (Retrieved from Angular)</td>
                <td class="left">Monday (L)</td>
            </tr>
            <tr>
                <td class="left">Date Format (Retrieved from Angular)</td>
                <td class="left">dd/MM/y</td>
            </tr>
            <tr>
                <td class="left">Placeholder Generated</td>
                <td class="left">DD/MM/YYYY</td>
            </tr>
            </tbody>
        </table>
    `,
    providers: [{provide: LOCALE_ID, useValue: "fr"}]
})
export class DatepickerFRDemo {
}
