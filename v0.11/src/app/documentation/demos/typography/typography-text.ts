/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<p class="p1">Body text</p>
<p class="p2">Section header</p>
<p class="p3">Table, grid, and form text</p>
<p class="p4">Form labels and column headers</p>
<p class="p5">Table footers and chart data</p>
<p class="p6">Mostly buttons</p>
<p class="p7">Tags and labels</p>
<p class="p8">Badges</p>
<pre class="language-html">Monospaced</pre> or <code class="language-html">Monospaced</code>
`;

@Component({
    selector: "clr-typography-text",
    styleUrls: ["./typography.demo.scss"],
    templateUrl: "./typography-text.html"
})
export class TypographyTextDemo {
    example = EXAMPLE;
}
