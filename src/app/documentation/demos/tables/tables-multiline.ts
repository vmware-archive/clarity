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
            <th class="left">Name</th>
            <th>A/B</th>
            <th class="left">Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">Beetlejuice</td>
            <td>B</td>
            <td class="left">...</td>
        </tr>
        <tr>
            <td class="left">Mytzlplk</td>
            <td>A</td>
            <td class="left">...</td>
        </tr>
        <tr>
            <td class="left">Q</td>
            <td>A</td>
            <td class="left">...</td>
        </tr>
    </tbody>
</table>
`;

@Component({
    selector: "clr-tables-multiline-demo",
    templateUrl: "./tables-multiline.html"
})
export class TablesMultilineDemo {
    example = EXAMPLE;
}
