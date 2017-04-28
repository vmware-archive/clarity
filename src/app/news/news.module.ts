import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ClarityModule} from "clarity-angular";

import {UtilsModule} from "../utils/utils.module";
import {NewsRoutingModule} from "./news-routing.module";
import {NewsComponent} from "./news.component";
import {RELEASE_ROUTES} from "./release-page/release-pages";
import {BreakingChange} from "./counters/breaking-change.directive";
import {BugFix} from "./counters/bug-fix.directive";
import {NewComponent} from "./counters/new-component.directive";
import {componentList} from "../utils/component-list";

@NgModule({
    declarations: [
        NewsComponent,
        BreakingChange,
        BugFix,
        NewComponent,
        RELEASE_ROUTES.map(componentList),
    ],
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        UtilsModule,
        NewsRoutingModule
    ],
    providers: []
})
export class NewsModule {
}
