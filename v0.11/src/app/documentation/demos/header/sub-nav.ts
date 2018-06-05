/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<header>
    ...
</header>
<nav class="subnav">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Management</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Cloud</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Tenants</a>
        </li>
    </ul>
</nav>
`;

@Component({
    selector: "clr-nav-demo-subnav",
    styleUrls: ["./sub-nav.demo.scss"],
    templateUrl: "./sub-nav.demo.html"
})
export class SubNavDemo {
    example = EXAMPLE;
}
