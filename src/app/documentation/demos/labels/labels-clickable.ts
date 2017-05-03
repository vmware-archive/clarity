/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<a href="..." class="label label-purple clickable">
    Austin
</a>
<a href="..." class="label label-blue clickable">
    New York
</a>
<a href="..." class="label label-orange clickable">
    Palo Alto
</a>
<a href="..." class="label label-light-blue clickable">
    San Francisco
</a>
<a href="..." class="label clickable">
    Seattle
</a>
`;

@Component({
    selector: "clr-labels-clickable-demo",
    templateUrl: "./labels-clickable.demo.html"
})
export class LabelsClickableDemo {
    example = EXAMPLE;
}
