import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {WizardDemo} from "./wizard.demo";
import {WizardAngularDemo} from "./wizard-angular";
import {WizardStaticDemo} from "./wizard-static.demo";

const ROUTES: Routes = [
    {
        path: "",
        component: WizardDemo,
        children: [
            { path: "", redirectTo: "static", pathMatch: "full" },
            { path: "static", component: WizardStaticDemo },
            { path: "angular", component: WizardAngularDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);