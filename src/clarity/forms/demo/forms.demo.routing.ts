import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {FormsDemo} from "./forms.demo";
import {FormFieldsDemo} from "./form-fields";
import {FormTestDemo} from "./form-test";
import {FormValidationDemo} from "./form-validation";
import {FormCompactDemo} from "./form-compact";
import {FormGridDemo} from "./form-grid";

const ROUTES: Routes = [
    {
        path: "",
        component: FormsDemo,
        children: [
            { path: "", redirectTo: "form-fields", pathMatch: "full" },
            { path: "form-fields", component: FormFieldsDemo },
            { path: "form-test", component: FormTestDemo },
            { path: "form-validation", component: FormValidationDemo },
            { path: "form-compact", component: FormCompactDemo },
            { path: "form-grid", component: FormGridDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);