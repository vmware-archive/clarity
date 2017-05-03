/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="main-container">
    <div class="alert alert-app-level">
        ...
    </div>
    <header class="header header-6">
        ...
    </header>
    <nav class="subnav">
        ...
    </nav>
    <div class="content-container">
        <div class="content-area">
            ...
        </div>
        <nav class="sidenav">
            ...
        </nav>
    </div>
</div>
`;

@Component({
    selector: "clr-layout-all-demo",
    templateUrl: "./layout-all.html",
    styleUrls: ["./layout.demo.scss"]
})
export class LayoutAllDemo {
    htmlExample = HTML_EXAMPLE;
}
