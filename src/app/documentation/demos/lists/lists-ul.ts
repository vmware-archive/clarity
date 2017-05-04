/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<ul class="list">
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
    <li>Mollit anim id</li>
</ul>
`;

@Component({
    selector: "clr-lists-ul-demo",
    templateUrl: "./lists-ul.html"
})
export class ListsUlDemo {
    example = EXAMPLE;
}
