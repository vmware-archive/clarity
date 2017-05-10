/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<header class="header header-1">
    ...
</header>

<header class="header header-2">
    ...
</header>

<header class="header header-3">
    ...
</header>

<header class="header header-4">
    ...
</header>

<header class="header header-5">
    ...
</header>

<header class="header header-6">
    ...
</header>

<header class="header header-7">
    ...
</header>
`;

@Component({
    selector: "clr-header-demo-colors",
    templateUrl: "./header-colors.demo.html",
    styleUrls: ["./headers.demo.scss"]
})
export class HeaderColorsDemo {
    example = EXAMPLE;
}
