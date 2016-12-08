/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {TypographyDemo} from "./typography.demo";
import {TypographyFontWeightDemo} from "./typography-font-weight";
import {TypographyHeadersDemo} from "./typography-headers";
import {TypographyTextDemo} from "./typography-text";
import {TypographyLinksDemo} from "./typography-links";
import {TypographyFontCharTestDemo} from "./typography-font-char-test";

const ROUTES: Routes = [
    {
        path: "",
        component: TypographyDemo,
        children: [
            { path: "", redirectTo: "typography-font-weight", pathMatch: "full" },
            { path: "typography-font-weight", component: TypographyFontWeightDemo },
            { path: "typography-headers", component: TypographyHeadersDemo },
            { path: "typography-text", component: TypographyTextDemo },
            { path: "typography-links", component: TypographyLinksDemo },
            { path: "typography-font-char-test", component: TypographyFontCharTestDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
