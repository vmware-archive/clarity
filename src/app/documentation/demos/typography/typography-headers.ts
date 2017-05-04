/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<h1>Header 1 (Display)</h1>
<h2>Header 2 (Headline)</h2>
<h3>Header 3 (Sub Heading)</h3>
<h4>Header 4 (Section Heading Level 1)</h4>
<h5>Header 5 (Category / group label, TOC)</h5>
<h6>Header 6 (Section Heading Level 2 group label)</h6>
`;

@Component({
    selector: "clr-typography-headers",
    styleUrls: ["./typography.demo.scss"],
    templateUrl: "./typography-headers.html"
})

export class TypographyHeadersDemo {
    example = EXAMPLE;
}
