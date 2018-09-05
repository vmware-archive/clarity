/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<span class="label">Seattle</span>
<span class="label label-purple">Austin</span>
<span class="label label-blue">New York</span>
<span class="label label-orange">Palo Alto</span>
<span class="label label-light-blue">San Francisco</span>
`;

@Component({
    selector: "clr-labels-color-options-demo",
    templateUrl: "./labels-color-options.demo.html"
})
export class LabelsColorOptionsDemo {
    example = EXAMPLE;
}
