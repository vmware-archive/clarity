/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./code-highlight.demo.routing";
import {CodeHighlightDemo} from "./code-highlight.demo";
import {CodeHighlightImportsDemo} from "./code-highlight-imports";
import {CodeHighlightSnippetDemo} from "./code-highlight-snippet";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        CodeHighlightDemo,
        CodeHighlightImportsDemo,
        CodeHighlightSnippetDemo
    ],
    exports: [
        CodeHighlightDemo,
        CodeHighlightImportsDemo,
        CodeHighlightSnippetDemo
    ]
})
export default class CodeHighlightDemoModule {
}