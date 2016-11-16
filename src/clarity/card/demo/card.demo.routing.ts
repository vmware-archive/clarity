/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {CardDemo} from "./card.demo";
import {CardOldDemo} from "./card-old";
import {CardGridDemo} from "./card-grid";
import {CardClickableDemo} from "./card-clickable";
import {CardImagesDemo} from "./card-images";
import {CardLayoutDemo} from "./card-layout";
import {CardMasonryDemo} from "./card-masonry";
import {CardMediaBlockDemo} from "./card-media-block";
import {CardDropdownDemo} from "./card-dropdown";
import {CardListGroupDemo} from "./card-list-group";

const ROUTES: Routes = [
    {
        path: "",
        component: CardDemo,
        children: [
            { path: "", redirectTo: "grid", pathMatch: "full" },
            { path: "grid", component: CardGridDemo },
            { path: "clickable", component: CardClickableDemo },
            { path: "dropdown", component: CardDropdownDemo },
            { path: "images", component: CardImagesDemo },
            { path: "layout", component: CardLayoutDemo },
            { path: "masonry", component: CardMasonryDemo },
            { path: "media-block", component: CardMediaBlockDemo },
            { path: "list-group", component: CardListGroupDemo },
            { path: "old", component: CardOldDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
