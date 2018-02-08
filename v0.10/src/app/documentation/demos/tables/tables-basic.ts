/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<table class="table">
    <thead>
        <tr>
            <th>Decimal</th>
            <th>Hexadecimal</th>
            <th>Binary</th>
            <th>Roman Numeral</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>I</td>
        </tr>
        <tr>
            <td>5</td>
            <td>5</td>
            <td>101</td>
            <td>V</td>
        </tr>
        <tr>
            <td>10</td>
            <td>A</td>
            <td>1010</td>
            <td>X</td>
        </tr>
        <tr>
            <td>15</td>
            <td>F</td>
            <td>1111</td>
            <td>XV</td>
        </tr>
    </tbody>
</table>
`;

@Component({
    selector: "clr-tables-basic-demo",
    templateUrl: "./tables-basic.html"
})
export class TablesBasicDemo {
    example = EXAMPLE;
}
