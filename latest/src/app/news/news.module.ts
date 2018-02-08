import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ClarityModule} from "@clr/angular";

import {UtilsModule} from "../utils/utils.module";
import {NewsRoutingModule} from "./news-routing.module";
import {NewsComponent} from "./news.component";
import {BreakingChange} from "./counters/breaking-change.directive";
import {BugFix} from "./counters/bug-fix.directive";
import {NewComponent} from "./counters/new-component.directive";
import {Release} from "./release/release.directive";

@NgModule({
    declarations: [
        NewsComponent,
        BreakingChange,
        BugFix,
        NewComponent,
        Release
    ],
    imports: [
        CommonModule,
        ClarityModule,
        UtilsModule,
        NewsRoutingModule
    ],
    providers: []
})
export class NewsModule {
}
