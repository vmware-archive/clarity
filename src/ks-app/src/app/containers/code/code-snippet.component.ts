/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {AfterViewInit, Component, Input, ViewChild} from "@angular/core";
import {CodeHighlight} from "@clr/angular";

/** @deprecated since 0.12 */
@Component({
    selector: "code-snippet",
    template: `<pre><code [clr-code-highlight]="'language-'+language">{{code.trim()}}</code></pre>`,
    styles: [`
        pre {
            background: transparent;
            padding: 12px;
        }
    `]
})
export class KSCodeSnippetComponent implements AfterViewInit {
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    @Input("code") public code: string;
    @Input("language") public language: string = "html";

    ngAfterViewInit(): void {
        if (this.codeHighlight) {
            this.codeHighlight.redraw();
        }
    }
}
