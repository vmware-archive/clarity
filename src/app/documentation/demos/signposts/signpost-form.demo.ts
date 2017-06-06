/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

@Component({
    selector: "clr-signpost-form-demo",
    templateUrl: "./signpost-form.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class SignpostFormDemo extends ClarityDocComponent {
    constructor() {
        super("signposts");
    }

    openState: boolean = false;
}
