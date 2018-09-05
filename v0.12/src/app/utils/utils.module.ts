import {NgModule} from "@angular/core";

import {SketchTemplateLinkDirective} from "./sketch-template-link.directive";
import {HashListener} from "./hash-listener.directive";
import {ScrollSpy} from "./scrollspy.directive";
import {ClarityModule} from "@clr/angular";
import {CodeSnippet} from "./code-snippet";
import {CommonModule} from "@angular/common";
import {CodeHighlight} from "./code-highlight";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule
    ],
    declarations: [
        SketchTemplateLinkDirective,
        HashListener,
        ScrollSpy,
        CodeSnippet,
        CodeHighlight
    ],
    exports: [
        SketchTemplateLinkDirective,
        HashListener,
        ScrollSpy,
        CodeSnippet
    ]
})
export class UtilsModule {
}
