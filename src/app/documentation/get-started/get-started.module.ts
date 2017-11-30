import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ClarityModule} from "@clr/angular";

import {UtilsModule} from "../../utils/utils.module";
import {GetStartedComponent} from "./get-started.component";
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
    {
        path: "",
        component: GetStartedComponent,
        data: {
            // bodyClass: "layout-get-started",
            browserTitle: "Get Started"
        }
    }
];

@NgModule({
    declarations: [
        GetStartedComponent,
    ],
    imports: [
        CommonModule,
        ClarityModule,
        UtilsModule,
        RouterModule.forChild(route)
    ],
    providers: []
})
export class GetStartedModule {
}
