/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";

import {BasicDatepickerDemo} from "./basic-datepicker";
import {DatepickerInFormDemo} from "./datepicker-in-form";
import {DatepickerDemo} from "./datepicker.demo";

const ROUTES: Routes = [{
    path: "",
    component: DatepickerDemo,
    children: [
        {path: "", redirectTo: "basic", pathMatch: "full"}, {path: "basic", component: BasicDatepickerDemo},
        {path: "forms", component: DatepickerInFormDemo}
    ]
}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
