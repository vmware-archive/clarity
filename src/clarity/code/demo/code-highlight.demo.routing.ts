/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {CodeHighlightDemo} from "./code-highlight.demo";
import {CodeHighlightImportsDemo} from "./code-highlight-imports";
import {CodeHighlightSnippetDemo} from "./code-highlight-snippet";

const ROUTES: Routes = [
    {
        path: "",
        component: CodeHighlightDemo,
        children: [
            { path: "", redirectTo: "code-highlight-imports", pathMatch: "full" },
            { path: "code-highlight-imports", component: CodeHighlightImportsDemo },
            { path: "code-highlight-snippet", component: CodeHighlightSnippetDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);