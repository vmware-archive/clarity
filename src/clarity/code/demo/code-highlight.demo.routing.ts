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