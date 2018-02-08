/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<table class="table table-vertical table-noborder table-compact">
    <tbody>
        <tr>
            <th>Basic table</th>
            <td>.table</td>
            <td>...</td>
        </tr>
        <tr>
            <th>Left-aligned table cells</th>
            <td>.left</td>
            <td>...</td>
        </tr>
        <tr>
            <th>Tables without borders</th>
            <td>.table-noborder</td>
            <td>...</td>
        </tr>
        <tr>
            <th>Compact tables</th>
            <td>.table-compact</td>
            <td>...</td>
        </tr>
        <tr>
            <th>Vertical tables</th>
            <td>.table-vertical</td>
            <td>...</td>
        </tr>
    </tbody>
</table>
`;

@Component({
    selector: "clr-tables-vertical-noborder-compact-demo",
    templateUrl: "./tables-vertical-noborder-compact.html"
})
export class TablesVerticalNoborderCompactDemo {
    example = EXAMPLE;
}
