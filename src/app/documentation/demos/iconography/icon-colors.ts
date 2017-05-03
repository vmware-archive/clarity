/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-icon shape="info-circle"></clr-icon>
<clr-icon shape="info-circle" class="is-highlight"></clr-icon>
<clr-icon shape="info-circle" class="is-error"></clr-icon>
<clr-icon shape="info-circle" class="is-warning"></clr-icon>
<clr-icon shape="info-circle" class="is-success"></clr-icon>
<clr-icon shape="info-circle" class="is-info"></clr-icon>
`;

@Component({
    selector: "clr-icon-colors-demo",
    styleUrls: ["./iconography.demo.scss"],
    templateUrl: "./icon-colors.demo.html"
})
export class IconColorsDemo {
    example = EXAMPLE;
}
