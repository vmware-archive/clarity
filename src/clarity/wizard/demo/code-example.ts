import {Component, Input, ViewChild} from "@angular/core";
import {CodeHighlight} from "../../code/code-highlight";

@Component({
    selector: "clr-example",
    template: `
        <pre><code [clr-code-highlight]="'language-'+language">{{code.trim()}}</code></pre>
    `,
    styles: [`
        pre { 
            background: transparent; 
            padding: 12px;
        }
    `]
})
export class CodeExample {
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    @Input("clrCode") public code: string;
    @Input("clrLanguage") public language: string;

    ngAfterViewInit(): void {
        this.codeHighlight.redraw();
    }
}