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
            <th class="left">Wizard</th>
            <th>Allegiance</th>
            <th>Triwizard Champion?</th>
            <th>Can Cast Fireball</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">Harry</td>
            <td>Gryffindor</td>
            <td>Yes</td>
            <td>No</td>
        </tr>
        <tr>
            <td class="left">Gandalf</td>
            <td>Hobbits</td>
            <td>Maybe?</td>
            <td>I don&apos;t think so...</td>
        </tr>
        <tr>
            <td class="left">Obi-Wan Kenobi</td>
            <td>Republic/Rebellion</td>
            <td>No</td>
            <td>No</td>
        </tr>
        <tr>
            <td class="left">Merlin</td>
            <td>King Arthur</td>
            <td>Probably invented the tournament</td>
            <td>Solid maybe</td>
        </tr>
    </tbody>
</table>
`;

@Component({
    selector: "clr-tables-leftcell-demo",
    templateUrl: "./tables-leftcell.html"
})
export class TablesLeftcellDemo {
    example = EXAMPLE;
}
