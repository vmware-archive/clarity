/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LandingComponent} from "./landing.component";

export const APP_ROUTES: Routes = [
    {path: "", component: LandingComponent},
    {path: "alert", loadChildren: "app/alert/alert.demo.module#AlertDemoModule"},
    {path: "badges", loadChildren: "app/badges/badges.demo.module#BadgesDemoModule"},
    {path: "button-group", loadChildren: "app/button-group/button-group.demo.module#ButtonGroupDemoModule"},
    {path: "buttons", loadChildren: "app/buttons/buttons.demo.module#ButtonsDemoModule"},
    {path: "card", loadChildren: "app/card/card.demo.module#CardDemoModule"},
    {path: "checkboxes", loadChildren: "app/checkboxes/checkboxes.demo.module#CheckboxesDemoModule"},
    {path: "code-highlight", loadChildren: "app/code/code-highlight.demo.module#CodeHighlightDemoModule"},
    {path: "color", loadChildren: "app/color/color.demo.module#ColorDemoModule"},
    {path: "datagrid", loadChildren: "app/datagrid/datagrid.demo.module#DatagridDemoModule"},
    {path: "dropdown", loadChildren: "app/dropdown/dropdown.demo.module#DropdownDemoModule"},
    {path: "forms-deprecated", loadChildren: "app/forms-deprecated/forms.demo.module#FormsDeprecatedDemoModule"},
    {path: "grid", loadChildren: "app/grid/grid.demo.module#GridDemoModule"},
    {path: "iconography", loadChildren: "app/iconography/iconography.demo.module#IconographyDemoModule"},
    {path: "images", loadChildren: "app/images/images.demo.module#ImagesDemoModule"},
    {path: "input-fields", loadChildren: "app/input-fields/input-fields.demo.module#InputFieldsDemoModule"},
    {path: "labels", loadChildren: "app/labels/labels.demo.module#LabelsDemoModule"},
    {path: "layout", loadChildren: "app/layout/layout.demo.module#LayoutDemoModule"},
    {path: "lists", loadChildren: "app/lists/lists.demo.module#ListsDemoModule"},
    {path: "login", loadChildren: "app/login/login.demo.module#LoginDemoModule"},
    {path: "modal", loadChildren: "app/modal/modal.demo.module#ModalDemoModule"},
    {path: "navigation", loadChildren: "app/nav/nav.demo.module#NavDemoModule"},
    {path: "progress-bars", loadChildren: "app/progress-bars/progress-bars.demo.module#ProgressBarsDemoModule"},
    {path: "radios", loadChildren: "app/radios/radios.demo.module#RadiosDemoModule"},
    {path: "selects", loadChildren: "app/selects/selects.demo.module#SelectsDemoModule"},
    {path: "signposts", loadChildren: "app/signpost/signpost.demo.module#SignpostDemoModule"},
    {path: "spinners", loadChildren: "app/spinners/spinners.demo.module#SpinnersDemoModule"},
    {path: "stack-view", loadChildren: "app/stack-view/stack-view.demo.module#StackViewDemoModule"},
    {path: "tables", loadChildren: "app/tables/tables.demo.module#TablesDemoModule"},
    {path: "tabs", loadChildren: "app/tabs/tabs.demo.module#TabsDemoModule"},
    {path: "tree-view", loadChildren: "app/tree-view/tree-view.demo.module#TreeViewDemoModule"},
    {path: "toggles", loadChildren: "app/toggles/toggles.demo.module#TogglesDemoModule"},
    {path: "tooltips", loadChildren: "app/tooltips/tooltips.demo.module#TooltipsDemoModule"},
    {path: "typography", loadChildren: "app/typography/typography.demo.module#TypographyDemoModule"},
    {path: "vertical-nav", loadChildren: "app/vertical-nav/vertical-nav.demo.module#VerticalNavDemoModule"},
    {path: "virtual-scroll", loadChildren: "app/virtual-scroll/virtual-scroll.demo.module#VirtualScrollDemoModule"},
    {path: "wizard", loadChildren: "app/wizard/wizard.demo.module#WizardDemoModule"}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
