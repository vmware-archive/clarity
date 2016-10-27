import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {StackViewDemo} from "./stack-view.demo";
import {StackViewStaticDemo} from "./stack-view-static";
import {StackViewAngularBasicDemo} from "./stack-view-angular-basic";
import {StackViewAngularModalEditDemo} from "./stack-view-angular-modal-edit";
import {StackViewAngularLazyloadDemo} from "./stack-view-angular-lazyload";

const routes: Routes = [
    {
        path: "",
        component: StackViewDemo,
        children: [
            { path: "", redirectTo: "static", pathMatch: "full" },
            { path: "static", component: StackViewStaticDemo },
            { path: "angular-basic", component: StackViewAngularBasicDemo },
            { path: "angular-modal-edit", component: StackViewAngularModalEditDemo },
            { path: "angular-lazyload", component: StackViewAngularLazyloadDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(routes);