/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ProgBarExample} from "./progbar-example";

@Component({
    moduleId: module.id,
    selector: "clr-progress-bar-examples-demo",
    styleUrls: ["progress-bars.demo.css"],
    templateUrl: "./progress-bar-examples.html"
})
export class ProgressBarExamplesDemo {
    examples: ProgBarExample[];

    constructor() {
        this.examples = [
            new ProgBarExample(), new ProgBarExample("labeled", "Labeled", true),
            new ProgBarExample("progress-fade", "Fade Out")
        ];
    }
}
