/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, ViewChild, AfterViewInit} from "@angular/core";
import {CodeHighlight} from "./code-highlight";

@Component({
    selector: "clr-code-snippet",
    template: `
        <ng-container *ngIf="!disablePrism">
            <pre><code [clr-code-highlight]="'language-'+language">{{code.trim()}}</code></pre>
        </ng-container>
        <ng-container *ngIf="disablePrism">
            <pre><code class="clr-code">{{code.trim()}}</code></pre>
        </ng-container>
    `,
    styles: [`
        pre {
            background: transparent;
            padding: 12px;
            max-height: none;
        }
    `]
})
export class CodeSnippet implements AfterViewInit {
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    @Input("clrCode") public code: string;
    @Input("clrLanguage") public language: string = "html";
    @Input("clrDisablePrism") public disablePrism: boolean = false;

    ngAfterViewInit(): void {
        if (this.codeHighlight) {
            this.codeHighlight.redraw();
        }
    }
}
