import {NgModule} from "@angular/core";

import {SketchTemplateLinkDirective} from "./sketch-template-link.directive";
import {HashListener} from "./hash-listener.directive";
import {ScrollSpy} from "./scrollspy.directive";
import {ClarityModule} from "clarity-angular";
import {CodeSnippet} from "./code-snippet";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild()
    ],
    declarations: [
        SketchTemplateLinkDirective,
        HashListener,
        ScrollSpy,
        CodeSnippet
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
