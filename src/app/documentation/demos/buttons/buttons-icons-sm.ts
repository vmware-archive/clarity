/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<button class="btn btn-sm btn-primary">
    <clr-icon shape="home"></clr-icon>
    Home
</button>

<button class="btn btn-sm btn-primary">
    <clr-icon shape="directory"></clr-icon>
    Directory
</button>

<button class="btn btn-sm btn-primary">
    <clr-icon shape="cog"></clr-icon>
    Settings
</button>
`;

@Component({
    selector: "clr-buttons-demo-button-icons-sm",
    templateUrl: "./buttons-icons-sm.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class ButtonsIconsSmallDemo {
    htmlExample = HTML_EXAMPLE;
}
