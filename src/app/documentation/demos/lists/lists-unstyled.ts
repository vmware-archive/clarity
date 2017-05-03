/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<ul class="list-unstyled">
    <li>Id est laborum</li>
    <li>Dolore eu fugiat</li>
    <li>Occaecat cupidatat</li>
    <li>Deserunt mollit anim</li>
</ul>
`

@Component({
    selector: "clr-lists-unstyled-demo",
    templateUrl: "./lists-unstyled.html"
})
export class ListsUnstyledDemo {
    example = EXAMPLE;
}
