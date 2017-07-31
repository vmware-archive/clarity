/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ProgBarExample} from "./progbar-example";

@Component({
    moduleId: module.id,
    selector: "clr-progress-bar-colors-demo",
    styleUrls: ["progress-bars.demo.css"],
    templateUrl: "./progress-bar-colors.html"
})
export class ProgressBarColorsDemo {
    colorTypes: ProgBarExample[];

    constructor() {
        this.colorTypes = [
            new ProgBarExample("", "Normal"), new ProgBarExample("success", "Success"),
            new ProgBarExample("danger", "Danger/Warning")
        ];
    }
}
