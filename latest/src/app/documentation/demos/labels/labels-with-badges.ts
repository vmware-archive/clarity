/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<a href="..." class="label label-purple clickable">
    Austin
    <span class="badge">1</span>
</a>
<a href="..." class="label label-blue clickable">
    New York
    <span class="badge">2</span>
</a>
<a href="..." class="label label-orange clickable">
    Palo Alto
    <span class="badge">3</span>
</a>
<a href="..." class="label label-light-blue clickable">
    San Francisco
    <span class="badge">12</span>
</a>
<a href="..." class="label clickable">
    Seattle
    <span class="badge">15</span>
</a>
<a href="..." class="label label-purple clickable">
    Chicago
    <span class="badge">55</span>
</a>
<a href="..." class="label label-blue clickable">
    San Jose
    <span class="badge">66</span>
</a>
<a href="..." class="label label-orange clickable">
    Charlotte
    <span class="badge">88</span>
</a>
<a href="..." class="label label-light-blue clickable">
    Atlanta
    <span class="badge">99+</span>
</a>
<a href="..." class="label clickable">
    Philadephia<span class="badge">0</span>
</a>
`;

@Component({
    selector: "clr-labels-with-badges-demo",
    templateUrl: "./labels-with-badges.demo.html"
})
export class LabelsWithBadgesDemo {
    example = EXAMPLE;
}
