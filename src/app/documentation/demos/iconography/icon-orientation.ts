/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-icon shape="caret up"></clr-icon>
<clr-icon shape="caret right"></clr-icon>
<clr-icon shape="caret down"></clr-icon>
<clr-icon shape="caret left"></clr-icon>
`;

const EXAMPLE1 = `
<clr-icon shape="caret" dir="up"></clr-icon>
<clr-icon shape="caret" dir="right"></clr-icon>
<clr-icon shape="caret" dir="down"></clr-icon>
<clr-icon shape="caret" dir="left"></clr-icon>
`;

const EXAMPLE2 = `
<clr-icon shape="floppy"></clr-icon>
<clr-icon shape="floppy" flip="horizontal"></clr-icon>
<clr-icon shape="floppy" flip="vertical"></clr-icon>
`;

@Component({
    selector: "clr-icon-orientation-demo",
    styleUrls: ["./iconography.demo.scss"],
    templateUrl: "./icon-orientation.demo.html"
})
export class IconOrientationDemo {
    example = EXAMPLE;
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
}
