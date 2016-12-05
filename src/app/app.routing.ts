/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./landing.component";

export const APP_ROUTES: Routes  = [
    { path: "", component: LandingComponent },
    { path: "alert", loadChildren: "app/alert/alert.demo.module" },
    { path: "badges", loadChildren: "app/badges/badges.demo.module" },
    { path: "buttons", loadChildren: "app/buttons/buttons.demo.module" },
    { path: "card", loadChildren: "app/card/card.demo.module" },
    { path: "checkboxes", loadChildren: "app/checkboxes/checkboxes.demo.module" },
    { path: "code-highlight", loadChildren: "app/code/code-highlight.demo.module" },
    { path: "color", loadChildren: "app/color/color.demo.module" },
    { path: "datagrid", loadChildren: "app/datagrid/datagrid.demo.module" },
    { path: "dropdown", loadChildren: "app/dropdown/dropdown.demo.module" },
    { path: "forms", loadChildren: "app/forms/forms.demo.module" },
    { path: "grid", loadChildren: "app/grid/grid.demo.module" },
    { path: "iconography", loadChildren: "app/iconography/iconography.demo.module" },
    { path: "images", loadChildren: "app/images/images.demo.module" },
    { path: "input-fields", loadChildren: "app/input-fields/input-fields.demo.module" },
    { path: "labels", loadChildren: "app/labels/labels.demo.module" },
    { path: "layout", loadChildren: "app/layout/layout.demo.module" },
    { path: "lists", loadChildren: "app/lists/lists.demo.module" },
    { path: "login", loadChildren: "app/login/login.demo.module" },
    { path: "modal", loadChildren: "app/modal/modal.demo.module" },
    { path: "navigation", loadChildren: "app/nav/nav.demo.module" },
    { path: "progress-bars", loadChildren: "app/progress-bars/progress-bars.demo.module" },
    { path: "radios", loadChildren: "app/radios/radios.demo.module" },
    { path: "selects", loadChildren: "app/selects/selects.demo.module" },
    { path: "spinners", loadChildren: "app/spinners/spinners.demo.module" },
    { path: "stack-view", loadChildren: "app/stack-view/stack-view.demo.module" },
    { path: "tables", loadChildren: "app/tables/tables.demo.module" },
    { path: "tabs", loadChildren: "app/tabs/tabs.demo.module" },
    { path: "tree-view", loadChildren: "app/tree-view/tree-view.demo.module" },
    { path: "toggles", loadChildren: "app/toggles/toggles.demo.module" },
    { path: "tooltips", loadChildren: "app/tooltips/tooltips.demo.module" },
    { path: "typography", loadChildren: "app/typography/typography.demo.module" },
    { path: "wizard", loadChildren: "app/wizard/wizard.demo.module" }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
