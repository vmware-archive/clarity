/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ButtonGroupDemo} from "./button-group.demo";
import {ButtonGroupStaticDemo} from "./static/button-group-static";
import {StaticButtonGroupBasicStructureDemo} from "./static/basic-structure/basic-structure";
import {ButtonGroupTypes} from "./static/types/button-group-types";
import {ButtonGroupIconsDemo} from "./static/icons/button-group-icons";
import {ButtonGroupIconsTextDemo} from "./static/icons-with-text/button-group-icon-text";
import {ButtonGroupCheckboxesDemo} from "./static/checkbox/button-group-checkboxes";
import {ButtonGroupRadiosDemo} from "./static/radio/button-group-radios";

import {ButtonGroupAngularDemo} from "./angular/button-group-angular";
import {BasicButtonGroupDemo} from "./angular/basic-structure/basic-button-group";
import {MenuDirectionsDemo} from "./angular/menu-directions/menu-directions";
import {HideShowOverflowToggleDemo} from "./angular/hide-show-overflow-toggle/hide-show-overflow-toggle";
import {MixedButtonGroupDemo} from "./angular/mixed-buttons/mixed-button-group";
import {MoveButtonInMenuDemo} from "./angular/move-button-in-menu/move-button-in-menu";
import {MoveMultipleButtonInMenuDemo} from "./angular/move-multiple-buttons-in-menu/move-multiple-button-in-menu";
import {MoveAllInMenuDemo} from "./angular/move-all-in-menu/move-all-in-menu";
import {ProjectionUpdateTest1Demo} from "./angular/projection-update-test-1/projection-update-test-1";
import {ProjectionUpdateTest6Demo} from "./angular/projection-update-test-6/projection-update-test-6";
import {ProjectionUpdateTest5Demo} from "./angular/projection-update-test-5/projection-update-test-5";
import {ProjectionUpdateTest4Demo} from "./angular/projection-update-test-4/projection-update-test-4";
import {ProjectionUpdateTest3Demo} from "./angular/projection-update-test-3/projection-update-test-3";
import {ProjectionUpdateTest2Demo} from "./angular/projection-update-test-2/projection-update-test-2";
import {StaticMenuDirectionsDemo} from "./static/menu-directions/menu-directions";
import {IconButtonGroupDemo} from "./angular/icon-buttons/icon-button-group";
import {ButtonGroupCardsDemo} from "./static/cards/button-group-cards";

const ROUTES: Routes = [
    {
        path: "",
        component: ButtonGroupDemo,
        children: [
            { path: "",  redirectTo: "static", pathMatch: "full" },
            {
                path: "static",
                component: ButtonGroupStaticDemo,
                children: [
                    { path: "", redirectTo: "basic-structure", pathMatch: "full" },
                    { path: "basic-structure", component: StaticButtonGroupBasicStructureDemo },
                    { path: "directions", component: StaticMenuDirectionsDemo },
                    { path: "types", component: ButtonGroupTypes },
                    { path: "icons", component: ButtonGroupIconsDemo },
                    { path: "icons-with-text", component: ButtonGroupIconsTextDemo },
                    { path: "checkboxes", component: ButtonGroupCheckboxesDemo },
                    { path: "radios", component: ButtonGroupRadiosDemo },
                    { path: "cards", component: ButtonGroupCardsDemo }
                ]
            },
            {
                path: "angular",
                component: ButtonGroupAngularDemo,
                children: [
                    { path: "", redirectTo: "basic-structure", pathMatch: "full" },
                    { path: "basic-structure", component: BasicButtonGroupDemo },
                    { path: "directions", component: MenuDirectionsDemo },
                    { path: "icon-button", component: IconButtonGroupDemo },
                    { path: "hide-overflow", component: HideShowOverflowToggleDemo },
                    { path: "mixed-buttons", component: MixedButtonGroupDemo },
                    { path: "move-button-in-menu", component: MoveButtonInMenuDemo },
                    { path: "move-multiple-buttons-in-menu", component: MoveMultipleButtonInMenuDemo },
                    { path: "move-all-in-menu", component: MoveAllInMenuDemo },
                    { path: "projection-update-test-1", component: ProjectionUpdateTest1Demo },
                    { path: "projection-update-test-2", component: ProjectionUpdateTest2Demo },
                    { path: "projection-update-test-3", component: ProjectionUpdateTest3Demo },
                    { path: "projection-update-test-4", component: ProjectionUpdateTest4Demo },
                    { path: "projection-update-test-5", component: ProjectionUpdateTest5Demo },
                    { path: "projection-update-test-6", component: ProjectionUpdateTest6Demo },
                ]
            }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
