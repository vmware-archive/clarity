/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<span class="badge">1</span>
<span class="badge badge-purple">15</span>
<span class="badge badge-blue">2</span>
<span class="badge badge-orange">3</span>
<span class="badge badge-light-blue">12</span>
<span class="badge badge-1">90</span>
<span class="badge badge-2">51</span>
<span class="badge badge-3">25</span>
<span class="badge badge-4">32</span>
<span class="badge badge-5">57</span>
`;

@Component({
    selector: "clr-badge-colors-demo",
    templateUrl: "./badge-colors.demo.html"
})
export class BadgeColorsDemo {
    htmlExample = HTML_EXAMPLE;
}
