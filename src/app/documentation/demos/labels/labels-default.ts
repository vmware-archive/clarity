/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<span class="label">Austin</span>
<span class="label">New York</span>
<span class="label">Palo Alto</span>
<span class="label">San Francisco</span>
<span class="label">Seattle</span>
`;

@Component({
    selector: "clr-labels-default-demo",
    templateUrl: "./labels-default.demo.html"
})
export class LabelsDefaultDemo {
    example = EXAMPLE;
}
