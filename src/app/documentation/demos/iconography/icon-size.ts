/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-icon shape="info-circle" size="12"></clr-icon>
<clr-icon shape="info-circle" size="16"></clr-icon>
<clr-icon shape="info-circle" size="36"></clr-icon>
<clr-icon shape="info-circle" size="48"></clr-icon>
<clr-icon shape="info-circle" size="64"></clr-icon>
<clr-icon shape="info-circle" size="72"></clr-icon>
`;

@Component({
    selector: "clr-icon-size-demo",
    styleUrls: ["./iconography.demo.scss"],
    templateUrl: "./icon-size.demo.html"
})
export class IconSizeDemo {
    example = EXAMPLE;
}
