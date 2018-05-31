/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<header class="header-6">
    <div class="branding">
        ...
    </div>
    <div class="header-nav">
        <a href="javascript://" class="active nav-link nav-text">Dashboard</a>
        <a href="javascript://" class="nav-link nav-text">Interactive Analytics</a>
    </div>
    <div class="header-actions">
        <a href="javascript://" class="nav-link nav-icon">
            <clr-icon shape="cog"></clr-icon>
        </a>
    </div>
</header>
`;

@Component({
    selector: "clr-header-demo-links",
    templateUrl: "./header-links.demo.html",
    styleUrls: ["./headers.demo.scss"]
})
export class HeaderLinksDemo {
    example = EXAMPLE;
}
