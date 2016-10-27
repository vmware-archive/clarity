import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./landing.component";

export const APP_ROUTES: Routes  = [
    { path: "", component: LandingComponent },
    { path: "alert", loadChildren: "clarity-demos/alert/demo/alert.demo.module" },
    { path: "badges", loadChildren: "clarity-demos/badges/demo/badges.demo.module" },
    { path: "buttons", loadChildren: "clarity-demos/buttons/demo/buttons.demo.module" },
    { path: "card", loadChildren: "clarity-demos/card/demo/card.demo.module" },
    { path: "checkboxes", loadChildren: "clarity-demos/checkboxes/demo/checkboxes.demo.module" },
    { path: "code-highlight", loadChildren: "clarity-demos/code/demo/code-highlight.demo.module" },
    { path: "color", loadChildren: "clarity-demos/color/demo/color.demo.module" },
    { path: "dropdown", loadChildren: "clarity-demos/dropdown/demo/dropdown.demo.module" },
    { path: "forms", loadChildren: "clarity-demos/forms/demo/forms.demo.module" },
    { path: "grid", loadChildren: "clarity-demos/grid/demo/grid.demo.module" },
    { path: "iconography", loadChildren: "clarity-demos/iconography/demo/iconography.demo.module" },
    { path: "images", loadChildren: "clarity-demos/images/demo/images.demo.module" },
    { path: "input-fields", loadChildren: "clarity-demos/input-fields/demo/input-fields.demo.module" },
    { path: "labels", loadChildren: "clarity-demos/labels/demo/labels.demo.module" },
    { path: "layout", loadChildren: "clarity-demos/layout/demo/layout.demo.module" },
    { path: "lists", loadChildren: "clarity-demos/lists/demo/lists.demo.module" },
    { path: "login", loadChildren: "clarity-demos/login/demo/login.demo.module" },
    { path: "modal", loadChildren: "clarity-demos/modal/demo/modal.demo.module" },
    { path: "navigation", loadChildren: "clarity-demos/nav/demo/nav.demo.module" },
    { path: "progress-bars", loadChildren: "clarity-demos/progress-bars/demo/progress-bars.demo.module" },
    { path: "radios", loadChildren: "clarity-demos/radios/demo/radios.demo.module" },
    { path: "selects", loadChildren: "clarity-demos/selects/demo/selects.demo.module" },
    { path: "spinners", loadChildren: "clarity-demos/spinners/demo/spinners.demo.module" },
    { path: "stack-view", loadChildren: "clarity-demos/stack-view/demo/stack-view.demo.module" },
    { path: "tables", loadChildren: "clarity-demos/tables/demo/tables.demo.module" },
    { path: "tabs", loadChildren: "clarity-demos/tabs/demo/tabs.demo.module" },
    { path: "toggles", loadChildren: "clarity-demos/toggles/demo/toggles.demo.module" },
    { path: "tooltips", loadChildren: "clarity-demos/tooltips/demo/tooltips.demo.module" },
    { path: "typography", loadChildren: "clarity-demos/typography/demo/typography.demo.module" },
    { path: "wizard", loadChildren: "clarity-demos/wizard/demo/wizard.demo.module" }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
