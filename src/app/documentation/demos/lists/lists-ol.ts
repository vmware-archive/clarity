/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<ol class="list">
    <li>...</li>
    <li>
        Ullamco laboris nisi ut aliquip
        <ul class="list">
            <li>Consequat</li>
            <li>Adipisicing</li>
            <li>Exercitation</li>
        </ul>
    </li>
    <li>Reprehenderit in voluptate</li>
    <li>
        Mollit anim id
        <ol class="list">
            <li>Consequat</li>
            <li>Adipisicing</li>
            <li>Exercitation</li>
        </ol>
    </li>
    <li>Reprehenderit in voluptate</li>
</ol>
`;

@Component({
    selector: "clr-lists-ol-demo",
    templateUrl: "./lists-ol.html"
})
export class ListsOlDemo {
    example = EXAMPLE;
}
