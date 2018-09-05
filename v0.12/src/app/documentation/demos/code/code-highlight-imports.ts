/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<head>
    ...
    <link rel="stylesheet" href="node_modules/prismjs/themes/prism-solarizedlight.css">
    <script src="node_modules/prismjs/prism.js"></script>
    <script src="node_modules/prismjs/components/prism-typescript.min.js"></script>
    ...
</head>
`;

@Component({
    selector: "clr-code-highlight-imports-demo",
    templateUrl: "./code-highlight-imports.html",
})
export class CodeHighlightImportsDemo {
    htmlExample = HTML_EXAMPLE;
}
