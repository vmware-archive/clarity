/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="main-container">
    <header class="header header-6">
        ...
    </header>
    <div class="content-container">
        <div class="content-area">
            ...
        </div>
        <nav class="sidenav">
            <section class="sidenav-content">
                <a href="..." class="nav-link active">
                    Nav Element 1
                </a>
                <a href="..." class="nav-link">
                    Nav Element 2
                </a>
                <section class="nav-group collapsible">
                    <input id="tabexample1" type="checkbox">
                    <label for="tabexample1">Collapsible Nav Element</label>
                    <ul class="nav-list">
                        <li><a class="nav-link">Link 1</a></li>
                        <li><a class="nav-link">Link 2</a></li>
                    </ul>
                </section>
                <section class="nav-group">
                    <input id="tabexample2" type="checkbox">
                    <label for="tabexample2">Default Nav Element</label>
                    <ul class="nav-list">
                        <li><a class="nav-link">Link 1</a></li>
                        <li><a class="nav-link">Link 2</a></li>
                        <li><a class="nav-link active">Link 3</a></li>
                        <li><a class="nav-link">Link 4</a></li>
                        <li><a class="nav-link">Link 5</a></li>
                        <li><a class="nav-link">Link 6</a></li>
                    </ul>
                </section>
            </section>
        </nav>
    </div>
</div>
`;

@Component({
    selector: "clr-nav-demo-sidenav",
    styleUrls: ["./sidenav.demo.scss"],
    templateUrl: "./sidenav.html"
})
export class SidenavExample {
    example = EXAMPLE;
}
