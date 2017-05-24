/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {FormsDemo} from "./forms.demo";
import {FormFieldsDemo} from "./form-fields/form-fields";
import {FormTestDemo} from "./form-test/form-test";
import {FormValidationDemo} from "./form-validation-static/form-validation";
import {FormCompactDemo} from "./compact-forms/form-compact";
import {FormGridDemo} from "./form-grid/form-grid";

import {TemplateDrivenFormsDemo} from "./template-driven-forms/template-driven-forms";
import {ReactiveFormsDemo} from "./reactive-forms/reactive-forms";
import {FormGridValidationDemo} from "./form-grid-validation/form-grid-validation";

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
            { path: "form-grid", component: FormGridDemo },
            { path: "form-grid-validation", component: FormGridValidationDemo },
            { path: "form-template-driven", component: TemplateDrivenFormsDemo },
            { path: "form-reactive", component: ReactiveFormsDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
