import {NgModule} from "@angular/core";

import {SketchTemplateLinkDirective} from "./sketch-template-link.directive";
import {HashListener} from "./hash-listener.directive";
import {ScrollSpy} from "./scrollspy.directive";

@NgModule({
    declarations: [
        SketchTemplateLinkDirective,
        HashListener,
        ScrollSpy
    ],
    exports: [
        SketchTemplateLinkDirective,
        HashListener,
        ScrollSpy
    ]
})
export class UtilsModule {
}
