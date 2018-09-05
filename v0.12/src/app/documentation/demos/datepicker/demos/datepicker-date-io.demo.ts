/*
* Copyright (c) 2016 - 2018 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
    <input type="date" [(clrDate)]="date">
`;

@Component({
    selector: "clr-datepicker-date-io-demo",
    templateUrl: "./datepicker-date-io.demo.html",
    styleUrls: ["../datepicker.demo.scss"]
})
export class DatepickerDateIODemo {
    date: Date = new Date();

    htmlExample = HTML_EXAMPLE;
}
