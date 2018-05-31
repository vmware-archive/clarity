/*
 * Copyright (c) 2016 - 2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";
import localeFr from "@angular/common/locales/fr";
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeFr);

@Component({
    selector: "clr-datepicker-demo",
    templateUrl: "./datepicker.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class DatepickerDemo extends ClarityDocComponent {
    expanded: boolean = true;

    constructor() {
        super("datepicker");
    }
}
